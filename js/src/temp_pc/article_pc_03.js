// article_pc_03.js
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

  const art03Pc = $('#article_pc_03');
  const fullBox = art03Pc.children('.fullBox');
  const firstUl = fullBox.children('.first');
  const firstLi = firstUl.children('li');
  const firstLink = firstLi.children('a');
  const secoundUl = fullBox.children('.secound');
  const secoundLi = secoundUl.children('li');
  const secoundLink = secoundLi.children('a');
  const rsBox = fullBox.children('.respon_box');
  const txtArea = fullBox.find('.txt_area');
  
  let folder = [ rel[0], rel[18], rel[5] ];
  let folderT = [ rel[15], rel[12], rel[11] ];
  let img = [ 'img01', 'img02', 'img08'];
  let imgT = ['img01', 'img01', 'img01'];

  let txt = [ '오페라 도시, 호주 시드니', '예술의 도시, 스페인 바르셀로나', '문화 금융의 중심지, 영국 런던'];
  let txtT = [ '동방의 진주, 러시아 모스크바', '축구가 다가 아니야! 브라질', '호수도, 도시도 모두 아름다워 캐나다!' ];

  for(let i=0; i<firstLi.length; i++){
    let imgUrl = `./img/${folder[i].country}/`;
    firstLi.eq(i).children(firstLink).css({'backgroundImage':`url(${imgUrl + img[i]}.jpeg)`, 'backgroundSize':'cover', 'backgroundRepeat':'no-repeat', 'backgroundPosition':'50% 50%'});
    for(let j=0; j<secoundLi.length; j++){
      let twoUrl = `./img/${folderT[j].country}/`;
      //console.log(twoUrl);
      secoundLi.eq(j).children(secoundLink).css({'backgroundImage':`url(${twoUrl + imgT[j]}.jpeg)`, 'backgroundSize':'cover', 'backgroundRepeat':'no-repeat', 'backgroundPosition':'50% 50%' });
    }  
  }

  firstLink.on('click focus mouseenter', function(e){
    e.preventDefault();
    let myIndex = $(this).parent('li').index();
    $(this).addClass('action');
    $(this).parent(firstLi).children('a').removeClass('action');
    $(this).parent(firstLi).find(txtArea).text(txt[myIndex]);
    secoundLi.find(txtArea).css({'display':'none'});
    $(this).parent(firstLi).find(txtArea).css({'display':'block'});
    $(this).parent(firstLi).siblings().find(txtArea).css({'display':'none'});
    let imgUrl = `./img/${folder[myIndex].country}/`;
    fullBox.css({'backgroundImage':`url(${ imgUrl+img[myIndex]}.jpeg)`,'backgroundSize':'cover', 'backgroundRepeat':'no-repeat', 'backgroundPosition':'50% 50%' }).addClass('action');
  });
  secoundLink.on('click focus mouseenter', function(e){
    e.preventDefault();
    let myIndex = $(this).parent('li').index();
    $(this).addClass('action');
    $(this).parent(secoundLi).children('a').removeClass('action');
    $(this).parent(secoundLi).find(txtArea).text(txtT[myIndex]);
    firstLi.find(txtArea).css({'display':'none'});
    $(this).parent(secoundLi).find(txtArea).css({'display':'block'});
    $(this).parent(secoundLi).siblings().find(txtArea).css({'display':'none'});
    let imgUrl = `./img/${folderT[myIndex].country}/`;
    fullBox.css({'backgroundImage':`url(${ imgUrl+imgT[myIndex]}.jpeg)`,'backgroundSize':'cover', 'backgroundRepeat':'no-repeat', 'backgroundPosition':'50% 50%' }).addClass('action');
  });

})(jQuery);