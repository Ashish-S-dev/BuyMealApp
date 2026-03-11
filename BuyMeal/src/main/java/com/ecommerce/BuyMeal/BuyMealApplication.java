package com.ecommerce.BuyMeal;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ecommerce.BuyMeal.model.Products;
import com.ecommerce.BuyMeal.service.ProductService;



@SpringBootApplication
public class BuyMealApplication implements CommandLineRunner{

//	implements CommandLineRunner
	
	@Autowired
	private ProductService productService;
	
	public static void main(String[] args) {
		SpringApplication.run(BuyMealApplication.class, args);
	}
	
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		createPerson();
	}
	
	public void createPerson() {
		List<Products> personList = Arrays.asList(
				new Products("Double Beef burger","$10.34","image/burger.png"),
				new Products("Chicken roll","$40.94","image/chicken-roll.png"),
				new Products("Fried Chicken","$50.14","image/fried-chicken.png"),
				new Products("Lasagna","$30.14","image/lasagna.png"),
				new Products("Pizza","$20.32","image/pizza.png"),
				new Products("Sandwich","$15.34","image/sandwich.png"),
				new Products("Spring Roll","$10.78","image/spring-roll.png"),
				new Products("Spaghetti","$70.74","image/spaghetti.png")
				);
		for(Products product:personList) {
			
			Products returnValue = productService.saveProducts(product);
			System.out.println("Product Object"+ returnValue.toString());
			
		}
		
	}
	
}



