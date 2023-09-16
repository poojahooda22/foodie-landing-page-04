var anim = gsap.timeline();

anim.from("nav", {
    duration: 1,
    y: -300,
    opacity: 0,
    
})
anim.from(".firsth1", {
    duration: 1,
    x: -100,
    opacity: 0,   
}, "ac")
anim.from(".secondh1", {
    duration: 1,
    x: -200,
    opacity: 0,   
})
anim.from(".ptag", {
    duration: 1,
    x: -300,
    opacity: 0,   
})
anim.from(".search1", {
    duration: 1,
    x: -400,
    opacity: 0,   
})

anim.from("button", {
    duration: 1,
    x: -500,
    opacity: 0,   
})

anim.from("#right", {
    duration: 1,
    x: 200,
    opacity: 0,   
}, "ac")

var mnu = document.querySelector("#menu");

var close = document.querySelector("#close");

var responsiveBar = document.querySelector(".resp-nav");

mnu.addEventListener("click", function() {
    responsiveBar.style.right = "0%";
})

close.addEventListener("click", function() {
    responsiveBar.style.right = "-100%";
})