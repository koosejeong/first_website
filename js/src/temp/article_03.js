// article_03.js
// fullBox에 이미지 알맞게 들어가게 하기

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

  const act03 = $('#article_03');
  const fullBox = act03.children('.full_box');
  const guideBox = fullBox.children('.guide_box');
  const advUl = guideBox.children('ul');
  const advLi = advUl.children('li');
  const advLink = advLi.children('a');
  const advTxt = advLink.children('span');
  let slideLen = advLi.length;
  let myN = 0;

  const btnArea = fullBox.children('.btn_area');
  const btn = btnArea.children('button');

  let txt = [ '대자연과 문명의 집결지, Austria', '유럽 역사의 집결지, Spain', '해가 지지 않는 나라, England', '광활한 영토의 숨결, Russia'];

  
  let counArry = [rel[0], rel[18], rel[5], rel[15]];
  let conArr = [];
  for( let i = 0; i < counArry.length; i++ ){
    let imgUrl = `./img/${counArry[i].country}/`;
    advTxt.eq(i).text(txt[i]);
    //console.log(counArry[i].country);
    for( let j=0; j < counArry[i].order.length; j++ ){
      conArr[i] = `url(${imgUrl + counArry[i].order[j]})`;
      advLi.eq(i).children(advLink).css({'backgroundImage':conArr[i]});
      fullBox.css({'backgroundImage':conArr[j], opacity:1});
    }
  }
  
  advLi.eq(-1).clone(true).prependTo(advUl);
  slideLen++;
  
  
  
  btn.on('click', function(e){
    e.preventDefault();
    if( $(this).hasClass('next') ){
      myN++;
      if( myN >= slideLen-1 ){
        myN = 0;
        advUl.css({'marginLeft':'100%'});
      }
    } else if( $(this).hasClass('prev')) {
      myN--;    
    } 
    fullBox.css({'backgroundImage':conArr[myN]});
    advUl.animate({'marginLeft':-100 * myN + '%'}, function(){
      if( myN < 0){
        myN = slideLen-2;
        advUl.css({'marginLeft':-100 * myN + '%'});
      }
    });  
  });

})(jQuery);