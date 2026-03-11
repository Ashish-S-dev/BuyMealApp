package com.ecommerce.BuyMeal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.BuyMeal.model.UserProduct;
import com.ecommerce.BuyMeal.service.UserProductService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/userproduct")
public class UserProductController {

	@Autowired
	private UserProductService userProductService;
	
	// Find By Email
	@PostMapping(value="/{userEmail}")
	public List<UserProduct> findByUserEmail(@PathVariable("userEmail") String email){
		return userProductService.findByUserEmail(email);
	}
	
	@PostMapping(value="/saveall")
	public Iterable<UserProduct> saveAll(@RequestBody List<UserProduct> list){
		
		Iterable<UserProduct> userProductData = userProductService.saveAll(list);
		
		return userProductData;
		
	}
	@PutMapping(value="/update/{id}")
	public UserProduct save(@PathVariable("id") Integer userId , @RequestBody UserProduct userProduct){
		
		return userProductService.save(userId, userProduct);
		
	}
	
	//Delete By ID
	@DeleteMapping(value="/orderconfirm/{userEmail}")
	public void deleteByUserEmail(@PathVariable("userEmail") String userEmail) {
		userProductService.deleteByUserEmail(userEmail);
	}
	
	@GetMapping(value="findAll")
	public Iterable<UserProduct> findAll(){
		return userProductService.findAll();
	}
	
	@GetMapping(value="/{userEmail}/{productName}")
	public UserProduct findByUserEmailAndProductName(@PathVariable("userEmail") String userEmail, 
													@PathVariable("productName") String productName) {
		return userProductService.findByUserEmailAndProductName(userEmail, productName);
	}
	
	
}
