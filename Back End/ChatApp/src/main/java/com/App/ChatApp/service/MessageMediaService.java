package com.App.ChatApp.service;

import com.App.ChatApp.dao.MessageMediaRepository;
import com.App.ChatApp.entity.MessageMedia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageMediaService {




    @Autowired
    private MessageMediaRepository messageRepository;

    public MessageMedia save(MessageMedia messageText){
        return messageRepository.save(messageText);
    }


}
