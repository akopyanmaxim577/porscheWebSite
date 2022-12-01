AOS.init()
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    250: {
      slidesPerView: 1,


    },
    354: {
      slidesPerView: 1.5,
      spaceBetween: 100,

    },

    562: {
      slidesPerView: 2,
      spaceBetween: 50,

    },
    655: {
      slidesPerView: 3,
      spaceBetween: 250,

    },
    913: {
      slidesPerView: 4,
      spaceBetween: 300,

    },
    1035: {
      slidesPerView: 5,
      spaceBetween: 300,

    }



  }
});

const add = document.getElementById("add");
const main = document.getElementById("main");
const close = document.getElementById('close');

const link = document.querySelectorAll('#link')

add.addEventListener('click', function () {
  main.classList.add('db')
})

close.addEventListener('click', function () {
  main.classList.remove('db')
})

link.forEach(n => n.addEventListener('click', function () {
  main.classList.remove('db')
}))



/* World phone */
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});


/* Modal */
const m_open = document.getElementById('banner_open');
const m_close = document.getElementById('m_close');
const modal = document.getElementById('mod')


m_open.addEventListener('click', function () {
  modal.classList.add('deb')
})


m_close.addEventListener('click', function () {
  modal.classList.remove('deb')
})


function SendMail() {
  var params = {
    name_id: document.getElementById('name').value,
    email_id: document.getElementById('mail').value,
    phone_id: document.getElementById('phone').value
  }
  // emailjs.send('service_lp2ab7i', 'template_tosmahj', params);
  emailjs.send('service_lp2ab7i', 'template_tosmahj', params,"7LtUh3S2KsSzfkWur")
    .then(function() {
       alert("Mail wat sent");
       modal.classList.remove('deb')
    }, function() {
      alert('FAILED...', );
       modal.classList.remove('deb')
    });
}




