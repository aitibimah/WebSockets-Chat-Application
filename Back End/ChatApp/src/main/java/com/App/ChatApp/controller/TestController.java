package com.App.ChatApp.controller;


import com.App.ChatApp.dao.UserRepository;
import com.App.ChatApp.entity.ChatIndividual;
import com.App.ChatApp.entity.User;
import com.App.ChatApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.AccessType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.authentication.UserServiceBeanDefinitionParser;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/test")
public class TestController {


    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;


    @PostMapping("")
    public ResponseEntity<?> createChatIfNotExist(@RequestBody User u){



        //User user = userRepository.findByUsername("mohamed@gmail.com");


        User user = userService.getUserById(u.getId());


              //  userRepository.findByUsername("mohamed@gmail.com");

        System.out.println(user);

        return new ResponseEntity<User>(user, HttpStatus.CREATED);




    }




}
