$(document).ready(function() {
	// Nav bar transition						FIX FOR MOBILE
	var pagePosition = 0;

	$(window).scroll(function() {
		pagePosition = $(window).scrollTop();    
		if (pagePosition >= 530) {
			$(".nav").addClass("nav--scrolled");
		} else if (pagePosition < 530) {
			$(".nav").removeClass("nav--scrolled");
		}
	});

	// Set height of .full
	var height = $(".section:nth-child(6)").height();
	function fullHeight() {
		$(".full").height(height);
	}

	fullHeight();
});

// Reload .full div on window resize
window.onresize = function() { 
	location.reload(); 
}

function reload() {
	var full = document.getElementById(".full");
	var content = full.innerHTML;
	full.innerHTML = content; 
}