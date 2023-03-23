const forms = () => {
  const form = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const upload = document.querySelectorAll('[name=upload]');
  // const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  // phoneInputs.forEach((item) => {
  //   item.addEventListener('input', () => {
  //     item.value = item.value.replace(/\D/, '');

  //     const x = item.value
  //       .replace(/\D/g, '')
  //       .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  //     item.value = !x[2]
  //       ? `${x[1]}`
  //       : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
  //   });
  // });

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро наш менеджер Вам перезвонит',
    failure: 'Что-то пошло не так :(',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
  };

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php',
  };

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    const text = await res.text();

    return text;
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = '';
    });
    upload.forEach((item) => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
  };

  upload.forEach((item) => {
    item.addEventListener('input', () => {
      console.log(item.files);
      const arr = item.files[0].name.split('.');
      const dots = arr[0].length > 6 ? '...' : '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });

  form.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);

      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);

      const statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);

      const textMessage = document.createElement('div');
      textMessage.textContent = message.loading;

      statusMessage.appendChild(textMessage);

      const formData = new FormData(item);
      let api;

      item.closest('.popup-design') || item.classList.contains('calc_form')
        ? (api = path.designer)
        : (api = path.question);
      console.log(api);

      postData(api, formData)
        .then((res) => {
          // console.log(res);
          // if (res.ok) {

          textMessage.textContent = message.success;
          statusImg.setAttribute('src', message.ok);
          // console.log(statusImg);
          // } else {
          //   statusImg.setAttribute('src', message.fail);
          //   statusMessage.textContent = message.failure;
          // }
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = 'block';
            item.classList.remove('fadeOutUp');
            item.classList.add('fadeInUp');
          }, 5000);
        });
    });
  });
};

export default forms;
