// sign_up.js
(function($){
  let checkPw = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9].{6,15}$)/; 

  let emailCk = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  let numCk = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
    //email---------------
    const userName = $('#userId');
    
    userName.on('blur', function(){
      let thisVal = $(this).val();
      let thisLi = $(this).closest('li');
      if(thisVal == ""){
        $(this).closest('li').addClass('error');
      } else if(!emailCk.test(thisVal)){
        $(this).closest('li').addClass('error');
        $(this).closest('li').find('.narr').text('이메일 주소를 입력하여 주십시오');
      } else {
        thisLi.removeClass('error');
      }
    });

    // -------------------------------
    // pw 비교하여 일치하는지 확인
    const userPw = $('#userPassword');
    const userPwRe = $('#reuserPassword');
    const pwlabel = $('label[for="userPassword"]');
    // -------------------------------

    pwlabel.on('mousedown', function(e){
      if(e.which){ //왼버튼 클릭 시
        userPw.attr({type:'text'});
      }
    });
    pwlabel.on('mouseup keyup mousemove', function(e){
      userPw.attr({type:'password'});
    });

    let beforePwVal, afterPwVal;
    userPw.on('keyup', function(){
      beforePwVal = userPw.val();
      let thisLi = $(this).closest('li');
      let thisVal = $(this).val();
      if(thisVal == ""){
        thisLi.addClass('error');
        thisLi.find('.narr').text('비밀번호를 입력하세요');
      }else if(thisVal.length <= 5) {
        thisLi.find('.narr').text('비밀번호는 6~15자리입니다.');
        thisLi.addClass('error');
      } else if( !checkPw.test(thisVal)) {
        thisLi.find('.narr').text('영문/숫자/특수문자 혼용하여 입력');
        thisLi.addClass('error');
      } else {
        thisLi.removeClass('error');
      }
    });
    userPwRe.on('keyup', function(){
      afterPwVal = userPwRe.val();
      if( beforePwVal !== afterPwVal){
        $(this).closest('li').addClass('error');
      }else{
        $(this).closest('li').removeClass('error');
      }
    });

})(jQuery);
