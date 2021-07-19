package com.App.ChatApp.service;


import com.App.ChatApp.dao.ContactRepository;
import com.App.ChatApp.entity.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact saveOrUpdate(Contact contact){

        return contactRepository.save(contact);

    }

    /*private Optional<Contact> findContactByName(String name){

        return contactRepository.findContactByName(name);


    }*/




}
