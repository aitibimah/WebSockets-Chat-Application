package com.App.ChatApp.controller;


import com.App.ChatApp.entity.*;

import static com.App.ChatApp.security.SecurityConstants.TOKEN_PREFIX;

import com.App.ChatApp.payload.JWTLoginSucessReponse;
import com.App.ChatApp.payload.LoginRequest;
import com.App.ChatApp.security.JwtTokenProvider;
import com.App.ChatApp.service.*;
import com.App.ChatApp.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class User_controller {

        @Autowired
        private UserService userService;


        @Autowired
        private UProfileService UProfileService;




        @Autowired
        private MapValidationErrorService mapValidationErrorService;



        @Autowired
        private UserValidator userValidator;

        @Autowired
        private JwtTokenProvider tokenProvider;

        @Autowired
        private AuthenticationManager authenticationManager;

        @Autowired
        private FriendRequestService friendRequestService;

        @Autowired
        private ContactService contactService;







        @PostMapping("/login")
        public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result){
                ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
                if(errorMap != null) return errorMap;

                Authentication authentication = authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                loginRequest.getUsername(),
                                loginRequest.getPassword()
                        )
                );

                SecurityContextHolder.getContext().setAuthentication(authentication);
                String jwt = TOKEN_PREFIX +  tokenProvider.generateToken(authentication);

                return ResponseEntity.ok(new JWTLoginSucessReponse(true, jwt));
        }

        @PostMapping("/register")
        public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result){
                // Validate passwords match
                userValidator.validate(user,result);

                ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
                if(errorMap != null)return errorMap;

                UProfile profile=  UProfileService.findProfileById(18L).get();

                UProfile newProfile = new UProfile();
                newProfile.setFirstName(profile.getFirstName());
                newProfile.setLastName(profile.getLastName());
                newProfile.setStatus(profile.getStatus());
                newProfile.setBio(profile.getBio());
                newProfile.setAge(profile.getAge());
                newProfile.setImage(profile.getImage());
                newProfile.setPhoneNumber(profile.getPhoneNumber());
                newProfile =  UProfileService.saveOrUpdate(newProfile);
                user.setProfile(newProfile);
                User newUser = userService.saveUser(user);

                return  new ResponseEntity<User>(newUser, HttpStatus.CREATED);
        }


        @GetMapping("/all")
        public Iterable<User> getAllUsers(){

            return userService.findAllUsers();


        }


        @GetMapping("/{id}")
        public User getUserById(@PathVariable  Long id){

                System.out.println("le id esssssst: " +id);
                return userService.getUserById(id);

        }


    @GetMapping("/search/{search}")
    public Iterable<User> getUserBySearch(@PathVariable  String search){

        System.out.println("le id esssssst: " +search);

        return  userService.getUserBySearch("%"+search+"%");


    }


        @GetMapping("/getProfile")
        public ResponseEntity<?>  getProfile(Principal principal){


               User u = userService.findByUsername(principal.getName());

               return  new ResponseEntity<UProfile>(u.getProfile(),HttpStatus.OK);

        }




        @GetMapping("/profile/{id}")
        public Optional<User> getUserByProfile(@PathVariable Long id){

            UProfile profile = UProfileService.findProfileById(id).get();
            return userService.findByProfile(profile);


        }





    @GetMapping("/mycontacts")
    public Iterable<Contact> getMyContacts(Principal principal){

        User u = userService.findByUsername(principal.getName());
        return u.getContactList();

    }



    @GetMapping("/mygroups")
    public Iterable<ChatGroup> getMyChatGroup(Principal principal){

            //System.out.println(principal.getName());
            User u = userService.findByUsername(principal.getName());

        return u.getGroupsList();

    }



    @GetMapping("/Requests/all")
    public List<FriendRequest> getAllFriendRequest(Principal principal){

        User userSender = userService.findByUsername(principal.getName());
        return friendRequestService.getAllFriendRequest(userSender);


    }

    @GetMapping("/Requests/sendByMe")
    public List<FriendRequest> getAllFriendRequestsendByMe(Principal principal){

        User userSender = userService.findByUsername(principal.getName());
        return friendRequestService.getAllFriendRequestsendByMe(userSender);


    }





    @PostMapping("/sendRequest/{id}")
    public List<FriendRequest> SendFriendRequest(@PathVariable Long id, Principal principal){

        User userSender = userService.findByUsername(principal.getName());
        User userResiver = userService.getUserById(id);

        FriendRequest request = new FriendRequest();
        request.setUserReceiver(userResiver);
        request.setUserSender(userSender);
        request.setStatus("pending");

        friendRequestService.saveOrUpdate(request);

        return friendRequestService.getAllFriendRequest(userSender);
        
    }


    @GetMapping("/RequestDecision/{id}/{decision}")
    public List<FriendRequest> RequestDecision(@PathVariable Long id,@PathVariable String decision, Principal principal){


        FriendRequest request = friendRequestService.getFriendRequestById(id);
        request.setStatus(decision);
        friendRequestService.saveOrUpdate(request);
        System.out.println("decision :"+decision);


        User user = userService.findByUsername(principal.getName());

       if (decision.equals("accepted")){

            Contact contact =new Contact();
            contact.setUser(request.getUserSender());
            contact.setBlocked(false);
            contactService.saveOrUpdate(contact);
           user.setPassword("123456789");
           user.addContact(contact);
           userService.saveUser(user);
        }


        return friendRequestService.getAllFriendRequest(user);

    }










}
