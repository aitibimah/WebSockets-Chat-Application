package com.App.ChatApp.dao;


import com.App.ChatApp.entity.ChatHistory;
import com.App.ChatApp.entity.ChatIndividual;
import com.App.ChatApp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChatIndividualRepository extends JpaRepository<ChatIndividual, Long> {


    //Optional<ChatIndividual> getChatIndividualByUserReceiverAndUserSender(User userReceiver, User userSender);

    Optional<ChatIndividual> findChatIndividualsByUserReceiverAndUserSender(User userReceiver,User userSender);


    Iterable<ChatIndividual> findAllByUserReceiver_IdOrUserSender_Id(Long userReceiver_id, Long userSender_id);


}
