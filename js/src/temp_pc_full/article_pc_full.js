// atcicle_pc_full.js
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

  const win = $(window);
  const htmlEl = $('html, body');
  const wrap = $('#wrap');
  const artPCFull = $('#article_pc_full');
  const fullBox = artPCFull.children('.fullBox');
  const rsBox = fullBox.children('.respon_box');
  const showUl = fullBox.children('ul');
  const showLi = showUl.children('li');
  const txtArea = fullBox.children('span');
  const scrollEl = wrap.find('.scroll');

  htmlEl.animate({scrollTop:0}); 
  let myScrollElTop = [];
  let scrollLen = scrollEl.length;
  let timed = 500;
  
  for(let i=0; i < scrollLen; i++) {
    let scTop = scrollEl.eq(i).offset().top;
    myScrollElTop.push(scTop); 
  }
  //console.log(myScrollElTop);

  let myStatus = true;  
  let n, useN = 0;

  const ScrollMagic = function(){
    htmlEl.animate({scrollTop:myScrollElTop[useN]}, timed, 'easeOutQuint', function(){
      myStatus = true;
    });
  } 

  win.on('mousewheel DOMMouseScroll', function(e){

    if(myStatus){  myStatus = false;  
       
      // ---------------------
      (e.originalEvent.wheelDelta) ? n = e.originalEvent.wheelDelta * -1 : n = e.originalEvent.detail * 40;
      // ---------------------

       if( n > 0 ){  
         useN++; 
         if( useN >= scrollLen ) { useN = scrollLen-1;  }
         ScrollMagic();
       } else {
         useN--; 
         if( useN < 0 ) { usnN = 0; }
         ScrollMagic();
       }
       switch(useN){
          case 1:
              fullBox.addClass('action');
          break;
       }
     } // myStatus if
   });
   
   let folder = [ rel[14], rel[13] , rel[17] ];
   let txt = [ '떠나고 싶은 곳, 마닐라', '요즘 대세, 코타키나발루', '가고 싶은 곳, 발리' ];
   for(let i=0; i<showLi.length; i++){
     let url = `./img/${folder[i].country}/`;
    showLi.eq(i).children('a').css({'backgroundImage':`url(${url}img01.jpg)`, 'backgroundSize':'cover', 'backgroundPosition':'50% 50%', 'backgroundRepeat':'no-repeat'});
   }
   showLi.on('mouseenter', function(e){
     e.preventDefault();
     let myThis = $(this).index();
     let url = `./img/${folder[myThis].country}/`;
     rsBox.css({'display':'block'});
     fullBox.css({'backgroundImage':`url(${url}img02.jpg)`, 'backgroundSize':'cover', 'backgroundPosition':'50% 50%', 'backgroundRepeat':'no-repeat'});

     $(this).closest(fullBox).find(txtArea).text(txt[myThis]);
   });


})(jQuery);