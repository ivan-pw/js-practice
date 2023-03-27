import { getResource } from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
  const cards = document.querySelectorAll(wrapper);
  const btn = document.querySelector(trigger);

  // cards.forEach((card) => {
  //   card.classList.add('animated', 'fadeInUp');
  // });

  // btn.addEventListener('click', (e) => {
  //   cards.forEach((card) => {
  //     card.classList.add('animated', 'fadeInUp');
  //     card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
  //     card.classList.add(
  //       'col-sm-3',
  //       'col-sm-offset-0',
  //       'col-xs-10',
  //       'col-xs-offset-1'
  //     );
  //   });
  //   btn.classList.add('hidden');
  // });

  const createCards = (response) => {
    response.forEach(({ src, title, link }) => {
      const card = document.createElement('div');
      card.classList.add(
        'col-sm-3',
        'col-sm-offset-0',
        'col-xs-10',
        'col-xs-offset-1',
        'animated',
        'fadeInUp'
      );
      card.innerHTML = `
        <div class="styles-block">
          <img src="${src}" alt="">
          <h4>${title}</h4>
          <a href="${link}">Подробнее</a>
        </div>
              `;

      document.querySelector(wrapper).appendChild(card);
    });
  };

  btn.addEventListener('click', function () {
    getResource('http://localhost:4000/assets/db.json')
      .then((res) => createCards(res.styles))
      .catch((err) => console.log(err));

    // getResource('http://localhost:3000/styles')
    //   .then((res) => createCards(res))
    //   .catch((err) => console.log(err));

    this.remove();
  });

  // <div class="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1">
  //   <div class="styles-block">
  //     <img src="assets/img/styles-2.jpg" alt="">
  //     <h4>Акварелью</h4>
  //     <a href="#">Подробнее</a>
  //   </div>
  // </div>
};

export default showMoreStyles;
