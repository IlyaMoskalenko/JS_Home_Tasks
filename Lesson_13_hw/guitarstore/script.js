var content = document.getElementById("content");
var flag = false;
var appendStore = function(){
	var xhr = new XMLHttpRequest;
		xhr.open("GET","Store.json",true);
		xhr.onload = function(){
			content.innerHTML = this.responseText;
			flag = true;
		}
		xhr.send();
}
appendStore();
	
var appendGuitars = function(){
	var xhr = new XMLHttpRequest;
		xhr.open("GET","GuitarBrands.json",true);
		xhr.onload = function(){
			container.innerHTML = this.responseText;
		}
		xhr.send();
}

var appendStrings = function(){
	var xhr = new XMLHttpRequest;
		xhr.open("GET","StringsBrands.json",true);
		xhr.onload = function(){
			container.innerHTML = this.responseText;
		}
		xhr.send();
}

var appendAccesoires = function(){
	var xhr = new XMLHttpRequest;
		xhr.open("GET","Accesoires.json",true);
		xhr.onload = function(){
			container.innerHTML = this.responseText;
		}
		xhr.send();
}

var appendPedals = function(){
	var xhr = new XMLHttpRequest;
		xhr.open("GET","Pedals.json",true);
		xhr.onload = function(){
			container.innerHTML = this.responseText;
		}
		xhr.send();
}
var int = setInterval(function(){
	if(window.flag){
		var container = document.getElementById("container");
		var tabs = document.getElementsByClassName("tab")[0];
			tabs.addEventListener("click",function(e){
			appendGuitars();
			})

		var tabs = document.getElementsByClassName("tab")[1];
			tabs.addEventListener("click",function(e){
			appendStrings();
			})

		var tabs = document.getElementsByClassName("tab")[2];
			tabs.addEventListener("click",function(e){
			appendAccesoires();
			})

		var tabs = document.getElementsByClassName("tab")[3];
			tabs.addEventListener("click",function(e){
			appendPedals();
			})
		clearInterval(int);
	}
},10)