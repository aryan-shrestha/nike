//for cart button
const cartBtn = document.querySelector("#cart");
const cart = document.querySelector(".cart");


cartBtn.addEventListener("click", ()=>{
    cart.style.display = "flex";
    updateCartTotal();
})

//cart buttons 
const cartCloseBtn = document.querySelector(".cart-close-btn");

cartCloseBtn.addEventListener("click", ()=>{
    cart.style.display = "none";
    updateCartTotal();
})

const removeBtn  = document.querySelectorAll(".remove-btn");

//remove button function
for(i=0; i<removeBtn.length; i++){
    removeBtn[i].addEventListener("click", function(){
       this.parentElement.remove();
       updateCartTotal();
    })
}
//checking if quantity is negative or zero
let quantityInputs = document.querySelectorAll("#quantity");
for(i=0; i<quantityInputs.length; i++){
    let input = quantityInputs[i];
    input.addEventListener("change", function(){
        input = this;
        if(isNaN(input.value)|| input.value<=0){
            input.value = 1;
        }
        updateCartTotal();
    })
}
//function to update cart total
//this function is called each time an item is removed or quantity of item is changed
const updateCartTotal = () => {
   let priceArray = document.querySelectorAll("#price");
   let quantityArray = document.querySelectorAll("#quantity");
   let total = 0;
   for(i=0; i<priceArray.length; i++){
       let price = parseFloat(priceArray[i].innerHTML.replace("Rs." , ""));
       let quantity = parseFloat(quantityArray[i].value);
       total = total+(price*quantity);  
   }
    let totalAmountElement = document.querySelector("#totalAmount");
    totalAmountElement.innerText = total
}

//add to cart button function
const addTocartBtn = document.querySelector("#add-to-cart-btn");
addTocartBtn.addEventListener("click", addToCart);

function addToCart(event){
    let clickedItem = event.target;
    let addTocartDiv = clickedItem.parentElement.parentElement;
    let itemPhoto = addTocartDiv.querySelector("#cart-photo").src;
    let itemPrice = addTocartDiv.querySelector("#shoes-price").innerText;
    console.log(itemPhoto, itemPrice); 
    addItemToCart(itemPhoto, itemPrice);
}

function addItemToCart(itemPhoto, itemPrice){
    let cartRow = document.createElement("div");
    cartRow.classList.add("item")
    let cartItems = document.querySelector(".cart-rows");
    let cartImages = document.querySelectorAll("#cart-item-image");
    for(i=0; i<cartImages.length; i++){
        if(cartImages[i].src == itemPhoto){
            alert("Item already added in cart");
            return;
        }
    }
    let cartRowContents = `
            <img src="${itemPhoto}" id = "cart-item-image">
            <input type="number" id = "quantity" value="1">
            <p id = "price">${itemPrice} </p>
            <button class="remove-btn">Remove</button>
             `
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.querySelector("#quantity").addEventListener("change", function(){
        input = this;
        if(isNaN(input.value)|| input.value<=0){
            input.value = 1;
        }
        updateCartTotal();
    })
    cartRow.querySelector(".remove-btn").addEventListener("click", function(event){
        event.target.parentElement.remove();
        updateCartTotal();
    })
    alert("Item Sucessfully Added in Cart")
}