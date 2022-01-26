const queries = {
  hamburguer: document.querySelector('.toolbar-icon'),
  closeButton: document.querySelector('#close-btn'),
  menu: document.querySelector('header'),
  sectionLinks: document.querySelectorAll('.section-link'),
  main: document.querySelector('main'),
};

// close menu
function closeMenu() {
  queries.main.classList.remove('hide');
  queries.menu.classList.remove('menu-visible');
}

// add add event listener to all toolbar links
function addMenuEventListener() {
  queries.sectionLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
    return link;
  });
}

// open menu
function openMenu() {
  queries.main.classList.add('hide');
  queries.menu.classList.add('menu-visible');
  addMenuEventListener();
}

// wait the page to be loaded
document.addEventListener('DOMContentLoaded', () => {
  queries.hamburguer.addEventListener('click', openMenu);
  queries.closeButton.addEventListener('click', closeMenu);
});
