// main_pc.js
(function($){
  const body = $('body');
  const wrap = $('#wrap');

  //pc===============================
   // header area==================
   wrap.append('<header id="pub_header_pc" class="scroll"></header>');

   const pubHeadPc = $('#pub_header_pc');
   const jsLink = (temp) => {
    return body.append(`<script src="./js/src/temp_pc/${temp}.js"></script>`);
  };
   pubHeadPc.load('./html/temp_pc/pub_header_pc.html', () => {
    return jsLink('pub_header_pc');
  });

  // 1st section area==================
  wrap.append('<section id="section_pc_01" class="scroll"></section>');

  const secPc01 = $('#section_pc_01');
  secPc01.load('./html/temp_pc/section_pc_01.html', () => {
    return jsLink('section_pc_01');
  });

  // 1st article area==================
  wrap.append('<article id="article_pc_01" class="scroll"></article>');

  const artPc01 = $('#article_pc_01');
  artPc01.load('./html/temp_pc/article_pc_01.html', () => {
    return jsLink('article_pc_01');
  });

  // 2st article area==================
  wrap.append('<article id="article_pc_02" class="scroll"></article>');

  const artPc02 = $('#article_pc_02');
  artPc02.load('./html/temp_pc/article_pc_02.html', () => {
    return jsLink('article_pc_02');
  });

  // 2st section area==================
  wrap.append('<section id="section_pc_02" class="scroll"></section>');

  const secPc02 = $('#section_pc_02');
  secPc02.load('./html/temp_pc/section_pc_02.html', () => {
    return jsLink('section_pc_02');
  });

  // 3st article area==================
  wrap.append('<article id="article_pc_03" class="scroll"></article');

  const artPc03 = $('#article_pc_03');
  artPc03.load('./html/temp_pc/article_pc_03.html', () => {
    return jsLink('article_pc_03');
  });

  // 4st article area==================
  wrap.append('<article id="article_pc_04" class="scroll"></article');

  const artPc04 = $('#article_pc_04');
  artPc04.load('./html/temp_pc/article_pc_04.html', () => {
    return jsLink('article_pc_04');
  });

  // footer area=======================
  wrap.append('<footer id="pub_footer_pc" class="scroll"></footer>');

  const pubFootPc = $('#pub_footer_pc');
  pubFootPc.load('./html/temp_pc/pub_footer_pc.html', () => {
    return jsLink('pub_footer_pc');
  });

})(jQuery);