let fs = require('fs');
let inText = fs.readFileSync('input.txt', 'utf8');
inText = inText.toString();
let len = inText.length;
fs.writeFileSync('code.txt', '');
fs.writeFileSync('decode.txt', '');

//Кодирование input.txt
for(let i = 0; i < len; i++){
    let n = 0;
    while(inText.charAt(i) == inText.charAt(i+n)){
        n++;
    }
    i += n-1;

    //Кодирование строки
    if(n > 2){
        while(n >= 255){
            fs.appendFileSync('code.txt', "#"+ String.fromCharCode(255) + inText.charAt(i));
            n = n - 255;
        }
		
        fs.appendFileSync('code.txt', "#" + String.fromCharCode(n));
    }

    //если два повтора или нет повторов
    if(n == 2){
        fs.appendFileSync('code.txt', inText.charAt(i));
    }
    fs.appendFileSync('code.txt', inText.charAt(i));
}

//Декдирование code.txt

let inCodeText = fs.readFileSync('code.txt', 'utf8');
inCodeText = inCodeText.toString();

len = inCodeText.length;

for(let i = 0; i < len; i++){
    if(inCodeText.charAt(i) == '#'){
        let repeat = inCodeText.charCodeAt(i + 1);
        for (let j = 0; j < repeat; j++){
            fs.appendFileSync('decode.txt', inCodeText.charAt(i + 2))
        }
        i += 2;
    }
    else{
        fs.appendFileSync('decode.txt', inCodeText.charAt(i))
	}
}

let inDecodeText = fs.readFileSync('decode.txt', 'utf8');
inDecodeText = inDecodeText.toString();

let Cf = fs.statSync('input.txt').size / fs.statSync('code.txt').size; //Считаем коэффициент сжатия

if (inDecodeText === inText) { //Проверка работы RLE и вывод коэффициента сжатия
    console.log("RLE is working");
	console.log("Сompression ratio : ", Cf);
}
else {
    console.log("RLE is not working");

}
// node rle.js input.txt
