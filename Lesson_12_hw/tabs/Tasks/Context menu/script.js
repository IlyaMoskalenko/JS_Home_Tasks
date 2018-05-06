function contextMenu(){

	var mainMenu = document.getElementById("mainMenu");
	var menuStyle = window.getComputedStyle(mainMenu)
	    mainMenu.classList.add("invisible")

	var X = 0;
	var Y = 0;

	document.body.addEventListener("click",function(e){
		// console.log(menuStyle.height)
		window.X = e.screenX;
		window.Y = e.screenY;
		if(parseInt(e.screenX)+parseInt(menuStyle.width) < parseInt(innerWidth)){
			if(parseInt(e.screenY)+parseInt(menuStyle.height) - 91 < parseInt(innerHeight)){
				// console.log(menuStyle.height)
				mainMenu.style.left = parseInt(e.screenX)  + 'px';
				mainMenu.style.top = parseInt(e.screenY) - 91 + 'px';
				mainMenu.classList.toggle("invisible")
			}
			else{
				mainMenu.style.left = parseInt(e.screenX)  + 'px';
				mainMenu.style.top = parseInt(e.screenY) - 91 - parseInt(menuStyle.height) + 'px';
				mainMenu.classList.toggle("invisible")
			}	
		}
		else{
			mainMenu.style.left = parseInt(e.screenX) - parseInt(menuStyle.width) + 'px';
			mainMenu.style.top = parseInt(e.screenY) - 91 + 'px';
			mainMenu.classList.toggle("invisible")
		}
	var sub = document.getElementById("sub")
		sub.addEventListener("mouseover",function(){
			setTimeout(function(){
				var substyle = window.getComputedStyle(sub);
    			var itemHeight = parseInt((substyle.padding.split(" "))[0]) + parseInt((substyle.padding.split(" "))[2]) + parseInt(substyle.height);
    			var subMenu = document.getElementsByClassName("subMenu")[0];
    			if(window.X + 2*parseInt(substyle.width) < parseInt(innerWidth)){
    				subMenu.classList.remove("invisible")
    				subMenu.style.left = parseInt(mainMenu.style.left) + parseInt(menuStyle.width) - 2 + 'px'
    				subMenu.style.top = parseInt(mainMenu.style.top) + 3*itemHeight -20 + 'px'
    			}
    			else{
    				subMenu.classList.remove("invisible")
    				subMenu.style.left = parseInt(mainMenu.style.left) - parseInt(menuStyle.width) - 2 + 'px'
    				subMenu.style.top = parseInt(mainMenu.style.top) + 3*itemHeight -20 + 'px'
    			}
			},150)
		})
		sub.addEventListener("mouseout",function(e){
			var subMenu = document.getElementsByClassName("subMenu")[0];
			setTimeout(function(){
				if (!(e.relatedTarget.parentNode.classList.contains("subMenu"))){
    				subMenu.classList.add("invisible")
    			}  		
			},150)
				subMenu.addEventListener("mouseout",function(e){
					if (!(e.relatedTarget.nodeName == "UL") && !(e.relatedTarget.nodeName == "LI")){
					subMenu.classList.add("invisible")
					}
				})
				subMenu.addEventListener("click",function(){
					subMenu.classList.add("invisible")
				})
		})
	})
	
}

contextMenu();