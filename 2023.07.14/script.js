const Btn4 = document.querySelectorAll('.main-B button');
const imges = document.querySelector('.logo-img a > img');
const logo = document.querySelector('.img-main a > img');
Btn4[0].addEventListener('click',function(e){
  e.preventDefault();
  logo.src = "./imges/logo_b.png";
  imges.src = "./imges/phone_afternoon.png";
  document.body.style.backgroundImage = "url('./imges/bg_afternoon.jpg')"; 
})


Btn4[1].addEventListener('click',function(e){
  e.preventDefault();
  logo.src = "./imges/logo_b.png";
  document.body.style.backgroundImage = "url('./imges/bg_evening.jpg')"; 
  imges.src = "./imges/phone_evening.png"
  
})

Btn4[2].addEventListener('click',function(e){
  e.preventDefault();
  logo.src = "./imges/logo_w.png";
  document.body.style.backgroundImage = "url('./imges/bg_morning.jpg')"; 
  imges.src = "./imges/phone_morning.png"
})

Btn4[3].addEventListener('click',function(e){
  e.preventDefault();
  logo.src = "./imges/logo_w.png";
  document.body.style.backgroundImage = "url('./imges/bg_night.jpg')"; 
  imges.src = "./imges/phone_night.png"

})
