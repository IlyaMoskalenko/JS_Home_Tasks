var Notification = function(){
	var container = document.getElementById("container");
	var notice = document.createElement("div");
	var p = makePurchase();
	notice.setAttribute("class","notice");
	notice.innerText = p.printPurchase();
	container.appendChild(notice);
}

var Names = ["John", "Jared", "Clark", "William", "Carter", "Sam", "Dan", "Tom", "Mike", "Chester", 
			 "Adam", "Matt", "Robert", "Tony", "Emma", "Ann", "Lana", "Heiley", "Megan", "Victoria",
			 "Carlie", "Amanda", "Rey", "Hannah", "Kate", "Elisabeth"];

var Goods = ["Car", "Bike", "Cat", "Playstation", "Laptop", "Guitar", "Pizza", "Headphones", "Toy", 
			 "Flowers", "Microphone", "TVSet", "Clocks"];

var Cities = ["Belfast", "Glasgow", "Lancaster", "Edmonton", "Bremen", "Cambridge", "Dortmund", "London", 
			  "Bristol", "Krakow", "Paris", "Vienna", "Bismark", "Milan", "Portland", "Montreal", "Boston",
			  "Chicago", "Detroit"];

function makePurchase(){
	var purchase = {};
		purchase.Name = Names[Math.round(Math.random()*Names.length-1)];
		purchase.Good = Goods[Math.round(Math.random()*Goods.length-1)];
		purchase.City = Cities[Math.round(Math.random()*Cities.length-1)];
		purchase.N = Math.round(Math.random()*10);
		purchase.printPurchase = function(){
			return this.Name + " bought " + this.N + " shtuk of " + this.Good + ", " + this.City;  
		}
return purchase;
}


var k = 0;

setInterval(function(){
	window.Notification();
	k++;
	if(k>3){
		(container.firstChild).remove();
	}
},1500);
