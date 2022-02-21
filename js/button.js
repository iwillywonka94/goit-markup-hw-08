(() => {
  const refs = {
    openMenuBtn: document.querySelector("[mobile-menu-open]"),
    closeMenuBtn: document.querySelector("[mobile-menu-close]"),
    menu: document.querySelector("[mobile-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle("body-mobile-menu");
    refs.menu.classList.toggle("is-hidden");
  }
})();