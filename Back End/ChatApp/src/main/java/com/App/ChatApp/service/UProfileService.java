package com.App.ChatApp.service;


import com.App.ChatApp.dao.UProfileRepository;
import com.App.ChatApp.entity.UProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UProfileService {


    @Autowired
    private UProfileRepository UProfileRepository;

    public UProfile saveOrUpdate(UProfile profile){

        return UProfileRepository.save(profile);

    }


    public  Iterable<UProfile> findAllProfiles(){

        return UProfileRepository.findAll();
    }


    public Optional<UProfile> findProfileById(Long id){

        return UProfileRepository.findById(id);
    }


}
