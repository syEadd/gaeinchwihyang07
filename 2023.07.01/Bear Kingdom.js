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


let box3 = document.querySelector('.hot1:nth-child(4) img');
let ggo = document.querySelector('.box9 button');
console.log(ggo)



box3.addEventListener('click',function(a){
a.preventDefault()

setTimeout(function(){
    document.querySelector('.box8').classList.add('add')

  },5000)
  
  
})


ggo.addEventListener('click',function(ww){
  ww.preventDefault()
  document.querySelector('.box8').classList.remove('add')
})


// 이미지 변경
let box4 = document.querySelector('.hot1:nth-child(5) img');
//  box4.src = './Bear picture/7단계.png' 
// 1번 방식 ▲ ▲ ▲

//  let img = document.querySelector('.hot1:nth-child(4) img');
// let box4a = {
  //   src : './Bear picture/7단계.png'
  // }
  // img.src = box4.src
  // 2번 방식 ▲ ▲ ▲
  let box5 = document.querySelector('.hot6 img');
  console.log(box5)
  const box8 = document.querySelector('.box10')
  
  let box46 = document.querySelector('.hot1:nth-child(5)');
  box46.addEventListener('cilck',function(a){
  
    
  })
  box4.addEventListener('click',function(e){
    // 3번적용  ▽ ▽ ▽

    let text_1 = box5.src = box4.src;
    
    // // 4번적용  ▽ ▽ ▽

    // box5.src = box4.src;
  //   let box11 = {
  //   src :'./Bear picture/9.png'
  // }
  // box5.src = box11.src
    
    box8.style.display = 'block';
    e.preventDefault();
  })




const box6 = document.querySelector('.box11 button');

box6.addEventListener('click',function(){
  box8.style.display = 'none';
})

