
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

/////
const content = ['Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.',' the Gravity Team has been an exceptional market maker for Bitkub. They have consistently demonstrated dedication, reliability, and professionalism, establishing themselves as one of the most steadfast and results-driven market makers on our exchange. Their contributions of high-quality volume have been invaluable, solidifying their reputation as a dependable and trustworthy partner. We wholeheartedly recommend the Gravity Team, as they have become an integral part of our market-making operations.'];
const slidePara = document.querySelector('.slide-para');

const spans = document.querySelectorAll('.slide span');
let i = 0;
spans.forEach((ele)=>{
  ele.addEventListener('click', ()=>{
    i = i + 1;
    if(i > 1){
      i = 0;
    }
    slidePara.innerHTML = content[i];
    spans.forEach((span)=>{
      span.classList.remove('active');
    })
    ele.classList.add('active');
  })
})

