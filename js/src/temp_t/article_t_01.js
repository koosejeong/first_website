// article_t_01.js

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

  const artBox01 = $('#article_t_01');
  const mainBox = artBox01.children('.main_box');
  const focusUl = mainBox.children('ul');
  const focusLi = focusUl.children('li');
  const focusLink = focusLi.children('a');

  const rsBox = mainBox.children('.respone_box');
  const more = mainBox.children('.more_area');
  const moreLink = more.children('a');

  let liLen = focusLi.length;
  let folder = [ rel[14], rel[17], rel[13] ];


    for(let i=0; i<liLen; i++){
      let imgUrl = `../img/${folder[i].country}/`;
      // console.log(imgUrl);
      focusLi.eq(i).children('a').css({'backgroundImage':`url(${imgUrl}img01.jpg)`});
    }


    focusLink.on('click', function(e){
      e.preventDefault();
      let thisi = $(this).parent('li').index();
      let imgUrl = `../img/${folder[thisi].country}/`;
      //console.log(imgUrl);
      rsBox.css({'display':'block','backgroundImage':`url(${imgUrl}img01.jpg)`, 'opacity':'0.7', 'backgroundColor':'rgba(200,200,200,0.5)'});
      rsBox.addClass('action');
  });

})(jQuery);