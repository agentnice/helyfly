////////////////// Show modal window //////////////////////

function showModal(){
    const modal = document.getElementById('myModal');
    const btn = document.getElementsByClassName("bunner-btn")[0];
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

}
showModal();






///////////////////// Slider ////////////////////////////////



/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("item");
    const dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
        }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";

}





/////////// Testimonials counter ////////////////////

function showCount() {
    const testimonial = document.querySelectorAll('.test-wrapper .test__item'),
        testWrapper = document.querySelector('.test-wrapper'),
        count = document.querySelector('.counter');

    // counter of cards
    function showData() {
        const testItem = testWrapper.querySelectorAll('.test__item');
        let sum = 0;
        count.textContent = testItem.length;
    }
    showData();
}
showCount();


function showCountMobile() {
    const testimonialMobile = document.querySelectorAll('.test-wrapper-mobile .mobile__item'),
        testWrapperMobile = document.querySelector('.test-wrapper-mobile'),
        countMobile = document.querySelector('.counter-mobile');

    // counter of cards
    function showDataMobile() {
        const testItemMobile = testWrapperMobile.querySelectorAll('.mobile__item');
        let sumMobile = 0;
        countMobile.textContent = testItemMobile.length;
    }
    showDataMobile();
}
showCountMobile();


////////////////// Show Youtube video //////////////////////

function showYoutube () {
    const playButton = document.querySelector('.offer-right__button'),
        video = document.getElementById('video'),
        photo = document.querySelector('.offer-right__img-item'),
        photoWrapper = document.querySelector('.offer-right__img'),
        videoWrapper = document.querySelector('.offer-right');
    let width = document.body.clientWidth;

    playButton.addEventListener('click', () => {
        photo.style.display = "none";
        playButton.style.display = "none";
        video.style.display = "flex";
        
        photoWrapper.style.paddingLeft = "0";
        videoWrapper.style.marginLeft = "8vw";
        videoWrapper.style.marginTop = "4vw";

        if (width < 870) {
            videoWrapper.style.marginLeft = "0";
        }


    });
}

showYoutube ();
