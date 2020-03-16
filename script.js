window.onload = function () {

  addNavClickHandler();
}

const addNavClickHandler = () => {
  const navTab = document.getElementById('navigation');
  navTab.addEventListener('click', (event) => {
    // отменяю стандартный переход по ссылке, чтобы задать отступ для фиксированного хэдера
    event.preventDefault();
    let id = event.target.getAttribute('href').slice(1);
    let section = document.getElementById(id).getBoundingClientRect().top + pageYOffset - 95;
    window.scrollTo(0, section);
    navTab.querySelectorAll('a').forEach(el => el.classList.remove('navigation__item_active'));
    event.target.classList.add('navigation__item_active');
  });
}
