package com.App.ChatApp.controller;


import com.App.ChatApp.dao.ChatHistoryRepository;
import com.App.ChatApp.dao.ChatIndividualRepository;
import com.App.ChatApp.entity.Category;
import com.App.ChatApp.entity.ChatHistory;
import com.App.ChatApp.entity.User;
import com.App.ChatApp.service.UserService;


import com.App.ChatApp.entity.ChatIndividual;
import com.App.ChatApp.service.ChatHistoryService;
import com.App.ChatApp.service.ChatIndIvidualService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Date;

@RestController
@RequestMapping("/api/chat_individual")
@CrossOrigin
public class ChatIndividualController {

    @Autowired
    ChatIndIvidualService chatIndIvidualService;

    @Autowired
    ChatHistoryService chatHistoryService;


     @Autowired
     UserService userService;



    @PostMapping("")
    public ResponseEntity<?> createChatIfNotExist(@Valid @RequestBody ChatIndividual chat,Principal principal){

        chat.setUserSender(userService.findByUsername(principal.getName()));
        chat.setUserReceiver(userService.getUserById(chat.getUserReceiver().getId()));

        if (!chatIndIvidualService.getChat(chat).isPresent()){

            ChatHistory chatHistory =  chatHistoryService.createChatHistory(new ChatHistory());

            chat.setChatHistory(chatHistory);
            ChatIndividual chatIndIvidual = chatIndIvidualService.saveChat(chat);

            return new ResponseEntity<ChatIndividual>(chatIndIvidual,HttpStatus.CREATED);

        }


        ChatIndividual chatIndIvidual = chatIndIvidualService.getChat(chat).get();
        chatIndIvidual.setStatus("seen");
        chatIndIvidual.setLastSeen(new Date());

        chatIndIvidualService.saveChat(chatIndIvidual);


        return new ResponseEntity<ChatIndividual>(chatIndIvidual,HttpStatus.CREATED);


    }



    @PostMapping("/create/{id}")
    public ResponseEntity<?> createChatIfNotExistAlfa(@PathVariable  Long id,Principal principal){


        ChatIndividual chat = new ChatIndividual();
        chat.setUserReceiver(userService.getUserById(id));
        chat.setUserSender(userService.findByUsername(principal.getName()));


        if (!chatIndIvidualService.getChat(chat).isPresent()){

            ChatHistory chatHistory =  chatHistoryService.createChatHistory(new ChatHistory());

            chat.setChatHistory(chatHistory);
            ChatIndividual chatIndIvidual = chatIndIvidualService.saveChat(chat);

            return new ResponseEntity<ChatIndividual>(chatIndIvidual,HttpStatus.CREATED);

        }


        ChatIndividual chatIndIvidual = chatIndIvidualService.getChat(chat).get();
        chatIndIvidual.setStatus("seen");
        chatIndIvidual.setLastSeen(new Date());

        chatIndIvidualService.saveChat(chatIndIvidual);


        return new ResponseEntity<ChatIndividual>(chatIndIvidual,HttpStatus.CREATED);


    }




    @GetMapping("/all")
    public Iterable<ChatIndividual> getAllChatIndividuals(Principal principal){
        User u = userService.findByUsername(principal.getName());

        return chatIndIvidualService.findAll(u.getId());

    }

    @GetMapping("/{id}")
    public ChatIndividual getChatIndividual(@PathVariable  Long id){

        ChatIndividual chat= chatIndIvidualService.findById(id).get();
        chat.setLastSeen(new Date());

        return chatIndIvidualService.saveChat(chat);

    }



}
