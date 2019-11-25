// main_t.js
(function($){
  const body = $('body');
  const wrap = $('#wrap');

  //tab===============================
   // header area==================
   wrap.append('<header id="pub_header_t" class="scroll"></header>');

   const pubHeadT = $('#pub_header_t');
   const jsLink = (temp) => {
    return body.append(`<script src="./js/src/temp_t/${temp}.js"></script>`);
  };
   pubHeadT.load('./html/temp_t/pub_header_t.html', () => {
    return jsLink('pub_header_t');
  });

  // 1st section area==================
  wrap.append('<section id="section_t_01" class="scroll"></section>');

  const secT01 = $('#section_t_01');
  secT01.load('./html/temp_t/section_t_01.html', () => {
    return jsLink('section_t_01');
  });

  // 1st article area==================
  wrap.append('<article id="article_t_01" class="scroll"></article>');

  const artT01 = $('#article_t_01');
  artT01.load('./html/temp_t/article_t_01.html', () => {
    return jsLink('article_t_01');
  });

  // 2st article area==================
  wrap.append('<article id="article_t_02" class="scroll"></article>');

  const artT02 = $('#article_t_02');
  artT02.load('./html/temp_t/article_t_02.html', () => {
    return jsLink('article_t_02');
  });

  // 2st section area==================
  wrap.append('<section id="section_t_02" class="scroll"></section>');

  const secT02 = $('#section_t_02');
  secT02.load('./html/temp_t/section_t_02.html', () => {
    return jsLink('section_t_02');
  });

  // 3st article area==================
  wrap.append('<article id="article_t_03" class="scroll"></article');

  const artT03 = $('#article_t_03');
  artT03.load('./html/temp_t/article_t_03.html', () => {
    return jsLink('article_t_03');
  });

  // 4st article area==================
  wrap.append('<article id="article_t_04" class="scroll"></article');

  const artT04 = $('#article_t_04');
  artT04.load('./html/temp_t/article_t_04.html', () => {
    return jsLink('article_t_04');
  });

  // footer area=======================
  wrap.append('<footer id="pub_footer_t" class="scroll"></footer>');

  const pubFootT = $('#pub_footer_t');
  pubFootT.load('./html/temp_t/pub_footer_t.html', () => {
    return jsLink('pub_footer_t');
  });

})(jQuery);