// article_04.js

(function(){

  // data 불러오기--------------------
  let url = '../data/country.json';
  let rel = null;
  $.ajax({
    async:false,
    dataType:'json',
    url:url,
    success: function(data){
      return rel= data;}  
  });
  // -------------------------------
 
  // 메인 선택자
  const art04 = $('#article_04');
  const art04FullBox = art04.children('.art04_full_box');
  const art04Ul = art04FullBox.children('ul');
  const art04Li = art04Ul.children('li');
  let art04LiLen = art04Li.length;
  
  // 버튼 부분
  const art04BtnArea = art04FullBox.children('.btn_area');
  const btn = art04BtnArea.children('button');
  
  // 기타 제어 부분
  const tag = art04FullBox.children('.tag_box');
  const textBox = art04FullBox.children('.product_area');

  let country = [ rel[19], rel[4], rel[21], rel[3]];
  let img = [ 'img02.jpg', 'img09.jpeg', 'img01.jpg', 'img03.jpeg'];

  for(let i=0; i < art04LiLen; i++){
    let imgUrl = `../../img/${country[i].country}/`;
    //console.log(imgUrl);
    art04Li.eq(i).css({'backgroundImage':`url(${imgUrl + img[i]})`, 'backgroundPosition':'50% 50%', 'backgroundSize':'cover', 'backgroundRepeat':'no-repeat'});
  }
  
  art04Li.eq(-1).clone(true).prependTo(art04Ul);
  art04LiLen++;
  let myN = 0;

  btn.on('click', function(e){
    e.preventDefault();
    if( $(this).hasClass('next')){
      myN++;
      if( myN >= art04LiLen-1 ){
        myN = 0;
        art04Ul.css({'marginLeft':'100%'});
      }
    } else if( $(this).hasClass('prev')){
      myN--;
    } art04Ul.animate({'marginLeft':-100 * myN + '%'}, function(){
      if( myN < 0){
        myN = art04LiLen-2;
        art04Ul.css({'marginLeft':-100 * myN + '%'});
      }
    });
  });


})(jQuery);

 //add scroll landing technique
 //해당 영역 오면 tag_box animate