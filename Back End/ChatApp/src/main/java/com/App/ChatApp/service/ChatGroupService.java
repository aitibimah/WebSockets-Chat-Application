package com.App.ChatApp.service;


import com.App.ChatApp.dao.ChatGroupRepository;
import com.App.ChatApp.entity.ChatGroup;
import com.App.ChatApp.entity.ChatHistory;
import com.App.ChatApp.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ChatGroupService {

    @Autowired
    private ChatGroupRepository chatGroupRepository;


    @Autowired
    private ChatHistoryService chatHistoryService;



    public Iterable<ChatGroup> findAllGroups(){

      return   chatGroupRepository.findAll();

    }


    public ChatGroup createChatGroup(ChatGroup group){

        ChatHistory chatHistory = new ChatHistory();

        chatHistoryService.createChatHistory(chatHistory);
        group.setChatHistory(chatHistory);




        return chatGroupRepository.save(group);
    }


    public ChatGroup deactivateGroup(ChatGroup group){

        group.setActive(false);
        return chatGroupRepository.save(group);

    }

    
    public  Iterable<ChatGroup> findAllByNameGroup(String name){

        return chatGroupRepository.findAllByNameGroup(name);
    }


    public ChatGroup addMember(ChatGroup group, User user){

        List<User> users = group.getUsers();
        users.add(user);
        group.setUsers(users);
        return chatGroupRepository.save(group);

    }



    public ChatGroup addMembers(ChatGroup group, List<User> userList){

        List<User> users = group.getUsers();
        for (User u : userList){
            users.add(u);
        }
        group.setUsers(users);
        return chatGroupRepository.save(group);

    }


    public ChatGroup deleteMember(ChatGroup group, User user){

        List<User> users = group.getUsers();
        users.remove(user);

        group.setUsers(users);
        return chatGroupRepository.save(group);

    }





    public ChatGroup findGroupById(Long id){

        return chatGroupRepository.findById(id).get();

    }






    
    
    


}
