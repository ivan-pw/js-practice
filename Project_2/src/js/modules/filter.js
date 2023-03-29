const filter = () => {
  const menu = document.querySelector('.portfolio-menu');
  const items = menu.querySelectorAll('li');
  const wrapper = document.querySelector('.portfolio-wrapper');
  const markAll = wrapper.querySelectorAll('.all');
  const no = document.querySelector('.portfolio-no');

  const typeFilter = (markType) => {
    markAll.forEach((mark) => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });

    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    const el = wrapper.querySelectorAll(`.${markType}`);
    if (el.length) {
      el.forEach((mark) => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };

  menu.addEventListener('click', (e) => {
    if (e.target?.tagName == 'LI') {
      items.forEach((btn) => btn.classList.remove('active'));
      e.target.classList.add('active');

      typeFilter(e.target.dataset.type);
    }
  });
};

export default filter;
