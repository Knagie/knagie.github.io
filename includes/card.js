// JavaScript Document
$(function() {
	$('#i-wrapper1').click(function() {
		$('#i-content1').toggleClass('open');
		$(this).toggleClass('open');
	})
})
$(function() {
	$('#i-wrapper2').click(function() {
		$('#i-content2').toggleClass('open');
		$(this).toggleClass('open');
	})
})
$(function() {
	$('#i-wrapper3').click(function() {
		$('#i-content3').toggleClass('open');
		$(this).toggleClass('open');
	})
})




		$(function() {
			if ($('.i-content').hasClass('open')){
					$('.i-content').removeClass('open');
				}
			else {
			$('.i-wrapper').click(function() {
					$('.i-content').toggleClass('open');
					$(this).toggleClass('open');
				})
			}

		})