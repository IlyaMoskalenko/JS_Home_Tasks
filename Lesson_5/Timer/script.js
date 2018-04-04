var timer = function(){
	var div = document.getElementById("time");
	var styleStr = "position:relative; display: inline-block;";
	div.setAttribute("style", styleStr);

	var currentTime = Date.now();
	var phi = 2 * Math.PI;
	var r = 300;
	var k = 4;
	var left = "";
	var top = "";

	function drawTime(){
		var d1 = new Date();
		var Hours = d1.getHours();
		var Minutes = d1.getMinutes();
		var Seconds =  d1.getSeconds();
			if (Seconds%2 == 0){
			div.innerText = (23 - Hours) + ":" + (59 - Minutes) + ":" + (59 - Seconds); 
			}
			else
				div.innerText = (23 - Hours) + " " + (59 - Minutes) + " " + (59 - Seconds);
	}

	function pos(t){
		var r = 300*Math.cos(k*phi*t);
		left = r * Math.cos(phi * t);
		top = document.documentElement.clientHeight/2-120 + r * Math.sin(phi * t)+10;
		div.setAttribute("style",styleStr + "left:" + Math.round(left) + "px; top:" + Math.round(top) + "px");
		drawTime();
	}

	var interval = setInterval(function(){
		var t = Date.now() - currentTime;
		pos(t/70000);
	},10)

}

window.timer();