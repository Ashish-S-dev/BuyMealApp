package com.ecommerce.BuyMeal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.BuyMeal.dao.UserProductDao;
import com.ecommerce.BuyMeal.model.UserProduct;

import jakarta.transaction.Transactional;

@Service
public class UserProductService {

	@Autowired
	private UserProductDao userProductDao;
	
	// Find by email
	public List<UserProduct> findByUserEmail(String email){
		return userProductDao.findByUserEmail(email);
	}
	
	// save
	public UserProduct save(Integer id, UserProduct userProduct) {
		 UserProduct existing = userProductDao.findById(id)
                 .orElseThrow(() -> new RuntimeException("Product not found"));

		 existing.setProductName(userProduct.getProductName());
		 existing.setProductPrice(userProduct.getProductPrice());
		 existing.setProductQuantity(userProduct.getProductQuantity());
		 existing.setUserEmail(userProduct.getUserEmail());

		 return userProductDao.save(existing);	
	}
	
	// save all
	public Iterable<UserProduct> saveAll(Iterable<UserProduct> userProductData){
		
		return userProductDao.saveAll(userProductData);
		
	}
	
	//Delete by Id
	@Transactional
	public void deleteByUserEmail(String email) {
		userProductDao.deleteByUserEmail(email);
	}
	
	
	// Find All method
	public Iterable<UserProduct> findAll(){
		return userProductDao.findAll();
	}
	
	// Find By product name and User email
	
	public UserProduct findByUserEmailAndProductName(String userEmail, String productName) {
		return userProductDao.findByUserEmailAndProductName(userEmail, productName).orElse(new UserProduct());
	}
	
	
	
}
