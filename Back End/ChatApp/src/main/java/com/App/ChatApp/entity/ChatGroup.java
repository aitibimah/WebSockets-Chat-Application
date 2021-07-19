package com.App.ChatApp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "chatGroup")
@Data
public class ChatGroup extends  Conversation {


    public ChatGroup() {

    }
    public ChatGroup(String nameGroup, boolean isActive, String description, User owner, Category category, List<User> users) {
        this.nameGroup = nameGroup;
        this.isActive = isActive;
        this.description = description;
        this.owner = owner;
        this.category = category;
        this.users = users;

    }

    @NotBlank(message = "nameGroup is required")
    @Column(name = "nameGroup")
    private String nameGroup;

    @Column(name = "isActive")
    private boolean isActive;

    @Column(name = "description")
    private String description;

   // @Column(name = "image")
   // private String image;


   //
    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false , referencedColumnName = "id")
    private User owner;

    @NotNull(message = "category is required")
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false , referencedColumnName = "id")
    private Category category;



    @NotNull(message = "User Members is required")
    @ManyToMany
    @JoinTable( name = "T_Users_Group_Associations",
            joinColumns = @JoinColumn( name = "idGroup" ),
            inverseJoinColumns = @JoinColumn( name = "idUser" ) )
    private List<User> users ;



}
