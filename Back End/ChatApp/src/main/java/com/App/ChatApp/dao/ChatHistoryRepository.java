package com.App.ChatApp.dao;


import com.App.ChatApp.entity.ChatHistory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatHistoryRepository extends CrudRepository<ChatHistory, Long> {
}
