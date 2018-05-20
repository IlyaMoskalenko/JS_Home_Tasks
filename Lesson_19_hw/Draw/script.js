var App = {
	Init: function(){
		this.setCanvasSize();
		this.draw();
		this.Elements.btnClear.addEventListener("click", this.clear);
		// window.onload = this.reload;
	}
	,Elements: {
		Canvas: document.getElementById("canvas")
		,Ctx: document.getElementById("canvas").getContext("2d")
		,btnClear: document.getElementById("clear")
		,btnReload: document.getElementById("reload")
	}
	,Data: {
		isMouseDown: false
		,radius: 10
		,mouseCoords: []
		,imageData: null
		,isCleared: false
	}
	,setCanvasSize: function(){
		this.Elements.Canvas.width = window.innerWidth - 10;
		this.Elements.Canvas.height = window.innerHeight - 50;
	}
	,draw: function(){
		App.Elements.Ctx.lineWidth = App.Data.radius * 2;
		this.Elements.Canvas.addEventListener("mousedown",function(e){
			App.Data.isMouseDown = true;
		})

		this.Elements.Canvas.addEventListener("mouseup",function(e){
			App.Data.isMouseDown = false;
			App.Elements.Ctx.beginPath();
			App.savePicture();
		})

		this.Elements.Canvas.addEventListener("mousemove",function(e){	
			if( App.Data.isMouseDown ){
				App.Data.mouseCoords.push([e.clientX, e.clientY])

				App.Elements.Ctx.lineTo(e.clientX, e.clientY);
				App.Elements.Ctx.stroke();

				App.Elements.Ctx.beginPath();
				App.Elements.Ctx.arc(e.clientX, e.clientY, App.Data.radius, 0, Math.PI * 2);
				App.Elements.Ctx.fill();

				App.Elements.Ctx.beginPath();
				App.Elements.Ctx.moveTo(e.clientX, e.clientY)	
			}
		})
	}
	,clear: function(){
		App.Data.isCleared = true;
		localStorage.clear();
		App.Elements.Ctx.fillStyle = 'white';
		App.Elements.Ctx.fillRect(0,0, window.innerWidth - 10, window.innerHeight - 50);
		App.Elements.Ctx.beginPath();
		App.Elements.Ctx.fillStyle = 'black';
		App.Data.mouseCoords = []
	}
	,savePicture: function(){
		App.Data.isCleared = false;
			localStorage.setItem("coords", JSON.stringify(App.Data.mouseCoords))
	}
	,reload: function(){
		if(!App.Data.isCleared){
			App.Data.mouseCoords = JSON.parse(localStorage.getItem("coords"))
			// console.log(App.Data.mouseCoords)
		}
			// if( !App.Data.mouseCoords.length ){
			// 	App.Elements.Ctx.beginPath();
			// 	return;
			// }
			// var current = App.Data.mouseCoords.shift();
			// var e = {
			// 	clientX: current["0"]
			// 	,clientY: current["1"]
			// };
			// App.Elements.Ctx.lineTo(e.clientX, e.clientY);
			// App.Elements.Ctx.stroke();

			// App.Elements.Ctx.beginPath();
			// App.Elements.Ctx.arc(e.clientX, e.clientY, App.Data.radius, 0, Math.PI * 2);
			// App.Elements.Ctx.fill();

			// App.Elements.Ctx.beginPath();
			// App.Elements.Ctx.moveTo(e.clientX, e.clientY)

		
	}
}
App.Init();