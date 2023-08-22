function box(이름,value,my){
  let yes = new Date();
  // 한국 표준 시간
  yes.setDate(yes.getDate() + my );
  //  yes의 setDate현제시간의 기준으로 (yes.getDate()일 지정 + 매개변수)
  
  let tobox = '';


  
  tobox = tobox +이름+ '=' +value+ ';';
  tobox = tobox + 'expires=' + yes.toUTCString();
  // .toUTCString() 쿠기언어 만든걸 쿠기 제작
  document.cookie = tobox 
}
box('naver.com','나의 값',1)

// 쿠기을 제작 합니다


// 쿠키 제거 하는 위해서 만들어 봄 ▽ ▽ ▽
  
  function box44(매개변수){
    
    let outB = new Date();
    
    outB.setDate(outB.getDate()-1);
    // 쿠키 전날에 설정으로 삭제키
    
    let notA ='';
    
    notA += 매개변수+ '=순서1;';
    
    notA += 'Expires=' + outB.toUTCString();
    
    document.cookie = notA
    
  }
  // box44('naver.com') 
   
  // 쿠키을 없애 버림
  
  document.querySelector('button').addEventListener('click',function(){
    box44('naver.com')
    document.querySelector('.box0').classList.add('on')
    // 쿠키 이름 제거로 삭제
  })

  

// var d = new Date();
// d.setHours(23);
// var n = d.toUTCString();
// // //  쿠키 시간 정보 지금 시간
// console.log(n)




// 배열 안에 쿠기 있는지 확인으로 만들어 봄

function oil(매개변수){
  let day = document.cookie.split(';');
  console.log(day)
  // oil('ooo') 배열 안에 있는지 확인 여부

  for(i=0;i<day.length;i++){
    if(day[i].indexOf(매개변수) > -1){
      // 0보다 클거 같아서 I의 .split 각 배열로 만들어서
      // 그 안에 indexOf(매개변수)가 있는지 확인을 함
      dog = true
      // 나중에 전송 할때 확인으로 용이 함
    }else{
      dog = false
    }
  }

}
oil('naver.com')
// oil('naver.com') = box('naver.com')처음 만든 쿠키
// 확인용 = oil('ooo')

// 확인 예시-2 ▽ ▽ ▽








 



