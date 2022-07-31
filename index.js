

var span = document.querySelector('span');
var p = document.querySelector('.talk');
var body = document.querySelector('body');
var mobilenav = document.querySelector('.mobilenav');
var open = document.querySelector('.fa-solid fa-bars');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var hid = document.querySelector('.hid');
var color =document.querySelector('.color');
var problems =document.querySelector('.problems');
var strategy =document.querySelector('.strategy');


p.onclick = function(){
span.classList.toggle('see');}


open.onclick = function(){
			mobilenav.classList.toggle('show');}





var arr = [color,problems,strategy];
  function back() {
  var num = 0;
  num--;
				if(num<0){num = arr.length-1}
				};

 function forward() {
 var num = 0;
 num++;
 if(num >= arr.length){num = 0};		
	arr[num].style.display="flex";
};

var set = setInterval(next,2000);




