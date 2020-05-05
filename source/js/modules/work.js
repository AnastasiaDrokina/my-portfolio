export default () => {
  const works = document.querySelectorAll(`.work`);

  works.forEach((work) => {
    const workLink = work.querySelector(`.work__link`);
    const workContainer = work.querySelector(`.work__container`);

    const workOff = function () {
      work.classList.remove(`is-hover`);
      workContainer.removeEventListener(`transitionend`, workOff);
    };

    const workOn = function () {
      work.classList.add(`is-hover`);
    };

    const workTransitionEnd = function () {
      workContainer.addEventListener(`transitionend`, workOff);
    };

    workLink.addEventListener(`mouseenter`, workOn);
    workLink.addEventListener(`focus`, workOn);

    workLink.addEventListener(`mouseleave`, workTransitionEnd);
    workLink.addEventListener(`blur`, workTransitionEnd);
  });
};
