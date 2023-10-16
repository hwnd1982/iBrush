import { setBreakpiont } from "./util";

export class ModalHandler {
  static instance = null;

  constructor() {
    if (!ModalHandler.instance) {
      ModalHandler.instance = this;
      this.overlay = document.querySelector('.overlay');
      this.modal = this.overlay.querySelector('.modal');
    }

    return ModalHandler.instance;
  }

  open() {
    if (this.overlay && this.modal) {
      this.overlay.classList.add('_active');
      this.modal.classList.add('_active');
    }
  }

  close() {
    if (this.overlay && this.modal) {
      this.overlay.classList.remove('_active');
      this.modal.classList.remove('_active');
    }
  }
}

export const overlayClickHandler = () => {
  const openedItems = document.getElementsByClassName('_opened');
  const menu = document.querySelector('.mobile-menu-button');
  const isBreakpiont = setBreakpiont(768);

  new ModalHandler().overlay.addEventListener('click', ({target, currentTarget}) => {
    if (target === currentTarget || target.closest('.modal__close')) {
      new ModalHandler().close();
    }
  })

  document.addEventListener('click', ({target}) => {
    const [opened] = openedItems;

    target = target.closest('.form, .header__nav, .mobile-menu-button');

    if (!target && menu.classList.contains('_show')) {
        menu.classList.remove('_show');
    }

    if (!opened) return;

    if (!target) {
      opened.classList.remove('_opened');

      return;
    }

    [...openedItems].forEach(opened => {
      const parent = opened.closest(target.className.split(/\s+/).map(className => `.${className}`).join(','));

      if (target !== parent) {
        opened.classList.remove('_opened');
      }
    });
  })

  window.addEventListener('resize', () => {
    if (isBreakpiont()) {
      if (menu.classList.contains('_show')) {
        menu.classList.remove('_show');
      }

      [...openedItems].forEach(item => item.classList.remove('_opened'));
    }
  });
};
