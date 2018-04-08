function Code_Decode(){
	codeArea = document.getElementById("code");
	decodeArea = document.getElementById("decode");

	btnCode = document.getElementsByClassName("Code")[0];
	btnDecode = document.getElementsByClassName("Decode")[0];

	btnClearCode = document.getElementById("clearCode");
	btnClearDecode = document.getElementById("clearDecode");

	btnCode.addEventListener("click",function(){
		var str = codeArea.value;
		var str1 = "";
		for(var i = 0; i < str.length; i++){
			str1 += String.fromCharCode(str.charCodeAt(i)+1);
		}
		decodeArea.value = str1;
	})

	btnDecode.addEventListener("click",function(){
		var str = decodeArea.value;
		var str2 = "";
		for(var i = 0; i < str.length; i++){
			str2 += String.fromCharCode(str.charCodeAt(i)-1);
		}
		codeArea.value = str2;
	})

	btnClearCode.addEventListener("click",function(){
		codeArea.value = "";
	})

	btnClearDecode.addEventListener("click",function(){
		decodeArea.value = "";
	})
}

Code_Decode();