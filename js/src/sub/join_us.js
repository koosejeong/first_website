// join_us.js
(function($){

  const wrap = $('#wrap');
  const formBox = wrap.find('form');
  const allCheck = $('#all_check');
  const cbSel = $('.cb_sel');
  const reQuire = formBox.find('.require_check');
  const reQuireCheck = reQuire.children('.cb_sel');
  const popubBox = reQuire.find('.rq_none_box');
  const closeBtn = popubBox.children('button');
  const conFirm = $('.confirm');
  let ck; 

  allCheck.on('click', function(e){

    ck = allCheck.is(':checked');

    if(ck){
      cbSel.prop('checked', true); //기능
      cbSel.attr('checked', true); //시각
      allCheck.prop('checked', true);
      allCheck.attr('checked', true);
    } else {
      cbSel.prop('checked', false);
      cbSel.attr('checked', false);
      allCheck.prop('checked', false);
      allCheck.attr('checked', false);
    }
  });
  cbSel.on('click', function(){
    
      let idCheck = $(this).attr('id');
      let idN = $('#' + idCheck);
      let idnIs = idN.is(':checked');
      (idnIs) ? idN.attr('checked', true).prop('checked', true) : idN.attr('checked', false).prop('checked', false) ;
      // ---------------------------------------------------
      for( let i=0; i < cbSel.length; i++){
        ck = cbSel.eq(i).is(':checked');
        if(ck == false){ 
          allCheck.prop('checked', false); 
          allCheck.attr('checked', false);
          break; 
        } else {
          allCheck.prop('checked', true);
          allCheck.attr('checked', true);
        }
      } 
  });

  conFirm.on('click focus', function(e){
    e.preventDefault();
    let rq = reQuireCheck.is(':checked');
    //console.log(rq);
    if( rq ){
      location.href='../../html/sub_page/sign_up.html';
    } else {
      popubBox.stop().show();
      closeBtn.on('click', function(){
        popubBox.stop().hide();
      });
    }

  });

})(jQuery);