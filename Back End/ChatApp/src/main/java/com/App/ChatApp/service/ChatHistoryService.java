package com.App.ChatApp.service;


import com.App.ChatApp.dao.ChatHistoryRepository;
import com.App.ChatApp.entity.ChatHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatHistoryService {


    @Autowired
    private ChatHistoryRepository chatHistoryRepository;


    public ChatHistory createChatHistory (ChatHistory chatHistory){

        return chatHistoryRepository.save(chatHistory);


    }



}
