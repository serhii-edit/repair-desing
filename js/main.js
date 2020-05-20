const modal = document.querySelector('.modal');
const modalBtn = document.querySelectorAll("[data-toggle=modal]");
const CloseBtn = document.querySelector(".modal__close");

const switchModal = () => {
  modal.classList.toggle("modal_visible");
}

const outside = () => {
  modal.classList.toggle("modal_outside");
}

modalBtn.forEach(element => {
  element.addEventListener("click", switchModal);
  CloseBtn.addEventListener("click", switchModal);
  // window.addEventListener("click", outside);
});




// window.addEventListener("click", clickOutside);

// function clickOutside (event) {
//   if (event.target == modal) {
//     modal.classList.toggle(".modal-outside");
//   }
// }