/* var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 300,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); */

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





  