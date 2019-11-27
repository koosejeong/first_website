// section_02.js

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
  //console.log(rel[5].order[3]);
  // -------------------------------
  const sec02 = $('#section_02');
  const evtArea = sec02.children('.event_area');
  const evtUl = evtArea.children('ul');
  const evtLi = evtUl.children('li');
  const evtLink = evtLi.children('a');

  evtLink.on('click', function(e){
    e.preventDefault();
    $(this).parent('li').siblings().children('a').removeClass('action');
    $(this).addClass('action');
  });

  let folder = [ rel[7],rel[8],rel[5] ];
  let img = [ 'img06.jpeg','img05.jpeg','img05.jpeg' ];
  for(let i=0; i<evtLi.length; i++){
    let imgUrl = `./img/${folder[i].country}/`;
    //console.log(imgUrl);
    evtLi.eq(i).children('a').css({
       'backgroundImage':`url(${imgUrl + img[i]})`, 'backgroundSize':'cover', 'backgroundPosition':'50% 50%','backgroundRepeat':'no-repeat'});
  }
  
})(jQuery);