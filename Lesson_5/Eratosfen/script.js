var clocks = function(){

	var interval = setInterval(function(){
		var divTime = document.getElementById("time");
		var d1 = new Date();
		var Hours = d1.getHours();
		var Minutes = d1.getMinutes();
		var Seconds =  d1.getSeconds();
			if (Seconds%2 == 0){
			divTime.innerText = Hours + ":" + Minutes + ":" + Seconds; 
			}
			else
				divTime.innerText = Hours + " " + Minutes + " " + Seconds; 

	},1000)
}

//window.clocks();

var Eratosfen = function(){

	var N = Number(prompt("Введите N:"));
	var newTable = document.createElement("table");
	newTable.setAttribute("style","margin: auto;");
	var script = document.getElementsByTagName("script");
	document.body.appendChild(newTable);

	function isPrime(num){
	    for(var i = 2; i < num; i++)
	    	if(num % i === 0) return false;
	    return num !== 1;
	}
		
	function putColors(index){
		var nTd = document.getElementsByTagName("td")[index]; 
		if (isPrime(index + 1)){
			nTd.setAttribute("style","background: #00FF00;");
		}
		else
			nTd.setAttribute("style","background: #FF2400;");
	}
		
	for(var i = 0; i < N; i++){
		var newTr = document.createElement("tr");
		newTable.appendChild(newTr);
		for(var j = 0; j < N; j++){
			var newTd = document.createElement("td");
			newTr.appendChild(newTd);
			newTd.innerText = (i*N+j+1).toString();
		}
	}

	var i = 0;
	var interval = setInterval(function(){
		putColors(i);
		i++;
		if(i == N*N){
			clearInterval(interval);
		}
	},100);
}

window.Eratosfen();

