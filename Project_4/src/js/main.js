import $ from './lib/lib';

$('button').on('click', () => {
  // $(this).toggleClass('active');
  $('div').eq(2).toggleClass('active');
});

$('div').click(function () {
  console.log($(this).index());
});

function hi() {
  console.log(5);
}

console.log($('div').eq(2).find('.more'));

console.log($('button').html('Hi'));

// $('div');
