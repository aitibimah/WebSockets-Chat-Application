package com.App.ChatApp.dao;

import com.App.ChatApp.entity.ChatGroup;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatGroupRepository  extends CrudRepository<ChatGroup,Long> {


    Iterable<ChatGroup> findAllByNameGroup(String name);


}
