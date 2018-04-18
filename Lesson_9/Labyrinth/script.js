var N = Number(prompt("размер лабиринта:"));
	N = (N % 2 == 0) ? (N + 1) : N; 

function labyrinth(N,blockMatrix,wallsArray, currentPos){

	function createTable(N){
	var labyrinth = document.getElementById("labyrinth");
	var table = document.getElementById("table");

		for(var i = 0; i < N; i++){
			blockMatrix[i] = [];
			var newTr = document.createElement("tr");
			for(var j = 0; j < N; j++){
				blockMatrix[i][j] = 'Wall'
				var newTd = document.createElement("td");
					newTd.classList.add("wall");
					newTd.setAttribute('id', i + '-' + j);
					newTr.appendChild(newTd);
			}
			table.appendChild(newTr);
		}
		console.log(blockMatrix)
	}

	function isValidNeibhours(x,y){
		return ((y < N && y >= 0) && (x < N && x >= 0)) ? true : false; 
	}

	function way(y,x,flag) {
    	blockMatrix[y][x] = 'Way';
    	document.getElementById(x+'-'+y).classList.add('way');
    	document.getElementById(x+'-'+y).classList.remove('wall');
    	    if (flag && isValidNeibhours(y+1,x) && (blockMatrix[y+1][x] == 'Wall')) wallsArray.push([y+1,  x , [y,x]]);
     		if (flag && isValidNeibhours(y-1,x) && (blockMatrix[y-1][x] == 'Wall')) wallsArray.push([y-1,  x , [y,x]]);
            if (flag && isValidNeibhours(y,x+1) && (blockMatrix[y][x+1] == 'Wall')) wallsArray.push([ y , x+1, [y,x]]);
            if (flag && isValidNeibhours(y,x-1) && (blockMatrix[y][x-1] == 'Wall')) wallsArray.push([ y , x-1, [y,x]]);
    }

	function createWay(){
		way(currentPos[0],currentPos[1], true);

		while(wallsArray.length != 0){
		    var randomWall = wallsArray[Math.floor(Math.random() * wallsArray.length)];
		    var host = randomWall[2];
		    var opposite = [(host[0] + (randomWall[0]-host[0])*2), (host[1] + (randomWall[1]-host[1])*2)];

		        if ( isValidNeibhours(opposite[0],opposite[1]) ){
		            if ( blockMatrix[opposite[0]][opposite[1]] == 'Way' ){
		                wallsArray.splice(wallsArray.indexOf(randomWall),1);
		            }
		            else {
		                way(randomWall[0],randomWall[1],false);
		                way(opposite[0],opposite[1],true);
		                }
		          }
		        else wallsArray.splice(wallsArray.indexOf(randomWall),1);
		}
	}

	function playerMove(){
		
		var player = document.getElementById('0-0').classList.add("player");
	 	var destination = document.getElementById((parseInt(N)-1)+'-'+(parseInt(N)-1)).classList.add("destination");
	        document.body.addEventListener("keydown", function(e){
		    var newPos = [currentPos[0] + ((e.keyCode - 39) % 2), currentPos[1] + ((e.keyCode - 38) % 2)];

		    if ( isValidNeibhours(newPos[1],newPos[0]) && blockMatrix[newPos[1]][newPos[0]] != "Wall" ) {
		    	document.getElementById(currentPos[0]+'-'+currentPos[1]).classList.remove('player');
		        currentPos = newPos;
		        document.getElementById(currentPos[0]+'-'+currentPos[1]).classList.add("player");
		        if (currentPos[0] == N-1 && currentPos[1] == N-1){ 
		        	// document.getElementById('complete').setAttribute('style','display:block');
		        	alert("Win! Page will be reloaded.");
		        	location.reload();
		        }
		    }
	 	})
	}

createTable(N);
createWay();
playerMove();

}

labyrinth(N, [], [], [0,0]);
