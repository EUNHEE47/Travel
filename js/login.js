// main top 스크롤
window.addEventListener('scroll', function(){
  // console.log(window.scrollY);

  if(window.scrollY >= 10){
    document.querySelector('.main-top').style.background = 'rgba(0, 0, 0, 0.8)';
  } else {
    document.querySelector('.main-top').style.background = 'none';
  }
});


// 로그인tab

let idPw = document.querySelector('#idPw');
let idPwNomember = document.querySelector('#idPw-nomember');
let member = document.querySelector('#member');
let nomember = document.querySelector('#nomember');

document.querySelector('#nomember').addEventListener('click',function(){
  member.style.background = 'black';
  member.style.color = 'white';
  idPw.style.display = 'none';
  idPwNomember.style.display = 'block';
  nomember.style.background = '#b5b2f5';
  nomember.style.color = 'black';
});

document.querySelector('#member').addEventListener('click',function(){
  nomember.style.color = 'white'
  nomember.style.background = 'black'
  idPwNomember.style.display = 'none';
  idPw.style.display = 'block';
  member.style.background = '#b5b2f5';
  member.style.color = 'black';
});