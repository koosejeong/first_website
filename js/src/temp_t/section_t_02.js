// section_t_02.js

(function($){
// data 불러오기--------------------
  let url = '../data/country.json';
  let rel = null;
  $.ajax({
    async:false,
    dataType:'json',
    url:url,
    success: function(data){
      return rel= data;}  
  });
// -------------------------------$

const sec02T = $('#section_t_02');
const fullBox = sec02T.children('.fullBox');
const tagBox = fullBox.children('.tag');
const evenUl = fullBox.children('ul');
const evenLi = evenUl.children('li');
const evenLink = evenLi.children('a');
const advTxt = fullBox.children('p');

let len = evenLi.length;
let folder = [ rel[7], rel[8], rel[5]]; 
let img = [ 'img06.jpeg', 'img05.jpeg', 'img05.jpeg '];

for(let i=0; i<len; i++){
  let imgUrl = `../img/${folder[i].country}/`;
  console.log(imgUrl+img[i]);
  evenLi.eq(i).children(evenLink).css({'backgroundImage':`url(${imgUrl + img[i]})`, 'backgroundSize':'cover', 'backgroundRepeat':'noRepeat', 'backgroundPosition':'50% 50%', 'border':'2px solid #fff'});
}

})(jQuery);