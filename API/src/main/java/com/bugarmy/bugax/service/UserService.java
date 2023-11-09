package com.bugarmy.bugax.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bugarmy.bugax.model.User;
import com.bugarmy.bugax.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public User ceate(User user) {
		return userRepository.save(user);
	}
	
	public List<User> getAllUser(){
		return userRepository.findAll();
	}

}
