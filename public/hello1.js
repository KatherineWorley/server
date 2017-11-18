console.log("hello1");

var myOwnVar = "hello1";

function hello1(){
	console.log(myOwnVar)
}

window.hello1 = function() {
	console.log(myOwnVar);
}