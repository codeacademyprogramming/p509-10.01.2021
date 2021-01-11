// // $('p').on('click', function () {
// //   $(this).hide();
// // });

// $(document).ready(function () {
//   // console.log('');

//   // $('p').on('click', function () {});
//   // document.querySelector('p').addEventListener('click', function () {});
//   // $('p').on({
//   //   mouseenter: function () {
//   //     $(this).css('background-color', 'lightgray');
//   //   },
//   //   mouseleave: function () {
//   //     $(this).css('background-color', 'lightblue');
//   //   },
//   //   click: function () {
//   //     $(this).css('background-color', 'yellow');
//   //   },
//   // });
//   // document.querySelector('p').addEventListener('click', function () {});
//   // document.querySelector('p').addEventListener('mouseenter', function () {});
//   // document.querySelector('p').addEventListener('mouseleave', function () {});
//   // prettier-ignore
//   $('#p1').css('color', 'red')
//           .slideUp(2000)
//           .slideDown(2000)
//           .slideToggle('slow')
//           .fadeOut()
//           .fadeIn();
// });
// document.querySelector('#p1').style.color = 'red';

// // $('p');
// // document.querySelector('p');
// // document.querySelectorAll('p');

// $('#list a').on('click', function (event) {
//   event.preventDefault();
//   console.log($(this).text());
// });

$('#list').on('click', 'a', function (event) {
  event.preventDefault();
  console.log($(this).text());
});

$('#list').append("<li><a href='http://newdomain.com'>Item #5</a></li>");
