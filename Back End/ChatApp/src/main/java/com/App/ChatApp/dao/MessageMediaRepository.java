package com.App.ChatApp.dao;

import com.App.ChatApp.entity.MessageMedia;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageMediaRepository extends CrudRepository<MessageMedia,Long> {
}
