//fixedMenu.js
$(function(){
	var fixedTop = $('.section1-intro-tap').offset().top;
	
	$(window).scroll(function(){
		if( $(window).scrollTop() >= fixedTop ){
			$('.section1-intro-tap').addClass('addFixed');
		}
		else{
			$('.section1-intro-tap').removeClass('addFixed');
		}
	});
	
});