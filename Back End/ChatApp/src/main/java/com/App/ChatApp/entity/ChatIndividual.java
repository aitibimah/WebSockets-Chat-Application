package com.App.ChatApp.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "chatIndividual")
@Data
public class ChatIndividual extends  Conversation {


    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "userReceiver_id", referencedColumnName = "id")
    private User userReceiver;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "userSender_id", referencedColumnName = "id")
    private User userSender;


    @Column(name = "status")
    private String status;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd MMM HH:mm", locale = "en_US")
    @Column(name = "lastSeen")
    @CreationTimestamp
    private Date lastSeen;


    public ChatIndividual(User userReceiver, User userSender) {
        this.userReceiver = userReceiver;
        this.userSender = userSender;
    }


    public ChatIndividual() {

    }
}
