// section_pc_full.js
(function($){
  // data 불러오기--------------------
  let url = './data/country.json';
  let rel = null;
  $.ajax({
    async:false,
    dataType:'json',
    url:url,
    success: function(data){
      return rel= data;}  
  });
  console.log(rel);
  // -------------------------------
 const sectPcFull = $('#section_pc_full');
 const guideBox = sectPcFull.children('.guideBox');
 const slideUl = guideBox.children('ul');
 const slideLi = slideUl.children('li');
 const btnArea = guideBox.children('.btn_area');
 const btn = btnArea.children('button');

 let folder = [ rel[1], rel[7], rel[9], rel[8] ];
 let img = [ 'img01', 'img07', 'img06', 'img01'];
 let len = slideLi.length;
 let myN = 0;
 let go;
 let timed = 500;

 for(let i=0; i<len; i++){
   let country = folder[i].country;
   let imgUrl = `./img/${country}/`
   console.log(imgUrl);
   slideLi.eq(i).css({'backgroundImage':`url(${imgUrl + img[i]}.jpeg)`, 'backgroundSize':'cover', 'backgroundPosition':'50% 50%', 'backgroundRepeat':'noRepeat'});
 }
 slideLi.eq(-1).clone(true).prependTo(slideUl);
 len++;

 const moveSlide = function(){
  $('#section_pc_full').find('.next').trigger('click');
 }

 slideLi.on('click', function(e){
   e.preventDefault();
   let va = $(this).index();
   myN = va;
   moveSlide(myN);
 });

 const goSlide = function(){
   go = setInterval(function(){
     moveSlide();
   }, timed * 10);
 }

 const stopSlide = function(){
   clearInterval(go);
 };
 goSlide();

 sectPcFull.on({'mouseleave':goSlide, 'mouseenter':stopSlide });

 btn.on('click', function(e){
   e.preventDefault();
   let next = $(this).hasClass('next');
   if(next){
     myN++;
     if( myN >= len-1 ) {
       myN = 0;
       slideUl.css({'marginLeft':'100%'});
     }
   } else {
     myN--;
   } slideUl.animate({'marginLeft':-100 * myN + '%'}, function(){
     if(myN < 0){
       myN = len-2;
       slideUl.css({'marginLeft':-100 * myN + '%'});
     }
   });
 });

})(jQuery);