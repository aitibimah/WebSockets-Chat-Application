package com.App.ChatApp.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "conversation")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
public class Conversation implements  Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


    @OneToOne
    @JoinColumn(name = "chatHistory_id", referencedColumnName = "id")
    private ChatHistory chatHistory;


    public Conversation() {


    }

    public void setChatHistory(ChatHistory chatHistory) {
        this.chatHistory = chatHistory;
    }
}
