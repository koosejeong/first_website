// pub_header_t.js

(function($){
  // data 불러오기--------------------
  let url = './data/pub_header.json';
  let rel = null;
  $.ajax({
    async:false,
    dataType:'json',
    url:url,
    success: function(data){
      return rel= data;}  
  });
  // -------------------------------

  const headBox = $('#pub_header_t');
  const formArea = headBox.children('#form_area');
  const formTxt = formArea.children('#text-area');
  const formBtn = formArea.children('.search-btn');

  const myMenu = headBox.children('#menu_area');
  const myUl = myMenu.children('ul');
  const myLi = myUl.children('li');

  const btnArea = headBox.children('#btn_area');
  const samseonBtn = btnArea.children('.samseon_btn');
  const anotheArea = btnArea.children('.anothe_area');
  const anotheUl = anotheArea.children('ul');
  const anotheLi = anotheUl.children('li');
  const closeBtn = anotheArea.children('.close_btn');

  for(let i=0; i<rel.length; i++){
    anotheLi.append('<dl><dt></dt><dd></dd></dl>');
    let anotheDl = anotheLi.children('dl');
    let anotheDt = anotheDl.children('dt');
    let anotheDd = anotheDl.children('dd');
    anotheDt.eq(i).append(`<a href="#">${rel[i].title}</a>`);
    for(let j=0; j<rel[i].trevinfor.length; j++){
      anotheDd.eq(i).append(`<a href="#">${rel[i].trevinfor[j]}</a>`);
    }
  }; 
  samseonBtn.on('click', function(){
    anotheArea.css({'display':'block'}, closeBtn.on('click', function(){
      anotheArea.css({'display':'none'});
    })); 
  });


})(jQuery);