var App = {
	Init: function(){
		App.getPicture();
		document.getElementById('Negative').addEventListener('click',App.applyNegative.bind(this))
		document.getElementById('BlackWhite').addEventListener('click',App.applyBlackWhite.bind(this))
		document.getElementById('Brightness').addEventListener('click',App.applyBrightness.bind(this))
		document.getElementById('Original').addEventListener('click',App.applyOriginal.bind(this))
	}
	,Data: {
		canvas: document.getElementById("canvas")
		,context: canvas.getContext("2d")
		,ImageData: []
		,OriginalImage: null
	}
	,getPicture: function(){
		var input = document.getElementById("input")
		var btn = document.getElementById("btn")
		var imgUrl = "";
			btn.addEventListener("click",function(){
				var files = input.files;
				var file = files[0];
				var reader = new FileReader();
				reader.onload = function(){
					imgUrl = this.result;
					var img = new Image()
					img.onload = function(){
						App.Data.OriginalImage = this;
						App.restore();
						App.Data.ImageData = App.Data.context.getImageData(0,0,580,580);
					}
					img.src = imgUrl;
				}
				reader.readAsDataURL(file);
			})
	}
	,restore(){
		App.Data.context.drawImage(this.Data.OriginalImage, 0, 0,580,580);
		App.Data.ImageData = App.Data.context.getImageData(0,0,580,580);

	}
	,applyBrightness: function(){
		var brightness = 30;
		this.restore();
		for(var i = 0; i < App.Data.ImageData.height; i++){
			for(var j = 0; j < App.Data.ImageData.width; j++){
				var k = (i * 4) * App.Data.ImageData.width + j * 4;
				App.Data.ImageData.data[k] = App.Data.ImageData.data[k]+brightness;
				App.Data.ImageData.data[k+1] = App.Data.ImageData.data[k+1]+brightness;
				App.Data.ImageData.data[k+2] = App.Data.ImageData.data[k+2]+brightness; 
			}
		}
		App.Data.context.putImageData(App.Data.ImageData, 0, 0);
	}
	,applyNegative: function(){
		this.restore();	 
		for(var i = 0; i < App.Data.ImageData.height; i++){
			for(var j = 0; j < App.Data.ImageData.width; j++){
				var k = (i * 4) * App.Data.ImageData.width + j * 4;
				App.Data.ImageData.data[k] = 255 - App.Data.ImageData.data[k];
				App.Data.ImageData.data[k+1] = 255 - App.Data.ImageData.data[k+1];
				App.Data.ImageData.data[k+2] = 255 - App.Data.ImageData.data[k+2]; 
			}
		}
		App.Data.context.putImageData(App.Data.ImageData, 0, 0);
	}
	,applyBlackWhite: function(){
		this.restore();
		for(var i = 0; i < App.Data.ImageData.height; i++){
			for(var j = 0; j < App.Data.ImageData.width; j++){
				var k = (i * 4) * App.Data.ImageData.width + j * 4;
				var avg = ( App.Data.ImageData.data[k] + App.Data.ImageData.data[k+1] + App.Data.ImageData.data[k+2]) / 3
				App.Data.ImageData.data[k] = avg;
				App.Data.ImageData.data[k+1] = avg;
				App.Data.ImageData.data[k+2] = avg; 
			}
		}
		App.Data.context.putImageData(App.Data.ImageData, 0, 0);
	}
	,applyOriginal: function(){
		this.restore();
	}
}

App.Init();	