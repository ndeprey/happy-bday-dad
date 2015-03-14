

$(document).ready(function(){
 
 var imgArr = new Array( // relative paths of images
 					'img/all-roads.jpg',
					'img/bridge-to-paradise.jpg',
					'img/over-the-park.jpg',
					'img/summer-sails.jpg'
 );
 
 var preloadArr = new Array();
 var i;
 
 /* preload images */
 for(i=0; i < imgArr.length; i++){
 preloadArr[i] = new Image();
 preloadArr[i].src = imgArr[i];
 }
 
 var currImg = 1;
 var intID = setInterval(changeImg, 1000);
 
 /* image rotator */
 function changeImg(){
 $("html").animate({opacity: 0}, 1000, function(){
 $(this).css('background','url(' + preloadArr[currImg++%preloadArr.length].src +') no-repeat center center fixed');
 }).animate({opacity: 1}, 1000);
 }
 
 });
