$(document).ready(function() {
	//Nav bar transition
	var pagePosition = 0;
	var change = $(".section");
	var offset = change.offset();

	if(change.length) {
		$(document).scroll(function() { 
			scroll_start = $(this).scrollTop();
			if(scroll_start >= offset.top) {
				$(".nav").addClass("nav--scrolled");
			} else if (pagePosition < offset.top) {
				$(".nav").removeClass("nav--scrolled");
			}
		});
	}

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