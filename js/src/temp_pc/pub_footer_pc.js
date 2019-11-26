// pub_footer_pc.js
(function($){

  const footPc = $('#pub_footer_pc');
  const footUl = footPc.children('ul');
  const footLi = footUl.children('li');
  const iconLink = footLi.children('a');
  const iconBox = iconLink.children('i');

  let url = `./img/icon/`;
  let icon = [ 'passport-01', 'visa-01', 'back-01', 'taxfree-01', 'notice-01', 'insurance-01', 'JRpass-01' ];
  console.log(url +  icon[3]);

  for(let i=0; i<footLi.length; i++){
    footLi.eq(i).find(iconBox).css({'backgroundImage':`url(${url + icon[i]}.png)`, 'backgroundSize':'contain', 'backgroundPosition':'50% 50%', 'backgroundRepeat':'no-repeat'});
  }

})(jQuery);