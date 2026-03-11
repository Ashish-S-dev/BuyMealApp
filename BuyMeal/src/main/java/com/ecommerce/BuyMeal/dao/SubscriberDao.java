package com.ecommerce.BuyMeal.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.BuyMeal.model.Subscriber;

@Repository
public interface SubscriberDao extends CrudRepository<Subscriber, Integer> {
	// all the implementation of the CRuD Operation already mentioned in the Crud repository
}
