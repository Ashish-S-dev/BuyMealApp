package com.ecommerce.BuyMeal.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tbl_product")
public class Products {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="product_id")
	private Integer productId;
	
	@Column(name="product_name")
	private String productName;
	
	@Column(name="product_price")
	private String productPrice;
	
	@Column(name="product_image")
	private String productImage;

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(String productPrice) {
		this.productPrice = productPrice;
	}

	public String getProductImage() {
		return productImage;
	}

	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}
	
	public Products() {
		
	}
	
	public Products(String productName, String productPrice, String productImage) {
		super();
		this.productName = productName;
		this.productPrice = productPrice;
		this.productImage = productImage;
	}

	@Override
	public String toString() {
		return "Products [productId=" + productId + ", productName=" + productName + ", productPrice=" + productPrice
				+ ", productImage=" + productImage + "]";
	}
	
	
	
}
