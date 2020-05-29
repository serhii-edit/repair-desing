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
  errorClass: "invalid",
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
    },
    userPolicy: "required"
  },
  messages: {
    userName: {
      required: "Пожалуйста, укажите ваше Имя",
      minlength: "Имя должно быть не менее 2 букв",
      maxlength: "Имя должно быть не больше 15 букв"
    },
    userPhone: "Пожалуйста, укажите номер телефона",
    userEmail: {
      required: "Обязательно введите вашу почту",
      email: "Электронна почта должна быть в формате name@domain.com"
    },
    userPolicy: "Обезательно!",
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "../send.php",
      data: $(form).serialize(),
      success: function (response) {
        console.log("Ajaxis working ", + response);
        $(form)[0].reset();
        alert("Заявка отправлена!");
        // closeBtn.addClass(".modal__close");
      },
      error: function (response) {
        alert("Ошыбка сестемы сайта <br> Форма не была отправлена <br> Позвоните на номер: <br> +7 (999) 768-32-99")
      }
    });
  }
});


$(".footer__form").validate({
  errorElement: "div", 
  errorClass: "invalid",
  rules: {
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userQuestion: "required",
    userPhone: "required",
    userPolicy: "required"
  },
  messages: {
    userName: {
      required: "Пожалуйста, укажите ваше Имя",
      minlength: "Имя должно быть не менее 2 букв",
      maxlength: "Имя должно быть не больше 15 букв"
    },
    userPhone: "Пожалуйста, укажите номер телефона",
    userQuestion: "Напишите свой вопрос",
    userPolicy: "Обезательно!"
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "../send.php",
      data: $(form).serialize(),
      success: function (response) {
        console.log("Ajaxis working ", + response);
        $(form)[0].reset();
        alert("Заявка отправлена!");
        // closeBtn.addClass(".modal__close");
      },
      error: function (response) {
        alert("Ошыбка сестемы сайта <br> Форма не была отправлена <br> Позвоните на номер: <br> +7 (999) 768-32-99")
      }
    });
  }
});

$(".control__form").validate({
  errorElement: "div", 
  errorClass: "invalid",
  rules: {
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    userPhone: "required",
    userPolicy: "required"
  },
  messages: {
    userName: {
      required: "Пожалуйста, укажите ваше Имя",
      minlength: "Имя должно быть не менее 2 букв",
      maxlength: "Имя должно быть не больше 15 букв"
    },
    userPhone: "Пожалуйста, укажите номер телефона",
    userPolicy: "Обезательно!"
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "../send.php",
      data: $(form).serialize(),
      success: function (response) {
        console.log("Ajaxis working ", + response);
        $(form)[0].reset();
        alert("Заявка отправлена!");
        // closeBtn.addClass(".modal__close");
      },
      error: function (response) {
        alert("Ошыбка сестемы сайта <br> Форма не была отправлена <br> Позвоните на номер: <br> +7 (999) 768-32-99")
      }
    });
  }
});


// mask for phone
$('input[type="tel"]').mask("+1 (000) 000-0000", {placeholder: "+1 (___) ___-____"});

// creating yandex map

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.751574, 37.573856],
          zoom: 9,
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Creating a content layout.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Нас офис',
          balloonContent: 'На 3 этаже'
      }, {
          /**
           * Options.
           * You must specify this type of layout.
           */
          iconLayout: 'default#image',
          // Custom image for the placemark icon.
          iconImageHref: '../img/location.svg',
          // The size of the placemark.
          iconImageSize: [32, 32],
          /**
           * The offset of the upper left corner of the icon relative
           * to its "tail" (the anchor point).
           */
          iconImageOffset: [-5, -38]
      })

  myMap.geoObjects
      .add(myPlacemark);
      myMap.behaviors.disable('scrollZoom');
});

