// article_pc_full_02.js
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
  const artPCFull02 = $('#article_pc_full_02');
  const fullBox = artPCFull02.children('.fullBox');

  const artArea01 = artPCFull02.find('.artArea01');
  const guideBox = artArea01.children('.guide_box');
  const artBtn01 = guideBox.find('button');
  const firstUl = artArea01.find('ul');
  const firstLi = firstUl.children('li');
  const firstLnk = firstLi.children('a');

  const artArea02 = artPCFull02.find('.artArea02');
  const guideBox02 = artArea02.children('.guide_box');
  const artBtn02 = guideBox02.find('button');
  const secundUl = artArea02.find('ul');
  const secundLi = secundUl.children('li');
  const secundLnk = secundLi.children('a');

  const artArea03 = artPCFull02.find('.artArea03');
  const guideBox03 = artArea03.children('.guide_box');
  const artBtn03 = guideBox03.find('button');
  const thirdUl = artArea03.find('ul');
  const thirdLi = thirdUl.children('li');
  const thirdLnk = thirdLi.children('a');

  // -------------------------------
 
  let firLiLen = firstLi.length;
  let secLiLen = secundLi.length;
  let thiLiLen = thirdLi.length;

  // let myN = 0;
  let go;
  let timed = 500;

  let folder = [ rel[0], rel[2], rel[9] ];
  console.log(folder[2].country);
  for(let i=0; i<firLiLen; i++){ 
    let country = folder[0].country;
    let url = `./img/${country}/`;
    let austria = [ folder[0].order[4], folder[0].order[5], folder[0].order[6], folder[0].order[3] ];
    //console.log('check: ', austria);
    firstLi.eq(i).children(firstLnk).css({'backgroundImage':`url(${url + austria[i]})`, 'backgroundSize':'cover', 'backgroundPosition':'50% 50%', 'backgroundRepeat':'no-repeat'});}

    firstLi.eq(-1).clone(true).prependTo(firstUl);
    firLiLen++;

  for(let j=0; j<secLiLen; j++){ 
    let country = folder[1].country;
    let url = `./img/${country}/`;
    let hongkong = [ folder[1].order[0], folder[1].order[2], folder[1].order[3], folder[1].order[7] ];
    secundLi.eq(j).children(secundLnk).css({'backgroundImage':`url(${url + hongkong[j]})`,'backgroundSize':'cover', 'backgroundPosition':'50% 50%', 'backgroundRepeat':'no-repeat'});
  }
    secundLi.eq(-1).clone(true).prependTo(secundUl);
    secLiLen++;

  for(let k=0; k<thiLiLen; k++){ 
    let country = folder[2].country;
    let url = `./img/${country}/`;
    let venezia = [ folder[2].order[0], folder[2].order[2], folder[2].order[3], folder[2].order[4] ];
    thirdLi.eq(k).children(thirdLnk).css({'backgroundImage':`url(${url + venezia[k]})`,'backgroundSize':'cover', 'backgroundPosition':'50% 50%', 'backgroundRepeat':'no-repeat'});   
  }
  thirdLi.eq(-1).clone(true).prependTo(thirdUl);
  thiLiLen++;
  // ----------------------------------


// 슬라이드 배너 영역--------------------
let btnArea = fullBox.find('.btn_area');

  const moveSlide = function(){
    btnArea.find('.next').each(function(next){
      $(this).trigger('click');
    });
  };
 const otherMoveSlide = function(i){
   console.log(i);
   btnArea.find('.next').each(function(i, next){
     $(this).eq(i).not().trigger('click');
   });
 }
// otherMoveSlide();
// ----------------------------------

$('#article_pc_full_02').find('li').on('click', function(e){
    e.preventDefault();
    let no = $(this).index();
    myN = no;
    moveSlide(myN);
  });
// ---------------------------------- 
  const goSlode = function(){
    go = setInterval(function(){
      moveSlide();
    }, timed * 10);
  }
  const otherGoSlide = function(j){
    go = setInterval(function(j){
      otherMoveSlide(j);
    }, timed * 5);
  }
// ---------------------------------- 
  const stopSlide = function(){
    clearInterval(go);
  }

  goSlode();//최초 호출
// ---------------------------------- 
fullBox.children('div').on('mouseenter', function(){
  let j = $(this).index();
  otherGoSlide(j);

});

fullBox.children('div').on('mouseleave', function(){
  stopSlide()
});

let eachN = [0,0,0];

//----------------------------------------------------

btnArea.children('button').on('click', function(e){
  e.preventDefault();
  let hasCl = $(this).hasClass('next');
  let guide = $(this).closest('.guide_box').children('ul');
  let thisWhitch = $(this).closest('.guide_box').parent().index();
  let i=0;

  if(hasCl){
    eachN[thisWhitch] += 1;
    if(eachN[thisWhitch] >= firLiLen-1){ 
      eachN[thisWhitch] = 0;
      guide.css({'marginLeft':'100%'});
    }
  }else{ eachN[thisWhitch] -= 1; }

    guide.animate({'marginLeft':-100 * eachN[thisWhitch] + '%'}, function(){
      if(eachN[thisWhitch] < 0){
        eachN[thisWhitch] = firLiLen-2;
        guide.css({'marginLeft':-100 * eachN[thisWhitch] + '%'});
      }
    });
});




})(jQuery);