// article_01.js
(function($){

  // data 불러오기--------------------
  let url = './data/country.json';
  //let imgurl = '../img/';
  let rel = null;
  $.ajax({
    async:false,
    dataType:'json',
    url:url,
    success: function(data){
      return rel= data;}  
  });
  // -------------------------------

  const arti01 = $('#article_01');
  const fullBox = arti01.children('.art_01_full_box');
  const imgBox = fullBox.children('.art_01_img_box');

  const focusCircle = fullBox.find('.art_01_focus');

  const focusLink = fullBox.find('a');
  const reBox = fullBox.find('.art_01_respon_box');
  const focus = fullBox.find('.focus');

  let len = imgBox.length;
  let counArry = [ rel[14],  rel[13], rel[17] ];
  let img = 'img01.jpg';
  for(let i=0; i<len; i++){
    let imgUrl = `./img/${counArry[i].country}/`;
    imgBox.eq(i).css({'backgroundImage':`url(${imgUrl + img})`});
  }


  focusLink.on('mouseenter', function(e){
    e.preventDefault();
    
    $(focusCircle).show();
    $(this).parent(focusCircle).hide();
    $(reBox).removeClass('action');
    $(this).parent('div').next(reBox).addClass('action');
    
  });

})(jQuery);