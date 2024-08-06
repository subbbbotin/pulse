const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    nav: false,
    controls: false
  });

slider.goTo('prev');
slider.goTo('next');

  document.querySelector('.button_prev').onclick = function () {
    slider.goTo('prev');
  };

  document.querySelector('.button_next').onclick = function () {
    slider.goTo('next');
  }; 