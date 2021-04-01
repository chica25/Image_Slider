const slide = document.querySelector('.slide')
const images = document.querySelectorAll('.slide img')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let counter = 1;
const size = images[0].clientWidth;
 
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
   if(counter >= images.length -1) return;
    slide.style.transition = 'tranform 0.4s ease-in-out';
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // console.log(counter)
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    slide.style.transition = 'tranform 0.4s ease-in-out';
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

slide.addEventListener('transitioned', () => {
  if(images[counter].id === 'last-img-copy'){
      slide.style.transform = 'none';
      counter = images.length - 2;
      slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(images[counter].id === 'last-img-copy'){
        slide.style.transform = 'none';
        counter = images.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})