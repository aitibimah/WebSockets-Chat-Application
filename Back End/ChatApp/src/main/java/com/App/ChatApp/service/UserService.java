package com.App.ChatApp.service;


import com.App.ChatApp.dao.UserRepository;
import com.App.ChatApp.entity.UProfile;
import com.App.ChatApp.entity.User;
import com.App.ChatApp.exceptions.UsernameAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser (User newUser){

        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            //Username has to be unique (exception)
            newUser.setUsername(newUser.getUsername());
            // Make sure that password and confirmPassword match
            // We don't persist or show the confirmPassword
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);

        }catch (Exception e){
            throw new UsernameAlreadyExistsException("Username '"+newUser.getUsername()+"' already exists");
        }

    }



    public  Iterable<User> findAllUsers(){

        return userRepository.findAll();
    }


    public User getUserById(Long id) {

        return userRepository.findUserById(id);


    }


    public Optional<User> findByProfile(UProfile profile) {

        return userRepository.findByProfile(profile);

    }

    public User findByUsername(String username) {

        return userRepository.findByUsername(username);

    }

    public Iterable<User> getUserBySearch(String search) {

        return userRepository.findByProfileFirstNameLikeOrProfile_LastNameLike(search,search);
    }
}
