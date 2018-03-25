//1	Вводятся N, S, P.Cгенерировать массив из N чисел в диапазоне s+-p%(процентов).
//  Отсортировать и найти среднее гармоническое.

function task1() {
	console.log("Задание 1.");
	var N = Number(prompt("Введите кол-во N элементов массива:"));
	var S = Number(prompt("Введите опорное число S:"));
	var P = S*Number(prompt("Введите процент P:")/100);
	var arr = [];
	var AvHarmonic = 0;

	function QuickSort(arr){
		if (arr.length == 0)
			return [];
		var a = [];
		var b = [];
		var p = arr[0];
		for(var i = 1; i < arr.length; i++){
			if (arr[i] < p)
				a[a.length] = arr[i];
			else b[b.length] = arr[i];
		}
	return QuickSort(a).concat(p,QuickSort(b));
	}

	for(var i = 0; i < N; i++){
		arr.push(Math.round(2*P*Math.random()+S-P));
		// console.log(arr[i]);
		AvHarmonic += (1/arr[i]);
	}

	console.log("Отсортированный массив:",QuickSort(arr));

return (N/AvHarmonic).toFixed(5);
}

console.log("result =",task1());

//2 Написать ф-ю Polynom(coef, x), вывести полином, вычислить его значение в x.

function polynom(arr, x){
	function showPolynom(newArr){
	var temp = "";
	var str = newArr[0];
	console.log(arr);

		if (newArr[1] > 0){
			str += " + " + (newArr[1] + "x");
		}
		else 
			if (newArr[1] < 0){
				str += " - " + (Math.abs(newArr[1]) + "x");
			}

		for (var i = 2; i < newArr.length; i++){
			if (newArr[i] > 0){
				temp += " + " + newArr[i] + "x^" + i ;
			}
			else 
				if (newArr[i] < 0){
					temp += " - " + Math.abs(newArr[i]) + "x^" + i;
				}
	    }
	   
	str += temp.substring(0, temp.length);
	return str;
	}

	function calculatePolynom(newArr, value){
	var result = 0;

		console.log("x =",value);
		for (var i = 0; i < newArr.length; i++){
			result += newArr[i]*Math.pow(value, i);
	    }
    return result;
    }

  console.log("polynom:",showPolynom(arr));
  console.log("result =",calculatePolynom(arr, x));
}

console.log("\nЗадание 2.");

var arr = prompt("Введите через запятую коэффициенты:").split(",");
var x = Number(prompt("Введите число x, чтобы вычислить полином:"));

polynom(arr, x);

//3 В консоль вывести кол-во минут до конца текущего дня

function secondsRemain(){
	console.log("\nЗадание 3.");
	var d1 = new Date();
	var d2 = new Date(d1.getFullYear(),d1.getMonth(),d1.getDate()+1)
return (d2-d1)/1000;
}

console.log(secondsRemain(), "seconds to tomorrow");