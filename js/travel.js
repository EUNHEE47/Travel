
// main top 스크롤
window.addEventListener('scroll', function(){
  // console.log(window.scrollY);

  if(window.scrollY >= 10){
    document.querySelector('.main-top').style.background = 'rgba(0, 0, 0, 0.8)';
  } else {
    document.querySelector('.main-top').style.background = 'none';
  }
});


// 프로모션
let promotionCard = [
  {name:'SVC', memo:'항공사별 부가서비스'},
  {name:'KEOZUP', memo:'대한항공&아시아나항공 마일리지 승급 좌석 예약하기'},
  {name:'HNL', memo:'꿈꾸는 모든 여행, 헤븐리 하와이'},
  {name:'DPSCUNMEL', memo:'발리 & 칸쿤 & 몰디브 허니문 호텔 BEST12'},
  {name:'GUM', memo:'괌 인기호텔 2만원 할인 프로모션'},
  {name:'OKA', memo:'오키나와 투어&티켓 기획전'},
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


// 항공 다구간
$(".OJT").on('click',function(){
  $("#select-OJT").toggle();
});

$(".RT").on('click',function(){
  $("#select-OJT").css('display','none');
});




// 항공 검색창
let depArrModal = document.querySelector(".dep-arr-modal");

document.querySelector("#dep").addEventListener("click", function () {
  depArrModal.style.display = "block";
});

document.querySelector("#arr").addEventListener("click", function () {
  depArrModal.style.display = "block";
});

depArrModal.addEventListener("click", function () {
  depArrModal.style.display = "none";
});




// 호텔 검색창
let hotelModal = document.querySelector(".hotel-modal");

document.querySelector("#hotel-select").addEventListener("click",function(){
  hotelModal.style.display = 'block';
});

hotelModal.addEventListener('click',function(){
  hotelModal.style.display = 'none';
});

document.querySelector('.hotel-modal-input').addEventListener('click', function(e){
  e.preventDefault();
});

