// $('.btn').click(function(event){
//     if ($(this).hasClass('btn_no-ripple')){
//         return
//     }
//     const span = $(this).find('.btn__ripple')
//     if (span){
//         span.remove()
//     }
//     const buttonAngle = $(this)[0].getBoundingClientRect()
//     const left = (event.clientX - buttonAngle.x - buttonAngle.width / 2)
//     const top = (event.clientY - buttonAngle.y - buttonAngle.width / 2)
//     const ripple = document.createElement('span')
//     ripple.classList.add('btn__ripple')
//     ripple.setAttribute('style', `top: ${top}px; left: ${left}px; height: ${buttonAngle.width}px; width: ${buttonAngle.width}px;`)

//     $(this)[0].appendChild(ripple)
// })

// $('.btn_add-to-cart').click(function(){
//     $(this).find('.btn__add-to-cart-text').css('visibility', 'hidden')
//     $(this).find('.btn__icon_spinner').css('visibility', 'visible')
//     $(this).find('.btn__icon_check').show()
//     setTimeout(() => {
//         $(this).find('.btn__icon_spinner').css('visibility', 'hidden')
//         $(this).find('.btn__icon_check').addClass('animated')
//     }, 1000);
//     setTimeout(() => {
//         $(this).find('.btn__icon_check').hide()
//         $(this).find('.btn__icon_check').removeClass('animated') 
//         $(this).find('.btn__add-to-cart-text').css('visibility', 'visible')
//     }, 3000);
// })


// document.addEventListener('DOMContentLoaded', () => {
//   const url = window.location.href
//   const links = document.querySelectorAll('.menu__link')
//   for (let link of links){
//     if (link.href === url){
//       link.classList.toggle('menu__link_active')
//     }
//   }
//   const menuButton = document.querySelector('#menu-button')
//   const menu = document.querySelector('#menu')
//   menuButton.addEventListener('click', () => {
//     menu.classList.toggle('menu_visible')
//   })
// })
// const scroller = document.querySelector('#scroller')
// window.addEventListener('scroll', function(){
//     let scrollSize = window.pageYOffset
//     if (scrollSize > 100){
//         scroller.classList.add('scroller_visible')
//     } else {
//         scroller.classList.remove('scroller_visible')
//     }
// })
// scroller.addEventListener('click', function(){
//     const step = window.pageYOffset / 20,
//             animationTime = 400,
//             framesCount = 20;
//         let scroll = setInterval(() => {
//         window.scrollBy(0, -step)
//             if (window.pageYOffset < 1){
//                 clearInterval(scroll)
//             }
//         }, animationTime / framesCount);
// })


