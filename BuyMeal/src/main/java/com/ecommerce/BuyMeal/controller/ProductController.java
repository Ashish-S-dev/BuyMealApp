package com.ecommerce.BuyMeal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.BuyMeal.model.Products;
import com.ecommerce.BuyMeal.service.ProductService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/product")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	// save Single product
	@PostMapping(value="/save")
	public Products saveProduct(@RequestBody Products productData) {
		
		return productService.saveProducts(productData);
		
	}
	
	@GetMapping(value="/find")
	public List<Products> findAllProduct(){
		
		return productService.findAllProducts();
		
	}
}
