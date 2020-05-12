export default () => {
  const logos = document.querySelectorAll(`.js-header-logo`);
  const logosLength = logos.length;
  const randomNumber = Math.floor((Math.random() * logosLength));

  logos[randomNumber].classList.add(`is-active`);
};
