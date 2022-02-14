//slide.js
jQuery(function(){
	var s=[]; //현재슬라이드 번호 기억
	var a=[]; //다음슬라이드 인덱스번호기억
	var b=[];
	var c=[];
	var cnt=0;
	var n=$('.slide').length-1; //마지막배열숫자 맞춰주는 변수
	var t=0;
	
	autoPlay();
	pageBtImgFn(0); //초기값
	
	function autoPlay(){
		
		setId = setInterval(nextslideFn, 3000);
	}
	// setInterval(prevslideFn, 3000);
	
	//플레이정지버튼
	// $('.pauseBt').on({
	// 	click:	function(){
	// 		if( t==0 ){
	// 			t=1;	
	// 			clearInterval(setId);	
	// 			$(this).find('img').attr('src','img/intro_indi_play.png');
	// 		}
	// 		else if( t==1 ){
	// 			t=0;
	// 			autoPlay();
	// 			$(this).find('img').attr('src','img/intro_indi_pause.png');
	// 		}
			
	// 	}
	// });

	$('.pauseBt').on({
		click:	function(){
			if( t==0 ){
				t=1;	
				// clearInterval(setId);	
				$(this).find('img').attr('src','img/intro_indi_play.png');
			}
			else if( t==1 ){
				t=0;
				// autoPlay();
				$(this).find('img').attr('src','img/intro_indi_pause.png');
			}
			
		}
	});
	
	
	//페이지버튼
	$('.pageBt').each(function(index){
		$(this).on({
			click:	function(){
				
				if( cnt<index ){ //다음 매인함수
					cnt=index;					
					slideFn(index);

					
				}
				else if( cnt>index ){ //이전 메인함수
						cnt=index;				
					rslideFn(index);

					
					//페이지버튼효과
					// pageBtImgFn(index);
				}
			}
		})
	});
	

	
	///////////////////////////////////////////////////////////////////
	//페이지버튼효과
	function pageBtImgFn(z){
		
		
		$('.pageBt').eq(0).find('img').attr('src', 'img/intro_indi_1.png')
		$('.pageBt').eq(1).find('img').attr('src', 'img/intro_indi_2.png')
		$('.pageBt').eq(2).find('img').attr('src', 'img/intro_indi_3.png')
		
		
		$('.pageBt').eq(z).find('img').attr('src', 'img/intro_indi_'+(z+1)+'_on.png')
	}
	///////////////////////////////////////////////////////////////////////
	
	
	$('.nextBt').on({
		click:	function(){
			nextslideFn();
		}
	});
	
	$('.prevBt').on({
		click:	function(){
			prevslideFn();
		}
	});
	
	
	function nextslideFn(){
		cnt++;
		if(cnt>n){
			cnt=0;
		}
		slideFn(cnt);
	}
	
	function prevslideFn(){
		cnt--;
		if(cnt<0){
			cnt=n;
		}
		rslideFn(cnt);
	}
	
	
	
	function slideFn(z){
		
		pageBtImgFn(z); //페이지네이션
		
		if(z==0){
			a=[2,0,1];
		}
		else if(z==1){
			a=[0,1,2];
		}
		else if(z==2){
			a=[1,2,0];
		}
		
		var j=-1;
		for(i=0; i<=n; i++){
			$('.slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*j)+'%'},1000);
			j++;
		}
		
		// $('.slide').eq(a[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},1000);
		// $('.slide').eq(a[1]).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},1000);
		// $('.slide').eq(a[2]).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},1000);

	}
	
	
	function rslideFn(z){
	
		pageBtImgFn(z); //페이지네이션
		
		if(z==2){
			b=[0,2,1];
		}
		else if(z==1){
			b=[2,1,0];
		}
		else if(z==0){
			b=[1,0,2];
		}
		
		var j=1;
		for(i=0; i<=n; i++){
			$('.slide').eq(b[i]).stop().animate({left:(100*-1*i)+'%'},0).animate({left:(100*j)+'%'},1000);
			j--;
		}
		
		

		// $('.slide').eq(b[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*1)+'%'},1000);
		// $('.slide').eq(b[1]).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},1000);
		// $('.slide').eq(b[2]).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},1000);
		
		
	}
	
	
	
});