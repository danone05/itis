const readline = require('readline');

function findOccurrencesBruteForce(S, T) { // Brute Force
    let n = S.length;
    let m = T.length;
    let positions = [];

    for (let i = 0; i <= n - m; i++) {
        let match = true;
        for (let j = 0; j < m; j++) {
            if (S[i + j] !== T[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            positions.push(i + 1); // ���������� � 1
        }
    }

    return positions;
}

function findOccurrencesWithHash(S, T) {    // ����
    let n = S.length;
    let m = T.length;

    let targetHash = 0;
    for (let i = 0; i < m; i++) {
        targetHash += T.charCodeAt(i);  // ����� ����� �������� � ������ T
    }

    let currentHash = 0;
    for (let i = 0; i < m; i++) {
        currentHash += S.charCodeAt(i);  // ����� ����� �������� ��� ������� ���������
    }

    let positions = [];

    for (let i = 0; i <= n - m; i++) {
        if (currentHash === targetHash) {
            let match = true;
            for (let j = 0; j < m; j++) {
                if (S[i + j] !== T[j]) {
                    match = false;
                    break;
                }
            }

            if (match) {
                positions.push(i + 1);  // ������� � �������� � 1
            }
        }

        if (i < n - m) {
            currentHash -= S.charCodeAt(i);
            currentHash += S.charCodeAt(i + m);
        }
    }

    return positions;
}

// ������ �������������
let S1 = "abcabdecab";
let T1 = "cab";
console.log(findOccurrencesBruteForce(S1, T1));  // �����: [3, 8]
console.log(findOccurrencesWithHash(S1, T1));  // �����: [3, 8]

let S2 = "sads2asdsad";
let T2 = "sad";
console.log(findOccurrencesBruteForce(S2, T2));  // �����: [1, 3, 5, 9]
console.log(findOccurrencesWithHash(S2, T2));  // �����: [1, 3, 5, 9]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
