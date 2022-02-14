//scroll.js
$(function(){
	
	var url='';
	
	$('.smoothBt').on({
		click:	function(event){
			//상단에서 스크롤시 섹션2의 탑값에서 부드럽게 멈추는 이벤트와  
			//클릭이벤트의 중복되는 이벤트를 해결하기 위해서 필요 event.preventDefault();
			
			event.preventDefault(); //이전의 이벤트 취소하고 나머지 실행
			url = $(this).attr('href'); //#wrap, #section2..
			//부드럽게이동(스무스 스크롤링)
			$('html,body').stop().animate({ scrollTop: $( url ).offset().top-60 },600,'swing');
			
		}
	});
	
	
	
	
	
});