// Selektuj dugme:
let mybutton = document.getElementById("scrollBtn");

// Na 20px od vrha dokumenta, pokazi dugme
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Kad se klikne na dugme, skroluj na vrh
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE i Opera
}
