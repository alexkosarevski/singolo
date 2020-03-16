window.onload = function () {

  addNavClickHandler();
}

const addNavClickHandler = () => {
  const navTab = document.getElementById('navigation');
  navTab.addEventListener('click', (event) => {
    navTab.querySelectorAll('a').forEach(el => el.classList.remove('navigation__item_active'));
    event.target.classList.add('navigation__item_active');
  });
}
