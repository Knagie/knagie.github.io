
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 300) { 
            $('#bTTBtn').fadeIn(); 
        } else { 
            $('#bTTBtn').fadeOut(); 
        } 
    }); 
    $('#bTTBtn').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 300); 
        return false; 
    }); 
});

/* var btn = $('#bTTBtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
	btn.addClass('show');
  } else {
	btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
}); */
