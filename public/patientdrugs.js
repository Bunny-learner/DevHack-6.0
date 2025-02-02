var tl = gsap.timeline();
tl.from("header .logo", {
    opacity: 0,
    y: -30,
    duration: 0.5,
    delay: 0.5
})
tl.from("nav ul li", {
    opacity: 0,
    y: -20,
    duration: 0.4,
    // delay:1,
    stagger: 0.1
})
tl.from("nav ul li i", {
    opacity: 0,
    y: -20,
    duration: 0.2,
})
var tl1=gsap.timeline()
tl1.from(".nav .logoimg",{
    opacity:0,
    y:-20,
    duration:0.8

})
tl1.from(".nav #menubtn",{
    opacity:0,
    y:-20

})
tl.from(".search-container",{
    opacity:0,
    scale:0.25,
    duration:0.2,
    // delay:1.5
})
tl.from(".flip-card",{
    opacity:0,
    scale:0.25,
    duration:0.2,
    // delay:1.5
})

var tl=gsap.timeline()
tl.to(".menu",{
    right:0,
    duration:0.6
})
tl.from(".menu h3",{
    opacity:0,
    x:50,
    duration:0.5,
    stagger:0.2
})
tl.from(".menu i",{
    opacity:0,
    x:50,
    duration:0.3,
})
tl.pause()
var menu = document.querySelector(".ri-menu-line")
menu.addEventListener("click", function () {
    document.getElementsByClassName("menu")[0].style.display = "block";
    tl.play()
})
var close = document.querySelector(".ri-close-line")
close.addEventListener("click", function () {
    // tl.reverse()
    document.getElementsByClassName("menu")[0].style.display = "none";
})
  // Flip card effect
  document.getElementById('flipCard').addEventListener('click', function () {
    document.getElementById('flipCardInner').classList.toggle('flipped');
});

// Dark mode toggle
document.querySelector('.dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    let toggleBtn = document.querySelector('.dark-mode-toggle');

    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "white";
        toggleBtn.innerHTML = "🌙";  // Moon symbol
    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        toggleBtn.innerHTML = "☀";  // Sun symbol
    }
});