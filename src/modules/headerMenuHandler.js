import { ModalHandler } from "./overlayClickHandler";

export const headerMenuHandler = (selector = '.header') => {
  const header = typeof selector === 'string' ?
    document.querySelector(selector) : selector;

  if (!header) return;

  const openedItems = header.getElementsByClassName('_opened');
  const menu = header.querySelector('.mobile-menu-button');

  header.addEventListener('click', ({target}) => {
    const [opened] = openedItems;
    const button = target.closest('.header__menu-button');
    // const link = target.closest('.header__menu-button');
    const modalButton = target.closest('.header__start-studying');
    const mobileMenu = target.closest('.mobile-menu-button');

    if (mobileMenu) {
      mobileMenu.classList.toggle('_show')
    }

    if (opened && (innerWidth > 768 || modalButton)) {
      opened.classList.remove('_opened');
    }

    if (modalButton) {
      new ModalHandler().open()
      menu.classList.remove('_show')
    }

    if (button && (innerWidth <= 768 || button !== opened)) {
      button.classList.toggle('_opened');      
      return;
    }
  });
};
