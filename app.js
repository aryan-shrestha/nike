const content = document.querySelector(".content");
const seeMore = document.querySelector("#see-more");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const thumbnail = document.querySelectorAll(".thumbnail img");
const mainImage = document.querySelector("#photo");
const buyNow = document.querySelector(".buy-now");
const buyNowPopUp = document.querySelector(".buy-now-pop-up");
const closeBtn = document.querySelector(".close-button h1");
const cartPhoto = document.querySelector("#cart-photo");


seeMore.addEventListener("click", () => {
    content.style.transition = "transform 0.4s ease-in-out";
    content.style.transform = "translateY(-70vh)";
    downButton.style.transition = "opacity ease 0.8s";
    downButton.style.opacity = "1";
});
downButton.addEventListener("click", () => {
    content.style.transition = "transform 0.4s ease-in-out";
    content.style.transform = "translateY(-140vh)"; 
    upButton.style.transition = "opacity ease 0.5s";  
    upButton.style.opacity = "1" 
    downButton.style.transition = "opacity ease 0.5s";
    downButton.style.opacity = "0";
});
upButton.addEventListener("click",() =>{
    content.style.transition = "transform 0.4s ease-in-out";
    content.style.transform = "translateY(-70vh)"; 
    downButton.style.transitiom = "opacity ease 0.5s"; 
    downButton.style.opacity = "1";
    upButton.style.transition = "opacity ease 0.5s";  
    upButton.style.opacity = "0" 
});

buyNow.addEventListener("click", () => {
    buyNowPopUp.style.display = "flex";
    cartPhoto.src = mainImage.src;
})
closeBtn.addEventListener("click",()=>{
    buyNowPopUp.style.display = "none";
})

const thumbnailDiv =document.querySelectorAll(".thumbnail");
const thumbnailPrice = document.querySelectorAll(".thumbnail p");

for(i=0; i<thumbnailPrice.length; i++){
    let currentPrice = thumbnailPrice[i].innerText;
    let imageSrc = thumbnail[i].src;
    thumbnailDiv[i].addEventListener("click", ()=>{
        document.querySelector("#shoes-price").innerText = currentPrice;
        mainImage.src = imageSrc;
        cartPhoto.src = imageSrc;
        for(j=0; j<thumbnail.length;j++){
            if(thumbnail[j].src == mainImage.src){
                thumbnail[j].parentElement.style.backgroundColor = "rgb(248, 248, 248)";
                thumbnail[j].parentElement.style.boxShadow = "1px 1px 5px rgb(157, 157, 157)";
            }
            else{
                thumbnail[j].parentElement.style.backgroundColor = "rgb(252, 252, 252)";
                thumbnail[j].parentElement.style.boxShadow = "none";
            }
        }
    })
}