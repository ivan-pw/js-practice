const calc = (size, material, options, promocode, result, sumfield) => {
  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionsBlock = document.querySelector(options);
  const promocodeBlock = document.querySelector(promocode);
  const resultBlock = document.querySelector(result);
  const sumField = document.querySelector(sumfield);

  let sum = 0;

  const calcFunc = () => {
    sum = Math.round(
      +sizeBlock.value * +materialBlock.value + +optionsBlock.value
    );

    if (sizeBlock.value == '' || materialBlock.value == '') {
      resultBlock.textContent =
        'Пожалуйста, выберите размер и материал картины';
    } else if (promocodeBlock.value == 'IWANTPOPART') {
      resultBlock.textContent = Math.round(sum * 0.7);
      sumField.value = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
      sumField.value = sum;
    }
  };

  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('keyup', calcFunc);
};

export default calc;
