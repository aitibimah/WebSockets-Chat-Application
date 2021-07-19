package com.App.ChatApp.dao;

import com.App.ChatApp.entity.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {

   // Optional<Contact> findContactByName(String name);

}
