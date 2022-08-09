
var slid = document.querySelector('.slide');
var span = document.querySelector('span');
var p = document.querySelector('.talk');
var body = document.querySelector('body');
var mobilenav = document.querySelector('.mobilenav');
var open = document.querySelector('.fa-bars');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var hid = document.querySelector('.hid');
var color =document.querySelector('#color');
var problems =document.querySelector('#problems');
var strategy =document.querySelector('#strategy');
var circleOne = document.querySelector('#circle1');
var circleTwo = document.querySelector('#circle2');
var circleThree = document.querySelector('#circle3');
var mobilenav = document.querySelector('.mobilenav');
p.onclick = function(){
span.classList.toggle('see');}








var arr = [color,problems,strategy];

var num = -1;
  function back() {
   num--;
   
   				
  
				if(num<0){num = arr.length-1};
					arr[num].style.display="flex";
					arr[num].style.opacity="1";
					arr[num].style.zIndex="1";
					color.classList.add('slidein');
				strategy.classList.add('slidein');
				problems.classList.add('slidein');
					setTimeout(function(){
			arr[num].style.display="none";		
			arr[num].style.opacity="0";
	},2000);
	
if(num == 0){circleOne.style.background="grey";circleTwo.style.background="orange";circleThree.style.background="orange";};
if(num == 1){circleTwo.style.background="grey";circleOne.style.background="orange";circleThree.style.background="orange";};
if(num == 2){circleThree.style.background="grey";circleTwo.style.background="orange";circleOne.style.background="orange";};


		};

 function forward() {
 
 num++;
 
 				
 
 if(num >= arr.length){num = 0};	
 	arr[num].style.display="flex";
 	arr[num].style.zIndex="1";
 	arr[num].style.opacity="1";
 	color.classList.add('slidein');
				strategy.classList.add('slidein');
				problems.classList.add('slidein');
setTimeout(function(){
			arr[num].style.display="none";		
			arr[num].style.opacity="0";
	},2000);
	if(num == 0){circleOne.style.background="grey";circleTwo.style.background="orange";circleThree.style.background="orange";};
if(num == 1){circleTwo.style.background="grey";circleOne.style.background="orange";circleThree.style.background="orange";};
if(num == 2){circleThree.style.background="grey";circleTwo.style.background="orange";circleOne.style.background="orange";};


};

setInterval(forward,4000);

circleOne.onclick = function(){
				color.style.display="flex";
				color.style.opacity="1";
				strategy.style.display="none";
				problems.style.display="none";
				color.classList.add('slidein');
				strategy.classList.add('slidein');
				problems.classList.add('slidein');
};


circleTwo.onclick = function(){
				color.style.display="none";
				strategy.style.display="none";
				problems.style.opacity="1";
				problems.style.display="flex";
				color.classList.add('slidein');
				strategy.classList.add('slidein');
				problems.classList.add('slidein');
};

circleThree.onclick = function(){
				color.style.display="none";
				strategy.style.display="flex";
				straregy.style.opacity="1";
				problems.style.display="none";
				color.classList.add('slidein');
				strategy.classList.add('slidein');
				problems.classList.add('slidein');
};


var w = window.innerWidth;



				
If(w>1024){open.classList.remove('show');color.classList.remove(slidein);strategy.classList.remove(slidein);problems.classList.remove('slidein');};
