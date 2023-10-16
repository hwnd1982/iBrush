import { setBreakpiont } from "./util";

export const headerMenuHandler = (selector = '.header') => {
  const header = typeof selector === 'string' ?
    document.querySelector(selector) : selector;

  if (!header) return;

  const openedItems = header.getElementsByClassName('_opened');
  const openedMenu = header.getElementsByClassName('_show');

  header.addEventListener('click', ({target}) => {
    const [opened] = openedItems;
    const button = target.closest('.header__menu-button');
    // const link = target.closest('.header__menu-button');
    const mobileMunu = target.closest('.mobile-menu-button');

    if (mobileMunu) {
      mobileMunu.classList.toggle('_show')
    }

    if (opened && innerWidth > 768) {
      opened.classList.remove('_opened');
    }

    if (button && (innerWidth <= 768 || button !== opened)) {
      button.classList.toggle('_opened');      
      return;
    }
  });

  const isBreakpiont = setBreakpiont(768);

  window.addEventListener('resize', () => {
    if (isBreakpiont()) {
      const [menu] = openedMenu;

      if (menu) {
        menu.classList.remove('_show');
      }

      [...openedItems].forEach(item => item.classList.remove('_opened'));
    }
  });


};
