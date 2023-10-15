export const headerMenuHandler = (selector = '.header') => {
  const header = typeof selector === 'string' ?
    document.querySelector(selector) : selector;

  if (!header) return;

  const openedItems = header.getElementsByClassName('_opened');

  header.addEventListener('click', ({target}) => {
    const [opened] = openedItems;
    const button = target.closest('.header__menu-button');
    const link = target.closest('.header__menu-button');
    const mobileMunu = target.closest('.mobile-menu-button');

    if (mobileMunu) {
      mobileMunu.classList.toggle('_show')
    }

    if (opened) {
      opened.classList.remove('_opened');
    }

    if (button && button !== opened) {
      button.classList.add('_opened');      
      return;
    }
  });
};
