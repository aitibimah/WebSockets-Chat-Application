package com.App.ChatApp.dao;

import com.App.ChatApp.entity.MessageText;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageTextRepository extends CrudRepository<MessageText, Long> {
}
