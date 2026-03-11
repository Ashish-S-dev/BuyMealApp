package com.ecommerce.BuyMeal.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tble_userproduct")
public class UserProduct {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="order-id")
	private Integer orderId;
	
	@Column(name="user_email")
	private String userEmail;
	
	@Column(name="product_name")
	private String productName;
	
	@Column(name="product_image")
	private String productImage;
	
	@Column(name="product_price")
	private String productPrice;
	
	@Column(name="product_quantity")
	private String productQuantity;

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductImage() {
		return productImage;
	}

	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}

	public String getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(String productPrice) {
		this.productPrice = productPrice;
	}

	public String getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(String productQuantity) {
		this.productQuantity = productQuantity;
	}
	
	public UserProduct() {}

	public UserProduct(String userEmail, String productName, String productImage, String productPrice,
			String productQuantity) {
		super();
		this.userEmail = userEmail;
		this.productName = productName;
		this.productImage = productImage;
		this.productPrice = productPrice;
		this.productQuantity = productQuantity;
	}

	@Override
	public String toString() {
		return "UserProduct [orderId=" + orderId + ", userEmail=" + userEmail + ", productName=" + productName
				+ ", productImage=" + productImage + ", productPrice=" + productPrice + ", productQuantity="
				+ productQuantity + "]";
	}
	
	
	
	
	
}
