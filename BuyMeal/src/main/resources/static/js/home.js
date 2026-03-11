var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: "#next",
        prevEl: "#prev",
    },
});
// Getting the Session Data
let email = sessionStorage.getItem("userEmail");
//console.log(email);
if(email == null){
    // agar login nahi hai
    window.location.href = "index";
}


// Open cart tab
const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const cartCloseBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list');
const cartList = document.querySelector('.cart-box');
const cartTotal = document.querySelector('.cart-total');
const cartValue = document.querySelector('.cart-value');
const hamBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const bars = document.querySelector('.fa-bars');
const subscribeBtn = document.querySelector('.subscribe-btn');
const subscriber = document.querySelector('.subscriber-email');
const orderBtn1 = document.querySelector(".order-btn1");
const orderBtn2 = document.querySelector(".order-btn2");
const orderMenu = document.querySelector(".order-menu-hide");
const userBtn = document.querySelector('#user-btn');
const userLogo = document.querySelector('.user-logo');
const orderMenuClose = document.querySelector(".order-menu-close");
const orderDone = document.querySelector(".order-done");
const currentUser = document.querySelector(".user-logo");

const checkout = document.querySelector(".check-out");
const orderBoxList = document.querySelector('.orderbox-cart');

const totalPrice = document.querySelector('.total-price');

// Products array
let productList = [];
let cartProduct = [];
//Done Btn


// set Element into the Order menu


const showOrderCards = (item) => {
	let price = 0;
    item.forEach( (product)=> {
        const orderCard = document.createElement('div');
        orderCard.classList.add("orderbox-item");
		orderCard.classList.add("item");
		let imagePath = product.productImage;
		let start = imagePath.indexOf("/image");
		imagePath = imagePath.substring(start);
		
		price += parseFloat(product.productPrice)*parseFloat(product.productQuantity); 
		
        orderCard.innerHTML = `
									<div class="item-image-container">
		                                <img src="${imagePath}" alt="">
		                            </div>

		                            <div>
		                                <h4>${product.productName}</h4>
		                                <h4 class="item-total">$${product.productPrice}</h4>
		                            </div>
		                            <div class="qty-container flex">
		                                QTY :&nbsp; <span class="qty-value">${product.productQuantity}</span>
		                            </div> 
        `;

        orderBoxList.appendChild(orderCard);
		
    });
	
	totalPrice.innerText = price.toFixed(2);
	
};

const setOrderMenu= async ()=>{
	
	let findByEmail = `/userproduct/${email}`;
	await fetch(findByEmail,{
		method:"POST"
	})
	.then(response=>response.json())
	.then((resp)=>{
		
		//data Show on the Order menu
		
		if(Array.isArray(resp)){
			let newData = resp;
			showOrderCards(newData);
		
		}else{
			console.error("User previous Cart "+resp);
						  
						  //location.reload();
		}
	
		
	})
	.catch((er)=>{
		console.log(er);
	})
	
}



checkout.addEventListener('click',async (e)=>{
	e.preventDefault();
	
	console.log("Start");
	
	let cart = [];

	let items = document.querySelectorAll(".cartitem-tab");
	console.log("Element selected");
	
	items.forEach(async (item) => {
		console.log("For each start");
		console.log("Item "+item);

		let name = item.querySelector(".cart-product-name").innerText;
		
	    let price = item.querySelector(".cart-product-price").innerText
	                    .replace("$",""); // $ remove

	    let quantity = item.querySelector(".quantity-value").innerText;

	    let image = item.querySelector(".item-image-container img").src;
		console.log("Product details getted ");
	    let product = {
	        userEmail: email,
	        productName: name,
	        productPrice: price,
	        productQuantity: quantity,
	        productImage: image
	    };
		
		cart.push(product);
		
		});
	
	// removing the data from UI
	removeCartPreviousData();
	
	// Saving the data in db
	// yha tak pura bna bnaya data aa rha hai confirm hai
	console.log(cart);
	checkOutData(cart);
	


});
const checkOutData = async(cart)=>{
	
	let checkoutUrl = '/userproduct/saveall';
			
		await fetch(checkoutUrl,{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(cart)
		})
		.then(response=>response.json())
		.then((response)=>{
			
			cartTab.classList.remove('cart-tab-active');
			
		}).catch((er)=>{
			console.log(er);
		});
	
};

const removeCartPreviousData = ()=>{
	let cartPreviousData = document.querySelectorAll(".cartitem-tab");
	cartPreviousData.forEach((item)=>{
		//item.remove();
		//updateTotal();
		//console.log(item.querySelector(".cart-product-name").innerText);
		let currProductName = item.querySelector(".cart-product-name").innerText;
		//console.log(cartProduct);
		item.classList.add('slide-out');
		setTimeout(() => {
		                item.remove();
		                cartProduct = cartProduct.filter(arItem => arItem.productName !== currProductName);
		                updateTotal();
		            }, 300);
	});
	
};

// Setting the Current User
currentUser.innerText=email;


orderDone.addEventListener('click',async (e)=>{
    e.preventDefault();
	
	let deleteUrl = `/userproduct/orderconfirm/${email}`;
	await fetch(deleteUrl,{
	    method:"DELETE"
	})
	.then(()=>{
		console.log(res);
		console.log("Order Confirmed");
		console.log("Refreshed");
		window.alert("Your Order has been placed");
		orderMenu.classList.remove("order-menu");
		
	})
	.catch((er)=>{
		console.log(er);
	});
	
	location.reload();
    
});

orderMenuClose.addEventListener('click',(e)=>{
    e.preventDefault();
    orderMenu.classList.remove("order-menu");
});


userBtn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    userLogo.classList.add('user-logo-active');
});
userBtn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    userLogo.classList.remove('user-logo-active');
});


orderBtn1.addEventListener('click',(e)=>{
    e.preventDefault();
    bars.classList.toggle('fa-bars');
    bars.classList.toggle('fa-xmark');
    mobileMenu.classList.toggle('mobile-menu-active');
	setOrderMenu();
	cartTab.classList.remove('cart-tab-active');
    orderMenu.classList.add("order-menu");
	
});
orderBtn2.addEventListener('click',(e)=>{
    e.preventDefault();
	setOrderMenu();
	cartTab.classList.remove('cart-tab-active');
    orderMenu.classList.add("order-menu");
});


// Email Validation

function isValidEmail(email) {
    // A common regex for basic email format validation
    const regex = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    return regex.test(email);
}

// Subscriber

subscribeBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
	console.log(subscriber.value);
    let subscriberEmail = subscriber.value;
	let emailValidity = isValidEmail(subscriberEmail);
    if(subscriberEmail == "" || !emailValidity ){
        window.alert("Please Enter the valid Email");
    }else{
        let url=`/subscriber/${subscriberEmail}`;
        await fetch(url,{
			method:"POST"
		}).then((data)=>{
            window.alert("Thanks for Subscribing us");
			location.reload();
        })
        .catch( (er)=>{
            console.log(er);
        })
    }
    console.log(subscriberEmail);
});


hamBurger.addEventListener('click',()=>{
    bars.classList.toggle('fa-bars');
    bars.classList.toggle('fa-xmark');

});
hamBurger.addEventListener('click',()=>{
    mobileMenu.classList.toggle('mobile-menu-active');
});


cartIcon.addEventListener('click', () => {
	orderMenu.classList.remove("order-menu");
    cartTab.classList.add('cart-tab-active')
});

// close cart tab

cartCloseBtn.addEventListener('click', () => {
    cartTab.classList.remove('cart-tab-active');
});


//Accessing the data from the JSON Object


const updateTotal = ()=>{  
    let totalPrice = 0;
    let totalQuantity = 0;
    document.querySelectorAll('.item').forEach(item=>{
        const quantity = parseInt(item.querySelector('.quantity-value').textContent);
        const price = parseFloat(item.querySelector('.item-total').textContent.replace('$',''));
        totalPrice += price;
        totalQuantity += quantity;
    });
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    cartValue.textContent = totalQuantity;
}

const initApp =async () => {
    await fetch("/product/find")
	.then(response => response.json())
	.then(data => {
           
			if(Array.isArray(data)){
			      productList = data;
			      showCards();
			 }else{
			      console.error("API did not return array"+data);
				  
				  //location.reload();
			 }
        })
}
initApp();


// showing the cards

const showCards = () => {
    productList.forEach(product => {
        const orderCard = document.createElement('div');
        orderCard.classList.add("order-card");
        orderCard.innerHTML = `
        <div class="card-image">
            <img src="/${product.productImage}" alt="">
        </div>
        <h4>${product.productName}</h4>
        <h4 class="price">${product.productPrice}</h4>
        <a href="" class="btn card-btn">Add to Cart</a>
        `;

        cardList.appendChild(orderCard);

        const cardBtn = orderCard.querySelector('.card-btn');
        cardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addToCart(product);
        });

    });
};

const addToCart = (product) => {

    const existingProduct = cartProduct.find(item => item.productId === product.productId);
    if (existingProduct) {
        alert("Item already in your cart!");
        return;
    }
    cartProduct.push(product);

    let quantity = 1;
    let price = parseFloat(product.productPrice.replace('$', ''));

    const cartItem = document.createElement('div');
    cartItem.classList.add('item');
	cartItem.classList.add('cartitem-tab');
    cartItem.innerHTML = `
								<div class="item-image-container">
	                                <img src="/${product.productImage}" alt="">
	                            </div>

	                            <div class="detail">
	                                <h4 class="cart-product-name">${product.productName}</h4>
	                                <h4 class="item-total cart-product-price">${product.productPrice}</h4>
	                            </div>
	                            <div class="flex">
	                                <a href="#" class="quantity-btn minus">
	                                    <i class="fa-solid fa-minus"></i>
	                                </a>
	                                <h4 class="quantity-value">${quantity}</h4>
	                                <a href="#" class="quantity-btn plus">
	                                    <i class="fa-solid fa-plus"></i>
	                                </a>
	                            </div> 
    `;
    cartList.appendChild(cartItem);

    updateTotal();
    const plusBtn = cartItem.querySelector('.plus');
    const quantityValue = cartItem.querySelector('.quantity-value');
    const itemTotal = cartItem.querySelector('.item-total');
    const minusBtn = cartItem.querySelector('.minus');

    plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        quantity++;
        quantityValue.textContent = quantity;
        itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
        updateTotal();
    });

    minusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (quantity > 1) {
            quantity--;
            quantityValue.textContent = quantity;
            itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
            updateTotal();
        } else {
            
            cartItem.classList.add('slide-out');
            setTimeout(() => {
                cartItem.remove();
                cartProduct = cartProduct.filter(item => item.id !== product.id);
                updateTotal();
            }, 300);
            
        }
        
    });
};