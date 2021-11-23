(() => {
  const refs = {
    openmenuBtn: document.querySelector('.menu-open'),
    closemenuBtn: document.querySelector('.menu-close'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openmenuBtn.addEventListener('click', togglemenu);
  refs.closemenuBtn.addEventListener('click', togglemenu);

  function togglemenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();