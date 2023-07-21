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

    let currentDirection = 'N';
    let currentPoint = [0, 0];

    for (let instr of instrs){
        let nextDirection = rules[currentDirection][instr[0]][0];
        let nextDirectionCoordinates = rules[currentDirection][instr[0]][1];
        let blocks = instr.slice(1);


        currentPoint[0] = currentPoint[0] + parseInt(blocks) * nextDirectionCoordinates[0];
        currentPoint[1] = currentPoint[1] + parseInt(blocks) * nextDirectionCoordinates[1];
        currentDirection = nextDirection;
        }
        console.log(Math.abs(currentPoint[0] - startingPosition[0]) + Math.abs(currentPoint[1] - startingPosition[1]));
  
    });




