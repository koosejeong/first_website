// article_02_t.js

(function($){
  const artT02 = $('#article_t_02');
  const fullBox = artT02.children('.fullBox');
  const box01 = fullBox.children('.box_one');
  const oneLink = box01.children('a');

  const box02 = fullBox.children('.box_two');
  const boxRe01 = box02.children('.box_two_01');
  const twoLink = boxRe01.children('a');
  const boxRe02 = box02.children('.box_two_02');
  const threeLink = boxRe02.children('a');
  const txtArea = fullBox.find('p');

  let txt = [ '국내처럼 가자 Hong kong!', '영화랑 똑같아! New-york', '가족 여행으로도 좋아 Hawaii']; 
  box01.find(txtArea).text(txt[0]);
  boxRe01.find(txtArea).text(txt[1]);
  boxRe02.find(txtArea).text(txt[2]);

  oneLink.on('click mouseenter focus', function(e){
    e.preventDefault();
    $(this).addClass('action');
  }).on('mouseleave blur', function(e){
    e.preventDefault();
    $(this).removeClass('action');
  });

  twoLink.on('click mouseenter focus', function(e){
    e.preventDefault();
    $(this).addClass('action');
  }).on('mouseleave blur', function(e){
    $(this).removeClass('action');
  });

  threeLink.on('click mouseenter foucs', function(e){
    e.preventDefault();
    $(this).addClass('action');
  }).on('mouseleave blur', function(e){
    $(this).removeClass('action');
  });
  


})(jQuery);