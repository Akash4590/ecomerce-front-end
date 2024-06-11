// const header = document.querySelector("header");
// window.addEventListener("scroll",function(){
//  header.classList.toggle("sticky",this.window.scrollY > 0);
// })

// let menu = document.querySelector("#menu-icon");
// let navmenu = document.querySelector(".navmenu");
// menu.onclick = () =>{
//     menu.classList.toggle('bx-x');
//     navmenu.classList.toggle('open');
// }
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");
menu.onclick = () => {
    console.log("Menu icon clicked"); // Add this line for debugging
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
    console.log("Menu icon class toggled"); // Add this line for debugging
};
