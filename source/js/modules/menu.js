export default () => {
  const btnToggle = document.querySelector(`.header__toggle`);
  const menuNav = document.querySelector(`.header__nav`);
  const menuLinks = document.querySelectorAll(`.header__link`);

  // Open and close menu
  btnToggle.addEventListener(`click`, function () {
    if (!menuNav.classList.contains(`header__nav--opened`)) {
      menuNav.classList.add(`header__nav--opened`);
      btnToggle.classList.add(`header__toggle--opened`);
    } else {
      menuNav.classList.remove(`header__nav--opened`);
      btnToggle.classList.remove(`header__toggle--opened`);
    }
  });

  // Active state on link
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener(`click`, function () {
      menuLinks.forEach((link) => {
        link.classList.remove(`header__link--active`);
      });
      menuLink.classList.add(`header__link--active`);
    });
  });
};
