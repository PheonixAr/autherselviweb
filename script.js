function startyourjourny(){
  // document.getElementById("demo");
  window.location.href = 'start_journey.html';
}

function laravel(){
  // document.getElementById("demo");
  window.location.href = 'laravel.html';
}
function digitalmarkiting(){
  // document.getElementById("demo");
  window.location.href = 'digitalmarkting.html';
}

function reactnative(){
  window.location.href="reactnative.html";
}

// function Anchortag(args){
//   window.locationhref="${args}.html";
// }


// const icon_button2 = document.querySelector(".icon-button2");
// icon_button2.addEventListiner("click",digitalmarkiting());

// function digitalmarkiting(){
//   document.getElementsByTagName("digital markiting.html");
// }


'use strict';

const siteHeader = document.getElementById('cont-2-fh');
const siteHeaderHeight = siteHeader.offsetHeight;

window.addEventListener('scroll', () => {
    const top = document.documentElement.scrollTop;
    if(top > siteHeaderHeight) {
        siteHeader.classList.add('fixed');
    } else {
        siteHeader.classList.remove('fixed');
    }
});