export const formHandler = (selector = '.form') => {
  const form = typeof selector === 'string' ?
    document.querySelector(selector) : selector;

  if (!form) return;

  document.addEventListener('click', ({target}) => {
    const formTarget = target.closest('.form');

    if (!formTarget) {
      form.querySelectorAll('._opened').forEach(item => item.classList.remove('_opened'));
    }
  })

  form.addEventListener('change', ({target}) => {
    const input = target.closest('[name="name"], [name="email"], [name="feedback"]');

    if (input) {
      input.parentElement.classList[input.value ? 'add' : 'remove']('_filled');
      return;
    }
  });

  form.addEventListener('click', ({target}) => {
    const select = target.closest('[name="book"]');
    const item = target.closest('.option');
    
    if (select) {
      select.parentElement.classList.toggle('_opened');
      return;
    }

    if (item) {
      const input = item.closest('.form__input');
      const select = input.querySelector('[name="book"]');
      const selectedItems = input.querySelectorAll('._selected');

      if(selectedItems.length) {
        selectedItems.forEach(item => item.classList.remove('_selected'));
      }

      item.classList.add('_selected');
      select.value = item.value;
    }
  });
}