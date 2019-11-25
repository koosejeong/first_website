// article_pc_02.js
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

  const art02Pc = $('#article_pc_02');
  const fullBox = art02Pc.children('.fullBox');
  const oneBox = fullBox.children('.one_box'); //
  const oneLink = oneBox.children('a');
  const threeBox = fullBox.find('.three_box'); //
  const threeLink = threeBox.children('a');
  const fiveBox = fullBox.find('.five_box'); //
  const fiveLink = fiveBox.children('a');
  const sixBox =fullBox.find('.six_box'); //
  const sixLink = sixBox.children('a');
  const txtArea = fullBox.find('span');

  let txt = [ '국내처럼 갈 수 있어, HongKong!', '영화랑 똑같아, NewYork', '낮에도 밤에도 아름다워! SangHai', '가족여행으로도 좋아 Hawaii' ];

  oneBox.find(txtArea).text(txt[0]);
  threeBox.find(txtArea).text(txt[1]);
  fiveBox.find(txtArea).text(txt[2]);
  sixBox.find(txtArea).text(txt[3]);

  oneLink.on('click mouseenter focus', function(e){
    e.preventDefault();
    $(this).addClass('action').on('mouseleave blur', function(){
      $(this).removeClass('action');
    });
  });
  threeLink.on('click mouseenter focus', function(e){
    e.preventDefault();
    $(this).addClass('action').on('mouseleave blur', function(){
      $(this).removeClass('action');
    });
  });
  fiveLink.on('click mouseenter focus', function(e){
    e.preventDefault();
    $(this).addClass('action').on('mouseleave blur', function(){
      $(this).removeClass('action');
    });
  });
  sixLink.on('click mouseenter focus', function(e){
    e.preventDefault();
    $(this).addClass('action').on('mouseleave blur', function(){
      $(this).removeClass('action');
    });
  });

})(jQuery);