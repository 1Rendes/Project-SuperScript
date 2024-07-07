export const refs = {
  projectsSection: document.querySelector('#projects'),
  boxArrows: document.querySelector('.js-box-arrows'),
};
export let prevBtnProjects;
export let nextBtnProjects;
export let isInView = false;

export function getDisabledOrEnabledButtons(t, prev, next) {
  if (t.isBeginning) {
    prev.disabled = true;
  } else if (t.isEnd) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}

export function getControlledSwiperByTab(Section, swiper) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        isInView = entry.isIntersecting;
      });
    },
    {
      threshold: 0.95,
    }
  );
  observer.observe(Section);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab' && isInView) {
      event.preventDefault();
      if (event.shiftKey) {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    }
  });
}

export function onDOMContentLoaded(swiper, box) {
  const markup = `<button class="js-prev-btn">
          <svg class="js-prev-arrow">
            <use href="./img/icons.svg#arrow-left"></use>
          </svg>
        </button>
        <button class="js-next-btn">
          <svg class="js-next-arrow">
            <use href="./img/icons.svg#arrow-right"></use>
          </svg>
        </button>`;
  box.insertAdjacentHTML('afterbegin', markup);
  prevBtnProjects = box.querySelector('.js-prev-btn');
  nextBtnProjects = box.querySelector('.js-next-btn');
  prevBtnProjects.addEventListener('click', () => {
    swiper.slidePrev();
  });
  nextBtnProjects.addEventListener('click', () => {
    swiper.slideNext();
  });

  getDisabledPrevArrow(swiper, prevBtnProjects);
}

export function getDisabledPrevArrow(swiper, button) {
  if (swiper.isBeginning) {
    button.disabled = true;
  }
}
