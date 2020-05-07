export default () => {
  (function () {
    const anchors = document.querySelectorAll(`a[href^="#"]`);

    anchors.forEach(function (anchor) {
      anchor.addEventListener(`click`, function (evt) {
        evt.preventDefault();
        const href = anchor.getAttribute(`href`);
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({behavior: `smooth`});
        }
      });
    });
  })();
};
