var App = {
	Init: function(){
		this.setCanvasSize();
		this.loadFromStorage()
		this.draw();
		this.Elements.btnClear.addEventListener("click", this.clear);
	}
	,Elements: {
		Canvas: document.getElementById("canvas")
		,Ctx: document.getElementById("canvas").getContext("2d")
		,btnClear: document.getElementById("clear")
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
			App.Elements.Ctx.beginPath();
			App.Data.mouseCoords.push([e.clientX, e.clientY])
			App.Elements.Ctx.lineTo(e.clientX, e.clientY);
			App.Elements.Ctx.stroke();
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
		App.Elements.Ctx.fillStyle = 'white';
		App.Elements.Ctx.fillRect(0,0, window.innerWidth - 10, window.innerHeight - 50);
		App.Elements.Ctx.beginPath();
		App.Elements.Ctx.fillStyle = 'black';
		App.Data.mouseCoords = []
		localStorage.clear();
	}
	,savePicture: function(){
			localStorage.setItem("coords", JSON.stringify(App.Data.mouseCoords))
	}
	,loadFromStorage: function(){
		var coords = JSON.parse(localStorage.getItem('coords'))
		console.log(coords)
		if ( coords !== null ){
			var len = coords.length;
			App.Elements.Ctx.lineWidth = App.Data.radius * 2;
			for(var i = 0; i < len - 1; i++){
				App.Elements.Ctx.beginPath();
				App.Elements.Ctx.moveTo(coords[i][0], coords[i][1])
				
				App.Elements.Ctx.lineTo(coords[i+1][0], coords[i+1][1]);
				App.Elements.Ctx.stroke();

				App.Elements.Ctx.arc(coords[i][0], coords[i][1], App.Data.radius, 0, Math.PI * 2);
				App.Elements.Ctx.fill();

				App.Elements.Ctx.moveTo(coords[i][0], coords[i][1])
				App.Elements.Ctx.arc(coords[i+1][0], coords[i+1][1], App.Data.radius, 0, Math.PI * 2);
				App.Elements.Ctx.fill();
				App.Elements.Ctx.beginPath();
			}
		}
	}
}
App.Init();