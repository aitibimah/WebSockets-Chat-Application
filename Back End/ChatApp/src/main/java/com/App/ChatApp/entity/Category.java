package com.App.ChatApp.entity;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "category")
@Data
public class Category{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    /*
    @OneToMany(targetEntity = ChatGroup.class, mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ChatGroup> groups;
    */


}
