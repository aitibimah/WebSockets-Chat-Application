package com.App.ChatApp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "message")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
public class Message {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "idOwner")
    private Long idOwner;


    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "chatHistory_id", nullable = false , referencedColumnName = "id")
    private ChatHistory chatHistory;

    public Message(ChatHistory chatHistory) {
        this.chatHistory = chatHistory;
    }

    public Message() {

    }
}
