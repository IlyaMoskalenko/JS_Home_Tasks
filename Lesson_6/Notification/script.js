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

var newTable = document.createElement("table");
var body = document.getElementsByTagName("body")[0];
	body.appendChild(newTable);

var k = 0;
var Notification = function(){
	setInterval(function(){
		var p = makePurchase();

			var newTr = document.createElement("tr");
				newTable.appendChild(newTr);
			var newTd = document.createElement("td");
				newTd.setAttribute("class","notice");
				var t = document.createElement("h4");
					t.innerText = p.printPurchase();
				newTd.appendChild(t);
				newTr.appendChild(newTd);

			var newButton = document.createElement("button");
				newButton.innerText = "x";
				newButton.setAttribute("style","float: right; transform: translate(0,-97px); \
										border-radius: 3px; background: rgba(26,30,36,0.8); color:white;")
				newButton.addEventListener("click",function(){
					newTr.remove();
					k--;
				})
			newTd.appendChild(newButton);

		k++;
		if(k>3){
			k = 3;
			(newTable.firstChild).remove();
		}
	},2000);
}

Notification();
