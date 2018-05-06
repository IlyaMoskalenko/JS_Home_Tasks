class Task{
	constructor(name,priority,endDate){
		this.name = name;
		this.priority = priority;
		this.endDate = endDate;
	}
}

class taskPlan{
	constructor(today,tomorrow){
		var todayList = [];
		var tomorrowList = [];
		for(var i = 0; i < today.length; i++){
			todayList[i] = today[i];
		}
		this.todayList = todayList;

		for(var j = 0; j < tomorrow.length; j++){
			tomorrowList[j] = tomorrow[j];
		}
		this.tomorrowList = tomorrowList;
		this.availableActs = ["today","tomorrow","add","delete","priority"]
	}
	getList(act, todayOrTomorrow = "whatever"){
		var args = [];
			for(var i = 0; i < arguments.length; i++){
				args[i] = arguments[i];
			}
		var tasks = []
			for(var j = 2; j < args.length; j++){
				tasks.push(args[j])
			}
				for(var a in this.availableActs){
					if(this.availableActs[a] == args[0]){
						switch(args[0]){
							case "today": showTodayList(this); break;
							case "tomorrow": showTomorrowList(this); break;
							case "add": addTask(this,args[1],tasks); break;
							case "delete": deleteTask(tasks,this,args[1]); break;
							case "priority": showPriority(this,args[1]); break;
						}
					}
				}
	}
}

var showTodayList = function(obj){
	let list = {
		max: obj.todayList.length,
		[Symbol.iterator](){
			var a = 0;
			var self = this;
			var iter = {
				next(){
					let value = obj.todayList[a];
						a++;
					let done = a > self.max;
					return {value, done}
				}
			}
		return iter;
		}
	}
	for(var t of list){
		console.log(t)
	}
}
var showTomorrowList = function(obj){
	let list = {
		max: obj.tomorrowList.length,
		[Symbol.iterator](){
			var a = 0;
			var self = this;
			var iter = {
				next(){
					let value = obj.tomorrowList[a];
						a++;
					let done = a > self.max;
					return {value, done}
				}
			}
		return iter;
		}
	}
	for(var t of list){
		console.log(t)
	}
}
var addTask = function(obj,todayOrTomorrow,tasks){
	for(var j = 0; j < tasks.length; j++){
		if(tasks[j] != "nothing"){
			if(todayOrTomorrow == "todayList"){
				obj.todayList.push(tasks[j]);
			}
			if(todayOrTomorrow == "tomorrowList"){
				obj.tomorrowList.push(tasks[j]);
			}
		}
	}
}
var deleteTask = function(tasks,obj,todayOrTomorrow){
	for(var j = 0; j < tasks.length; j++){
		if(tasks[j] != "nothing"){
			if(todayOrTomorrow == "todayList"){
				obj.todayList.splice(obj.todayList.indexOf(tasks[j]),1);
			}
			if(todayOrTomorrow == "tomorrowList"){
				obj.tomorrowList.splice(obj.tomorrowList.indexOf(tasks[j]),1);
			}
		}
	}
}
var showPriority = function(obj,todayOrTomorrow){
	if(todayOrTomorrow == "todayList"){
		obj.todayList.sort(function(a,b){
			return a.priority > b.priority;
		})
		showTodayList(obj);
	}
	else if(todayOrTomorrow == "tomorrowList"){
		obj.tomorrowList.sort(function(a,b){
			return a.priority > b.priority;
		})
		showTomorrowList(obj);
	}
	else{
		console.log("choose list: todayList or tomorrowList")
	}
}

var T1 = new Task("A","1","123");
var T2 = new Task("B","2","234");
var T3 = new Task("C","3","345");
var T4 = new Task("D","4","456");
var T5 = new Task("E","5","567");


var tList = new taskPlan([T1,T2],[T3]);
console.log("Список:",tList);
console.log("Как вызывать:","getList(действие, день(сегодня или завтра) (опционально), заданиЯ(опционально))");
console.log("Доступные действия:",tList.availableActs);

tList.getList("add","todayList",T4,T5)
// tList.getList("today","today")