// open & close
let menuOpen = document.querySelector(".menuOpen");
let menuClose = document.querySelector(".menuClose");
let menuClose_1 = document.querySelector(".menuClose_1");
let layer = document.querySelector(".layer");

menuOpen.onclick = () => {
    layer.classList.add("check");
}
menuClose.onclick = () => {
    layer.classList.remove("check");
}
menuClose_1.onclick = () => {
    layer.classList.remove("check");
}

// mobile_menu
$('#mbtn1').on('click', function(){
    $('.mobile_nav_item').css('display', 'block');
    $('.mobile_nav_item2').css('display', 'none');
    $('#mbtn1').css('borderBottom', '3px solid #f14242');
    $('#mbtn2').css('borderBottom', '3px solid #ddd');
});
$('#mbtn2').on('click', function(){
    $('.mobile_nav_item2').css('display', 'block');
    $('.mobile_nav_item').css('display', 'none');
    $('#mbtn2').css('borderBottom', '3px solid #f14242');
    $('#mbtn1').css('borderBottom', '3px solid #ddd');
});

// mobile_head
document.getElementById('mbtn1').addEventListener('click', function() {
    document.getElementById('manub1').style.display = 'block';
    document.getElementById('manub2').style.display = 'none';
});
document.getElementById('mbtn2').addEventListener('click', function() {
    document.getElementById('manub2').style.display = 'block';
    document.getElementById('manub1').style.display = 'none';
});

$('.ston').on('click', function(){
    $('.acor1').toggleClass('acno');
    $('.ston').toggleClass('ad');
});

// offcanvas
const openCanvasBtn = document.getElementById('openCanvasBtn');
const offcanvas = document.getElementById('offcanvas');
const closeCanvasBtn = document.getElementById('closeCanvasBtn');
const overlay = document.getElementById('overlay');

openCanvasBtn.addEventListener('click', function() {
    offcanvas.classList.add('active_1');
    overlay.classList.add('active_1');
});
closeCanvasBtn.addEventListener('click', function() {
    offcanvas.classList.remove('active_1');
    overlay.classList.remove('active_1');
});
overlay.addEventListener('click', function() {
    offcanvas.classList.remove('active_1');
    overlay.classList.remove('active_1');
});
