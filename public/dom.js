console.log("hello dom");

//DOM LOADED EVENT
//DOCUMENT READY
// window.addEventListener('load', function(){
// 	console.log('document is ready')
// 	var input = document.getElemenetById('our-text-input');
// 	console.log(input);

// 	input.addEventListener('change', function);


// });


// window.addEventListener('load',function() {
// 	var textField = document.getElementById('our-text-input');
// 	textField.addEventListener('change', function(){
// 		console.log("Something changed.");
// 		console.dir(arguments);
// 	});
// });


function onChangeHandler(input) {
console.log("Something changed.");
console.log(input.value);
}

window.addEventListener('load',function() {
	var textField = document.getElementById('our-text-input');
	textField.addEventListener('change', function(event){
		console.log("Something changed.");
		console.log(event.target.value);
	});
});







