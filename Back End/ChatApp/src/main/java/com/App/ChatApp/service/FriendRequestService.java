package com.App.ChatApp.service;


import com.App.ChatApp.dao.FriendRequestRepository;
import com.App.ChatApp.entity.FriendRequest;
import com.App.ChatApp.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendRequestService {


    @Autowired
    private FriendRequestRepository friendRequestRepository;

    public FriendRequest saveOrUpdate(FriendRequest friendRequest){

        return friendRequestRepository.save(friendRequest);
    }

    public List<FriendRequest> getAllFriendRequest(User user){


        return friendRequestRepository.getFriendRequestByStatusAndUserReceiver("pending",user);

        //return friendRequestRepository.getFriendRequestByUserReceiver(user);

        //return friendRequestRepository.getFriendRequestByUserSenderOrUserReceiver(user,user);
    }


    public List<FriendRequest> getAllFriendRequestsendByMe(User user){

        return friendRequestRepository.getFriendRequestByUserSender(user);

        //return friendRequestRepository.getFriendRequestByUserSenderOrUserReceiver(user,user);
    }




    public FriendRequest getFriendRequestById(Long id){


     return friendRequestRepository.findById(id).get();

    }
}
