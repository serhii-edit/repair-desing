// const modal = document.querySelector('.modal');
// const modalBtn = document.querySelectorAll("[data-toggle=modal]");
// const CloseBtn = document.querySelector(".modal__close");

// const switchModal = () => {
//   modal.classList.toggle("modal_visible");
// }

// const outside = () => {
//   modalOutside.style.display = "visibility: visible"
// }

// modalBtn.forEach(element => {
//   element.addEventListener("click", switchModal);
//   CloseBtn.addEventListener("click", switchModal);
//   window.addEventListener("click", outside);
// });

/* 
// Get modal elemet
var modal = document.getElementById("modal");
// Get open modal button
var modalBtn = document.getElementById("modalBtn");
// Get close button
var closeBtn = document.getElementById("modal__close");
// Listen for  open click
modalBtn.addEventListener("click", openModal);
// Listen for close click
closeBtn.addEventListener("click", closeModal);
// Listen for outside click
window.addEventListener("click", outsideClick);

// Function to open modal
function openModal () {
  modal.style.visibility = "visible";
}

// Function to close modal
function closeModal () {
  modal.style.visibility = "hidden";
}

// Function to close modal if outside click
function outsideClick (event) {
  if (event.target == modal) {
  modal.style.visibility = "hidden";
  }
}

window.addEventListener("keydown", closeEsc);

function closeEsc (event) {
  if (event.which == 27) {
    modal.style.visibility = "hidden";
  }
}
*/

$(document).ready(function () {



  var modal = $(".modal"),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $(".modal__close");

  modalBtn.on("click", function () {
    modal.toggleClass("modal__visible");
  });

  closeBtn.on("click", function () {
    modal.toggleClass("modal__visible");
  });

  $(window).on('keyup', function(event) {
    if (event.which == 27) {
      modal.toggleClass("modal__visible");
    }
  });

});

$(window).on("click", function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (event.target == modal) {
    $("body").find(".modal").toggleClass("modal__visible");
  }
});
// Need to Learn this section (top)


