function scrolling(){
	var block = document.getElementById("block");
	// if(!(rect.bottom<0 || rect.top > innerHeight))
	var body = document.getElementsByTagName("body")[0];
	window.addEventListener("scroll",function(){	
		console.log(window.scrollY)
		if(window.scrollY > 598 && window.scrollY <= 1465){
			block.style.top = window.scrollY + "px";
		}	
	})

var btn = document.getElementById('btn')
	btn.addEventListener("click",function(){
		var interval = setInterval(function(){
			window.scrollBy(0,1);
			console.log(window.scrollY);
			if (2500 <= window.scrollY + window.innerHeight){
			clearInterval(interval)
			}	
		},1)
	})
}

scrolling();