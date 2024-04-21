let inputs = document.querySelectorAll('.content-form__file'),
inputCommers, inputAny;
inputCommers = document.querySelector(".content-form-type__item:nth-child(1)");
inputAny = document.querySelector(".content-form-type__item:nth-child(2)");
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
    if(!inputAny.classList.contains("-active")){
        inputAny.classList.add("--active");
    }
});