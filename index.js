
const ul = document.querySelector(".header ul")
window.addEventListener('resize',(event)=>{
  const resize = window.innerWidth;
  if(resize < 772){
    ul.style.display = 'none';
  }else{
    ul.style.display = 'flex';
  }
})