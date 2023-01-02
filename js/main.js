window.addEventListener('scroll', function(){
  console.log(window.scrollY);

  if(window.scrollY >= 10){
    document.querySelector('.main-top').style.background = 'black';
  } else {
    document.querySelector('.main-top').style.background = 'none';
  }
});