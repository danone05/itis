// Чтение содержимого файла
let fs = require('fs');
let arg = process.argv;
let inText;

try {
	inText = fs.readFileSync(arg[2], 'utf-8');

	let pattern = "ab";
	let m = pattern.length;
	let alph = new Array();

	for (let i = 0; i < m; i++) {
		alph[pattern.charAt(i)] = 0;
	}

	let del = new Array(m + 1); //Таблица переходов
	for (let j = 0; j <= m; j++) {
		del[j] = new Array();
	}

	for (let i in alph) {
		del[0][i] = 0;
	}

	for (let j = 0; j < m; j++) {
		let prev = del[j][pattern.charAt(j)];
		del[j][pattern.charAt(j)] = j + 1;
		for (let i in alph) {
			del[j + 1][i] = del[prev][i];
		}
	}

	for (let j = 0; j <= m; j++) {
		let out = '';
		for (let i in alph) {
			out += del[j][i] + ' ';
		}
		console.log(out);
	}

	let results = new Array();
	let state = 0;
	for (let i = 0; i < inText.length; i++) {
		if (inText.charAt(i) in alph) {
			state = del[state][inText.charAt(i)];
		} else {
			state = 0;
		}

		if (state === m) {
			results.push(i - m + 1);
		}
	}

	console.log("Совпадения найдены на позициях:", results);
} catch (err) {
	console.error(err);
}
