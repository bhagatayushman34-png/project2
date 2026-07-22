// Sticky Navbar

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("active",window.scrollY>80);

});

// Smooth Button Animation

const btn=document.querySelector(".btn");

if(btn){

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

}