export default () => {
  const logos = document.querySelectorAll(`.header__logo`);
  const logosLength = logos.length;
  const randomNumber = Math.floor((Math.random() * logosLength));

  logos[randomNumber].classList.add(`header__logo--active`);
};
