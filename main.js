$(window).on('load', function(){
	$('#one-btn, #two-btn, #three-btn, #four-btn').click(function(){
		$('.one-one-links').hide();
		$('.one-two-links').hide();
		$('.one-three-links').hide();
		$('.one-four-links').hide();
		$('.two-one-links').hide();
		$('.two-two-links').hide();
		$('.two-three-links').hide();
		$('.two-four-links').hide();
		$('.three-one-links').hide();
		$('.three-two-links').hide();
		$('.three-three-links').hide();
		$('.three-four-links').hide();
		$('.four-one-links').hide();
		$('.four-two-links').hide();
		$('.four-three-links').hide();
		$('.four-four-links').hide();
	})
	$('#one-btn').click(function(){
		$('.one-links').slideToggle();
		$('.two-links').hide();
		$('.three-links').hide();
		$('.four-links').hide();
	})
	$('#two-btn').click(function(){
		$('.one-links').hide();
		$('.two-links').slideToggle();
		$('.three-links').hide();
		$('.four-links').hide();
	})
	$('#three-btn').click(function(){
		$('.one-links').hide();
		$('.two-links').hide();
		$('.three-links').slideToggle();
		$('.four-links').hide();
	})
	$('#four-btn').click(function(){
		$('.one-links').hide();
		$('.two-links').hide();
		$('.three-links').hide();
		$('.four-links').slideToggle();
	})
	$('#one-one-btn').click(function(){
		$('.one-one-links').slideToggle();
		$('.one-two-links').hide();
		$('.one-three-links').hide();
	})
	$('#one-two-btn').click(function(){
		$('.one-one-links').hide();
		$('.one-two-links').slideToggle();
		$('.one-three-links').hide();
	})
	$('#one-three-btn').click(function(){
		$('.one-one-links').hide();
		$('.one-two-links').hide();
		$('.one-three-links').slideToggle();
	})
	$('#two-one-btn').click(function(){
		$('.two-one-links').slideToggle();
		$('.two-two-links').hide();
		$('.two-three-links').hide();
	})
	$('#two-two-btn').click(function(){
		$('.two-one-links').hide();
		$('.two-two-links').slideToggle();
		$('.two-three-links').hide();
	})
	$('#two-three-btn').click(function(){
		$('.two-one-links').hide();
		$('.two-two-links').hide();
		$('.two-three-links').slideToggle();
	})
	$('#three-one-btn').click(function(){
		$('.three-one-links').slideToggle();
		$('.three-two-links').hide();
		$('.three-three-links').hide();
	})
	$('#three-two-btn').click(function(){
		$('.three-one-links').hide();
		$('.three-two-links').slideToggle();
		$('.three-three-links').hide();
	})
	$('#three-three-btn').click(function(){
		$('.three-one-links').hide();
		$('.three-two-links').hide();
		$('.three-three-links').slideToggle();
	})
	$('#four-one-btn').click(function(){
		$('.four-one-links').slideToggle();
		$('.four-two-links').hide();
		$('.four-three-links').hide();
	})
	$('#four-two-btn').click(function(){
		$('.four-one-links').hide();
		$('.four-two-links').slideToggle();
		$('.four-three-links').hide();
	})
	$('#four-three-btn').click(function(){
		$('.four-one-links').hide();
		$('.four-two-links').hide();
		$('.four-three-links').slideToggle();
	})
});


//Referrer
var referrer;
if (referrer = '')
{
	referrer = document.referrer;
} else {
var referrer = 'http://matviy.pp.ua';
}

document.getElementById("ref").innerHTML = '<a href="' + referrer + '">' + referrer + '</a>';
console.log(referrer);



///Hello if else

let greeting, date = new Date(), time = date.getHours();
console.log(time);

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);
document.getElementById("hello").innerHTML = greeting;


//Hello switch

// let greeting, date = new Date(), time = date.getHours();
// console.log(time);

switch (true) {
  case (time < 10):
    hello = "Good morning";
    break;
  case (time < 20):
    hello = "Good day";
    break;
  default:
    hello = "Good evening";
}
console.log(hello + ' ' + time);



//day weak
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

document.getElementById("day").innerHTML = 'Today is\n' + day;
console.log(day);