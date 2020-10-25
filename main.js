const hamBug = document.querySelector('#hamburger-icon-button');
const close = document.querySelector('#close');
const topNav =document.querySelector('.top-nav');
const previousButton = document.querySelector('#previous--button');
const nextButton = document.querySelector('#next--button');
const section = document.querySelectorAll('.section-all');
const sectArr = Array.from(section);
let currentValue = 0;
const images = [
  {
    id:1,
    img:"./images/mobile-image-hero-1.jpg"
  },
  {
    id:2,
    img:"./images/mobile-image-hero-2.jpg"
  },
  {
    id:3,
    img:"./images/mobile-image-hero-3.jpg"
  }
]
const desktopImg = [
  {
    id:1,
    img:"./images/desktop-image-hero-1.jpg"
  },
  {
    id:2,
    img:"./images/desktop-image-hero-2.jpg"
  },
  {
    id:3,
    img:"./images/desktop-image-hero-3.jpg"
  }
]

//showImgFn
function showImg(image){
 if (window.innerWidth<1100) {
  const list = images[image]
  const img = document.querySelector('#hero-image');
  img.src = list.img;

   
 }else{
   const listDesk = desktopImg[image]
  const deskImg = document.querySelector('source');
  deskImg.srcset = listDesk.img;
  
 }
}
//section-function
 function sectFun(ind){
   //checking whether it contains the active class or not
   if (sectArr[ind].classList.contains('section-active')) {
     
    //checking if its equal to array length
    
    if (ind == sectArr.length-1) {
     sectArr[ind-(sectArr.length-1)].classList.add('section-active');
     sectArr[ind].classList.remove('section-active');

      
    }else{
      sectArr[ind+1].classList.add('section-active')
      sectArr[ind].classList.remove('section-active');
     

    }
    
     
   }
    
 }

 function prevSectFn(ind){
  //checking whether it contains the active class or not
  if (!sectArr[ind].classList.contains('section-active')) {
    
   //checking if its equal to array length
   
   if (ind == sectArr.length-1) {
    sectArr[ind-(sectArr.length-1)].classList.remove('section-active');
    sectArr[ind].classList.add('section-active');

     
   }else{
     sectArr[ind+1].classList.remove('section-active')
     sectArr[ind].classList.add('section-active');
    

   }
   
    
  }
   
}
//next-function
function nextFun(e){
    e.preventDefault();
    console.log(currentValue);

    //note calling before increment
    sectFun(currentValue)
  currentValue++
  if(currentValue>sectArr.length-1) currentValue =0;
  showImg(currentValue);
  


}
//previousFun
function previousFun(e){
    e.preventDefault();
    console.log(currentValue);

  currentValue--
  if(currentValue<0) currentValue = sectArr.length-1;
  //calling after decrement
  prevSectFn(currentValue);
  showImg(currentValue);

 

}
//nav-open-function
function navOPen(e){
    //preventDefault
    e.preventDefault();

    //adding visible class
    topNav.classList.toggle('visible');
}

//nav-close-function
function navClose(e){
    //preventDefault
    e.preventDefault();

    //adding visible class
    topNav.classList.remove('visible');
}




//eventListeners
hamBug.addEventListener('click', navOPen);
close.addEventListener('click', navClose);
nextButton.addEventListener('click', nextFun);
previousButton.addEventListener('click', previousFun)

