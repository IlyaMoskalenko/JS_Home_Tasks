var geneticAlgorithm = {
	Init: async function(){
		geneticAlgorithm.Data.Ideal = await geneticAlgorithm.getIdeal();
		geneticAlgorithm.Data.ArrayOfStrings = await geneticAlgorithm.doXHR("strings.json");
		geneticAlgorithm.Data.OriginsArray = geneticAlgorithm.Data.ArrayOfStrings

		geneticAlgorithm.Consts.StrLen = geneticAlgorithm.Data.ArrayOfStrings[0].value.length;
		geneticAlgorithm.Consts.HalfStrLen = Math.floor(geneticAlgorithm.Consts.StrLen/2);
		geneticAlgorithm.Consts.NumberOfSubjects = geneticAlgorithm.Data.ArrayOfStrings.length;
		
		geneticAlgorithm.showOrigins()
	}
	,Consts: {
		StrLen: 0
		,HalfStrLen: 0
		,NumberOfSubjects: 0
		,Second: 1000
		,TwoSeconds: 2000
		,FiftyMS: 50
	}
	,Data: {
		MutationChance: 10
		,Ideal: ""
		,IterationSpeed: 1000
		,Generation: 0
		,IterationToggler: true
		,ArrayOfStrings: []
		,OriginsArray: []
		,interval : ""
		,WebPage: {
			originsUl: document.getElementById("originsUl")
			,newGenUl: document.getElementById("newGenUl") 
			,genHistoryUl: document.getElementById("genHistoryUl")
			,btnAutoManual: document.getElementById("auto_manual").addEventListener("click",function(){
					if (geneticAlgorithm.Data.IterationToggler) {
						geneticAlgorithm.Data.IterationToggler = false;
						this.innerText = "Генерация: Авто";
						geneticAlgorithm.run()
					} else {
						geneticAlgorithm.Data.IterationToggler = true;
						this.innerText = "Генерация: Ручная";
						clearInterval(geneticAlgorithm.Data.interval)
					}
				})
			,btnNew: document.getElementById("new").addEventListener("click",function(){
				geneticAlgorithm.iteration();
			})
			,btnSpeed: document.getElementById("speed").addEventListener("click",function(){
				if (geneticAlgorithm.Data.IterationSpeed > 125) {
					geneticAlgorithm.Data.IterationSpeed /= 2;
					var t = this.innerText;
					this.innerText = "Скорость: x" + parseInt(t.replace(/\D/g,'')) * 2;
				} else {
					geneticAlgorithm.Data.IterationSpeed = 1000;
					this.innerText = "Скорость: x1"
				}
			})
			,btnIdeal: document.getElementById("ideal")
			,inputMutation: document.getElementById("chance").addEventListener("input",function(){
				geneticAlgorithm.Data.MutationChance = this.value;
			})
		}
	}

	,getIdeal: function(){
		var t = prompt("Введите слово-идеал");
		geneticAlgorithm.Data.WebPage.btnIdeal.innerText = t;
		return t;
	}

	,doXHR: function(path){
		var promise = new Promise(function(resolve,reject){
			var xhr = new XMLHttpRequest;
				xhr.open("GET",path,true);
				xhr.onload = function(){
					var strArray = JSON.parse(xhr.responseText);
					var oStrArray = [];
					for(var index in strArray){
						oStrArray[index] = {hasCouple: false, value: strArray[index], comparisonNumber: geneticAlgorithm.compareToIdeal(strArray[index])}
					}
					resolve(oStrArray);
				}
				xhr.send(null);
		})
		return promise;
	}

	,run: function(){
		geneticAlgorithm.Data.interval = setInterval(function(){
			geneticAlgorithm.iteration();
		},geneticAlgorithm.Data.IterationSpeed)		
	}

	,iteration: function(){
			var iter = function(){
				var Couples = [];
				var newStrings = [];
					for(var j = 0; j < geneticAlgorithm.Consts.NumberOfSubjects / 2; j++){
						Couples.push(geneticAlgorithm.getCouple(j))
					}
					for(var o of Couples){
						var C = geneticAlgorithm.crossing(o)
						newStrings.push(C[0])
						newStrings.push(C[1])
					}
					for(var L in newStrings){
						geneticAlgorithm.Data.ArrayOfStrings.push(newStrings[L]);
					}
			}	
			var newArrayOfStrings = function(array){
				var temp = array;
				var newArray = geneticAlgorithm.selection(temp);
				geneticAlgorithm.Data.ArrayOfStrings = newArray;	
			}

			iter()
			newArrayOfStrings(geneticAlgorithm.Data.ArrayOfStrings);
			geneticAlgorithm.removeCouples();

			console.log("Gen:",geneticAlgorithm.Data.Generation);
			console.log(geneticAlgorithm.Data.ArrayOfStrings[0])
			console.log(geneticAlgorithm.Data.ArrayOfStrings[1])
			geneticAlgorithm.Data.Generation++;
			geneticAlgorithm.vizualize();
			if ( (geneticAlgorithm.Data.ArrayOfStrings[0].value == geneticAlgorithm.Data.Ideal) && (geneticAlgorithm.Data.ArrayOfStrings[1].value == geneticAlgorithm.Data.Ideal) ){
				clearInterval(geneticAlgorithm.Data.interval)
				geneticAlgorithm.Data.WebPage.btnIdeal.innerText = "DONE!"
				geneticAlgorithm.Data.WebPage.btnIdeal.classList.add("done")
			}
	}

	,compareToIdeal: function(string){
		var ideal = geneticAlgorithm.Data.Ideal;
		return Array.from(string).reduce((p,c,i)=>p-Math.abs(c.charCodeAt(0)-ideal.charCodeAt(i)),0);
	}

	,getCouple: function(i){
		var Couple = {}
			var FirstString = geneticAlgorithm.Data.ArrayOfStrings[i];
			var SecondString = geneticAlgorithm.Data.ArrayOfStrings[i + geneticAlgorithm.Consts.NumberOfSubjects / 2];
				Couple.FirstString = FirstString;
				Couple.SecondString = SecondString;
		return Couple;
	}

	,removeCouples: function(){
		for(var i = 0; i < geneticAlgorithm.Consts.NumberOfSubjects; i++){
			geneticAlgorithm.Data.ArrayOfStrings[i].hasCouple = false;
		}
	}

	,crossing: function(Couple){
		var crossingPosition = Math.abs(Math.round(Math.random()*(geneticAlgorithm.Consts.StrLen-1)));
		var firstSubString1 = Couple.FirstString.value.substring(0,crossingPosition);
		var secondSubString1 = Couple.FirstString.value.substring(crossingPosition, geneticAlgorithm.Consts.StrLen);

		var firstSubString2 = Couple.SecondString.value.substring(0,crossingPosition);
		var secondSubString2 = Couple.SecondString.value.substring(crossingPosition, geneticAlgorithm.Consts.StrLen);

		var newString1 = firstSubString1.concat(secondSubString2);
		var newString2 = firstSubString2.concat(secondSubString1);

		newString1 = geneticAlgorithm.mutation(newString1);
		newString2 = geneticAlgorithm.mutation(newString2);

		return [{hasCouple: false, value: newString1, comparisonNumber: geneticAlgorithm.compareToIdeal(newString1)},
				{hasCouple: false, value: newString2, comparisonNumber: geneticAlgorithm.compareToIdeal(newString2)}];
	}

	,mutation: function(string){
		var replaceChar = function(string,pos){
			var newString = Array.from(string);
				newString[pos] = String.fromCharCode(97 + Math.floor( Math.random() * 25 ))
				newString = newString.join("");
			console.log("old: ", string,", mutated: ", newString);
			return newString;
		}

		var chance = Math.round(Math.random()*100)
		if ( chance <= geneticAlgorithm.Data.MutationChance ){
			var randomPosition = Math.round(Math.random()*(geneticAlgorithm.Consts.StrLen - 1));
			return replaceChar(string,randomPosition);
		}
		return string;
	}

	,sortByComparedValue: function(array){
		array.sort(function(a,b){
			return -a.comparisonNumber + b.comparisonNumber;
		})
		return array;
	}

	,selection: function(array){
		var sortedArray = geneticAlgorithm.sortByComparedValue(array);	
		var ChosenOnes = [];
		for( var i = 0; i < geneticAlgorithm.Consts.NumberOfSubjects; i++){
			ChosenOnes.push(sortedArray[i]);
		}
		return ChosenOnes;
	}

	,showOrigins: function(){
		for(var s of geneticAlgorithm.Data.OriginsArray){
			var newLi = document.createElement("li")
				newLi.innerText = s.value;
			geneticAlgorithm.Data.WebPage.originsUl.appendChild(newLi);
		}
	}

	,vizualize: function(){
		geneticAlgorithm.Data.WebPage.newGenUl.innerHTML = ""
		var genh = geneticAlgorithm.Data.WebPage.newGenUl.appendChild(document.createElement("p"))
		genh.innerText = "Generation: " + geneticAlgorithm.Data.Generation;
		for(var s of geneticAlgorithm.Data.ArrayOfStrings){
			var newLi = document.createElement("li")
				newLi.innerText = s.value;
			geneticAlgorithm.Data.WebPage.newGenUl.appendChild(newLi);
		}
		var genh = geneticAlgorithm.Data.WebPage.genHistoryUl.appendChild(document.createElement("p"))
		genh.innerText = "Generation: " + geneticAlgorithm.Data.Generation;
		for(var s of geneticAlgorithm.Data.ArrayOfStrings){
			var newLi = document.createElement("li")
				newLi.innerText = s.value;
			geneticAlgorithm.Data.WebPage.genHistoryUl.appendChild(newLi);
		}
	}
}
geneticAlgorithm.Init()