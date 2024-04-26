let inputs = document.querySelectorAll('.content-form__file'),
inputCommers, inputAny;
inputCommers = document.querySelector(".content-form-type__item:nth-child(1)");
inputAny = document.querySelector(".content-form-type__item:nth-child(2)");
arrowRight = document.querySelector(".slider-arrow--right");
arrowLeft = document.querySelector(".slider-arrow--left");
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.content-form__file-button-text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.content-form__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.content-form__file-button-text').innerText = labelVal;
  });
});
inputCommers.addEventListener("click", ()=>{
    inputAny.classList.remove("--active");
    if(!inputCommers.classList.contains("--active")){
        inputCommers.classList.add("--active");
    }
});
inputAny.addEventListener("click", ()=>{
    inputCommers.classList.remove("--active");
    if(!inputAny.classList.contains("--active")){
        inputAny.classList.add("--active");
    }
});



let currentIndex = 0;
const carouselItems = document.querySelectorAll('.slider__item');
 
function goToSlide(index, click) {
  if (index < 0) {
    index = carouselItems.length - 1;
  } else if (index >= carouselItems.length) {
    index = 0;
  }
  currentIndex = index;
  console.log(click);
  if(click == "left"){
    document.querySelector('.slider-container').style.transform = `translateX(-${carouselItems[0].offsetWidth}px)`;
  }
  else if(click == "right"){
    document.querySelector('.slider-container').style.transform = `translateX(${carouselItems[0].offsetWidth}px)`;
  }
}
 
arrowLeft.addEventListener("click", ()=>{
  goToSlide(currentIndex - 1, "left");
});
arrowRight.addEventListener("click", ()=>{
  goToSlide(currentIndex + 1, "right");
});
