
const ul = document.querySelector(".header ul")
window.addEventListener('resize',(event)=>{
  const resize = window.innerWidth;
  if(resize < 772){
    ul.style.display = 'none';
  }else{
    ul.style.display = 'flex';
  }
})

// animation scroll in page

const observe = new IntersectionObserver((entries)=>{
  entries.forEach((ele)=>{
    if(ele.isIntersecting){
      ele.target.classList.add('show')
    }else{
      ele.target.classList.remove('show')
    }
  })
})
document.querySelectorAll('.hidden').forEach((ele)=> observe.observe(ele));


const observes = new IntersectionObserver((entries)=>{
  entries.forEach((ele)=>{
    if(ele.isIntersecting){
      ele.target.classList.add('show-para')
    }else{
      ele.target.classList.remove('show-para')
    }
  })
})
document.querySelectorAll('.hidden-para').forEach((ele)=> observes.observe(ele));


///////////////
const toggle = document.querySelector(".header .toggle");
const dropdown = document.querySelector(".header .dropdown")
toggle.addEventListener('click', ()=>{
  dropdown.classList.toggle('active')
})