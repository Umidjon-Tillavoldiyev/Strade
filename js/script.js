let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let demoBtn = document.querySelectorAll('#demo-btn');




window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active'); 
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

// demoBtn.addEventListener("click",()=>{
//     // loginForm.classList.add('active');
//     console.log("salom");
// });
demoBtn.forEach(item=>{
    item.addEventListener('click',()=>{
        loginForm.classList.add('active');
    })
})

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,

  });

  let productPreviewContainer = document.querySelector('.products-preview-container');
  let productPreview = document.querySelectorAll('.product-preview');
  
    document.querySelectorAll('.products .slide .btnn').forEach(detailBtn =>{
        detailBtn.onclick = () =>{
            productPreviewContainer.style.display = 'block';
            let name = detailBtn.getAttribute('data-product');
            productPreview.forEach(preview =>{
                let target = preview.getAttribute('data-target');
    
                if(name == target){
                    preview.style.display = 'flex';
                };
            });
        };
    } );
  
    document.querySelectorAll('.products-preview-container .product-preview .fa-times').forEach(close =>{
        close.onclick = () =>{
          productPreviewContainer.style.display = 'none';
          productPreview.forEach(closePreview =>{
              closePreview.style.display = 'none';
          });
        };
    });

  var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

//   Our Clients
  var swiper = new Swiper(".clients-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
    
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },

  });


// review starts 

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },

  });

//   review ends 

 

 




