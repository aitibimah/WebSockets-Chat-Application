package com.App.ChatApp.controller;

import com.App.ChatApp.entity.ChatGroup;
import com.App.ChatApp.entity.ChatHistory;
import com.App.ChatApp.entity.ChatIndividual;
import com.App.ChatApp.entity.User;
import com.App.ChatApp.service.ChatGroupService;
import com.App.ChatApp.service.ChatHistoryService;
import com.App.ChatApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.App.ChatApp.service.MapValidationErrorService;
import javax.validation.Valid;
import java.security.Principal;
import java.util.Date;

@RestController
@RequestMapping("/api/group")
@CrossOrigin
public class ChatGroupController {

    @Autowired
    private UserService userService;

    @Autowired
    private ChatGroupService chatGroupService;


    @Autowired
    private ChatHistoryService chatHistoryService;



    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @GetMapping("/all")
    public Iterable<ChatGroup> getAllGroups(){

        System.out.println(chatGroupService.findAllGroups());

        return chatGroupService.findAllGroups();

    }


    @PostMapping("")
    public ResponseEntity<?> addGroup(@Valid @RequestBody ChatGroup group, BindingResult result, Principal principal){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        User u = userService.findByUsername(principal.getName());
        System.out.println(u);

        group.setOwner(u);

        group.getUsers().add(u);


        System.out.println("userse add");



        ChatGroup chatGroup = chatGroupService.createChatGroup(group);

        return  new ResponseEntity<ChatGroup>(chatGroup, HttpStatus.CREATED);

    }



    @GetMapping("/{id}")
    public ChatGroup getChatGroup(@PathVariable  Long id){


        ChatGroup chat= chatGroupService.findGroupById(id);

        return chat;

    }



}
