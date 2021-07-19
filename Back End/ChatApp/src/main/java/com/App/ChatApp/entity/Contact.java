package com.App.ChatApp.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "contact")
@Data
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "user_id", nullable = false , referencedColumnName = "id")
    private User User;


    @Column(name = "blocked")
    private boolean blocked;


}
