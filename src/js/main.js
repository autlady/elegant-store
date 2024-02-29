// const toggleMenu = document.querySelector('menu-toggle');

// if (toggleMenu){
//     toggleMenu.addEventListener('click', function(){
        
//         if(this.classList.contains('active')){
//             this.classList.remove('active');
//         }else{
//             this.classList.add('active');
//         }
//     })
// }

// закрытие секции tagline
const closeTaglineBtn = document.querySelector('.tagline__close');
const tagline = document.querySelector('.tagline');
closeTaglineBtn.onclick = function() {
  tagline.remove();
}

  /* arrivals slider */

const arrivalsSwiper = new Swiper('.arrivals-swiper', {
    // Optional parameters
    slidesPerView: 4.5,
    spaceBetwen: 24,
  
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });




