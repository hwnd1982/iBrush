export const overlayClickHandler = () => {
  const openedItems = document.getElementsByClassName('_opened');

  document.addEventListener('click', ({target}) => {
    const [opened] = openedItems;
    
    target = target.closest('.form, .header-menu');

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
}