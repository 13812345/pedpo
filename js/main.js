//menu
var menu = document.getElementById('menu');
function myfunction() {
  menu.classList.toggle('hidden');
  menu.classList.toggle('w-full')
}






let SliderContainer = document.getElementById('slidercontainer');
let slider=document.getElementById('slider');
let cards=slider.getElementsByTagName('li');


let elementsToShow=3;
if(document.body.clientWidth<600){
    elementsToShow=1;
}else if(document.body.clientWidth<900){
    elementsToShow=2;
}
let SliderContainerWidth = SliderContainer.clientWidth;

let cardwidth = SliderContainerWidth/elementsToShow;

slider.style.width=cards.length*cardwidth+'px';
slider.style.transition='margin';
slider.style.transitionDuration='1s';
for (let index = 0; index<cards.length;index++){
    const element=cards[index];
    element.style.width=cardwidth+'px';
}

function next(){
    var next=document.getElementById('icon_next');
    var prev=document.getElementById('icon_prev');
    if(+slider.style.marginLeft.slice(0,-2)!= -cardwidth *(cards.length - elementsToShow)){
    slider.style.marginLeft= ((+slider.style.marginLeft.slice(0,-2))-cardwidth)+'px';
    next.style.backgroundColor='#FA7169'; 
    prev.style.backgroundColor='#FA7169'; 
}
  else if(+slider.style.marginLeft.slice(0,-2) === -cardwidth *(cards.length - elementsToShow)){
    next.style.backgroundColor='#eee';
    prev.style.backgroundColor='#FA7169'; 
  }
  
}
function prev() {
        var next=document.getElementById('icon_next');
        var prev=document.getElementById('icon_prev');
    if(+slider.style.marginLeft.slice(0,-2)!=0){
    slider.style.marginLeft= ((+slider.style.marginLeft.slice(0,-2))+cardwidth)+'px';
    prev.style.backgroundColor='#FA7169'; 
    next.style.backgroundColor='#FA7169'; 
}
  else if(+slider.style.marginLeft.slice(0,-2) === 0){
    prev.style.backgroundColor='#eee';
    next.style.backgroundColor='#FA7169'; 
  }
}




//Animation
AOS.init({
easing: 'ease-in-out-sine'
});



//topscrooll  
function topFunction() {
window.scrollTo(1000,0);
} 

