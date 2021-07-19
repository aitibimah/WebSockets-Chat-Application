package com.App.ChatApp.service;


import com.App.ChatApp.dao.ChatIndividualRepository;
import com.App.ChatApp.dao.UserRepository;
import com.App.ChatApp.entity.ChatIndividual;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChatIndIvidualService {

    @Autowired
    private ChatIndividualRepository chatIndividualRepository;

    @Autowired
    private UserRepository userRepository;


    public ChatIndividual saveChat(ChatIndividual chatIndividual){

       return chatIndividualRepository.save(chatIndividual);

    }



    public Optional<ChatIndividual> getChat(ChatIndividual chat){


        Optional<ChatIndividual> chat1=  chatIndividualRepository.
                findChatIndividualsByUserReceiverAndUserSender
                        (chat.getUserReceiver(), chat.getUserSender());


        if (chat1.isPresent()){
            return chat1;
        }


        return  chatIndividualRepository.
                findChatIndividualsByUserReceiverAndUserSender
                        (chat.getUserSender(),chat.getUserReceiver());



    }



    public Optional<ChatIndividual> getChatById(Long id){


        return chatIndividualRepository.findById(id);

    }


    public Iterable<ChatIndividual> findAll(Long id) {

       return chatIndividualRepository.findAllByUserReceiver_IdOrUserSender_Id(id,id);
    }

    public Optional<ChatIndividual> findById(Long id) {

        return chatIndividualRepository.findById(id);
    }
}
