window.onload = function () {

  addNavClickHandler();
  addPhoneClickHandler();
}

const addNavClickHandler = () => {
  document.addEventListener('scroll', onScroll => {
    const currentPos = window.scrollY;
    const sections = document.querySelectorAll('main > section');
    const links = document.querySelectorAll('#navigation > a');
    console.log(sections);
    console.log(links);
    sections.forEach((el) => {
      if (el.offsetTop <= currentPos && (el.offsetTop + el.offsetHeight) > currentPos) {
        links.forEach((link) => {
          link.classList.remove('navigation__item_active');
          if (el.getAttribute('id') === link.getAttribute('href').substring(1)) {
            link.classList.add('navigation__item_active');
          }
        })
      }
    });
  });
}

const addPhoneClickHandler = () => {
  const phones = document.querySelectorAll('.phone__image');
  const HIDDEN = "phone__screen_hidden";
  phones.forEach((phone) => {
    phone.addEventListener('click', onClick => {
      const img = phone.nextElementSibling;
      console.log(img.classList);
      img.classList.contains(HIDDEN) ? img.classList.remove(HIDDEN) : img.classList.add(HIDDEN);
    });
  });
}
