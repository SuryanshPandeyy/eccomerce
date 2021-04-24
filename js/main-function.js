$('.bi-gear').click(function(){
    $(this).addClass('rotate');
});
$('.toggle1').click(function(){
    $('.toggle-circle1').toggleClass('move');
});
$('.toggle2').click(function () {
    $('.toggle-circle2').toggleClass('move');
});
$('.toggle3').click(function () {
    $('.toggle-circle3').toggleClass('move');
});
$('.toggle1').click(function () {
    $('.body').toggleClass('color');
    $('.bi').toggleClass('color');
});
// Get the modal
var modal = document.getElementById('id01');
var gear = document.querySelector('.bi-gear');

// When the user clicks anywhere outside of the modal, close it

modal.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        gear.classList.remove('rotate');
    }
});

// Get the modal
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
modal2.addEventListener('click', function (event2) {
    if (event2.target == modal2) {
        modal2.style.display = "none";
    }
});

let bigbox = document.querySelector(".main-body");
let box = document.querySelector(".logo");
let image = document.querySelector(".img-logo");



    bigbox.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        box.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });


    bigbox.addEventListener("mouseenter", (e) => {
        box.style.transition = "none";
        image.style.transform = "translateZ(150px) rotateZ(25deg)";
    });

    bigbox.addEventListener("mouseleave", (e) => {
        box.style.transition = "all 0.5s ease";
        box.style.transform = "rotateY(0deg) rotateX(0deg)";
        image.style.transform = "translateZ(0px) rotateZ(0deg)";
    });
