// article_pc_01.js
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
  // -------------------------------
  const art01Pc = $('#article_pc_01');
  const fullBox = art01Pc.children('.fullBox');
  const focusUl = fullBox.children('ul');
  const focusLi = focusUl.children('li');
  const focusLink = focusLi.children('a');
  const rsBox = fullBox.children('.respon_box');

  let folder = [ rel[14], rel[17], rel[13] ];
  let img = 'img01.jpg';
  for(let i=0; i<focusLi.length; i++){
    let url = folder[i].country;
    let imgUrl = `./img/${url}/`;
    console.log(imgUrl);
    focusLi.eq(i).children(focusLink).css({'backgroundImage':`url(${imgUrl+img})`, 'backgroundSize':'cover', 'backgroundPosition':'50% 50%', 'backgroundRepeat':'noRepeat'});
  }
  focusLink.on('click mouseenter', function(e){
    e.preventDefault();
    $(this).parent('li').addClass('action');
    $(this).parent('li').siblings().removeClass('action');
    let thisi = $(this).parent('li').index();
    let imgUrl = `../img/${folder[thisi].country}/`;
    rsBox.css({'display':'block', 'backgroundImage':`url(${imgUrl + img})`, 'opacity':'0.7', 'backgroundColor':'rgba(200,200,200,0.5)'});
    rsBox.addClass('action');
  });

})(jQuery);