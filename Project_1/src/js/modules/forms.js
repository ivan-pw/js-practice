const forms = (state) => {
  const form = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  phoneInputs.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');

      const x = item.value
        .replace(/\D/g, '')
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      item.value = !x[2]
        ? `${x[1]}`
        : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
    });
  });

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро наш менеджер Вам перезвонит',
    failure: 'Что-то пошло не так :(',
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;

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
  };

  form.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      if (item.getAttribute('data-calc') === 'end') {
        // for (const key in state) {
        //   formData.append(key, state[key]);
        // }

        Object.keys(state).forEach((key) => {
          formData.append(key, state[key]);
        });
      }

      postData('assets/server.php', formData)
        .then((res) => {
          // console.log(res);
          if (res.ok) {
            statusMessage.textContent = message.success;
          } else {
            statusMessage.textContent = message.failure;
          }
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default forms;
