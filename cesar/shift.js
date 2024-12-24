const ALPHABET_SIZE = 26;
function caesarCipher(text, shift) { // Шифрование and Дешифрование
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift + ALPHABET_SIZE) % ALPHABET_SIZE + 'A'.charCodeAt(0));
        } else if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + shift + ALPHABET_SIZE) % ALPHABET_SIZE + 'a'.charCodeAt(0));
        } else {
            result += char;
        }
    }
    return result;
}

// Пример
const inputText = "Hello, World!";
const shift = 3;

const encryptedText = caesarCipher(inputText, shift);
console.log("Зашифрованный текст:", encryptedText);

const decryptedText = caesarCipher(encryptedText, -shift);
console.log("Дешифрованный текст:", decryptedText);

