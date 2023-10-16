import { ModalHandler } from "./overlayClickHandler";

export const formHandler = (selector = '.form') => {
  const forms = typeof selector === 'string' ?
    document.querySelectorAll(selector) : selector;

  forms.forEach(form => {
    const ratingCount = form.querySelector('.rating__count');
    const openedItems = form.getElementsByClassName('_opened');
    const selectedItems = form.getElementsByClassName('_selected');
  
    form.addEventListener('change', ({target}) => {
      const input = target.closest('[name="name"], [name="email"], [name="feedback"]');
      const rating = target.closest('[name="rating"]')
  
      if (rating) {
        ratingCount.textContent = rating.value;
        return;
      }
  
      if (input) {
        input.parentElement.classList[input.value ? 'add' : 'remove']('_filled');
        return;
      }
    });
  
    form.addEventListener('click', ({target}) => {
      const [opened] = openedItems;
      const [selected] = selectedItems;
      const select = target.closest('[name="book"]');
      const item = target.closest('.option');
      
      if (opened) {
        opened.classList.remove('_opened');
      }
  
      if (select && select !== opened) {
        select.classList.add('_opened');
        return;
      }
  
      if (item) {
        const select = target.closest('.form__input').firstElementChild;
        
        if (selected && item !== selected) {
          selected.classList.remove('_selected');
        }
  
        if (item !== selected) {
          item.classList.add('_selected');
        }
  
        select.value = item.value;
      }
    });

    if (form.getAttribute('name') === 'modal') {
      form.addEventListener('submit',  () => new ModalHandler().close())
    }
  });
};
