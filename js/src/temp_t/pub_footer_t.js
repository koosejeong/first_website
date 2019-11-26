// pub_footer_t.js
(function($){
  const footArea = $('#pub_footer_t');
  const iconUl = footArea.children('ul');
  const iconLi = iconUl.children('li');
  const iconLink = iconLi.children('a');
  const iconBox = iconLink.children('i');

  let url = `./img/icon/`;
  let icon = [ 'passport-01', 'visa-01', 'back-01', 'taxfree-01', 'notice-01', 'insurance-01', 'JRpass-01' ];

  for(let i=0; i<iconLi.length; i++ ){
    iconLi.eq(i).find(iconBox).css({'backgroundImage':`url(${url + icon[i]}.png)`, 'backgroundPosition':'50% 50%', 'backgroundSize':'contain', 'backgroundRepeat':'no-repeat'});
  }

})(jQuery);