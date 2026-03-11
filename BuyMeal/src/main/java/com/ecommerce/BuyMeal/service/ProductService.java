package com.ecommerce.BuyMeal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.BuyMeal.dao.ProductDao;
import com.ecommerce.BuyMeal.model.Products;

@Service
public class ProductService {
	
	@Autowired
	private ProductDao productDao;
	
	// Save  product details
	
	public Products saveProducts(Products productData){
		return productDao.save(productData);
	}
	
	// Find all product details
	
	public List<Products> findAllProducts(){
		return (List<Products>) productDao.findAll();
	}
}
