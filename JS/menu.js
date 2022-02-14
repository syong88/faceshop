//menu.js
$(function(){
	
	//메인메뉴에 마우스오버시 네비박스 슬라이드다운
	$('.mainBt').on({
			mouseenter:	function(){
				
				$('.sub').stop().slideUp(200); //서브6개 업 (순서바뀌면 안됨)
				$(this).next().stop().slideDown(300); //마우스오버된 해당 서브만 내려온다.
				
				
			}
	});
	
	$('.nav').on({
		mouseleave:	function(){
			$('.sub').stop().slideUp(300);
			
		}
	});
	

	
	$('.sub1Bt').each(function(index){ //each함수
		$(this).on({
			mouseenter:	function(){
				

				$('.sub>ul>li').removeClass('addBg');
				$('.sub>ul>li').eq(index).addClass('addBg');
				
				
			}
		});
	});
	
});














