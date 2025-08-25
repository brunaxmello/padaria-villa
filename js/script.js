const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carousel = document.querySelector('.imagens-favoritos');

let index = 0;

prevBtn.addEventListener('click', () => {
    if(index > 0) index--;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    if(index < carousel.children.length - 1) index++;
    updateCarousel();
});

function updateCarousel() {
    const itemWidth = carousel.children[0].offsetWidth + 15; // largura + gap
    carousel.style.transform = `translateX(${-index * itemWidth}px)`;
}