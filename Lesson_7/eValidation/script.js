function eValidation(){
	var error = document.getElementById("error");
	var input = document.getElementById('input');
	var pEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i;
	input.addEventListener("input",function(){
		if(input.value.match(pEmail) == null){
			input.setAttribute("style", "border: 1px solid red");
			error.setAttribute("style", "display: block;");
		}
	})
	input.addEventListener("blur",function(){
		input.removeAttribute("style");
		error.setAttribute("style", "display: none;");
		input.value = "";
	})
}

eValidation();