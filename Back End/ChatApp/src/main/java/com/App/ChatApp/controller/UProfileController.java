package com.App.ChatApp.controller;


import com.App.ChatApp.entity.UProfile;
import com.App.ChatApp.service.MapValidationErrorService;
import com.App.ChatApp.service.UProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Optional;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin
public class UProfileController {


    @Autowired
    private UProfileService UProfileService;



    @Autowired
    private MapValidationErrorService mapValidationErrorService;


    @PostMapping("/update")
    public ResponseEntity<?> createNewProfile(@Valid @RequestBody UProfile profile, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap!=null) return errorMap;

       UProfile profile1 = UProfileService.saveOrUpdate(profile);
        return  new ResponseEntity<UProfile>(profile, HttpStatus.CREATED);


    }

    @GetMapping("/all")
    public Iterable<UProfile> getAllProfiles(){

        return UProfileService.findAllProfiles();


    }




}
