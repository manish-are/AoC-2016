const fs = require('fs');

const filePath = 'input.txt';

fs.readFile(filePath,'utf8',(err,data) => {
	if(err) {
		console.error(err);
		return;
	}
    const instrs= data.split('\n');

    //rules
    const rules = {
        1: {'R': 2, 'D': 4},
        2: {'L': 1, 'R': 3, 'D': 5},
        3: {'L':2, 'D': 6},
        4: {'R': 5, 'U': 1, 'D': 7},
        5: { 'L': 4, 'R': 6, 'U': 2, 'D': 8},
        6: {'L': 5, 'U': 3, 'D': 9},
        7: {'R': 8, 'U': 4},
        8: {'L': 7, 'R': 9, 'U': 5},
        9: {'L': 8, 'U': 6}
    };

    let startingButton = 5;
    //part1
    function part1(){
        let currentButton = startingButton;
        let code = '';
        for (let instr of instrs){
            for (let dir of instr.split('')){
                if (rules[currentButton][dir] !== undefined){
                    currentButton = rules[currentButton][dir];
                }
            }
            code += currentButton;
        }
        return code;
    }

    console.log(part1());

});