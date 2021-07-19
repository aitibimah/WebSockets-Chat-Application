package com.App.ChatApp.entity;

import lombok.Data;

import javax.persistence.*;

@Entity(name = "MessageText")
@Data
public class MessageText extends Message {


    private String text;

    public MessageText(String text, ChatHistory ChatHistory ) {
        super(ChatHistory);
        this.text = text;
    }

    public MessageText() {

    }
}
