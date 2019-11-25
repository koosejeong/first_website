// pub_header_pc.js
(function($){
  // data 불러오기--------------------
  let url = '../data/pub_header.json';
  let rel = null;
  $.ajax({
    async:false,
    dataType:'json',
    url:url,
    success: function(data){
      return rel= data;}  
  });
  console.log(rel);
  // -------------------------------
  const headArea = $('#pub_header_pc');
  const btnArea = headArea.children('#btn_area');
  const threeBtn = btnArea.children('button');
  const anotheArea = btnArea.children('.anothe_area');
  const anotheUl = anotheArea.children('ul');
  const anotheLi = anotheUl.children('li');
  const closeBtn = anotheArea.children('button');

  for(let i=0; i<rel.length; i++){
    anotheLi.append('<dl><dt></dt><dd></dd></dl>');
    let liDl = anotheLi.children('dl');
    let dlDt = liDl.children('dt');
    let dlDd = liDl.children('dd');
    dlDt.eq(i).append(`<a href="#">${rel[i].title}</a>`);
    for(let j=0; j<rel[i].trevinfor.length; j++){ 
      dlDd.eq(i).append(`<a href="#">${rel[i].trevinfor[j]}</a>`);
    }
  };

  threeBtn.on('click', function(e){
    e.preventDefault();
    anotheArea.css({'display':'block'}, closeBtn.on('click', function(){
      anotheArea.css({'display':'none'});
    }));
  });

})(jQuery);