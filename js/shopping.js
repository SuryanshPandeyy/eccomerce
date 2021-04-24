// $('.btn-cart-small').each(function(i){
// //if statement here 
//     // use $(this) to reference the current div in the loop
//     //you can try something like...
//     $(this).click(function() {
//         $('.bi-cart-check').toggleClass('displays');
//     });
// });
var y = document.getElementsByClassName('bi-cart-plus');
var x = document.getElementsByClassName('btn-cart-small');

for (i = 0; i < x.length; i++) {

    var d = x[i];
    d.i = i;

    d.onclick = function (){
        y.classList.toggle("display");
    };

}