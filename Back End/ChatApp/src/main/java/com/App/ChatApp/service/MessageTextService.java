package com.App.ChatApp.service;

import com.App.ChatApp.dao.MessageTextRepository;
import com.App.ChatApp.entity.MessageText;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageTextService {

    @Autowired
    private MessageTextRepository messageTextRepository;

    public MessageText save(MessageText messageText){
      return messageTextRepository.save(messageText);
    }

}
