// === Адаптивность навигации
$(window).resize(function (event) {
   adaptiveFunction();
});

function adaptiveHeader(w, h) {
   let headerMenu = $('.header-menu');

   if (w <= 1000) {
      if (!$('.header-nav').hasClass('done')) {
         $('.header-nav').addClass('done').appendTo(headerMenu);
      }
   } else {
      $.each($('.header-nav'), function (index, val) {
         if ($(this).hasClass('done')) {
            $(this).removeClass('done').prependTo($('nav'));

         };
      });
   }
}

function adaptiveFunction() {
   let w = $(window).outerWidth();
   let h = $(window).outerHeight();
   adaptiveHeader(w, h);
}

adaptiveFunction();
// === Адаптивность навигации

// === Вызов меню бургер
$('.header-menu__icon').click(function (event) {
   $(this).toggleClass('active');
   $('.header-menu').toggleClass('active');
   $('body').toggleClass('lock');
});
// === Вызов меню бургер

