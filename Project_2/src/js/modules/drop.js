import { postData } from '../services/requests';

const drop = () => {
  // dragenter - объект над dragArea
  // dragleave
  // dragover
  // drop

  const fileInputs = document.querySelectorAll('[name="upload"]');

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(
        eventName,
        (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
        false
      );
    });
  });

  ['dragenter', 'dragover'].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(
        eventName,
        () => {
          highlight(input);
        },
        false
      );
    });
  });
  ['dragleave', 'drop'].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(
        eventName,
        () => {
          unhighlight(input);
        },
        false
      );
    });
  });

  function highlight(item) {
    item.closest('.file_upload').style.border = '5px solid yellow';
    item.closest('.file_upload').style.backgroundColor = '#00000070';
  }
  function unhighlight(item) {
    item.closest('.file_upload').style.border = 'none';

    if (item.closest('.calc')) {
      item.closest('.file_upload').style.backgroundColor = '#fff';
    } else {
      item.closest('.file_upload').style.backgroundColor = '#ededed';
    }
  }

  // устарело и по сути не нужно в хроме
  fileInputs.forEach((input) => {
    input.addEventListener('drop', (e) => {
      input.files = e.dataTransfer.files;

      const arr = input.files[0].name.split('.');
      const dots = arr[0].length > 6 ? '...' : '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;

      // console.log(input);
      if (input.closest('.main')) {
        const fd = new FormData();
        fd.append('image_file', input.files[0]);
        postData('assets/server.php', fd).then((res) => {
          console.log(res);
        });
      }
    });
  });
};

export default drop;
