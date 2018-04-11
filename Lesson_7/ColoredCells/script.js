function tableColors(){
	var N = Number(prompt("Введите N:"));

	var table = document.getElementById("table");

	for(var i = 0; i < N; i++){
		var newTr = document.createElement("tr");
		for(var j = 0; j < N; j++){
			var newTd = document.createElement("td");
			newTd.innerText = i*N+j+1;
			newTr.appendChild(newTd);
		}
		table.appendChild(newTr);
	}

	table.addEventListener("mouseover",function(e){
		if(e.target.nodeName == "TD"){
			e.target.setAttribute("style", "background: rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+");");
		}
	})
}

tableColors();