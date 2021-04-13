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
}) 

// Get the modal
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
modal2.addEventListener('click', function (event2) {
    if (event2.target == modal2) {
        modal2.style.display = "none";
    }
}) 