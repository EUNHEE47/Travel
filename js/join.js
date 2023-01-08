// main top 스크롤
window.addEventListener('scroll', function(){
  // console.log(window.scrollY);

  if(window.scrollY >= 10){
    document.querySelector('.main-top').style.background = 'rgba(0, 0, 0, 0.98)';
  } else {
    document.querySelector('.main-top').style.background = 'none';
  }
});




// 정규식 조건
const regexId = /^\w{6,20}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;



let isId = false;
let isPw = false;
let isMail = false;
let isTel = false;

const idBtn = document.querySelector('#id-confirm');
const pwBtn = document.querySelector('#pw-confirm');
const mailBtn = document.querySelector('#mail-confirm');
const telBtn = document.querySelector('#tel-confirm');

let idCheck = document.querySelector('.id-input-chk');
let pwCheck = document.querySelector('.pw-input-chk');
let mailCheck = document.querySelector('.mail-input-chk');
let telCheck = document.querySelector('.tel-input-chk');


function showMsg(isX, xCheck){
  if(isX){
    xCheck.innerHTML = '사용 가능합니다.';
    xCheck.style.color = '#b5b2f5';
  } else {
    xCheck.innerHTML = `사용 불가능 합니다.`;
    xCheck.style.color = 'red';
  }
  isOk();
}

idBtn.addEventListener('click',function(e){
  e.preventDefault();

  let value = document.querySelector('#id-text').value;

  isId = regexId.test(value);
  showMsg(isId, idCheck);
});

pwBtn.addEventListener('click',function(e){
  e.preventDefault();

  let value = document.querySelector('#pw-text').value;

  isPw = regexPw.test(value);
  showMsg(isPw, pwCheck);
});

mailBtn.addEventListener('click',function(e){
  e.preventDefault();

  let value = document.querySelector('#mail-text').value;

  isMail = regexMail.test(value);
  showMsg(isMail, mailCheck);
});

telBtn.addEventListener('click',function(e){
  e.preventDefault();

  let value = document.querySelector('#tel-text').value;

  isTel = regexTel.test(value);
  showMsg(isTel, telCheck);
});


function isOk(){
  if(isId && isPw && isMail && isTel){
    document.querySelector('.rqst-btn').style.background = '#b5b2f5';
    document.querySelector('.rqst-btn').style.color = 'black';
  }
}




