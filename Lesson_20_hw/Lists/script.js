let App = {
	Init: function(){
		App.loadPage()
	}
	,Consts: {
		db: firebase.database()
		,ref: firebase.database().ref("/0/")
	}
	,Data: {
		News: []
	}
	,loadPage: async function(){
		console.log(123)
		document.body.innerHTML = await App.doXHR("main.json")
		App.Data.News = await App.getNews();
		App.appendNewsToUL(App.Data.News)
	}
	,getNews: function(path){
		var promise = new Promise(function(resolve,reject){
			var array = []
			App.Consts.ref.on("value",function(v){
				var value = v.val()
				for(var n in value){
					array.push(value[n]);
				}
				resolve(array)
			})
		})	
		return promise;
	}
	,appendNewsToUL: function(array){
		var ul = document.getElementsByTagName("ul")[0];
		for(var n of array){
			var newLi = document.createElement("li");
			var newH3 = document.createElement("h3");
				newH3.innerText = n.name;
			var newP = document.createElement("p");
				newP.innerText = n.content;
			var newImg = new Image();
				newImg.src = n.source;
			var newBtn = document.createElement("button");
				newBtn.innerText = "Редактировать"
				newBtn.setAttribute("id","n" + (n.id).toString())
			newLi.appendChild(newH3);
			newLi.appendChild(newImg);
			newLi.appendChild(newP);
			newLi.appendChild(newBtn);
			ul.appendChild(newLi);
		}
		ul.addEventListener("click",App.editNews)
	}
	,editNews: async function(e){
		if(e.target.nodeName == "BUTTON"){
			var currentID = e.target.getAttribute("id")[1]
			var currentNews = App.Data.News[currentID - 1]
			document.body.innerHTML = await App.doXHR("edit.json")

			document.getElementById("name").addEventListener("input",function(){
				console.log(this.value)
				currentNews.name = this.value;
				firebase.database().ref("/0/news_" + currentID).set({
					name: currentNews.name
					,content: currentNews.content
					,source: currentNews.source
					,id: currentNews.id
				})
			})
			var image = document.getElementById("image")
			var load = document.getElementById("load")
			var imgUrl = "";
				load.addEventListener("click",function(){
					var files = image.files;
					var file = files[0];
					var reader = new FileReader();
					reader.onload = function(){
						imgUrl = this.result;
						currentNews.source = imgUrl;				
						firebase.database().ref("/0/news_" + currentID).set({
							name: currentNews.name
							,content: currentNews.content
							,source: currentNews.source
							,id: currentNews.id
						})
					}
				reader.readAsDataURL(file);
			})
			document.getElementById("article").addEventListener("input",function(){
				currentNews.content = this.value;
				firebase.database().ref("/0/news_" + currentID).set({
					name: currentNews.name
					,content: currentNews.content
					,source: currentNews.source
					,id: currentNews.id
				})
			})
			document.getElementById("ready").addEventListener("click",App.loadPage)
		}
	}
	,doXHR: function(path){
		var promise = new Promise(function(resolve,reject){
			var xhr = new XMLHttpRequest;
				xhr.open("GET",path,true);
				xhr.onload = function(){
					var html = xhr.responseText;
					resolve(html);
				}
				xhr.send(null);
		})
		return promise;
	}
}
App.Init(); 