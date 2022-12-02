document.addEventListener("DOMContentLoaded", () => {
   const hero = document.querySelector(".home");
   const header = document.querySelector(".menu__ul");
   const scrollItems = document.querySelectorAll(".scroll");
 
   const scrollAnimation = () => {
     let windowCenter = window.innerHeight / 2 + window.scrollY;
     // console.log(windowCenter)
     scrollItems.forEach((el) => {
       let scrollOffset = el.offsetTop + el.offsetHeight * 0;
       //console.log(scrollOffset);
       if (windowCenter >= scrollOffset) {
         el.classList.add("animation");
       } else {
         el.classList.remove("animation");
       }
     });
   };
 
   const headerFixed = () => {
     let scrollTop = window.scrollY;
     let heroCenter = hero.offsetHeight / 2;
 
     if (scrollTop >= heroCenter) {
       header.classList.add("fixed");
       //	hero.style.marginTop = `${header.offsetHeight}px`; // убирает дерганье картинки при появлении меню
     } else {
       header.classList.remove("fixed");
       hero.style.marginTop = `0px`;
     }
   };
 
   headerFixed();
   scrollAnimation();
   window.addEventListener("scroll", () => {
     headerFixed();
     scrollAnimation();
   });
 });
 
 const mobilMenu = document.querySelector(".mobil");
 function closeMobilMenu() {
   mobilMenu.style.display = "none";
 }
 function openMobilMenu() {
   mobilMenu.style.display = "block";
 }
 