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

  function backTop () {
    let button = $(".back-to-top");
    $(window).on("scroll", () => {
      if ($(this).scrollTop() >= 650 ) {
        button.fadeIn();
      } else {
        button.fadeOut()
      }
    });
    button.on("click", (e) => {
      e.preventDefault();
      $("html").animate({scrollTop: 0}, 700);
    });
  };
  
  backTop();

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  next.css("left", prev.width() + 50 + bullets.width() + 30)
  bullets.css("left", prev.width() + 30)
    
});

$(".modal__form").validate({
  errorElement: "div", 
  errorClass: "inbalid",
  rules: {
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required",
    userEmail: {
      required: true,
      email: true
    }
  },
  messages: {
    userName: {
      required: "Пожалуйста, укажите ваше Имя",
      minlength: "Имя должно быть не менее 2 букв",
      maxlength: "Имя должно быть не больше 15 букв"
    },
    userPhone: "Пожалуйста, укажите (номер) вашего телефона",
    userEmail: {
      required: "Обязательно введите вашу почту",
      email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
    }
  }
});


$(".footer__form").validate({
  errorElement: "div", 
  errorClass: "inbalid",
  rules: {
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userQuestion: "required",
    userPhone: "required",
  },
  messages: {
    userName: {
      required: "Пожалуйста, укажите ваше Имя",
      minlength: "Имя должно быть не менее 2 букв",
      maxlength: "Имя должно быть не больше 15 букв"
    },
    userPhone: "Пожалуйста, укажите (номер) вашего телефона",
    userQuestion: "Напишите свой вопрос"
  }
});

$(".control__form").validate({
  errorElement: "div", 
  errorClass: "inbalid",
  rules: {
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    userPhone: "required",
  },
  messages: {
    userName: {
      required: "Пожалуйста, укажите ваше Имя",
      minlength: "Имя должно быть не менее 2 букв",
      maxlength: "Имя должно быть не больше 15 букв"
    },
    userPhone: "Пожалуйста, укажите (номер) вашего телефона",
  }
});


// mask for phone
$('input[type="tel"]').mask("+1 (000) 000-0000", {placeholder: "+1 (___) ___-____"});

