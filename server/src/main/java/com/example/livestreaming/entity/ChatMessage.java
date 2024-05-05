package com.example.livestreaming.entity;

import com.example.livestreaming.enums.MessageType;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ChatMessage {
    public Integer roomId;
    public String sender;
    public String message;
    public String time;
    public MessageType type;
}
