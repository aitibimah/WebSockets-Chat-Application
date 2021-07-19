package com.App.ChatApp.dao;

import com.App.ChatApp.entity.FriendRequest;
import com.App.ChatApp.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface FriendRequestRepository extends CrudRepository<FriendRequest, Long> {

    List<FriendRequest> getFriendRequestByUserSenderOrUserReceiver(User userSender, User userReceiver);

    List<FriendRequest> getFriendRequestByUserReceiver(User userReceiver);

    List<FriendRequest> getFriendRequestByStatusAndUserReceiver(String s,User user);


    List<FriendRequest> getFriendRequestByUserSender(User userSender);
    //List<FriendRequest> getFriendRequestByUserReceiverContactListNotIn

}
