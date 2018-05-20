var App = {
	Init: async function(){
		App.Data.Workers = await App.getWorkers();
		console.log(App.Data.Workers);
		App.showTable(App.Data.Workers);
		App.prepareSort();
	}
	,Data: {
		Workers: []
		,Buttons: {
			btnName: document.getElementById("name")
			,btnAge: document.getElementById("age")
			,btnEnterDate: document.getElementById("enterDate")
			,btnBirthDate: document.getElementById("birthDate")
			,btnSalary: document.getElementById("salary")
			,btnDepartment: document.getElementById("department")
			,btnPost: document.getElementById("post")
		}
	}
	,getWorkers: async function(){
		var arr = await App.doXHR("workers.csv");
		var newArr = [];
		for(var w of arr){
			var splitted = w.split(',')
			var obj = splitted.reduce(function(acc, cur, i){
				acc[i] = cur;
				return acc;
			},{});
			newArr.push(obj)
		}
		return newArr;
	}
	,doXHR: function(path){
		var promise = new Promise(function(resolve,reject){
			var xhr = new XMLHttpRequest;
				xhr.open("GET",path,true);
				xhr.onload = function(){
					var arr = this.responseText.split(/\r\n|\n/);
					resolve(arr);
				}
				xhr.send(null);
		})
		return promise;
	}
	,showTable: function(array){
		var tbody = document.getElementById("tbody");
		for(var row in array){
			var tRow = document.createElement("tr");
			for(var col in array[row]){
				var tCol = document.createElement("td");
					tCol.innerText = array[row][col];
				tRow.appendChild(tCol);
			}
		tbody.appendChild(tRow);
		}
	}
	,prepareSort: function(){
		var btns = App.Data.Buttons;
		var rowsArray = [].slice.call(tbody.rows);
			btns.btnName.addEventListener("click",App.sortByName);
			btns.btnAge.addEventListener("click",App.sortByAge);
			btns.btnEnterDate.addEventListener("click",App.sortByEnterDate);
			btns.btnBirthDate.addEventListener("click",App.sortByBirthDat);
			btns.btnSalary.addEventListener("click",App.sortBySalary);
			btns.btnDepartment.addEventListener("click",App.sortByDepartment);
			btns.btnPost.addEventListener("click",App.sortByPost);
	}
	,sortByName: function(){
		var rowsArray = [].slice.call(tbody.rows);
		rowsArray.sort(function(a,b){
			return a.cells[0].innerText > b.cells[0].innerText;
		})
		App.updateTable(rowsArray);
	}
	,sortByAge: function(){
		var rowsArray = [].slice.call(tbody.rows);
		rowsArray.sort(function(a,b){
			return a.cells[1].innerText - b.cells[1].innerText;
		})
		App.updateTable(rowsArray);
	}
	,sortByEnterDate: function(){
		var rowsArray = [].slice.call(tbody.rows);
		rowsArray.sort(function(a,b){

		})
		App.updateTable(rowsArray);
	}
	,sortByBirthDate: function(){
		var rowsArray = [].slice.call(tbody.rows);
		rowsArray.sort(function(a,b){
	
		})
		App.updateTable(rowsArray);
	}
	,sortBySalary: function(){
		var rowsArray = [].slice.call(tbody.rows);
		rowsArray.sort(function(a,b){
			return a.cells[4].innerText - b.cells[4].innerText;
		})
		App.updateTable(rowsArray);
	}
	,sortByDepartment: function(){
		var rowsArray = [].slice.call(tbody.rows);
		rowsArray.sort(function(a,b){
			return a.cells[5].innerText - b.cells[5].innerText;
		})
		App.updateTable(rowsArray);
	}
	,sortByPost: function(){
		var rowsArray = [].slice.call(tbody.rows);
		rowsArray.sort(function(a,b){
			return a.cells[6].innerText > b.cells[6].innerText;
		})
		App.updateTable(rowsArray);
	}
	,updateTable: function(array){
		var table = document.getElementById("table");
		var tbody = document.getElementById("tbody");
			table.removeChild(tbody);
		for (var i of array){
        	tbody.appendChild(i);
      	}
        table.appendChild(tbody);
	}
}
App.Init()