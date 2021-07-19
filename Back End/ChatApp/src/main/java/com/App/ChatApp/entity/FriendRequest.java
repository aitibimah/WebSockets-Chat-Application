package com.App.ChatApp.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "FriendRequest")
@Data
public class FriendRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "userSender_id", referencedColumnName = "id")
    private User userSender;

    @OneToOne
    @JoinColumn(name = "userReceiver_id", referencedColumnName = "id")
    private User userReceiver;

    @Column(name = "status")
    // Friend request : accepted / declined / pending
    private String status;

    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd MMM HH:mm", locale = "en_US")
    private Date create_At;
    private Date update_At;


    @PrePersist
    protected void onCreate(){
        this.create_At = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.update_At = new Date();
    }


}
