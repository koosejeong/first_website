// article_pc_04.js
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

  const art04Pc = $('#article_pc_04');
  const fullBox = art04Pc.children('.fullBox');
  const btnArea = fullBox.children('p');
  const btn = btnArea.children('a');

  const ulFull = fullBox.children('.ul_full');
  const zeroLi = ulFull.children('li');
  const oneUl = ulFull.children('.first_ul');
  const oneLi = oneUl.children('li');
  const twoUl = ulFull.children('.secound_ul');
  const twoLi = twoUl.children('li');
  const tabArea = fullBox.children('.con_area');

  let folder = [ rel[4], rel[21] ];
  let folderT = [ rel[3], rel[10] ];
  let img = [ 'img09.jpeg', 'img01.jpg' ];
  let imgT = [ 'img03.jpeg', 'img01.jpg' ];

  for(let i=0; i<5; i++){
    //let imgUrl = `./img/${folder[i].country}/`;
    //console.log(imgUrl+img[i]);
    zeroLi.children('a').css({'backgroundImage':'url(./img/'+rel[19].country+'/'+'img02.jpg)', 'backgroundSize':'cover', 'backgroundPosition':'50% 50%', 'backgroundRepeat':'no-repeat'});
    for(let j=0; j<2; j++){
      oneLi.eq(j).children('a').css({'backgroundImage':'url(./img/'+folder[j].country+'/'+img[j]+')', 'backgroundSize':'cover', 'backgroundPosition':'50% 50%', 'backgroundRepeat':'no-repeat'});
      for(let e=0; e<2; e++){
        twoLi.eq(e).children('a').css({'backgroundImage':'url(./img/'+folderT[e].country+'/'+imgT[e]+')', 'backgroundSize':'cover', 'backgroundPosition':'50% 50%', 'backgroundRepeat':'no-repeat'});
      }
    }
  }

  btn.on('click focus', function(e){
    e.preventDefault();
    let hasCl = $(this).hasClass('more');
    if( hasCl ){
      tabArea.css({'display':'block'});
      ulFull.css({'display':'none'});
    } else {
      tabArea.css({'display':'none'});
      ulFull.css({'display':'block'});
    }
  });

})(jQuery);