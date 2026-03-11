package com.ecommerce.BuyMeal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.BuyMeal.dao.SubscriberDao;
import com.ecommerce.BuyMeal.model.Subscriber;

@Service
public class SubscriberService {
	
	@Autowired
	private SubscriberDao subscriberDao;
	
	// add the email in the Subscriber list
	public Subscriber subscribe(Subscriber subscriber) {
		return subscriberDao.save(subscriber);
	}
	
	// Find all the subscribers
	
	public Iterable<Subscriber> findAllSubscriber(){
		return subscriberDao.findAll();
	}
	
}
