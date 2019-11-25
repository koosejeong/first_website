(function($){
  const body = $('body');
  const wrap = $('#wrap');

  //mob===============================
   // header area==================
   wrap.append('<header id="pub_header" class="scroll"></header>');

   const pubHead = $('#pub_header');
   const jsLink = (temp) => {
    return body.append(`<script src="./js/src/temp/${temp}.js"></script>`);
  };
   pubHead.load('./html/temp/pub_header.html', () => {
    return jsLink('pub_header');
  });

  // 1st section area==================
  wrap.append('<section id="section_01" class="scroll"></section>');

  const sec01 = $('#section_01');
  sec01.load('./html/temp/section_01.html', () => {
    return jsLink('section_01');
  });

  // 1st article area==================
  wrap.append('<article id="article_01" class="scroll"></article>');

  const art01 = $('#article_01');
  art01.load('./html/temp/article_01.html', () => {
    return jsLink('article_01');
  });

  // 2st article area==================
  wrap.append('<article id="article_02" class="scroll"></article>');

  const art02 = $('#article_02');
  art02.load('./html/temp/article_02.html', () => {
    return jsLink('article_02');
  });

  // 2st section area==================
  wrap.append('<section id="section_02" class="scroll"></section>');

  const sec02 = $('#section_02');
  sec02.load('./html/temp/section_02.html', () => {
    return jsLink('section_02');
  });

  // 3st article area==================
  wrap.append('<article id="article_03" class="scroll"></article');

  const art03 = $('#article_03');
  art03.load('./html/temp/article_03.html', () => {
    return jsLink('article_03');
  });

  // 4st article area==================
  wrap.append('<article id="article_04" class="scroll"></article');

  const art04 = $('#article_04');
  art04.load('./html/temp/article_04.html', () => {
    return jsLink('article_04');
  });

  // footer area=======================
  wrap.append('<footer id="pub_footer" class="scroll"></footer>');

  const pubFoot = $('#pub_footer');
  pubFoot.load('./html/temp/pub_footer.html', () => {
    return jsLink('pub_footer');
  });

})(jQuery);