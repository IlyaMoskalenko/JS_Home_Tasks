class Task{
	constructor(name,priority,endDate){
		this.name = name;
		this.priority = priority;
		this.endDate = endDate;
	}
}

class TaskPlan{
	constructor(today,tomorrow){
		var todayList = [];
		var tomorrowList = [];
		for(var t of today){
			todayList.push(t)
		}
		for(var t of tomorrow){
			tomorrowList.push(t)
		}
		this.todayList = todayList;
		this.tomorrowList = tomorrowList;
	}
	getTodayList(){
		var L = {
			max: this.todayList.length,
			tdl: this.todayList,
			[Symbol.iterator] : function(){
				var a = 0;
				var self = this;
				var iter = {
					next(){
						let value = self.tdl[a];
							a++;
						let done = a > self.max;
						return {value, done}
					}
				}
			return iter;
			}
		}
		for(var t of L){
			console.log(t)
		}			
	}
	getTomorrowList(){
		var L = {
			max: this.tomorrowList.length,
			tml: this.tomorrowList,
			[Symbol.iterator] : function(){
				var a = 0;
				var self = this;
				var iter = {
					next(){
						let value = self.tml[a];
							a++;
						let done = a > self.max;
						return {value, done}
					}
				}
			return iter;
			}
		}
		for(var t of L){
			console.log(t)
		}		
	}
	addTasks(day){
		var tasks = [];
		for(var t of arguments){
			if(t != "today" && t != "tomorrow"){
				tasks.push(t);
			}
		}

		if(day == "today"){
			for(var t of tasks){
				this.todayList.push(t)
			}
		}
		else{
			for(var t of tasks){
				this.tomorrowList.push(t)
			}
		}
	}
	deleteTask(TaskName){
		for(var t of this.todayList){
			if(t.name == TaskName){
				this.todayList.splice(this.todayList.indexOf(t),1)
			}
		}
		for(var t of this.tomorrowList){
			if(t.name == TaskName){
				this.tomorrowList.splice(this.tomorrowList.indexOf(t),1)
			}
		}
	}
	showPriority(){
		console.log((this.todayList.concat(this.tomorrowList)).sort(function(a,b){return a.priority > b.priority}));
	}
}	

var T1 = new Task("A","1","123");
var T2 = new Task("B","2","234");
var T3 = new Task("C","7","345");
var T4 = new Task("D","4","456");
var T5 = new Task("E","5","567");
var T6 = new Task("F","6","678");
var T7 = new Task("G","8","789");
var T8 = new Task("H","9","890");
var T9 = new Task("I","3","012");

var plan = new TaskPlan([T1,T2,T4,T6],[T3,T5]);
// plan.addTasks("tomorrow",T7,T8,T9);

class List{
	constructor(tlist){
		var setList = new Set();

		for(var t of tlist){
			setList.add(t)
		}
		this.taskList = setList;
	}
	show(){
		for(var t of this.taskList){
			console.log(t)
		}			
	}
	addTasks(){
		var tasks = [];
		for(var t of arguments){
				this.taskList.push(t);
		}
	}
	deleteTask(Task){
		this.taskList.delete(Task)
	}
}

var list = new List([T7,T8,T9]);
	// list.show();

function interact(obj){

	var addToday = document.getElementById("add1");
	var addTomorrow = document.getElementById("add2");

	function show(obj){
		var todayOl = document.getElementById("today");
		todayOl.innerHTML = "";
		for(var t of obj.todayList){
			var li = document.createElement("li");
				li.innerText = t.name + ", " + t.priority + ", " + t.endDate;
			var btn = document.createElement("button")
				btn.innerText = "delete";
				btn.setAttribute("id","delete")
				btn.addEventListener("click",function(e){
					if(e.target.parentNode.nodeName == "LI"){
						var str = e.target.parentNode.innerText;
						obj.deleteTask(str.substring(0,str.indexOf(",")));
						e.target.parentNode.remove();
					}
				})
				li.appendChild(btn)
			todayOl.appendChild(li);
		}
		var tomorrowOl = document.getElementById("tomorrow");
		tomorrowOl.innerHTML = "";
		for(var t of obj.tomorrowList){
			var li = document.createElement("li");
				li.innerText = t.name + ", " + t.priority + ", " + t.endDate;
				var btn = document.createElement("button")
				btn.innerText = "delete";
				btn.setAttribute("id","delete");
				btn.addEventListener("click",function(e){
					if(e.target.parentNode.nodeName == "LI"){
						var str = e.target.parentNode.innerText;
						obj.deleteTask(str.substring(0,str.indexOf(",")));
						e.target.parentNode.remove();
					}
				})
				li.appendChild(btn);
			tomorrowOl.appendChild(li);
		}
	}
	show(obj)

	addToday.addEventListener("click",function(){
		var name = prompt("Введите название задачи");
		var priority = parseInt(prompt("Введите приоритет задачи"));
		var endDate = prompt("Введите дату завершения задачи");
		var newTask = new Task(name,priority,endDate);
		obj.addTasks("today",newTask);
		show(obj);
	})
	addTomorrow.addEventListener("click",function(){
		var name = prompt("Введите название задачи");
		var priority = parseInt(prompt("Введите приоритет задачи"));
		var endDate = prompt("Введите дату завершения задачи");
		var newTask = new Task(name,priority,endDate);
		obj.addTasks("tomorrow",newTask);
		show(obj);
	})
}
interact(plan)
