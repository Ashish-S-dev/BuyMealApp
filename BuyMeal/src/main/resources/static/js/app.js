var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: "#next",
        prevEl: "#prev",
    },
});




// Open cart tab
const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const cartCloseBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list');
const cartList = document.querySelector('.cart-list');
const cartTotal = document.querySelector('.cart-total');
const cartValue = document.querySelector('.cart-value');
const hamBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const bars = document.querySelector('.fa-bars');
const subscribeBtn = document.querySelector('.subscribe-btn');
const subscriber = document.querySelector('.subscriber-email');
const signinCloseBtn = document.querySelector('.close-signin');
const signin1 = document.querySelector('#sign-in1');
const signin2 = document.querySelector('#sign-in2');
const signinMenu = document.querySelector('#signin-menu');
const userLogin = document.querySelector('.user-login');
const loginMenu = document.querySelector('#login-menu');
const loginCloseBtn = document.querySelector('.close-login');
const orderPrelogin = document.querySelector('#order-prelogin');

const signinBtn = document.querySelector('.signin-btn');
const signinBtn3 = document.querySelector('.signin-btn3');
const userEmail = document.querySelector('.user-email');
const userPassword = document.querySelector('.user-password');
const userCPassword = document.querySelector('.user-cpassword');

const loginBtn = document.querySelector('.login-btn');
 
loginBtn.addEventListener('click', async (e)=>{
	e.preventDefault();
	let userEmailValue = userEmail.value;
	let userPasswordValue = userPassword.value;		
	
	if(isValidEmail(userEmailValue)){
			if(userPasswordValue != ""){
					
					let userStatus = `/user/${userEmailValue}`;
					
					const userData = {
						"userEmail":userEmailValue,
						"userPassword":userPasswordValue
					};
					
					await fetch(userStatus)
					.then(response=>response.json())
					.then((data)=>{
						//console.log(data);
						//console.log(data.userEmail);
						if(data.userEmail == null){
							window.alert("User not Exist");
							return;
						}else{
							let loginUrl = `/user/login`;
							fetch(loginUrl,{
								method:"POST",
								headers:{
									
									"Content-Type": "application/json"
									
								}, 
								body:JSON.stringify(userData)
							}).then(response=>response.json())
							.then((data)=>{ 
								//console.log(data);
								//console.log(data.userEmail);
								//console.log(data.userPassword);
								//console.log(data.userId);
								
								// Creating the session to store the email
								sessionStorage.setItem("userEmail",data.userEmail);
								
								location.reload();
								signinMenu.classList.remove('signin-menu');
								window.location.href = "home";
							}).catch((err)=>{
								console.log(err)
							})
						}			
					}).catch((er)=>{
						console.log(er);
					})
					
				}else{
					window.alert("Please Enter Password");
				}
		}else{
			window.alert("Please Enter Valid Email");
		}
	
	
});



signinBtn.addEventListener('click',async (e)=>{
	e.preventDefault();
	let userEmailValue = userEmail.value;
	let userPasswordValue = userPassword.value;
	let userCPasswordValue = userCPassword.value;
	
	if(isValidEmail(userEmailValue)){
		if(userCPasswordValue === userPasswordValue && userPasswordValue != ""){
				
				let userStatus = `/user/${userEmailValue}`;
				
				const userData = {
					"userEmail":userEmailValue,
					"userPassword":userPasswordValue
				};
				
				await fetch(userStatus)
				.then(response=>response.json())
				.then((data)=>{
					//console.log(data);
					//console.log(data.userEmail);
					if(data.userEmail != null){
						window.alert("User already Exist");
						return;
					}else{
						let signinUrl = `/user/signin`;
						fetch(signinUrl,{
							method:"POST",
							headers:{
								
								"Content-Type": "application/json"
								
							}, 
							body:JSON.stringify(userData)
						}).then(response=>response.json())
						.then((data)=>{ 
							//console.log(data);
							//console.log(data.userEmail);
							//console.log(data.userPassword);
							//console.log(data.userId);
							
							// Creating the session to store the email
							sessionStorage.setItem("userEmail",data.userEmail);
							
							signinMenu.classList.remove('signin-menu');
							window.alert("Thanks For Login");
							window.location.href = "home";
						}).catch((err)=>{
							console.log(err)
						})
					}			
				}).catch((er)=>{
					console.log(er);
				})
				
			}else{
				window.alert("Password not Match");
			}
	}else{
		window.alert("Please Enter Valid Email");
	}
	
});




orderPrelogin.addEventListener('click',(e)=>{
    e.preventDefault();
    signinMenu.classList.add('signin-menu');
    mobileMenu.classList.remove('mobile-menu-active');
    loginMenu.classList.remove('signin-menu');
	cartTab.classList.remove('cart-tab-active');
});
signinBtn3.addEventListener('click',(e)=>{
    e.preventDefault();
    signinMenu.classList.add('signin-menu');
    mobileMenu.classList.remove('mobile-menu-active');
    loginMenu.classList.remove('signin-menu');
    bars.classList.toggle('fa-bars');
    bars.classList.toggle('fa-xmark');
	cartTab.classList.remove('cart-tab-active');
});

loginCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginMenu.classList.remove('signin-menu');
});

userLogin.addEventListener('click',(e)=>{
    e.preventDefault();
    signinMenu.classList.remove('signin-menu');
    loginMenu.classList.add('signin-menu');

});

signin1.addEventListener('click',(e)=>{
    e.preventDefault();
    signinMenu.classList.add('signin-menu');
    mobileMenu.classList.remove('mobile-menu-active');
    loginMenu.classList.remove('signin-menu');
	
});
signin2.addEventListener('click',(e)=>{
    e.preventDefault();
    signinMenu.classList.add('signin-menu');
    mobileMenu.classList.remove('mobile-menu-active');
    loginMenu.classList.remove('signin-menu');
    bars.classList.toggle('fa-bars');
    bars.classList.toggle('fa-xmark');
});

signinCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signinMenu.classList.remove('signin-menu');
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
    //console.log(subscriberEmail);
});


hamBurger.addEventListener('click',()=>{
    bars.classList.toggle('fa-bars');
    bars.classList.toggle('fa-xmark');

});
hamBurger.addEventListener('click',()=>{
    mobileMenu.classList.toggle('mobile-menu-active');
});


cartIcon.addEventListener('click', () => {
    cartTab.classList.add('cart-tab-active');
	signinMenu.classList.remove('signin-menu');
});

// close cart tab

cartCloseBtn.addEventListener('click', () => {
    cartTab.classList.remove('cart-tab-active');
});


//Accessing the data from the JSON Object
let productList = [];
let cartProduct = [];

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
    cartItem.innerHTML = `
                            <div class="item-image-container">
                                <img src="/${product.productImage}" alt="">
                            </div>

                            <div class="detail">
                                <h4>${product.productName}</h4>
                                <h4 class="item-total">${product.productPrice}</h4>
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
}