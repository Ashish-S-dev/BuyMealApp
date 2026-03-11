package com.ecommerce.BuyMeal.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.BuyMeal.model.Products;

@Repository
public interface ProductDao extends CrudRepository<Products, Integer>{
	// complete database operation already define into the CRUD Repository.
}
