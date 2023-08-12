const container = document.querySelectorAll('.ho')

// 오프닝 화 면 

container.forEach(function(som){
  
  // 숫자 적용 적용하는 data-number
  const mathematics = som.querySelector('.num')
  // 숫자 .dataset.number 정리 적용
  const Numericaltheorem = mathematics.dataset.number;
  // 숫자의 정리 .width= '%'에 적용
  mathematics.style.width = Numericaltheorem 
  // mathematics.style.width = Numericaltheorem + '%'

  // 문자 테스트 적용함
  const nhangulame = som.querySelector('.ber')
  // 빈 공간에 방금 만든 숫자을 만듬
  nhangulame.textContent = Numericaltheorem;
    
  // 초기값 0
  let Zero = 0;

  // 타이머 시계 변수
  let clock ; 

  
  clock = setInterval(function(){
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

setTimeout(function(){
document.querySelector('.main-up').classList.add('box-off');
clearInterval(clock)
},5000)





