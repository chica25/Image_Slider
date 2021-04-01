const slide = document.querySelector('.slide')
const images = document.querySelectorAll('.slide img')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let counter = 1;
const size = images[0].clientWidth;
 
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    slide.style.transition = 'tranform 0.4s ease-in-out';
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // console.log(counter)
})

prevBtn.addEventListener('click', () => {
    slide.style.transition = 'tranform 0.4s ease-in-out';
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})