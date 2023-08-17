let btn = document.querySelectorAll('.btn-list li');
// new Date()
// n초 마다 코드를 실행하는 setInterval
setInterval(function(){
  let now = new Date();
  // 시, 분, 초 값을 각 변수에 할당
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  
  // 1. 조건문
  // hr(시) 10보다 크거나 같을 때 (두자리 수)
  // if(hr >= 10) {
    //   hnum = hr;
    // } else {
      //   // 그렇지 않을 때 (한자리 수)
      //   hnum = '0' + hr;
      // } 
      
      // if(min >= 10) {
        //   mnum = min;
        // } else {
          //   mnum = '0' + min;
          // }
          
          // if(sec >= 10) {
            //   snum = sec;
            // } else {
              //   snum = '0' + sec;
              // }
              
              // document.querySelector('.phone-time').innerHTML = `${hnum} : ${mnum} : ${snum}`;
              
              // 2. padStart() method
  hr = String(hr).padStart(2, '0');
  min = String(min).padStart(2 , '0');
  sec = String(sec).padStart(2, '0');
  
  document.querySelector('.phone-time').innerHTML = hr +':'+ min +':'+ sec
  
  if(hr >= 6 && hr < 12){
    document.querySelector('#wrapper').classList.add('.morning')
    btn[0].classList.add('on');
  }else if(hr >= 12 && hr <16){
    document.querySelector('#wrapper').classList.add('.afternoon');
    btn[1].classList.add('on')
  }else if(hr >= 16 && hr <20){
  document.querySelector('#wrapper').classList.add('.evening');
  btn[2].classList.add('on')
  
}else{
  document.querySelector('#wrapper').classList.add('.night');
  btn[3].classList.add('on')
  
  }
  
})

let back = document.querySelector('#wrapper');



  btn.forEach(function(itme){
    let box =  itme.querySelector('a').innerHTML;
    itme.addEventListener('click',function(e){
      e.preventDefault();
      btn.forEach(function(btn){
        btn.classList.remove('on')
      })
      
      itme.classList.add('on')
      // back은 id 값을 해야 클래스을 인식 안함
      // .className = box a태그에 있는 글자을 동일한 clss을 적용 됨
      // 참고로 css에서 만들어서 사용해야됨

      // back.className = box
      
    })
  })