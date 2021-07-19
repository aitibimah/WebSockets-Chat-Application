package com.App.ChatApp.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;


@Entity
@Table(name="profile")
@Data
public class UProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank(message="First Name is Required")
    @Column(name = "firstName")
    private String firstName;

    @NotBlank(message="Last Name is Required")
    @Column(name = "lastName")
    private String lastName;

    @Column(name = "image")
    private String image;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    @Column(name = "age")
    private int age;

    @Column(name = "bio")
    private String bio;

    @Column(name = "status")
    private String status;



}
