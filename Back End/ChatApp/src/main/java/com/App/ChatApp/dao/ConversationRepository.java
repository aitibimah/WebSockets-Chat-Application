package com.App.ChatApp.dao;

import com.App.ChatApp.entity.Conversation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConversationRepository  extends CrudRepository<Conversation, Long> {


}
