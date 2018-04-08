function polynom(){
	var div = document.createElement("div");
	document.body.appendChild(div);
	var btnCreatePolynom = document.createElement("button");
	btnCreatePolynom.innerText = "Add term";
	
	btnCreatePolynom.addEventListener("click",function(){
		var field = document.createElement("input");
		var btnDeleteField = document.createElement("button");
		var select = document.createElement("select");
			var optionDefault = document.createElement("option")
				optionDefault.innerText = "○"; //выбрать операцию
			var plus = document.createElement("option");
				plus.innerText = "+";
			var minus = document.createElement("option");
				minus.innerText = "-";
			var mult = document.createElement("option");
				mult.innerText = "*";
			var divis = document.createElement("option");
				divis.innerText = "/";

				select.appendChild(optionDefault);
				select.appendChild(plus);
				select.appendChild(minus);
				select.appendChild(mult);
				select.appendChild(divis);

			btnDeleteField.addEventListener("click",function(){
				field.remove();
				btnDeleteField.remove();
				select.remove();
			});
			btnDeleteField.innerText = "x";
		field.setAttribute("class","field");
		div.appendChild(field);
		div.appendChild(btnDeleteField);
		div.appendChild(select);
	})
	div.appendChild(btnCreatePolynom);
	var br = document.createElement("br");
	div.appendChild(br);
}

polynom();