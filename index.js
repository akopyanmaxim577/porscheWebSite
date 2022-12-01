var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    breakpoints:{
      250:{
        slidesPerView: 1,
        

      },
      354:{
        slidesPerView: 1.5,
        spaceBetween: 100,

      },

      562:{
        slidesPerView: 2,
        spaceBetween: 50,

      },
      655:{
        slidesPerView: 3,
        spaceBetween: 250,

      },
      913:{
        slidesPerView: 4,
        spaceBetween: 300,

      },
      1035:{
        slidesPerView: 5,
        spaceBetween: 300,

      }

      

    }
  });

const add = document.getElementById("add");
const main = document.getElementById("main");
const close = document.getElementById('close');

const link= document.querySelectorAll('#link')

add.addEventListener('click',function(){
  main.classList.add('db')
})

close.addEventListener('click',function(){
  main.classList.remove('db')
})

link.forEach(n=>n.addEventListener('click',function(){
  main.classList.remove('db')
}))





  