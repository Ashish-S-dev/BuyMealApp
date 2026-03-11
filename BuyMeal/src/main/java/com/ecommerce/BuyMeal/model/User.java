package com.ecommerce.BuyMeal.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tbl_user")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="user_id")
	private Integer userId;
	
	@Column(name="user_email")
	private String userEmail;
	
	@Column(name="user_password")
	private String userPassword;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	
	public User() {
		
	}
	
	public User(String userEmail, String userPassword) {
		super();
		this.userEmail = userEmail;
		this.userPassword = userPassword;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userEmail=" + userEmail + ", userPassword=" + userPassword + "]";
	}

	
	
	
	
}
