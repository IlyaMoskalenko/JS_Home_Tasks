//1. Написать функцию,которая принимает строку и возвращает true или false
//   в зависимости от того, правильно ли расставлены круглые скобки.

function balanceOf(){
var str = prompt("Task 1: enter string with parentheses:");
var count = 0;

console.log(str);

	for(var i = 0; i < str.length; i++){
		if (count >= 0){
			if (str[i] == "("){
				count++;
			}
			else 
				if (str[i] == ")"){
				count--;
			}
		}
		else return false;
	}
return (count == 0);
}

console.log("Result:",balanceOf());

//2. Вводится x,n. Найти arcsinx используя ряд тейлора из n первых членов.

function arcSinTaylor(x,n){
var sum = 0;
var x = Number(prompt("Task 2: enter x (|x| <= 1):"));
var n = Number(prompt("enter natural n:"));

	function factorial(k){
		if (k===0){
			return 1;
		}
		else return n*factorial(k - 1);
	}

	if (Math.abs(x) <= 1){
		for(var i = 0; i < n; i++){
		sum += (factorial(2 * i)*Math.pow(x,2*i+1))/(Math.pow(4,i)*Math.pow(factorial(i),2)*(2*i+1))
		}
	}
	else console.log("Error");

return sum.toFixed(5);
}

console.log("Result:",arcSinTaylor());

//3. В 3 разных prompt вводится число, знак операции, число. Вернуть рез-т операции.

function operation(){
var a = prompt("Task 3: enter a:");
var sign = prompt("enter sign:");
var b = prompt("enter b:");

	function Division(a,b){
	return ((b == 0) ? ('Error: division by zero!') : a/b);
	}
	function Remainder(a,b){
	return ((b == 0) ? ('Error: division by zero!') : a%b);
	}

	switch(sign){
		case '+' : return (Number(a) + Number(b));
		case '-' : return (Number(a) - Number(b));
		case '*' : return (Number(a) * Number(b));
		case '/' : return ((b == 0) ? ('Error: division by zero!') : a/b);
		case '%' : return ((b == 0) ? ('Error: division by zero!') : a%b);
		default : break;
	}
}

console.log("Result:",operation());


