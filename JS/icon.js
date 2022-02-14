//icon.js
$(function(){
	
	//icon 마우스 오버시 텍스트박스 왼쪽에서 오른쪽으로 애니메이션
	
	$('.iconBt1').on({
		mouseenter:	function(){
			$('.iconTxt1').stop().animate({opacity:1},400);
		},
		mouseleave:	function(){
			$('.iconTxt1').stop().animate({opacity:0},0);
		}
		
		
	});
	$('.iconBt2').on({
		mouseenter:	function(){
			$('.iconTxt2').stop().animate({opacity:1},400);
		},
		mouseleave:	function(){
			$('.iconTxt2').stop().animate({opacity:0},0);
		}
		
		
	});
	$('.iconBt3').on({
		mouseenter:	function(){
			$('.iconTxt3').stop().animate({opacity:1},400);
		},
		mouseleave:	function(){
			$('.iconTxt3').stop().animate({opacity:0},0);
		}
		
		
	});
	$('.iconBt4').on({
		mouseenter:	function(){
			$('.iconTxt4').stop().animate({opacity:1},400);
		},
		mouseleave:	function(){
			$('.iconTxt4').stop().animate({opacity:0},0);
		}
		
		
	});
	
});