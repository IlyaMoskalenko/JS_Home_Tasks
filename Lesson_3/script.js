// var N = Number(prompt("Введите N:")); 
// var M = Number(prompt("Введите M:")); 

// var Names = new Array(N); 
// var Cities = new Array(M); 

// Names.fill(0); 
// Cities.fill(0); 

// Names = Names.map(function(){ 
// return "someName" + (Math.round(Math.random()*2*N)).toString();; 
// }); 

// Cities = Cities.map(function(){ 
// return "someCity" + (Math.round(Math.random()*2*M)).toString();; 
// }) 

// var func = function(){ 
// console.log(this.name,"-", this.city, "-", this.age); 
// // console.log("City: ", this.city); 
// // console.log("Age: ", this.age); 
// console.log("\n"); 
// } 

// var People = []; 

// for (var i = 0; i < N; i++){ 
// var newMan = new Object(); 
// newMan.name = Names[Math.round(Math.random()*(N-1))]; 
// newMan.age = Math.round(Math.random()*50+10); 
// newMan.city = Cities[Math.round(Math.random()*(M-1))]; 
// newMan.getInfo = func; 
// People.push(newMan); 
// } 

// console.log("Unsorted:");
// console.log("Name   -", "   city   -", "   age"); 
// for (var i = 0; i < N; i++){ 
// People[i].getInfo(); 
// }

// People = People.sort(function(a,b){
// 			return a.age < b.age;
// 		});

// console.log("Sorted:");
// console.log("Name   -", "   city   -", "   age");   
// for (var i = 0; i < N; i++){ 
// People[i].getInfo(); 
// }

// задание 2

var nW = Number(prompt("Введите количество работников:")); 
var mW = Math.round(Math.random()*2*nW)
var Names1 = new Array(nW); 
var Departments = new Array(mW);

Names1.fill(0); 
Departments.fill(0); 

Names1 = Names1.map(function(){ 
return "workerName" + (Math.round(Math.random()*10*nW)).toString();; 
}); 

Departments = Departments.map(function(){ 
return "Department" + (Math.round(Math.random()*10*mW)).toString();; 
}) 

function func1(){ 
	console.log("Name: ",this.name); 
	console.log("Age: ", this.age); 
	console.log("Department: ", this.department); 
	console.log("Salary: ", this.salary);
	console.log("Experience: ", this.exp);
	console.log("\n"); 
} 

function func2(arg,arr){
	if(typeof(arg)=="string"){
		for(var i = 0; i < nW; i++){
			if (arr[i].name == arg){
				arr.splice(i,1);
				window.nW--;
			}
		}
	}
}

var buh = {};

buh.workers = [];

	for (var i = 0; i < nW; i++){ 
		var newWorker = new Object(); 
		newWorker.name = Names1[Math.round(Math.random()*(nW-1))]; 
		newWorker.age = Math.round(Math.random()*30+18); 
		newWorker.department = Departments[Math.round(Math.random()*(mW-1))]; 
		newWorker.salary = Math.round(Math.random()*2000+500); 
		newWorker.exp = Math.round(Math.random()*20);
		newWorker.Info = func1; 
		buh.workers.push(newWorker); 
	}
console.log(buh.workers); 

buh.addOrDelete = func2;
// for (var i = 0; i < nW; i++){ 
// buh.workers[i].Info(); 
// }
buh.addOrDelete(buh.workers[0].name,buh.workers);
console.log(buh.workers); 