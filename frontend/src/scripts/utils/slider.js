const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const slides = document.getElementsByClassName('.slide');

let currentIndex = 0;

const showSlide = (index) => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('visible');
  }
  slides[index].classList.add('visible');
};

const showNextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
};

const showPreviousSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);

showSlide(currentIndex);