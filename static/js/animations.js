$(document).ready(function(){

	$(window).load(function(){
		  
	});

	$("#nav-about").click(function(){
		$('.brand-container').addClass('open-brand-container');
		setTimeout(function() {
			$(document).scrollTo('#about-me',500);
		}, 500);
	});

	$("#nav-home").click(function(){
		$(document).scrollTo('.banner-container',500);
		setTimeout(function() {
			$('.brand-container').removeClass('open-brand-container');
		}, 500);
	});

	$(".nav-item").click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});

	function check_scroll(){
		var st = $(window).scrollTop();
		if (st >= $('.banner-container').height()){
	        $(".navicon.white").hide();
	        $(".navicon.black").show();
	        $(".nav-item").css('color','#000');
	    }
	    else{
	        $(".navicon.black").hide();
	        $(".navicon.white").show();
	        $(".nav-item").css('color','#fff');
	    }
	}

	$(window).scroll(function(){
		check_scroll();
	});

	$("#nav-btn-container").click(function(){
		var $this = jQuery(this);
		if ($this.data('activated')) return false;  // Pending, return
		$this.data('activated', true);
		setTimeout(function() {
		  $this.data('activated', false)
		}, 500); // Freeze for 500ms
	
		$(this).find('a').toggleClass("open");

		if ($(this).find('a').hasClass('open')){
			$('#nav-home').fadeIn();
			setTimeout(function() {
				$('#nav-about').fadeIn();
				setTimeout(function() {
					$('#nav-projects').fadeIn();
					setTimeout(function() {
						$('#nav-contact').fadeIn();
					
					}, 120);
				}, 120);
			}, 120);
		}
		else{
			$('#nav-contact').fadeOut();
			setTimeout(function() {
				$('#nav-projects').fadeOut();
				setTimeout(function() {
					$('#nav-about').fadeOut();
					setTimeout(function() {
						$('#nav-home').fadeOut();
					}, 120);
				}, 120);
			}, 120);
		}
		
	});

})