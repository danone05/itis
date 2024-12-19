const fs = require('fs');

function interpret(program) {
  const memory = new Array(256).fill(0);

  const lines = program.split('\n');
  let lineNum = 0;

  while (lineNum < lines.length) {
    const line = lines[lineNum].trim().split(' ');
    const command = line[0];

    switch (command) {
      case 'SET':
        const value = parseInt(line[1]);
        const index = parseInt(line[2]);
        memory[index] = value;
        break;

      case 'MOV':
        const source = parseInt(line[1]);
        const destination = parseInt(line[2]);
        
        memory[destination] = memory[source];
        break;

      case 'ADD':
        const source1 = parseInt(line[1]);
        const source2 = parseInt(line[2]);
        const destAdd = parseInt(line[3]);
        memory[destAdd] = memory[source1] + memory[source2];
        break;

      case 'SUB':
        const sourceSub1 = parseInt(line[1]);
        const sourceSub2 = parseInt(line[2]);
        const destSub = parseInt(line[3]);
        memory[destSub] = memory[sourceSub1] - memory[sourceSub2];
        break;

      case 'DIV':
        const divisiblePointer = parseInt(line[1]);
        const dividerPointer = parseInt(line[2]);
        const resultPointer = parseInt(line[3]);
        memory[resultPointer] = Math.floor(memory[divisiblePointer] / memory[dividerPointer]);
        break;

    case 'MULT':
        const multiplier1Pointer = parseInt(line[1]);
        const multiplier2Pointer = parseInt(line[2]);
        const productPointer = parseInt(line[3]);
        memory[productPointer] = memory[multiplier1Pointer] * memory[multiplier2Pointer];
        break;

      case 'OUT':
        const sourceOut = parseInt(line[1]);
        console.log(memory[sourceOut]);
        break;

      case 'JMP':
        const jmpLine = parseInt(line[1]);
        lineNum = jmpLine - 1;
        break;

      case 'JZ':
        const condition = parseInt(line[1]);
        const jmpIfZeroLine = parseInt(line[2]);
        if (memory[condition] === 0) {
          lineNum = jmpIfZeroLine - 2;
        }
        break;

      case 'NONJZ':
        const cond = parseInt(line[1]);
        const jmpIfNonZeroLine = parseInt(line[2]);
        if (memory[cond] !== 0) {
            lineNum = jmpIfNonZeroLine - 2;
        }
        break;

      default:
        console.log('Неизвестная команда: ' + command);
    }

    lineNum++;
  }
}

const fileName = process.argv[2];
const program = fs.readFileSync(fileName, 'utf8');
interpret(program);