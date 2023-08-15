const watercourse = document.querySelectorAll('.watercourse')

setTimeout(function(){
document.querySelector('.main-up').classList.add('box-off');
//clearInterval(clock);
//타이머가 밖에 있을때 setInterval

// waterbomb();
// 리모콘 임시
},5000)



// 오프닝 화 면 

watercourse.forEach(function(som){
  
  // 숫자 적용 적용하는 data-number
  const mathematics = som.querySelector('.num')
  // 숫자 .dataset.number 정리 적용
  const Numericaltheorem = mathematics.dataset.number;
  // 숫자의 정리 .width= '%'에 적용
  mathematics.style.width = Numericaltheorem 
  // mathematics.style.width = Numericaltheorem + '%'

  // 문자 테스트 적용함
  const nhangulame = som.querySelector('.kaunteudaun')
  // 빈 공간에 방금 만든 숫자을 만듬
  nhangulame.textContent = Numericaltheorem;
    
  // 초기값 0
  let Zero = 0;
  
  waterBalloon();
  // 큰 물풍선 함수 이름
  
  
  
  // 타이머 시계 변수
 let clock = setInterval(function(){
    // 초기값을 증감식 사용
    Zero++
    // if(초기값으로 <=  number="100" 적용)
    if(Zero <= Numericaltheorem){
      // 숫자 적용 이건 만질때 진씸 조심
      mathematics.style.width = Zero + '%'
      // 테스트 스타일 적용 이건 만질때 조심 %
      nhangulame.textContent = Zero + '%'
    }   
  },45) 

})

// 큰 물풍선


function waterBalloon(){
  
   const balloonNum = document.querySelector('.water-balloon-num');
  
   const waterBol = balloonNum.dataset.number;
   balloonNum.style.height = waterBol;
  
   const waterBolFont = document.querySelector('.water-balloon-font');
   waterBolFont.textContent = waterBol;
  
   let balloon = 0;
  
   setInterval(function(){
     balloon++;
  
     if(balloon <= waterBol ){
       balloonNum.style.height = balloon + '%'
       waterBolFont.textContent = balloon + '%'
     }
  
   },45)
}


//미니 물풍선
document.querySelector('.water-bomb').addEventListener('click',function(box){

  const top = document.querySelector('.water-bomb-num');
 
  const lety = top.dataset.number;
    top.style.height = lety;

  const yoy = document.querySelector('.water-bomb-font');
    yoy.textContent = lety;

  
    let inup = 0;

  setInterval(function(){
  inup++;
  if(inup <= lety){
    top.style.height = inup + '%'
    yoy.textContent = inup + '%'
  }
  },45)
})

// 리모콘 ▼ ▼ ▼
// function waterbomb(){
  
//   const top = document.querySelector('.water-bomb-num');
  
//   const lety = top.dataset.number;
//     top.style.height = lety;
  
//   const yoy = document.querySelector('.water-bomb-font');
//     yoy.textContent = lety;
  
  
//     let inup = 0;
  
//   setInterval(function(){
//   inup++;
//   if(inup <= lety){
//     top.style.height = inup + '%'
//     yoy.textContent = inup + '%'
//   }
//   },45)
// }




// 사이드 바



const Sidebar = document.querySelectorAll('.Sidebar > li');
console.log(Sidebar)
Sidebar.forEach(function(box){
const nav = box.querySelector('.Sidebar-nav');

box.addEventListener('mouseover',function(){
nav.classList.add('saideuba-on');

})
box.addEventListener('mouseleave',function(){
  nav.classList.remove('saideuba-on');

})

})


// 메뉴 슬라이드
let imgtime = document.querySelectorAll('.moniteo-seteu li');

let time = 0; 

document.querySelector('.key-right').addEventListener('click',function(){

  if(time <imgtime.length -1){
    time++;
    document.querySelector('.moniteo-seteu').style.transform = 'translateX(-'+time * 400 + 'px)'
  }
})
document.querySelector('.key-left').addEventListener('click',function(){

  if(time > 0){
    time--;
    document.querySelector('.moniteo-seteu').style.transform = 'translateX(-'+ time * 400 + 'px)'
    
  }
})

// 캐릭터 이름 소개

let friendName = document.querySelectorAll('.footer-A section li');
BtnL = document.querySelector('.Btn-left');
BtnR = document.querySelector('.Btn-right');

let small = 0;



friendName.forEach(function(ee,index){
  
  ee.function()
  {
    
    small++;
    
    document.querySelector('.footer-A .Operation').style.transform = 'translateX(-' +((small *200)-index*6) +'px)';
    
}


})
BtnL.addEventListener('click',function(e,index){
  if(small < friendName.length -1){
    
    
  }
  
  
  
})