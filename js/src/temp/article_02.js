// article_02.js

(function($){

   // data 불러오기--------------------
   let url = './data/country.json';
   //let imgurl = '../img/';
   let rel = null;
   $.ajax({
     async:false,
     dataType:'json',
     url:url,
     success: function(data){
       return rel= data;}  
   });
   // -------------------------------

  const art02 = $('#article_02');
  const slideGuide = art02.children('.art_02_form_box');
  const slideUl = slideGuide.children('ul');
  const slideLi = slideUl.children('li');
  const slideLink = slideLi.children('a');
  const slideTxt = slideLink.children('span');
  const btnArea = slideGuide.children('.btn_area');
  const btn = btnArea.children('button');

  let myN = 0;
  let liLen = slideLi.length;


  let txt = ['영화랑 똑같아! Newyork', '낮에도 밤에도 아름다워, Sanghai', '가족 여행으로도 좋은 그곳 Hawaii', '국내처럼 갈 수 있어, Hongkong!', ];
  for(let i=0; i<txt.length; i++){
    slideLi.eq(i).find(slideTxt).text(txt[i]);
    slideTxt.eq(i).css({'backgroundColor':'transparent', 'color':'#fff', 'fontSize':'1.2rem', 'textShadow':'3px 3px 0 #333'});
  }

  slideLi.eq(-1).clone(true).prependTo(slideUl);
  liLen++;

  
  btn.on('click', function(e){
    e.preventDefault();
    let hasClass = $(this).hasClass('next');
    if( hasClass ) {
      myN++;
      if( myN >= liLen-1 ){
        slideUl.css({ 'marginLeft':'100%'});
        myN = 0;
      }
    } else {
      myN--;
    }
    slideUl.animate({ 'marginLeft':-100 * myN + '%'}, function(){
      if( myN < 0){
        myN = liLen-2;
      }
      slideUl.css({ 'marginLeft':-100 * myN + '%'});  
    });
  });    

})(jQuery); 