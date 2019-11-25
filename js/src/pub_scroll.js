// 
(function($){

  const htmlEl = $('html, body');
  const wrap = $('#wrap');
  const scrollEl = wrap.find('.scroll');
  let myScrollElTop = [];
  let scrollLen = scrollEl.length; //8
  let timed = 500;

  for(let i=0; i < scrollLen; i++) {
    let scTop = scrollEl.eq(i).offset().top;
  }
  // ---------------------------------------------------

  let myStatus = true;
  let n, useN = 0;

  const ScrollMagic = function(){
    htmlEl.animate({scrollTop:myScrollElTop[useN]}, timed, 'easeOutSine', function(){
      myStatus = true;
    });
  } 
  // ---------------------------------------------------

  $(window).on('mousewheel DOMMouseScroll', function(e){

    if(e.originalEvent.wheelDelta){
      n = e.originalEvent.wheelDelta * -1; 
    } else {
      n = e.originalEvent.detail * 40; 
    }
    // ---------------------------------------------------
   
    if(myStatus){ 
      myStatus = false; 
      if( n > 0 ){ 
        useN++; 
        if( useN >= scrollLen ) {
          useN = scrollLen-1; 
        }
        ScrollMagic();
      } else {
        useN--; 
        if( useN < 0 ) {
          usnN = 0;
        }
        ScrollMagic();
      }
    }
  }); 
  // ---------------------------------------------------
  
  let startP, endP;
  $(window).on('touchstart', function(e){
    startP = e.originalEvent.touches[0].pageY; 
  }); // touch start-----------------------------------
  $(window).on('touchmove', function(e){ 
    htmlEl.animate({scrollTop:myScrollElTop[useN]}, 0);
  }); // touch move-----------------------------------
  $(window).on('touchend', function(e){
    endP = e.originalEvent.changedTouches[0].pageY; 
    console.log(startP, endP);
    if(myStatus){ 
      myStatus = false; 
      if( startP > endP ){ 
        useN++; 
        if( useN >= scrollLen ) {
          useN = scrollLen-1; 
        }
        ScrollMagic();
      } else {
        useN--; 
        if( useN < 0 ) {
          usnN = 0;
        }
        ScrollMagic();
      }
    }
  }); // touch end-----------------------------------

})(jQuery);
 