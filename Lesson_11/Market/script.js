function Product(name,type,price,date){
	Object.defineProperty(this,"id",{
		get: function(){
			return c++;
		}
	})
	this.name = name;
	this.type = type;
	this.price = price;
	this.date = date;
}
//Класс Товар, где 
//name - название товара
//type - тип товара
//price - стоимость товара
//date - дата изготовления(выпуска) товара

function ProdProduct(name,type,price,date,godenDo){
	this.constructor(name,type,price,date);
	this.godenDo = godenDo;
	Object.defineProperty(this,"storeTime",{
		get: function(){
			return Math.round(new Date(this.godenDo) - new Date(this.date))
		}
	}) 
}
ProdProduct.prototype = Object.create(Product.prototype)
//Класс Продовольственный Товар, создается наследованием от класса Товар
//name, type, price, date - то же, что и у класса Товар
//godenDo - срок годности товара
//storeTime - срок хранения товара

function Shop(name,adress,productArray,overPrice,income){
	this.name = name;
	this.adress = adress;
	this.productArray = productArray;
	this.overPrice = overPrice;
	this.income = income;
	this.sum = 0;
}
Shop.prototype.sumOfProductsPrices = function(){
		for(var i = 0; i < this.productArray.length; i++){
			this.sum += this.productArray[i].price;
		}
	}
Shop.prototype.addProducts = function(productName, number){
		for(var i = 0; i < number; i++){
			this.productArray.push(productName);
		}
	}
Shop.prototype.deleteProducts = function(){
		for(var i = 0; i < arguments.length; i++){
			this.productArray = this.productArray.filter(function(e){
				return e.name != arguments[i];
			}) 
		}
	}
Shop.prototype.sellProducts = function(){
		for(var i = 0; i < arguments.length; i++){
			this.income += arguments[i].price*overPrice/100 - arguments[i].price;
			this.productArray = this.productArray.splice(indexOf(arguments[i].toString),1);
		} 
	}
Shop.prototype.info = function(){
		return this;
	}
//Класс Магазин
//name - название магазина
//adress - адрес магазина
//productArray - перечень товаров(ассортимент)
//overPrice - наценка магазина
//income - доход магазина

//sumOfProductsPrices - находит общую стоимость всех товаров в магазине
//addProducts - добавляет в магазине number(штук) товара productName
//deleteProducts - списывает из магазина объекты - товары, перечисленные в качестве аргументов
//sellProducts - продает объекты - товары, перечисленные в качестве аргументов и посчитывает прибыль
//info - информация о магазине

function Market(){
	var args = [];
	for(var i = 0; i < arguments.length; i++){
		args[i] = arguments[i];
	}
	this.shops = args;
}
Market.prototype.getInfo = function(){
	for(key in this.shops){
		console.log(this.shops[key].info());
	}
}
//Класс Рынок
//Аргументами являются объекты - магазины
//Shops - массив магазинов, который создается на основе аргументов
//getInfo - информация о всех магазинах рынка

var c = 0;
//идентификатор

var pType = ["промышленный","потребительский"];
//типы товаров

var p = new Product("товар0",pType[0],"700р","2010-10-10");
//Объект класса Товар
var p1 = new ProdProduct("товар1",pType[1],700,"2010-10-10","2014-10-10")
//Объект класса Продовольственный Товар

var sh = new Shop("BIGZ","Здесь должен быть адрес",[],20,0);
var sh1 = new Shop("Родны кут","Здесь должен быть адрес",[],30,0);
//Объекты класса Магазин

var Market1 = new Market(sh,sh1);
//Объект класса Рынок
	Market1.getInfo();
