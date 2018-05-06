var btn = document.getElementById("btn");
var loader = document.getElementById("loader");
	loader.style.display = "none";
	btn.addEventListener("click",function(){
		var container = document.getElementById("container");
		var input = document.getElementById("input");
		var xhr = new XMLHttpRequest;
			xhr.open("GET", input.value, true);
			xhr.onload = function(){
				container.innerText = this.responseText;
				loader.style.display = "none";
			}
			xhr.send(null);
			loader.style.display = "block"
	})

