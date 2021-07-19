package com.App.ChatApp.entity;

import lombok.Data;

import javax.persistence.*;


@Entity(name = "MessageMedia")
@Data
public class MessageMedia extends Message {


    @Column(name = "type")
    private String type;


    @Column(name = "media")
    private String media;

    public MessageMedia(ChatHistory chatHistory, String type, String media) {
        super(chatHistory);
        this.type = type;
        this.media = media;
    }


    public MessageMedia() {

    }
}
