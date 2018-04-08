function validation(){
	var Name = document.getElementById("Name");
	var Phone = document.getElementById("Phone");
	var Email = document.getElementById("Email");
	var Site = document.getElementById("Site");
	var Age = document.getElementById("Age");

	var sName = document.getElementById("sName");
	var sPhone = document.getElementById("sPhone");
	var sEmail = document.getElementById("sEmail");
	var sSite = document.getElementById("sSite");
	var sAge = document.getElementById("sAge");

	var pName = /[a-zA-Z\-\s]{3,20}$/;
	var pPhone = /\+?\d{3}((\-\d{2}\-)|(\s\d{2}\s)|(\(\d{2}\))|(\d{2}))\d{3}[(\s)|(\-)]?\d{2}[(\s)|(\-)]?\d{2}/;
	var pEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,6}\.)?[a-z]{2,6}$/i;
	var pSite =	/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,10}$/;

	var submit = document.getElementById("submit");

	var	rName = 0;
	var	rPhone = 0;
	var	rEmail = 0;
	var	rSite = 0;
	var rAge = 0;
	
	Name.addEventListener("input",function(){
		if ((Name.value.match(pName) == null)){
			sName.setAttribute("style","display: block");
	     	Name.setAttribute("style","border: 1px solid red;")
		    rName = false;
		}
		else 
		{
			sName.setAttribute("style","display: none");
			Name.setAttribute("style","border: 1px solid green;")
			rName = true;
		}
	})
	Phone.addEventListener("input",function(){
		if ((Phone.value.match(pPhone) == null)){
			sPhone.setAttribute("style","display: block");
		    Phone.setAttribute("style","border: 1px solid red;")
			rPhone = false;
		}
		else 
		{
			sPhone.setAttribute("style","display: none");
			Phone.setAttribute("style","border: 1px solid green;")
			rPhone = true;
		}
	})
	Email.addEventListener("input",function(){
		if ((Email.value.match(pEmail) == null)){
			sEmail.setAttribute("style","display: block");
			Email.setAttribute("style","border: 1px solid red;")
			rEmail = false;
		}
	else 
		{
			sEmail.setAttribute("style","display: none");
        	Email.setAttribute("style","border: 1px solid green;")
			rEmail = true;
		}
	})
	Site.addEventListener("input",function(){
		if ((Site.value.match(pSite) == null)){
			sSite.setAttribute("style","display: block");
			Site.setAttribute("style","border: 1px solid red;")
		    rSite = false;
		}
		else 
		{
			sSite.setAttribute("style","display: none");
			Site.setAttribute("style","border: 1px solid green;")
         	rSite = true;
		}
	})
	Age.addEventListener("input",function(){
		if ((Number(Age.value) >=14) && (Number(Age.value) <= 90)){
			sAge.setAttribute("style","display: none");
			Age.setAttribute("style","border: 1px solid green;")
     		rAge = true;
		}
	else 
		{
			sAge.setAttribute("style","display: block");
			Age.setAttribute("style","border: 1px solid red;")
			rAge = false;
		}
	})

	submit.addEventListener("click",function(){
		console.log(rName,rPhone,rEmail,rSite,rAge);
		if ((rName) && (rPhone) && (rEmail) && (rSite) && (rAge)){
			alert("Successful!");
		}
		else
			alert("Something went wrong!")
	})

}

validation();	