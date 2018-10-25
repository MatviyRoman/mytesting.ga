$(window).on('load', function(){
	$('#one-btn').click(function(){
		$('.one-links').show();
		$('two-links').hide();
		$('three-links').hide();
		$('four-links').hide();
	})
	$('#two-btn').click(function(){
		$('.one-links').hide();
		$('two-links').toggle();
		$('three-links').hide();
		$('four-links').hide();
	});
	// $('#three-btn').click(function(){
	// 	$('.one-links').hide();
	// 	$('two-links').hide();
	// 	$('three-links').show();
	// 	$('four-links').hide();
	// });
	// $('#four-btn').click(function(){
	// 	$('.one-links').hide();
	// 	$('two-links').hide();
	// 	$('three-links').hide();
	// 	$('four-links').show();
	// });
});