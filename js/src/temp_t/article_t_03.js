// article_t_03.js
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
  const art03T = $('#article_t_03');
  const fullBox = art03T.children('.fullBox');
  const eupUl = fullBox.children('ul');
  const eupLi = eupUl.children('li');
  const eupLink = eupLi.children('a');
  const eupTxt = eupLink.children('.tab');

  let len = eupLi.length;
  let folder = [ rel[0], rel[18], rel[5] ];
  let img = [ 'img01.jpeg', 'img02.jpeg', 'img08.jpeg' ];
  console.log(len);
  for(let i=0; i<len; i++ ){
    let imgUrl = `../img/${folder[i].country}/`;
    console.log(imgUrl);
    eupLi.eq(i).children('a').css({'backgroundImage':`url(${imgUrl + img[i]})`, 'backgroundSize':'cover', 'backgroundRepeat':'noRepeat', 'backgroundPosition':'50% 50%'});
  }

  eupLink.on('click focus', function(e){
    e.preventDefault();
    $(this).css({'outline':0});
    let effecOff = $(this).parent('li').siblings();
    let effecOn = $(this).parent('li');
    effecOn.addClass('action');
    effecOff.removeClass('action');
  });

})(jQuery);