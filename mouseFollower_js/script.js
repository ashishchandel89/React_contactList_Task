let body=document.querySelector('body');
let mouse=document.querySelector('.mouse');

let x=0,y=0;


body.addEventListener('mousemove',(e)=>{
  const {clientX,clientY}=e;
  x=clientX;
  y=clientY;
 mouse.style.top=x+`px`;
 mouse.style.left=y+`px`;

})
// function far(){
//     mouse.style.transform=`translate(${x}px,${y}px)`;
//     requestAnimationFrame(far)
// }
// far()