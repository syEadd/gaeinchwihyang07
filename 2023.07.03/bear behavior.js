const btn = document.querySelector('.arrow-key1 i');
const btn1 = document.querySelector('.arrow-key2 i');
const nav = document.querySelectorAll('.nav1 li');
const main = document.querySelector('.nav1')
console.log(main)
let time = 0
btn1.addEventListener('click',function(box){
  box.preventDefault()
  
  if(time < nav.length -1){
    time++;
    main.style.transform = 'translateX(-' + time * 100 + 'vw)'
  }
  
})

btn.addEventListener('click', function(e){
  e.preventDefault()
  if(time > 0){
    time--;
    main.style.transform = 'translateX(-' + time * 100 + 'vw)'
  }
})

;
const btn2 = document.querySelectorAll('.main-bar');


btn2.forEach(function(off){
 
  const baron = off.querySelector('.None');
  console.log(baron)
  
   off.addEventListener('mouseover',function(e){
    //  e.preventDefault()
     baron.classList.add('at');
     //  this.querySelector('.None').classList.add('at');
    })
    
    
    off.addEventListener('mouseleave',function(e){
      // e.preventDefault()
      baron.classList.remove('at');
      // document.querySelectorAll('.None')[0].classList.remove('at');
      // this.querySelector('.None').classList.remove('at');
    
    
  })

})