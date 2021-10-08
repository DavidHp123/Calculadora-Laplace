function limpiar() {
	document.getElemtById('datos').reset();
}

function resultado() {
	var x = (document.getElementById('valor').value);
	var s = "/S"
	document.getElementById('respuesta').innerHTML=x+s;
}

function resultado2() {
var a=(document.getElementById('valor2').value);
var b="!/S^"
var c=(document.getElementById('valor2').value);
var d="+1"
document.getElementById('respuesta').innerHTML=a+b+c+d;
}

function resultado3() {
	var f= "1/S-"
	var g = (document.getElementById('valor3').value);
	
	document.getElementById('respuesta').innerHTML=f+g
}

function resultado4() {
	var h = (document.getElementById('valor4').value);
	var i = "/s^2+"+ document.getElementById('valor4').value +"^2"

	
	document.getElementById('respuesta').innerHTML=h+i
}

function resultado5() {
	var j = "S"
	var k = "/s^2+"+ document.getElementById('valor5').value +"^2"

	
	document.getElementById('respuesta').innerHTML=j+k
}

function resultado6() {
	var k =document.getElementById('valor6').value +"!/(S-"+ document.getElementById('valor7').value +")^"+document.getElementById('valor6').value+"+1"

	
	document.getElementById('respuesta').innerHTML=k
}

function resultado7() {
	var l =document.getElementById('valor9').value +"/(S-"+ document.getElementById('valor8').value +")^2+"+document.getElementById('valor9').value+"^2"

	
	document.getElementById('respuesta').innerHTML=l
}

function resultado8() {
	var m ="S-"+ document.getElementById('valor10').value +"/(S-"+ document.getElementById('valor10').value +")^2+"+document.getElementById('valor11').value+"^2"

	
	document.getElementById('respuesta').innerHTML=m
}