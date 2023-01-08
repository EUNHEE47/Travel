// main top 스크롤
window.addEventListener('scroll', function(){
  // console.log(window.scrollY);

  if(window.scrollY >= 10){
    document.querySelector('.main-top').style.background = 'rgba(0, 0, 0, 0.98)';
  } else {
    document.querySelector('.main-top').style.background = 'none';
  }
});



// 항공 다구간
$(".OJT").on('click',function(){
  $('.OJT').css('background','#b5b2f5');
  $('.OJT').css('color','black');
  $(".RT").css('background','none');
  $(".RT").css('color','#b5b2f5');
  $(".OW").css('background','none');
  $(".OW").css('color','#b5b2f5');
  $("#select-OJT").toggle();
});

$(".OW").on('click',function(){
  $('.OJT').css('background','none');
  $('.OJT').css('color','#b5b2f5');
  $('#select-OJT').css('display','none');
  $(".RT").css('background','none');
  $(".RT").css('color','#b5b2f5');
  $(".OW").css('background','#b5b2f5');
  $(".OW").css('color','black');

});

$(".RT").on('click',function(){
  $('.OJT').css('background','none');
  $('.OJT').css('color','#b5b2f5');
  $(".RT").css('background','#b5b2f5');
  $(".RT").css('color','black');
  $(".OW").css('background','none');
  $(".OW").css('color','#b5b2f5');
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



// 프로모션
let promotionCard = [
  {name:'SPN', memo:'4시간이면 만나는<br>최고의 휴양지 사이판'},
  {name:'KEOZUP', memo:'대한항공&아시아나항공<br>마일리지 승급 좌석 예약하기'},
  {name:'HNL', memo:'꿈꾸는 모든 여행,<br>헤븐리 하와이'},
  {name:'DPSCUNMEL', memo:'발리 & 칸쿤 & 몰디브<br>허니문 호텔 BEST12'},
  {name:'GUM', memo:'괌 인기호텔 2만원 할인 프로모션'},
  {name:'OKA', memo:'오키나와 투어&티켓 기획전'},
];

for(let i=0; i<promotionCard.length; i++){
  let card = `<a><div class="card">
                <img src="${`img/${promotionCard[i].name}.jpg`}" class="card-img">
                 <div class="card-body">
                   <p class="card-text">${promotionCard[i].memo}</p>
                   <p>예약 기간 : 2023.01.01~</p>
                 </div>
             </div></a>`;

  document.querySelector('.promotion-link').insertAdjacentHTML('beforeend', card);
};


// 혜택
let benefit = [
  {name:'coupon', memo:'쿠폰 다운로드'},
  {name:'mileage', memo:'마일리지 적립'},
  {name:'insurance', memo:'여행자 보험'},
  {name:'rental-car', memo:'렌터카'},
];

for(i=0; i<benefit.length; i++){
  let benefitCard = `<a>
                      <div class="benefit-card">
                        <ul>
                          <img src="${`img/${benefit[i].name}.png`}">
                          <li>${benefit[i].memo}</li>
                        </ul>
                      </div>
                     </a>`
  document.querySelector('.benefit-box').insertAdjacentHTML('beforeend', benefitCard);
}





// 달력
const date = new Date();
const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();


const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
  for (let i = 0; i < PLDay + 1; i++) {
    prevDates.unshift(PLDate - i);
  }
}

for (let i = 1; i < 7 - TLDay; i++) {
  nextDates.push(i);
}

const dates = prevDates.concat(thisDates, nextDates);

dates.forEach((date, i) => {
  dates[i] = `<div class="date"><a>${date}</a></div>`;
});

document.querySelector('.dates').innerHTML = dates.join('');

const renderCalendar = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i)
  }

  const dates = prevDates.concat(thisDates, nextDates);

  dates.forEach((date, i) => {
    dates[i] = `<div class="date">${date}</div>`;
  })

  document.querySelector('.dates').innerHTML = dates.join('');
}

renderCalendar();


const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

const goToday = () => {
  date = new Date();
  renderCalendar();
}


const firstDateIndex = dates.indexOf(1);
const lastDateIndex = dates.lastIndexOf(TLDate);
dates.forEach((date, i) => {
  const condition = i >= firstDateIndex && i < lastDateIndex + 1
                    ? 'this'
                    : 'other';

  dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
})


const today = new Date();

if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
  for (let date of document.querySelectorAll('.this')) {
    if (+date.innerText === today.getDate()) {
      date.classList.add('today');
      break;    
    }
  }
}








let airCalendar = document.querySelector('.air-calendar');

document.querySelector('#depdate').addEventListener('click',function(){
  airCalendar.style.display = 'block';
});

document.querySelector('.X').addEventListener('click',function(){
  airCalendar.style.display = 'none';
});

document.querySelector('#arrdate').addEventListener('click',function(){
  airCalendar.style.display = 'block';
});