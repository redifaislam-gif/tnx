/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navClos = document.getElementById('link'),
         navlink2 = document.getElementById('link2'),
            navlink3 = document.getElementById('link3')
/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   });

     navClos.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
        navlink2.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })

   
     navlink3.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })

}
