// Знаходимо поле введення
const textInput = document.querySelector('.text-input');

// Знаходимо всі клавіші
const keys = document.querySelectorAll('.key');

// Додаємо обробник кліків для кожної клавіші
keys.forEach((key) => {
  key.addEventListener('click', () => {
    const keyText = key.textContent.trim(); // Отримуємо текст із клавіші

    // Обробка спеціальних клавіш
    if (keyText === 'Backspace') {
      // Видаляємо останній символ
      textInput.value = textInput.value.slice(0, -1);
    } else if (keyText === 'Enter') {
      // Додаємо новий рядок
      textInput.value += '\n';
    } else if (keyText === 'Space') {
      // Додаємо пробіл
      textInput.value += ' ';
    } else {
      // Додаємо текст із клавіші
      textInput.value += keyText;
    }

    // Фокусуємо поле введення
    textInput.focus();
  });
});
