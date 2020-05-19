const modal = document.querySelector('.modal');
const modalBtn = document.querySelectorAll("[data-toggle=modal]")
const CloseBtn = document.querySelector(".modal__close")

const switchModal = () => {
  modal.classList.toggle("modal_visible")
}

modalBtn.forEach(element => {
  element.addEventListener("click", switchModal);
  CloseBtn.addEventListener("click", switchModal);
});




// document.addEventListener("DOMContentLoaded", fucntion(event){
  
// });