import $ from './lib/lib';

$('#first').on('click', () => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeToggle(800);
});

$('button')
  .eq(2)
  .on('click', () => {
    $('.w-500').fadeToggle(800);
  });

$('.wrap').html(
  `
    <div class="dropdown">
    <button
      class="btn btn-primary dropdown-toggle dropdown-toggle-js "
      id="dropdownMenuButton3"
    >
      Dropdown
    </button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton3">
      <a href="#" class="dropdown-item">Up</a>
      <a href="#" class="dropdown-item">Up 2</a>
      <a href="#" class="dropdown-item">Up 3</a>
    </div>
  </div>
  `
);

$('.dropdown-toggle-js').dropdown();

$('#trigger').click(() => {
  $('#trigger').createModal({
    text: {
      title: 'Modal titleeee',
      body: 'Hey you!',
    },
    btns: {
      count: 3,
      settings: [
        ['Close', ['btn-danger', 'mr-10'], true],

        [
          'another btn',
          ['btn-warning', 'mr-10'],
          false,
          () => {
            alert('oh my gosh');
          },
        ],
        [
          'Save changes',
          ['btn-success'],
          false,
          () => {
            alert('saved');
          },
        ],
      ],
    },
  });
});
