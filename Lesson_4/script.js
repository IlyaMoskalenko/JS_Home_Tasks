//Задание 1

var getInfo = function(){
	var Cookies = (navigator.cookieEnabled).toString();
	var AppName = (navigator.appName).toString();
	var AppCodeName = (navigator.appCodeName).toString();
	var Platform = (navigator.platform).toString();
	var Language = (navigator.language).toString();
	var BrowserEngine = (navigator.product).toString();
	var AppVersion = (navigator.appVersion).toString();

	console.log("AppName: ", AppName);
	console.log("AppCodeName: ", AppCodeName);
	console.log("Platform: ", Platform)
	console.log("Cookies: ", Cookies);
	console.log("Language: ", Language);
	console.log("BrowserEngine: ", BrowserEngine);
	console.log("AppVersion: ", AppVersion);
}

window.getInfo();
console.log('');

//Задание 2
var numMatch = function(){
var str = prompt("Введите номер телефона:")

// str1 = "375295553535";
// str2 = "375(29)5553535";
// str3 = "375 29 555-35-35";
// str4 = "375 29 5553535";
// str5 = "+375(29)555-35-35";
// str6 = "555-55-555-55-55"

// str5_1 = "+375 (29) 555-35-35";    
// str5_2 = "+375-(29)-555-35-35";
// str5_3 = "+375  29  555-35-35";

var r = /\+?\d{3}((\-\d{2}\-)|(\s\d{2}\s)|(\(\d{2}\))|(\d{2}))\d{3}[(\s)|(\-)]?\d{2}[(\s)|(\-)]?\d{2}/;

// console.log(str1.match(r));
// console.log(str2.match(r));
// console.log(str3.match(r));
// console.log(str4.match(r));
// console.log(str5.match(r));
// console.log(str6.match(r));

// console.log(str5_1.match(r));
// console.log(str5_2.match(r));
// console.log(str5_3.match(r));
	return str.match(r);
}

window.numMatch();