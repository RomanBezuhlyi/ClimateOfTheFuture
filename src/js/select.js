document.addEventListener('DOMContentLoaded', function () {
  const customSelect = document.querySelector('.custom-select');
  const selectHeader = document.querySelector('.select-header');
  const selectArrow = document.querySelector('#select-arrow');
  const selectOptions = document.querySelector('.select-options');
  const selectedLanguage = document.querySelector('#selected-language');

  selectHeader.addEventListener('click', function () {
    customSelect.classList.toggle('active');
    selectArrow.style.transform = customSelect.classList.contains('active')
      ? 'rotate(180deg)'
      : 'rotate(0deg)';
  });

  selectOptions.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      selectedLanguage.textContent = e.target.textContent;
      customSelect.classList.remove('active');
      selectArrow.style.transform = 'rotate(0deg)';
      // Опціонально: Оновити значення селекта
      document.querySelector('#language').value =
        e.target.getAttribute('value');
    }
  });

  // Додати обробник подій для закриття селектора при кліку в інше місце екрану
  document.addEventListener('click', function (e) {
    if (!customSelect.contains(e.target)) {
      customSelect.classList.remove('active');
      selectArrow.style.transform = 'rotate(0deg)';
    }
  });
});
