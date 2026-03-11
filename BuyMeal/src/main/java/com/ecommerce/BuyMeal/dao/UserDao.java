package com.ecommerce.BuyMeal.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.BuyMeal.model.User;

@Repository
public interface UserDao extends CrudRepository<User, Integer>{
// all the crud Operration managed by the crud repository
	
	public Optional<User>  findByUserEmail(String userEmail);
	
	public Optional<User> findByUserEmailAndUserPassword(String userEmail, String userPassword);
	
}
