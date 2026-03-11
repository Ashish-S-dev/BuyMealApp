package com.ecommerce.BuyMeal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@Controller
public class MainController {
	
	@RequestMapping(value="/index")
	public String indexPage() {
		return "index";
	}
	@RequestMapping(value="/home")
	public String homePage() {
		return "home";
	}
	
}
