// article_t_04.js

(function($){ 

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

  const art04T = $('#article_t_04');
  const fullBox = art04T.children('.fullBox');
  const viewUl = fullBox.children('ul');
  const viewLi = viewUl.children('li');
  const viewTxt = viewLi.children('span');
  const viewLink = viewLi.children('a');

  let len = viewLi.length;
  let folder = [ rel[19], rel[21] ];
  let img = [ 'img02.jpg', 'img01.jpg' ];
  for(let i=0; i<len; i++ ){
    let imgUrl = `../img/${folder[i].country}/`;
    viewLi.eq(i).children(viewLink).css({'backgroundImage':`url(${imgUrl + img[i]})`, 'backgroundSize':'cover', 'backgroundRepeat':'noRepeat', 'backgroundPosition':'50% 50%'});
  }

})(jQuery);