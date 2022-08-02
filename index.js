

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

p.onclick = function(){
span.classList.toggle('see');}


open.onclick = function(){
			mobilenav.classList.toggle('show');}





var arr = [color,problems,strategy];

var num = -1;
  function back() {
   num--;
				if(num<0){num = arr.length-1};
					arr[num].style.display="flex";
					arr[num].style.zIndex="1";
					setTimeout(function(){
			arr[num].style.display="none";		
	},2000);
	
		};

 function forward() {
 
 num++;
 if(num >= arr.length){num = 0};	
 	arr[num].style.display="flex";
 	arr[num].style.zIndex="1";
setTimeout(function(){
			arr[num].style.display="none";		
	},2000);
	
};
setInterval(forward, 3000);
