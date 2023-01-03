window.addEventListener('scroll', function(){
  // console.log(window.scrollY);

  if(window.scrollY >= 10){
    document.querySelector('.main-top').style.background = 'black';
  } else {
    document.querySelector('.main-top').style.background = 'none';
  }
});



let promotionCard = [
  {name:'SVC', memo:'항공사별 부가서비스'},
  {name:'KEOZUP', memo:'대한항공&아시아나항공 마일리지 승급 좌석 예약하기'},
  {name:'HNL', memo:'꿈꾸는 모든 여행, 헤븐리 하와이'},
  {name:'DPSCUNMEL', memo:'발리 & 칸쿤 & 몰디브 허니문 호텔 BEST12'},
];

for(let i=0; i<promotionCard.length; i++){
  let card = `<a href="#"><div class="card">
                <img src="${`img/${promotionCard[i].name}.jpg`}" class="card-img">
                 <div class="card-body">
                   <p class="card-text">${promotionCard[i].memo}</p>
                   <p>예약 기간 : 2023.01.01~</p>
                 </div>
             </div></a>`;

  document.querySelector('.promotion-link').insertAdjacentHTML('beforeend', card);
};

