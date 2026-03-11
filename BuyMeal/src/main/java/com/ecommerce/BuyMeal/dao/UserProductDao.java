package com.ecommerce.BuyMeal.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.BuyMeal.model.UserProduct;

@Repository
public interface UserProductDao extends CrudRepository<UserProduct, Integer>{
	// CRUD repository manage ererything
	
	public List<UserProduct> findByUserEmail(String email);
	
	public Optional<UserProduct> findByUserEmailAndProductName(String userEmail, String productName);
	
	
	public void deleteByUserEmail(String userEmail);

	
}
