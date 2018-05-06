var N;
var xhr = new XMLHttpRequest;
	xhr.open("GET", "number.json", true);
	xhr.onload = function(){
		N = Number(this.responseText);
		createTable(N);
	}
	xhr.send(null);

function createTable(N){
	var table = document.getElementById("table");

	for(var i = 1; i <= N; i++){
		var newTr = document.createElement("tr");
		console.log(123)
		for(var j = 1; j <= N; j++){
			var newTd = document.createElement("td");
				newTd.innerText = i*j;
				newTr.appendChild(newTd);
		}
		table.appendChild(newTr);
	}
}

