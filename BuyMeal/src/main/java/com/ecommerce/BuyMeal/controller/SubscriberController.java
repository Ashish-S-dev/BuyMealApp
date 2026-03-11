package com.ecommerce.BuyMeal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.BuyMeal.model.Subscriber;
import com.ecommerce.BuyMeal.service.SubscriberService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/subscriber")
public class SubscriberController {
	
	@Autowired
	private SubscriberService subscriberService;
	
	

	
	//  add the email in the Subscriber list
	@PostMapping(value="/{email}")
	public String subscribe(@PathVariable("email") String email) {
				
		Subscriber subscriberObj =new Subscriber(email);
		
		subscriberService.subscribe(subscriberObj);
		
		return "Subscribed";
	}
	
	@GetMapping(value="/all")
	//find all the subscriber
	public Iterable<Subscriber> findAllSubscriber(){
		return subscriberService.findAllSubscriber();
	}
	
}
