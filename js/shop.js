/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/*contact form start*/
// Get the modal
var modal3 = document.getElementById('id03');
var blocker1 = document.getElementById('blocker1');

// When the user clicks anywhere outside of the modal, close it
blocker1.onclick = function () {
    modal3.style.display = "none";
} 

/*contact form end*/