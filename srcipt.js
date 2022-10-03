// const img = new Image();      (imges size can fined)
// img.onload = function() {
//   alert(this.width + 'x' + this.height);
// }
// img.src = 'img12.jpg'

let flag = 0; 
function contoral(x){
   flag = flag + x;
   slideshow(flag);
}
function slideshow(num){
 let slide = document.getElementsByClassName('slide')

 if(num == slide.length){
    flag = 0;
    num = 0;
 }
 if(num < 0){
    flag = slide.length -1;
    num = slide.length -1;
 }
  
 for(let y of slide){
  y.style.display = 'none';
 }
 slide[num].style.display = 'block'
}
 slideshow(flag);