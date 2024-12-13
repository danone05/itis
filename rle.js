function escape_encode(input) { // функция, которая выполняет сжатие строки
    let result = ''; // запихиваем результат сжатой строки в result

    let i = 0;
    while (i < input.length) { // цикл перебирает каждый символ строки input
        let count = input[i]; // currentSymbol сохраняет символ строки input
        // подсчитываем количество одинаковых символов, которые идут друг за другом
        let length = 1;
        while (count == input[length + i]) {
            length++; // переменная увеличивается, пока символы совпадают
        }
        // Добавляем результат в result
        if (length <= 2) {
            result += count.repeat(length);
        } else {
            result += length + count;
        }
        // переход к следующим символам
        i += length;
    }
    return result;
}

function escape_decode(input) { // функция, которая выполняет декодирование строки
    let result = '';

    let i = 0;
    while (i < input.length) {
        if (isDigit(input[i])) { // проверяем, является ли текущий символ цифрой
            let num = '';
            while (isDigit(input[i])) { // собираем все цифры, представляющие число
                num += input[i];
                i++;
            }
            let count = parseInt(num, 10); // преобразуем число из строки в целое
            let char = input[i]; // следующий символ — это символ для повторения
            result += char.repeat(count); // добавляем символ, повторённый нужное количество раз
        } else {
            result += input[i]; // если это не цифра, просто добавляем символ
        }
        i++;
    }
    return result;
}

function isDigit(char) {
    return char >= '0' && char <= '9'; // проверяем, является ли символ цифрой
}

let fs = require('fs'); // подключили библиотеку

var inText = fs.readFileSync('input.txt'); // считали из файла
var a = inText.toString(); // сохранили в переменную как строку

let encode_str = escape_encode(a);
fs.writeFileSync('output_encoded.txt', encode_str); // записываем сжатую строку в файл

console.log("Коэффициент сжатия = ", a.length / encode_str.length); // выводим степень сжатия

let decode_str = escape_decode(encode_str);
fs.writeFileSync('output_decoded.txt', decode_str); // записываем декодированную строку в файл

console.log("Декодирование корректно: ", a === decode_str);
