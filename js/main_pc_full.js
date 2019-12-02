// main_pc_full.js
(function($){
  const body = $('body');
  const wrap = $('#wrap');

  //pc===============================
   // header area==================
   wrap.append('<header id="pub_header_pc_full" class="clearfix"></header>');

   const pubHeadPcFull = $('#pub_header_pc_full');
   const jsLink = (temp) => {
    return body.append(`<script src="./js/src/temp_pc_full/${temp}.js"></script>`);
  };
  pubHeadPcFull.load('./html/temp_pc_full/pub_header_pc_full.html', () => {
    return jsLink('pub_header_pc_full');
  });

  // 1st section area==================
  wrap.append('<section id="section_pc_full" class="clearfix scroll"></section>');

  const secPcFull = $('#section_pc_full');
  secPcFull.load('./html/temp_pc_full/section_pc_full.html', () => {
    return jsLink('section_pc_full');
  });

  // 1st article area==================
  wrap.append('<article id="article_pc_full" class="clearfix scroll"></article>');

  const artPcFull = $('#article_pc_full');
  artPcFull.load('./html/temp_pc_full/article_pc_full.html', () => {
    // return jsLink('article_pc_full');
  });

  // 2st article area==================
  wrap.append('<article id="article_pc_full_02" class="clearfix scroll"></article>');

  const artPcFull02 = $('#article_pc_full_02');
  artPcFull02.load('./html/temp_pc_full/article_pc_full_02.html', () => {
    return jsLink('article_pc_full_02');
  });

  // footer area=======================
  wrap.append('<footer id="pub_footer_pc_full" class="clearfix scroll"></footer>');

  const pubFootPcFull = $('#pub_footer_pc_full');
  pubFootPcFull.load('./html/temp_pc_full/pub_footer_pc_full.html', () => {
    return jsLink('pub_footer_pc_full');
  });

  setTimeout(function(){
    return jsLink('article_pc_full');
  }, 200);

})(jQuery);