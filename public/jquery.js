// console.log('hello');

// // console.log(typeof jQuery);
// // var spans = $('span');
// // console.log(spans);
// // window.addEventListener('load', function(){

// $(function() {
// 	var spans = $('span');
// 	console.log(spans);
// })

// // function handleChange() {
// // 	console.log('changed');
// // 	console.log('line2');
// // 	console.log(input);
// // 	console.log(arguments);
// // 	console.log(input.value);
// // 	input.value = "thanks!";
// // }

// $(() => {
// 	console.log('the document is ready');
// 	var spans = $('span');
// 	console.log(spans);

// 	// var inputs = document. gitElementsByTagName('input');
// 	// var input =inputs[0];
// 	var inputs = $('input');

// 	// input.addEventListener('change', function(evt) {
// 	// 	console.log('changed');
// 	// });

// 	inputs.change(function(evt) {
// 		console.log('changed');
// 		console.log(evt);

// 		var input = evt.target(input);
// 		// event that's fired and passed to me, I can grab that input.
// 		var input = this; 

// 		// querying the DOM
// 		var blingedOutInput = $(input);
// 		console.log(blingedOutInput);

// 		// mondifying the DOM
// 		// input.value = "thanks!";
// 		$input.val('Thanks!');

// 	})
// });




console.log('hello jquery');

// function handleChange(input) {
//   // console.log('changed');
//   // console.log('line 2');
//   // console.log(arguments);
//   console.log(input);
//   console.log(input.value);
//   input.value = "Thanks!";
// }



// document.onload = function() {
// window.onload = function() {
// window.addEventListener('load', function() {
// $.ready(function() {
// $(document).on('ready', function() {
// $(function() {
$(() => {
  console.log('the document is ready');
  var spans = $('span');
  console.log(spans);

  // var inputs = document.getElementsByTagName('input');
  // var input = inputs[0];
  var inputs = $('input');

  // input.onchange = function() {
  // input.addEventListener('change', function(evt) {
  //   console.log('changed');
  // });
  inputs.change(function(evt){
    console.log('changed');
    console.log(evt);

    // var input = evt.target;
    var input = this;

    // querying the DOM
    console.log(input.value);
    var $input = $(input);
    console.log($input.val());

    // modifying the DOM
    // input.value = "Thanks!";
    // $input.val('Thanks!');
    // $input.replaceWith('<strong>Thanks!</strong>');

    // $input.addClass('red');
    $input.attr('class', 'red');


  })

  	let links = $('a');
  	console.log(links);
  	links.click(function(e) {
  		console.log('link clicked');
  		console.log(e);
  		e.preventDefault();
  		//e.target or this 
  		let linkYouClickedOn = e.target;
  		// console.log(linkYouClickedOn);
  		let $link = $(linkYouClickedOn);
  		// console.log($link);
  		// $link.hide('slow');
  		// $link.fadeOut('slow');
  		// $link.slideUp('slow');
  		$link.fadeOut('3000', function(){
  			$link.replaceWith('OMG!');

  		});
  	});
});











