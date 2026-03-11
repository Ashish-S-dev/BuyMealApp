package com.ecommerce.BuyMeal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.BuyMeal.dao.UserDao;
import com.ecommerce.BuyMeal.model.User;


@Service
public class UserService {

	@Autowired
	private UserDao userDao;
	
	// Create user
	public User createUser(User userData){
		
		return userDao.save(userData);
		
	}
	
	// Search the user
	public User findByUserEmail(String email) {
		
		return userDao.findByUserEmail(email).orElse(new User());
		
	}
	
	// User Login
	public User findByUserEmailAndUserPassword(String userEmail, String userPassword) {
		return userDao.findByUserEmailAndUserPassword(userEmail, userPassword).orElse(new User());
	}
	
}
