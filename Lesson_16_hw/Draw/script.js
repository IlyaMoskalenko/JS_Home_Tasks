var App = {
	Init: function(){
		App.Draw();
	}
	,Data: {
		canvas: document.getElementById("canvas")
		,context: canvas.getContext("2d")
		,rect: document.getElementById("canvas").getBoundingClientRect()
	}
	,Draw: function(){
		App.Data.canvas.addEventListener("mousedown",function(e){	
			 if( (e.clientX > App.Data.rect.left && e.clientX < App.Data.rect.right) && (e.clientY > App.Data.rect.top && e.clientY < App.Data.rect.bottom) ){
				App.Data.context.beginPath();
				App.Data.context.strokeStyle = "#000";
				App.Data.context.lineWidth = 1;
				App.Data.context.moveTo(e.clientX-24,e.clientY-9)	
				App.Data.flag = true;
				console.log(e)
			}
		})
		App.Data.canvas.addEventListener("mousemove",function(e){
			 if( (e.clientX > App.Data.rect.left && e.clientX < App.Data.rect.right) && (e.clientY > App.Data.rect.top && e.clientY < App.Data.rect.bottom) ){
				if(App.Data.flag){
					App.Data.context.lineTo(e.clientX-24,e.clientY-9)	
					App.Data.context.stroke();
					App.Data.context.moveTo(e.clientX-24,e.clientY-9)
				}
			}		
		})
		App.Data.canvas.addEventListener("mouseup",function(e){
			 if( (e.clientX > App.Data.rect.left && e.clientX < App.Data.rect.right) && (e.clientY > App.Data.rect.top && e.clientY < App.Data.rect.bottom) ){
				App.Data.context.lineTo(e.clientX-24,e.clientY-9)
				App.Data.context.stroke();
				App.Data.flag = false;
			}
		})
	}
}
App.Init()