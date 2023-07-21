const fs = require('fs');

const filePath = 'input.txt';

fs.readFile(filePath,'utf8',(err,data) => {
	if(err) {
		console.error(err);
		return;
	} 

    const instrs = data.split(',').map(x => x.trim());
    console.log(instrs);

    //rules
    const rules = { 'N': {'L': ['W', [-1, 0]], 'R': ['E', [1, 0]] },
                    'S': {'L': ['E', [1, 0]], 'R': ['W', [-1, 0]] },
                    'E': {'L': ['N', [0, 1]], 'R': ['S', [0,-1]] },
                    'W': {'L': ['S', [0, -1]], 'R': ['N', [0, 1]] } }; 

    let startingPosition = [0, 0];
    console.log(startingPosition);

    let currentDirection = 'N';
    let currentPoint = [0, 0];

    for (let instr of instrs){
        console.log(instr);
        switch(currentDirection){
            case 'N':
                if(instr[0] === 'L'){
                    currentPoint[0] = currentPoint[0] + parseInt(instr.slice(1)) * rules['N']['L'][1][0];
                    currentPoint[1] = currentPoint[1] + parseInt(instr.slice(1)) * rules['N']['L'][1][1];
                    currentDirection = rules['N']['L'][0];
                }else if(instr[0] === 'R'){
                    currentPoint[0] = currentPoint[0] + parseInt(instr.slice(1)) * rules['N']['R'][1][0];
                    currentPoint[1] = currentPoint[1] + parseInt(instr.slice(1)) * rules['N']['R'][1][1];
                    currentDirection = rules['N']['R'][0];
                }
                break;
            case 'S':
                if(instr[0] === 'L'){
                    currentPoint[0] = currentPoint[0] + parseInt(instr.slice(1)) * rules['S']['L'][1][0];
                    currentPoint[1] = currentPoint[1] + parseInt(instr.slice(1)) * rules['S']['L'][1][1];
                    currentDirection = rules['S']['L'][0];
                }else if(instr[0] === 'R'){
                    currentPoint[0] = currentPoint[0] + parseInt(instr.slice(1)) * rules['S']['R'][1][0];
                    currentPoint[1] = currentPoint[1] + parseInt(instr.slice(1)) * rules['S']['R'][1][1];
                    currentDirection = rules['S']['R'][0];
                }
                break;
            case 'E':
                if(instr[0] === 'L'){
                    currentPoint[0] = currentPoint[0] + parseInt(instr.slice(1)) * rules['E']['L'][1][0];
                    currentPoint[1] = currentPoint[1] + parseInt(instr.slice(1)) * rules['E']['L'][1][1];
                    currentDirection = rules['E']['L'][0];
                }else if(instr[0] === 'R'){
                    currentPoint[0] = currentPoint[0] + parseInt(instr.slice(1)) * rules['E']['R'][1][0];
                    currentPoint[1] = currentPoint[1] + parseInt(instr.slice(1)) * rules['E']['R'][1][1];
                    currentDirection = rules['E']['R'][0];
                }
                break;
            case 'W':
                if(instr[0] === 'L'){
                    currentPoint[0] = currentPoint[0] + parseInt(instr.slice(1)) * rules['W']['L'][1][0];
                    currentPoint[1] = currentPoint[1] + parseInt(instr.slice(1)) * rules['W']['L'][1][1];
                    currentDirection = rules['W']['L'][0];
                }else if(instr[0] === 'R'){
                    currentPoint[0] = currentPoint[0] + parseInt(instr.slice(1)) * rules['W']['R'][1][0];
                    currentPoint[1] = currentPoint[1] + parseInt(instr.slice(1)) * rules['W']['R'][1][1];
                    currentDirection = rules['W']['R'][0];
                }
                break;
            
        }
        console.log(currentPoint);
        console.log(currentDirection);
        }

        console.log(currentPoint);
        console.log(Math.abs(currentPoint[0] - startingPosition[0]) + Math.abs(currentPoint[1] - startingPosition[1]));
  
    });




