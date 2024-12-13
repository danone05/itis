inputString = ''; // Входная строка

alph_1 = new Array(); // Массив для уникальных символов
alph_2 = new Array(); // Второй массив (пока не используется в логике)

// Формируем массив уникальных символов
for (let i = 0; i < inputString.length; i++) {
  if (!(inputString[i] in alph_1)) { // Если символ еще не добавлен в alph_1
    alph_1.push(inputString[i]); // Добавляем уникальный символ
  }
}

console.log(alph_1); // Выводим массив уникальных символов

// Проверяем, является ли строка пустой
if (inputString.trim().length > 0) { // Удаляем пробелы и проверяем длину строки
  alph = new Array(); // Массив для подсчёта частот символов

  // Подсчёт количества вхождений каждого символа
  for (let i = 0; i < inputString.length; i++) {
    if (alph[inputString[i]] >= 0) {
      alph[inputString[i]]++; // Увеличиваем частоту символа
    } else {
      alph[inputString[i]] = 1; // Инициализируем частоту символа
    }
  }

  lenAlph = 0; // Количество уникальных символов
  entropy = 0; // Энтропия Шеннона

  // Вычисляем вероятности символов
  for (let i in alph) {
    lenAlph++; // Увеличиваем счётчик уникальных символов
    alph[i] /= inputString.length; // Преобразуем частоту в вероятность
  }

  // Если в строке больше одного уникального символа, считаем энтропию
  if (lenAlph > 1) {
    for (let i in alph) {
      entropy -= alph[i] * Math.log(alph[i]); // Основная формула энтропии
    }
    entropy /= Math.log(lenAlph); // Нормализация энтропии
  }

  console.log(entropy); // Выводим результат
} else {
  console.log('False!! Строка пуста!'); // Сообщение об ошибке
}
