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
    let currentPosition = [0, 0];

    for (let instr of instrs){

        let [movement, blocks] = [instr[0], parseInt(instr.slice(1))];

        let nextDirection = rules[currentDirection][movement][0];
        let nextDirectionCoordinates = rules[currentDirection][movement][1];
        
        //change currentDirection and currentPosition according to rules
        currentPosition[0] = currentPosition[0] + blocks * nextDirectionCoordinates[0];
        currentPosition[1] = currentPosition[1] + blocks * nextDirectionCoordinates[1];
        currentDirection = nextDirection;
        }
        console.log(Math.abs(currentPosition[0] - startingPosition[0]) + Math.abs(currentPosition[1] - startingPosition[1]));
  
    });




