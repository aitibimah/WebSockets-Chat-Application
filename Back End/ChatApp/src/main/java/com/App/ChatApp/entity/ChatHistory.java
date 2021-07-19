package com.App.ChatApp.entity;

import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "chatHistory")
@Data
public class ChatHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


   @OneToMany(targetEntity = Message.class, mappedBy = "chatHistory")
   private List<Message> messageList;


    public ChatHistory(List<Message> messageList) {
        this.messageList = messageList;
    }

    public ChatHistory() {

    }

    public List<Message> addMessageToList(Message message){

        this.getMessageList().add(message);
        return this.getMessageList();
    }

}
