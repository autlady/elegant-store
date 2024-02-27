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




