const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;

const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(${-size * counter}px)`

const nextImageSlide = () => {
  if(counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = `transform 300ms ease-in-out`;
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`
}

const prevImageSlide = () => {
  if(counter <= 0) return;
  carouselSlide.style.transition = `transform 300ms ease-in-out`;
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`
}

nextBtn.addEventListener('click', nextImageSlide)

prevBtn.addEventListener('click', prevImageSlide)

carouselSlide.addEventListener('transitionend', () => {
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = 'none'
    counter = carouselImages.length -2;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`
  }
  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = 'none'
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`
  }
})