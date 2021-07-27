let menuButt = document.querySelector("#menu-icon");
let body = document.querySelector("#body");

let navbarMenu = document.querySelector("#navbar");

let menuStatus = true;
menuButt.addEventListener("click", function(){
    if(menuStatus) {
        open();
    } else {
        close();
    }  
});
body.addEventListener("click", function(){
    if (event.target != menuButt && event.target != navbarMenu) {
        close();
    }
    
})

function close() {
    navbarMenu.classList.remove("active-menu");
    menuButt.src = "./images/icon-hamburger.svg"
    menuStatus = true;
}

function open() {
    navbarMenu.classList.add("active-menu");
    menuButt.src = "./images/icon-close.svg";
    menuStatus = false;
}