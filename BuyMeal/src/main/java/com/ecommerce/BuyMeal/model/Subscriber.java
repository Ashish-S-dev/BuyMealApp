package com.ecommerce.BuyMeal.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tbl_subscriber")
public class Subscriber {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="serial_number")
	private Integer serialNo;
	
	@Column(name="subscriber_email")
	private String subscriberEmail;

	public Integer getSerialNo() {
		return serialNo;
	}

	public void setSerialNo(Integer serialNo) {
		this.serialNo = serialNo;
	}

	public String getSubscriberEmail() {
		return subscriberEmail;
	}

	public void setSubscriberEmail(String subscriberEmail) {
		this.subscriberEmail = subscriberEmail;
	}
	
	public Subscriber() {
		
	}

	public Subscriber(String subscriberEmail) {
		super();
		this.subscriberEmail = subscriberEmail;
	}

	@Override
	public String toString() {
		return "Subscriber [serialNo=" + serialNo + ", subscriberEmail=" + subscriberEmail + "]";
	}
	
	
}
