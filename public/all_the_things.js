

// NO LOOPS IN JQUERY
// // console.log('hello');

$(function() {
// // //   // console.log('document is ready!!');
//   let allTheDivs = $('div');
//   // console.log(allTheDivs);
//   for (var i = 0; i < allTheDivs.length; i++) {
//      // console.log(allTheDivs[i]);
//      $(allTheDivs[i]).mouseover(function() {
//         console.log('mouseover');
//      })
//   }
// })


// allTheDivs.mouseover(function() {
// 	console.log('mouseover');
// });.mouseleave(function() {
// 	console.log('mouseleave');
// });
// });

	allTheDivs.hover(
		function() {
			console.log('mouseover');
			allTheDivs.text('mouse over');
		},
		function() {
			console.log('mouseleave');
			allTheDivs.text('mouse leave');
		}
	);





















