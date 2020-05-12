export default () => {
  const btnToggle = document.querySelector(`.js-header-toggle`);
  const menuNav = document.querySelector(`.js-header-nav`);
  const menuLinks = document.querySelectorAll(`.js-header-link`);

  // Open and close menu
  btnToggle.addEventListener(`click`, function () {
    if (!menuNav.classList.contains(`is-opened`)) {
      menuNav.classList.add(`is-opened`);
      btnToggle.classList.add(`is-opened`);
    } else {
      menuNav.classList.remove(`is-opened`);
      btnToggle.classList.remove(`is-opened`);
    }
  });

  // Active state on link
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener(`click`, function () {
      menuLinks.forEach((link) => {
        link.classList.remove(`is-active`);
      });
      menuLink.classList.add(`is-active`);
    });
  });
};
