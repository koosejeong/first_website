// section_t_01.js

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

  const sectBox = $('#section_t_01');
  const guideBox = sectBox.children('.guide_box');
  const slideUl = guideBox.children('ul');
  const slideLi = slideUl.children('li');
  let liLen = slideLi.length;

  const btnArea = guideBox.children('.btn_area');
  const btn = btnArea.children('button');

  let myN = 0;
  let img = [ 'img01', 'img07', 'img06', 'img01'];
  let folder = [ rel[1], rel[7], rel[9], rel[8]];
  console.log(liLen);
  for(let i=0; i<liLen; i++){
    let imgUrl = `./img/${folder[i].country}/`;
    //console.log(imgUrl);
    slideLi.eq(i).css({'backgroundImage':`url(${imgUrl + img[i]}.jpeg)`});
  }

  slideLi.eq(-1).clone(true).prependTo(slideUl);
  liLen++;

  btn.on('click', function(){
    let next = $(this).hasClass('next');
    if(next){
      myN++;
      if( myN >=liLen-1 ){
        myN = 0;
        slideUl.css({'marginLeft':'100%'});
      }
    } else {
      myN--;
    } slideUl.animate({'marginLeft':-100 * myN + '%'}, function(){
         if( myN < 0){
          myN = liLen-2;
          slideUl.css({'marginLeft':-100 * myN + '%'});
        }
      });
    
  }); //btn.on

})(jQuery);