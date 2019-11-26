// pub_haeder_pc_full.js
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
  console.log(rel);
  // -------------------------------
  const headerArea = $('#pub_header_pc_full');
  const samseonBtn = headerArea.children('.samseon_btn');
  const btn = samseonBtn.children('.btn');
  const anotheArea = samseonBtn.children('.anothe_area');
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
  }

  btn.on('click', function(e){
    e.preventDefault();
    anotheArea.css({'display':'block'}, closeBtn.on('click', function(){
      anotheArea.css({'display':'none'});
    }));
  });

})(jQuery);