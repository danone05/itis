let fs = require('fs'); // объект для работы с файоловой системой.
let arg = process.argv; // массив, содержащий аргументы, переданные скрипту при запуске. Непосредственно arg[1] node, arg[2] file_jsa, arg[3] file_txt

let inputFile = arg[2]; // Входной файл
let encodedFile = 'code.txt'; // Файл для закодированной строки
let decodedFile = 'decode.txt'; // Файл для декодированной строки

let inText = fs.readFileSync(inputFile); // fs.readFileSync(inputFile) читает содержимое файла inputFile синхронно
inText = inText.toString();

// Кодирование
let encodedText = '';
let i = 0;
while (i < inText.length) {
    let n = 1;
    while (i + n < inText.length && inText.charAt(i + n) === inText.charAt(i)) {
        n++;
    }
    encodedText += inText.charAt(i) + n;
    i += n;
}

fs.writeFileSync(encodedFile, encodedText); // Сохранение кодированной строки в файл
console.log(`Закодированная строка сохранена в code.txt: `, encodedText);

// Декодирование
let decodedText = '';
i = 0;
while (i < encodedText.length) {
    let char = encodedText.charAt(i);
    i++;
    let count = '';
    while (i < encodedText.length && !isNaN(encodedText.charAt(i))) {
        count += encodedText.charAt(i);
        i++;
    }
    decodedText += char.repeat(Number(count));
}

fs.writeFileSync(decodedFile, decodedText); // Сохранение декодированной строки в файл
console.log(`Декодированная строка сохранена в decode.txt: `, decodedText);

// Проверка совпадения строк
if (inText === decodedText) {
    console.log('Декодированная строка совпадает с исходной строкой');
} else {
    console.error('Ошибка: декодированная строка не совпадает с исходной');
}
