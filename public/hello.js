console.log("hello from js file, kmw."); 

// this is a full line comment. 

// var a = 1; 

/* 
  this is 
  a multiline 
  comment
*/


/*** 
this is 
a multiline 
comment
***/

// var a = 1; 

// var input = "something";
// console.log(input);
// if (input === undefined) {
// 	console.log("it's undefined!"); 
// } else {
// 	console.log(input);
// }

// var input;
// if (input) {
// 	console.log("truthy");
// } else {
// 	console.log("falsey");
// }



// var test = true
// var output = test? "passed" : "failed";
// console.log(output);

// var test = false
// var output = test? "passed" : "failed";
// console.log(output);

// var test = ""
// var output = test? "passed" : "failed";
// console.log(output);


// var value = 0;
// if (value === 0) {
// 	console.log('zero')
// } else if (value == 1) {
// 	console.log('one');
// }  else {
// 	console.log('something else')
// }



// if (true) console.log(true)
// 	else console.log(false);

// if (false) console.log('one liner');


// var value = 1;
// switch (value) {
// 	case 1:
// 		console.log("one");
// 		break;
// 	case 2:
// 		console.log("two");
// 		break;
// 	case 3:
// 		console.log("three");
// }

// CASE WHEN STATEMENTS

// var value = 3;
// switch (value) {
// 	case 1:
// 		console.log("one");
// 		break;
// 	case 2:
// 		console.log("two");
// 		break;
// 	case 3:
// 		console.log("three");
// }


// FALL THROUGH SWITCH/CASE

// var value = 2; 
// switch (value) {
// 	case 1:
// 		console.log('one');
// 		break;
// 	case 2:
// 		console.log('two');
// 		break;
// 	default:
// 		console.log('something else');
// }




// WHILE lOOP


// var start = 1 
// while (start < 10){
// 	console.log(start);

// 	if (start)
// 	start++;
// }


// var a = 0;
// while (true) {
// 	console.log(a);
// 	if (a >= 10) {
// 		break;
// 	} else {
// 		a++;
// 	}
// }



// for loop
// for (var i = 0; i <= 10; i++) {
// 	console.log(i);
// }


// var i = 0;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }



// // array loops
// var arr = ["a", "b", "c", "d"];

// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }



// arr.forEach(function(item){
// 	console.log(item);
// });





// // functions



// function func_statement(name) {
// 	console.log('hello');
// 	console.log(name)
// }

// func_statement('wyncode');
// func_statement();
// func_statement(1,2,3,4);


// // function "blocks"


// these are things. 
// "thing"

// 1
// []
// {}

// (function() {
// 	console.log('hello');
// })

//things can be assigned to variables
// var a = "a"

// var b = 1

// var c = []

// var d = {}

// console.log(a, b, c, d);

// var func_expression = function(){
// 	console.log('hello');
// }

// console.log(func_expression);
// func_expression();

// console.log(func_statement)

// func_statement('name');



// var one = func_expression() {
// 	return 1; 

// }

// console.log(one());


// function sayHello() {
// 	console.log('hello');
// }
// sayHello();






// magic variable: arguements

// function addAll() {
// 	// console.log('addAll');
// 	// console.log(arguements);
// 	let sum = 0; 
// 		console.log(arguements);
// 	for (let i = 0; i < arguements.length; i++) {
// 		// sum = sum + arguements[i];
// 		sum += arguements[i];
// 	}

// 	return sum; 
// }

// console.log(addAll());
// console.log(addAll(1, 2, 3, 4, 5));
// console.log(addAll("a", "b", "c", "d"));






// // OLD FUNCTION FOR DEFALT ARGUMENTS
// function defaultArg(a, b) {
// 	if (typeof(b) === "undefined") {
// 		b = 0;
// 	}
// 	console.log(a, b)
// 	return a + b;
// }

// console.log(defaultArg(1, 1));





// var variable = 1;
// console.log(input);
// if (input variable % 2 === 0 ) {
// 	console.log("it's undefined!"); 
// } else {
// 	console.log(input);
// }



// var a = 5 ;
// if (a % 3 === 0) {
// 	console.log("/ by 3")
// }


// DOES NOT WORK
// switch (new State().getFull()) {
//     case FL:
//         console.log("Florida");
//         break;
// };

// switch (FL);


// var start = 5 
// while (start < 11){
// 	console.log(start);
// 	start++;
// }



// // FOR LOOP CALLING HASH IN JAVASCRIPT
// let teachers = [
//   {name: 'Ed'},
//   {name: 'Jo'},
//   {name: 'Don'}
// ];

// for (var i = 0; i < teachers.length; i++) {
//     console.log(teachers[i].name)
// }



// let message = {text: "hello world"};
// functionname(message);

// alert(message)

 




// let message = {text: "hello world"};

// function alertFunc(v) {
//   window.alert(v.text);
// }
// alertFunc(message);








// var state = "Wa".toLowerCase()
// switch (state) {
//   case "fl":
//   console.log("florida");
//   break;
//   case "ny":
//   console.log("new york");
//   break;
//   case "wa":
//   console.log("washington");
//   break;
//   default:
//   console.log("no state listed");

// }







// // IS IT DIVISIABLE BY ??
// var a = 5
// if (a % 3 === 0) {
//   console.log("It's divisible by 3");
// } else if (a % 5 === 0) {
//   console.log("it's divisible by 5");
// } else {
//   console.log("neither");
// }









// JS WEIRDNESS







// function times(number, block) {
// 	for (var i = 0; i < number; i++) {
// 		block();
// 	}
// }

// times(5, function() {
// 	console.log('hello');
// });






// function add(a, b) {
// 	if (Object.is(b, NaN)) {
// 		console.log("found the NaN")
// 		b = 0;
// 	}

// 	return a + b;
// }

// console.log(add(1, 1));
// console.log(add(1, NaN));
// console.log(add(1, "hello"));



//objects and arrays arwe the same thing. 

// var arr = [1, 2, 3]
// var hsh = {a: 1, b: 2, c: 3};

// hsh["d"] = 4;
// console.log(hsh);

// arr.d = 4;
// console.log(arr);

// arr.secert = "secret password";

// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }


// arr.forEach(function(item)) {
// 	console.log(item);
// });


// console.log(arr);
// //hash loops/ iterator
// for (var key in arr) {
// 	if (arr.hasOwnProperty(key)){

// 	}
// 	console.log(key);
// }




// var hash = {a: 1, b: 2, c: 3}
// for (var k in hash) {
// 	console.log(k, hash[k]);
// }





// HOISTING//Javascript "hoists" the variable up to the top of the file. 

// var x = 3;
// console.log(x);



// console.log(x);
// var x = 3;



//SCOPE 
//HOISTING ONLY GOES TO THE TOP OF THE SCOPE, NOT TOP OF DOCUMENT FOR GLOBAL PURPOSE.
// func_statement myFunction() {
// 	//function scope 
// 	var funcVar = "inside function";

// }

// MyFunction();
// console.log(funcVar);

// var funcVar;
// console.log(funcVar);
// funcVar = "inside function";










//// GLOBAL AND FUNCTION SCOPE 

// var globalVar = "global";
// function myFunction() {
// 	console.log(window.globalVar, window["globalVar"]);
// }

// myFunction();


// F-ing up global and function scope



// function myFunction() {
// 	var funcVar = "function"

// }

// myFunction();
// console.log(funcVar);


















