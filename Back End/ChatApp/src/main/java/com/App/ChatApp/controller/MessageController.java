package com.App.ChatApp.controller;

import com.App.ChatApp.dao.MessageMediaRepository;
import com.App.ChatApp.entity.*;
import com.App.ChatApp.service.ChatGroupService;
import com.App.ChatApp.service.ChatIndIvidualService;
import com.App.ChatApp.service.MessageMediaService;
import com.App.ChatApp.service.MessageTextService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/api/chat")
public class MessageController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private MessageTextService messageTextService;


    @Autowired
    private MessageMediaService messageMediaService;


    @Autowired
    private MessageMediaRepository messageMediaRepository;


    @Autowired
    private ChatIndIvidualService chatIndIvidualService;


    @Autowired
    private ChatGroupService chatGroupService;


    @MessageMapping("/ContentChat/{idConv}/{type}")
    @SendTo("/topic/ContentChat/{idConv}")
    public MessageText sendToUser(@Payload MessageText message, @DestinationVariable Long idConv,@DestinationVariable String type) {

        MessageText message1 = null;
       switch (type){
            case "messageText":
                System.out.println("--start ------------");
                ChatIndividual chat = chatIndIvidualService.getChatById(idConv).get();
                System.out.println("-------------------- getChatById(idConv)");
                message.setChatHistory(chat.getChatHistory());
                System.out.println("-------------------- chat.getChatHistory()");
                message1 = messageTextService.save(message);
                System.out.println("-------------------- save(message)");

                chat.setLastSeen(new Date());
                System.out.println("----------- new Date()");
                chat.getChatHistory().addMessageToList(message1);
                System.out.println("----------- getMessageList().add(message1)");
                chatIndIvidualService.saveChat(chat);
                System.out.println("------------ saveChat(chat)");
                break;

            case "messageMedia":
                System.out.println("me");
                break;

            default:
                System.out.println("default");

        }

        return message1;
    }



    @MessageMapping("/ContentChatM/{idConv}/{type}")
    @SendTo("/topic/ContentChat/{idConv}")
    public MessageMedia sendMToUser(@Payload MessageMedia message, @DestinationVariable Long idConv, @DestinationVariable String type) {

        System.out.println("messageM");
        MessageMedia message1 = null;
        switch (type){

            case "messageMedia":
                System.out.println("messageMedia");
                System.out.println("--start ------------");
                ChatIndividual chat = chatIndIvidualService.getChatById(idConv).get();
                System.out.println("-------------------- getChatById(idConv)");
                message.setChatHistory(chat.getChatHistory());
                System.out.println("-------------------- chat.getChatHistory()");
                message1 = messageMediaRepository.save(message);
                System.out.println("-------------------- save(message)");

                chat.setLastSeen(new Date());
                System.out.println("----------- new Date()");
                chat.getChatHistory().addMessageToList(message1);
                System.out.println("----------- getMessageList().add(message1)");
                chatIndIvidualService.saveChat(chat);
                System.out.println("------------ saveChat(chat)");
                break;

            case "gse":
                System.out.println("messageMedia");
                break;

            default:
                System.out.println("default");

        }

        return message1;
    }



    @MessageMapping("/ContentGroup/{idConv}/{type}")
    @SendTo("/topic/ContentGroup/{idConv}")
    public MessageText sendToGroup(@Payload MessageText message, @DestinationVariable Long idConv,@DestinationVariable String type) {

        System.out.println(message);

        MessageText message1 = null;
        switch (type){
            case "messageText":
                System.out.println("--start group --");
                ChatGroup chat = chatGroupService.findGroupById(idConv);
                System.out.println("-------------------- getChatById(idConv)");
                message.setChatHistory(chat.getChatHistory());
                System.out.println("-------------------- chat.getChatHistory()");
                message1 = messageTextService.save(message);
                System.out.println("-------------------- save(message)");

                System.out.println("the chat history");
                System.out.println(chat.getChatHistory().getMessageList().get(0).getId());

               // System.out.println("----------- new Date()");
              //  chat.getChatHistory().addMessageToList(message1);
               // System.out.println("----------- getMessageList().add(message1)");
               // chatGroupService.createChatGroup(chat);
              //  System.out.println("------------ saveChat(chat)");
                break;

            case "messageMedia":
                System.out.println("messageMediag");
                break;

            default:
                System.out.println("default");

        }

        return message1;
        //return message;

    }



    @MessageMapping("/ContentGroupM/{idConv}/{type}")
    @SendTo("/topic/ContentGroup/{idConv}")
    public MessageMedia sendToGroupM(@Payload MessageMedia message, @DestinationVariable Long idConv,@DestinationVariable String type) {

        System.out.println(message);

        MessageMedia message1 = null;
        switch (type){
            case "messageMedia":
                System.out.println("--start group --");
                ChatGroup chat = chatGroupService.findGroupById(idConv);
                System.out.println("-------------------- getChatById(idConv)");
                message.setChatHistory(chat.getChatHistory());
                System.out.println("-------------------- chat.getChatHistory()");
                message1 = messageMediaService.save(message);
                System.out.println("-------------------- save(message)");

                System.out.println("the chat history");
                System.out.println(chat.getChatHistory().getMessageList().get(0).getId());

                // System.out.println("----------- new Date()");
                //  chat.getChatHistory().addMessageToList(message1);
                // System.out.println("----------- getMessageList().add(message1)");
                // chatGroupService.createChatGroup(chat);
                //  System.out.println("------------ saveChat(chat)");
                break;

            case "mesfjkd":
                System.out.println("messageMediag");
                break;

            default:
                System.out.println("default");

        }

        return message1;
        //return message;

    }


    @MessageMapping("/individual/{chatIndividual}")
    @SendTo("/topic/individual")
    public MessageText sendToAllover(@Payload MessageText message) {
        return message;
    }



/*    @MessageMapping("/individual/{chatIndividual}")
    public void sendMessage(@DestinationVariable Long chatIndividual_id,@RequestBody MessageText message) {
        System.out.println("handling send message: " + message + " to: " + chatIndividual_id);

        boolean isPresent = chatIndIvidualService.getChatById(chatIndividual_id).isPresent();

        if (isPresent) {
            simpMessagingTemplate.convertAndSend("/topic/messages/" + chatIndividual_id, message);
        }
    }*/
}
