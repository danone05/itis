// Исходная строка
let inputString = 'hellooooooooo';

// Проверяем, является ли строка пустой
if (inputString.length > 0) {
    // Массив для хранения уникальных символов
    let alph_1 = new Array();

    // Массив для хранения частот символов
    let alph_2 = new Array();

    // Формируем массив уникальных символов и частот
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        const index = alph_1.indexOf(char); // Проверяем, есть ли символ в alph_1

        if (index === -1) {
            alph_1.push(char); // Добавляем новый уникальный символ
            alph_2.push(1);    // Инициализируем его частоту
        } else {
            alph_2[index]++; // Увеличиваем частоту символа
        }
    }

    // Массив для подсчёта частот символов (для энтропии)
    let alph = new Array();

    // Подсчитываем частоты символов
    for (let i = 0; i < inputString.length; i++) {
        if (alph[inputString[i]] >= 0) {
            alph[inputString[i]]++;
        } else {
            alph[inputString[i]] = 1;
        }
    }

    let lenAlph = 0; // Количество уникальных символов
    let entropy = 0; // Энтропия Шеннона

    // Вычисляем вероятности и энтропию
    for (let i in alph) {
        lenAlph++;
        alph[i] /= inputString.length; // Преобразуем частоту в вероятность
    }

    if (lenAlph > 1) {
        for (let i in alph) {
            entropy -= alph[i] * Math.log(alph[i]); // Основная формула энтропии
        }
        entropy /= Math.log(lenAlph); // Нормализация энтропии
    }

    // Выводим результаты
    console.log("Уникальные символы (alph_1):", alph_1); // Выводим уникальные символы
    console.log("Частоты символов (alph_2):", alph_2);   // Выводим частоты символов
    console.log(`Энтропия Шеннона: ${entropy}`); // Выводим энтропию
} else {
    console.log('False!! Строка пуста!'); // Сообщение об ошибке
}
