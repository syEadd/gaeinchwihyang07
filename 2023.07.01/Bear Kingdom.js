const btn = document.querySelector('.hot2 button');
const box = document.querySelector('.box3');
const fox = document.querySelector('.hot1:nth-child(2)')

fox.addEventListener('click',function(hot){
  hot.preventDefault()
  box.classList.add('on');
  
})

btn.addEventListener('click',function(){
  
  box.classList.remove('on')
})

const box2 = document.querySelector('.hot1:nth-child(3)');
const fox2 = document.querySelector('.box7 button');


fox2.addEventListener('click',function(go){
  go.preventDefault()
  document.querySelector('.box6').classList.remove('one')
})

box2.addEventListener('click',function(egg){
  egg.preventDefault()
  
  setInterval(function(){
    document.querySelector('.box6').classList.add('one')
  },5000000)
})






