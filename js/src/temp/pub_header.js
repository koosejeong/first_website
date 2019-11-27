// pub_header.js

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
  //  console.log(rel);
   // -------------------------------
  const pubHead = $('#pub_header');
  const menuArea = pubHead.find('.menu_area');
  const samseonBar = pubHead.children('.samseon_btn');
  const btnArea = samseonBar.children('.btn');
  //const btnLink = btnArea.children('a');
  const anotheArea = samseonBar.children('.anothe_area');
  const closeBtn = anotheArea.children('.close_btn');
  const menuUl = anotheArea.children('ul');
  const menuLi = menuUl.children('li');

  btnArea.on('click', function(e){
    e.preventDefault();
    anotheArea.css({ 'display':'block' });
  });
  closeBtn.on('click', function(e){
    anotheArea.css({ 'display':'none' });
  });

  for(let i=0; i <= 5; i++) {
    menuLi.append('<dl><dt></dt><dd></dd></dl>');
  }
  const menuDt = menuLi.find('dt');
  const menuDd = menuLi.find('dd');

  let relLen = rel.length;
  for(let i=0; i< relLen; i++){
    let tit = rel[i].title;
    menuDt.eq(i).append('<a href="#">'+ tit +'</a>'); 
    let subLEn = rel[i].trevinfor.length;
    for(let j=0; j< subLEn; j++){
      menuDd.eq(i).append(`<a href="#">${rel[i].trevinfor[j]}</a>`);
     }
  }
  

})(jQuery);