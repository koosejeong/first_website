// section_01.js
(function($){
  
  const section01 = $('#section_01');
  const slideGuide = section01.children('.sec_01_slide_guide');
  const sildeUl = slideGuide.children('ul');
  const slideLi = sildeUl.children('li');
  const slideLink = slideLi.children('a');
  const btnArea = slideGuide.children('.sec_01_btn_area');
  const btn = btnArea.children('button');
  let slideLen = slideLi.length;
  let myN = 0;

  let textArry = [ "유럽의 발코니, 드레스 덴", "유럽의 대명사, 빛의 도시 파리", "바다처럼 푸른(Venetus) 수상 도시, 베네치아", "블타바 강의 기적, 체코 프라하" ];
  for(let i=0; i < slideLen; i++ ){
    slideLink.eq(i).text(textArry[i]);
  }

  // const textEm = function(t){
  //   let addverTxt = slideLink.eq(t);
  //   addverTxt.stop().hide();
  //   addverTxt.stop().show();
  // };
  // textEm();
  

  slideLi.eq(-1).clone(true).prependTo(sildeUl);
  slideLen++;

  btn.on('click', function(){
    let btnHas = $(this).hasClass('sec_01_next');
    if( btnHas ){
      myN++;
      if( myN >= slideLen-1 ){
        myN = 0;
        sildeUl.css({'margin-left':'100%'});
      } 
    } else {
      myN--;
    }
    // textEm(myN);
    sildeUl.animate({ 'margin-left':-100 * myN + '%'}, function(){
        if( myN < 0 ){
          myN = slideLen-2;
          sildeUl.css({ 'margin-left':-100 * myN + '%'}); 
      }
    });
  });
     
    

})(jQuery);