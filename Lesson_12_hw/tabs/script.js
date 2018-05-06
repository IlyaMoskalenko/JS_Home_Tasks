var routes = {
		"#Task1": {
			path: "Tasks/Context menu/index.html"
		}
		,"#Task2": {
			path: "Tasks/Labyrinth/index.html"
		}
		,"#Task3": {
			path: "Tasks/Lesson_9 - Praktikum_1/index1.html"
		}
		,"#Task4": {
			path: "Tasks/Player/index.html"
		}
	}

var container = document.getElementsByClassName("container")[0]

var doRoute = function(){
	var hash = location.hash;
	if(typeof routes[hash] == "object"){
		// alert();
		var path = routes[hash].path;
		var xhr = new XMLHttpRequest;
			xhr.open("GET",path,true);
			xhr.onload = function(){
				container.innerHTML = this.responseText;
			}
			xhr.send();

		for(var h in routes){
			var links = document.querySelectorAll("a[href='"+h+"']");
			for (var i = 0; i < links.length; i++){
				if(hash == h){
					links[i].classList.add("active");	
				}
				else{
					links[i].classList.remove("active");
				}
			}

		}
	}
}
window.addEventListener("hashchange",doRoute);
doRoute();	