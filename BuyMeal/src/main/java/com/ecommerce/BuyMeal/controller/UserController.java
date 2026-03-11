package com.ecommerce.BuyMeal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.BuyMeal.model.User;
import com.ecommerce.BuyMeal.service.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping(value="/signin")
	public User createUser(@RequestBody User userData) {
		return userService.createUser(userData);
	}
	
	@GetMapping(value="/{userEmail}")
	public User findByUserEmail(@PathVariable("userEmail") String userEmail) {
		return userService.findByUserEmail(userEmail);
	}
	
	@PostMapping(value="/login")
	public User findByUserEmailAndUserPassword(@RequestBody User userData) {
		
		return userService.findByUserEmailAndUserPassword(userData.getUserEmail(), userData.getUserPassword());
		
	}
	
}
