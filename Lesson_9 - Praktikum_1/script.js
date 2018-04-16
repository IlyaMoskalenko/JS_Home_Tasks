/////////////////////////////////////////////////////////
//////////////////_____ПРАКТИКУМ_____////////////////////
/////////////////////////////////////////////////////////

var flowers1 = [{Name: "Розы", Cost: Math.round(Math.random()*5 + 2)},
			   {Name: "Тюльпаны", Cost: Math.round(Math.random()*5 + 2)},
			   {Name: "Нарциссы", Cost: Math.round(Math.random()*5 + 2)},
			   {Name: "Лилии", Cost: Math.round(Math.random()*5 + 2)},
			   {Name: "Хризантемы", Cost: Math.round(Math.random()*5 + 2)},
			   {Name: "Гвоздики", Cost: Math.round(Math.random()*5 + 2)}];

var flower = document.getElementsByName("f");
	for(var i = 0; i < flower.length; i++){
		flower[i].setAttribute("value",flowers1[i].Cost);
	}

var ev;

var iamount = document.getElementById("iamount");
var ppack = document.getElementsByName("p");
var sdelivery = document.getElementById("sdelivery");
var flowers = document.getElementById("flowers");
var itotal = document.getElementById('itotal');

var amount = Number(iamount.value);
var pack = Number(ppack[0].value);
var delivery = Number(sdelivery.value);
var total = 0;
var cost = 0;

	iamount.addEventListener("input",function(){
		window.amount = iamount.value;
		window.itotal.value = Number(window.amount*window.cost)+Number(window.pack)+Number(window.delivery);
	});


	for (var i = 0; i < ppack.length; i++){
    	ppack[i].onchange = function(){
        	window.pack = this.value;
        	window.itotal.value = Number(window.amount*window.cost)+Number(window.pack)+Number(window.delivery);
    	}
	}


	sdelivery.addEventListener("change",function(){
		window.delivery = sdelivery.value;
		window.itotal.value = Number(window.amount*window.cost)+Number(window.pack)+Number(window.delivery);
	})


	flowers.addEventListener("click",function(e){
		try{
			window.ev.classList.remove("bordered");
		}
		catch(err){}
		if(e.target.nodeName == "IMG"){
			e.target.parentNode.classList.toggle("bordered");
			window.ev = e.target.parentNode;
			window.cost = window.ev.getAttribute("value");
			window.itotal.value = Number(window.amount*window.cost)+Number(window.pack)+Number(window.delivery);
		}
		else if(e.target.hasAttribute("name")){
			e.target.classList.toggle("bordered");
			window.ev = e.target;
			window.itotal.value = Number(window.amount*window.cost)+Number(window.pack)+Number(window.delivery);
		}
	})

var submit = document.getElementById("submit");
var cover = document.getElementById("cover");
var stop = document.getElementById("stop");
var ready = document.getElementById("ready")

	submit.addEventListener("click",function(){
		cover.setAttribute("class","open");
	})

	cover.addEventListener("click",function(e){
		if (e.target == this){
			cover.removeAttribute("class");
		}
	})

var Name = document.getElementById("name");
var Phone = document.getElementById("phone");
var Adress = document.getElementById("adress");
var	rName = 0;
var	rPhone = 0;
var	rAdress = 0;

var pName = /[a-zA-Z\-\s]{3,20}$/;
var pPhone = /\+?\d{3}((\-\d{2}\-)|(\s\d{2}\s)|(\(\d{2}\))|(\d{2}))\d{3}[(\s)|(\-)]?\d{2}[(\s)|(\-)]?\d{2}/;

Name.addEventListener("input",function(){
		if ((Name.value.match(pName) == null)){
			Name.setAttribute("style","border: 2px solid red;")
		    window.rName = false;
		}
		else 
		{
			Name.setAttribute("style","border: 2px solid green;")
			window.rName = true;
		}
	})
	Phone.addEventListener("input",function(){
		if ((Phone.value.match(pPhone) == null)){
		    Phone.setAttribute("style","border: 2px solid red;")
			window.rPhone = false;
		}
		else 
		{
			Phone.setAttribute("style","border: 2px solid green;")
			window.rPhone = true;
		}
	})

//тут должна быть роверка адреса, но её нет :c 

ready.addEventListener("click",function(){
	if(window.rName && window.rPhone){
		cover.removeAttribute("class");
		alert("succesfull!");
	}
})
