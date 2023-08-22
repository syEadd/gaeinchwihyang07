// Array 안에 object
let products = [
    {
      img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4b2f5e8a-8638-4fa5-81fa-e714024efb39/%ED%85%8C%ED%81%AC-%ED%97%A4%EB%9D%BC-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-5psTyMig.png',
      title : '나이키 테크 헤라',
      price : '103,200 원',
      size : ['230', '235', '240', '245']
    },
    {
      img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-ZuZyA5Sj.png',
      title : '나이키 덩크 로우',
      price : '139,000 원',
      size : ['220', '230', '240', '250']
    },
    {
      img : 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/d062f057-ab59-4723-acef-e59176868673/%EC%9A%B0%EB%A8%BC%EC%8A%A4-%EC%BD%94%EB%A5%B4%ED%85%8C%EC%A6%88-midnight-navy-dz2795-400-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg',
      title : '우먼스 코르테즈 Midnight Navy',
      price : '119,000 원',
      size : ['225', '230', '235', '240', '245']
    }
  
  ]
  
  // document.querySelector('.box-item img').src = products[0].img;
  // document.querySelector('.sho-info h2').innerHTML = products[0].title;
  // document.querySelectorAll('.sho-info p')[0].innerHTML = products[0].price;
  // document.querySelectorAll('.sho-info p')[1].innerHTML = products[0].size;
  
  let boxItems = document.querySelectorAll('.box-item');

 
  boxItems.forEach(function(item, index){
    let box1 = item.querySelectorAll('.sho-info p')
    let box = box1[index]
    // index로 다 0.1가져옴
    
    item.querySelector('img').src = products[index].img;
    item.querySelector('.sho-info h2').innerHTML = products[index].title;
    // item.querySelectorAll('.sho-info p')[0].innerHTML = products[index].price;
    // item.querySelectorAll('.sho-info p')[1].innerHTML = products[index].size;
  })
//   한개의 박스에 있는 p태그에 2개 니까 0.1이 맞음!!!
// .box-item 을 forEach 돌고 있기 때문에 0.1

  // 시작 기호가 대괄호[], 중괄호{}냐에 따라서
  // Array, object 구분
  
  
  // Javascript로 html 요소 생성
  // createElement('태그이름')
  // let h1Tag = document.createElement('h1');
  // h1Tag.innerHTML = '안녕하세요!';
  // h1Tag.classList.add('hi');
  // document.querySelector('.box-list').appendChild(h1Tag);
  
  // .box-list안에 p태그로 생성
  // let pTag = document.createElement('p');
  // pTag.innerHTML = 'createElement로 p 태그 생성';
  // document.querySelector('.box-list').appendChild(pTag);
  
  
  // products length만큼 createElement로 html 생성
  
  // .box-list 안에 .box-item이라는 class를 가진 div 생성
  
  // .box-item 안 
  // 1. img 생성 src = products.img / alt = products.title
  // 2. .box-list 안에 .sho-info라는 class를 가진 div 생성
  // 3. .sho-info 안에 h2 생성 => innerHTML = products.title
  // 4. .sho-info 안에 p 생성 => innerHTML = products.price
  // 5. .sho-info 안에 p 생성 => innerHTML = products.size
  
  /* 
  <div class="box-item">
    <img src="" alt="">
    <div class="sho-info">
      <h2></h2>
      <p></p>
      <p></p>
    </div>
  </div> 
  */
  

//   박스도 만들고 그 안에 배열을 사용하여  적용 하는 방식!!!

  let boxList = document.querySelector('.box-list');
  
  products.forEach(function(item){
    let boxItem = document.createElement('div');
    boxItem.classList.add('box-item');
    boxList.appendChild(boxItem);
  
    let boxImg = document.createElement('img');
    boxImg.src = item.img;
    boxImg.alt = item.title;
    boxItem.appendChild(boxImg);
  
    let shoInfo = document.createElement('div');
    shoInfo.classList.add('sho-info');
    boxItem.appendChild(shoInfo);
  
    let boxTitle = document.createElement('h2');
    boxTitle.innerHTML = item.title;
    shoInfo.appendChild(boxTitle);
  
    let boxPrice = document.createElement('p');
    boxPrice.innerHTML = item.price;
    shoInfo.appendChild(boxPrice);
  
    let boxSize = document.createElement('p');
    boxSize.innerHTML = item.size;
    shoInfo.appendChild(boxSize);
  })
  
  
  // Javascript로 html 생성하는 방법2 (최신 문법)
  // let pTag = '<p class="txt">html 생성~~</p>';
  // .insertAdjacentHTML(위치, 문자) => 문자형 html을 넣어주는 함수
  // 파라미터를 두 개 받는다.
  // 첫번째 파라미터 : 추가 할 위치(beforeend = 안쪽 맨 밑)
  // 두번째 파라미터 : 추가 할 html 문자(pTag 변수에 담긴 값)
  // document.querySelector('.box-list').insertAdjacentHTML('beforeend', pTag);
  
  
  // insertAdjacentHTML로 .box-item 완성
//   products.forEach(function(item, index){
//     let boxItem = `<div class="box-item"></div>`;
//     document.querySelector('.box-list').insertAdjacentHTML('beforeend', boxItem);
  
//     let boxImg = `<img src="${item.img}" alt="${item.title}">`
//     document.querySelectorAll('.box-item')[index].insertAdjacentHTML('beforeend', boxImg);
  
//     let shoInfo = `<div class="sho-info"></div>`;
//     document.querySelectorAll('.box-item')[index].insertAdjacentHTML('beforeend', shoInfo);
  
//     let boxTitle = `<h2>${item.title}</h2>`;
//     document.querySelectorAll('.sho-info')[index].insertAdjacentHTML('beforeend', boxTitle);
  
//     let boxPrice = `<p>${item.price}</p>`;
//     document.querySelectorAll('.sho-info')[index].insertAdjacentHTML('beforeend', boxPrice);
  
//     let boxSize = `<p>${item.size}</p>`;
//     document.querySelectorAll('.sho-info')[index].insertAdjacentHTML('beforeend', boxSize);
//   })