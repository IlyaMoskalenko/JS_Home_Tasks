var N = Number(prompt("Введите N:")); 
var M = Number(prompt("Введите M:")); 

var Names = new Array(N); 
var Cities = new Array(M); 

Names.fill(0); 
Cities.fill(0); 

Names = Names.map(function(){ 
return "someName" + (Math.round(Math.random()*2*N)).toString();; 
}); 

Cities = Cities.map(function(){ 
return "someCity" + (Math.round(Math.random()*2*M)).toString();; 
}) 

var func = function(){ 
console.log(this.name,"-", this.city, "-", this.age); 
// console.log("City: ", this.city); 
// console.log("Age: ", this.age); 
console.log("\n"); 
} 

var People = []; 

for (var i = 0; i < N; i++){ 
var newMan = new Object(); 
newMan.name = Names[Math.round(Math.random()*(N-1))]; 
newMan.age = Math.round(Math.random()*50+10); 
newMan.city = Cities[Math.round(Math.random()*(M-1))]; 
newMan.getInfo = func; 
People.push(newMan); 
} 

console.log("Unsorted:");
console.log("Name   -", "   city   -", "   age"); 
for (var i = 0; i < N; i++){ 
People[i].getInfo(); 
}

People = People.sort(function(a,b){
			return a.age < b.age;
		});

console.log("Sorted:");
console.log("Name   -", "   city   -", "   age");   
for (var i = 0; i < N; i++){ 
People[i].getInfo(); 
}



// спросить почему не работает 

// var N = Number(prompt("Введите N:"));
// var M = Number(prompt("Введите M:"));

// var Names = new Array(N);
// var Cities = new Array(M);

// Names.fill(0);
// Cities.fill(0);

// Names = Names.map(function(){
// 		return "someName" + (Math.round(Math.random()*N)).toString();;
// 	});

// Cities = Cities.map(function(){
// 		return "someCity" + (Math.round(Math.random()*M)).toString();;
// 	})

// //console.log(Names);
// //console.log(Cities);

// var man = {
// 		name: "",
// 		age: 0,
// 		city: ""	
// 	}

// var People = new Array(N);
// People.fill(0);

// People.forEach(function(item,i,People){
// 	console.log("i =",i);
// 	var newMan = new Object(man);
// 	newMan.name = Names[Math.round(Math.random()*(N-1))];
// 	newMan.age = Math.round(Math.random()*50+10);
// 	newMan.city = Cities[Math.round(Math.random()*(M-1))];
// 	newMan.getInfo =  function(){
// 			console.log("Name: ", this.name);
// 			console.log("City: ", this.city);
// 			console.log("Age: ", this.age);
// 			console.log("\n")
// 		}
// 	People[i] = newMan;
// 	People[i].getInfo();
// });



// //console.log(People);

// People.forEach(function(item,i,People){
// 	console.log("i =",i);
// 	People[i].getInfo();
// });

// // People = People.sort(function(a,b){
// // 		return a.age < b.age;
// // })

