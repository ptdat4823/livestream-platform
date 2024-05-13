package com.example.livestreaming.service;

import com.example.livestreaming.entity.User;
import com.example.livestreaming.payload.UserDTO;
import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

public interface UserService {
    public List<String> getToken (Integer id);
    public UserDTO getUser();
    public User getAuthorizedUser();
}
