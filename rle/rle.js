let fs = require('fs');

let inText = fs.readFileSync('input.txt', 'utf8');
inText = inText.toString();

let len = inText.length;

fs.writeFileSync('code.txt', '');
fs.writeFileSync('decode.txt', '');

//Кодирование

for(let i = 0; i < len; i++){
    let n = 0;
    while(inText.charAt(i) == inText.charAt(i+n)){
        n++;
    }
    i += n-1;

    while(n >= 255){
        fs.appendFileSync('code.txt', "#"+ String.fromCharCode(255) + inText.charAt(i));
        n = n - 255;
    }
    if (n > 3 || inText.charAt(i) == '#')
        fs.appendFileSync('code.txt', "#" + String.fromCharCode(n));

    //случай, если два повтора
    if(n == 3 && inText.charAt(i) != '#'){
        fs.appendFileSync('code.txt', inText.charAt(i));
        fs.appendFileSync('code.txt', inText.charAt(i));
    }
    else if(n == 2 && inText.charAt(i) != '#'){
        fs.appendFileSync('code.txt', inText.charAt(i));
    }
    fs.appendFileSync('code.txt', inText.charAt(i));
}

//Декдирование

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

let CompRatio = fs.statSync('input.txt').size / fs.statSync('code.txt').size;

if (inDecodeText === inText) {
    console.log("Successfully");
    console.log("Сompression ratio = ", CompRatio);
}
else {
    console.log("Failed.RLE is not working");
}
