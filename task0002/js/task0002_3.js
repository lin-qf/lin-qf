window.onload=function(){
		var iWidth=600;
		var oPics=$("#pics");
		var oBtn=$("#btn");
		var lType=$("#lType");
		var loop=$("#loop");
		var time=$("#time");
		var circles=$("#circles span")
		var mPic=null;
		oPics.innerHTML=oPics.innerHTML+oPics.innerHTML;
		var oImgs=$("#pics img");
		var mWidth=oPics.offsetWidth;
		oPics.style.width=oImgs.length*iWidth+"px";
		function move(lType,loop,time){
			var l=oPics.offsetLeft;
			if(lType=="right"){
				if(l>=0){
				   l-=(oPics.offsetWidth/2)
			}
			l+=3;
			}else{
					if(l<-(oPics.offsetWidth/2)){
					   l=0;
				}
					l-=3;
			}
			for(var i=0;i<circles.length;i++){
				var l1=l-iWidth/2;
				if(l1<=-(iWidth*(i))&&l1>-(iWidth*(i+1))){
					circles[i].style.background="white";
				}else{
					circles[i].style.background="";
				}
			}
			if(Math.abs(l-Math.round(l/iWidth)*iWidth)<2){
				l=Math.round(l/iWidth)*iWidth;
				stopMove();
				if((loop=="false")&&(l==-mWidth/2||l==0)){
					return;
				}else{
				setTimeout(function(){
					startMove(lType,loop,time)
				},time)
			}
			}
			oPics.style.left=l+"px";
	}
	function startMove(lType,loop,time){
		if(mPic){clearInterval(mPic)};
			mPic=setInterval(function(){
				move(lType,loop,time);
			},30);
	}
	function stopMove(){
		clearInterval(mPic);
	}
	$.on(oBtn,"click",function(){
			stopMove();
			startMove(lType.value,loop.value,time.value);
		})
	for(var i=0;i<circles.length;i++){
		$.on(circles[i],"click",function(){
			stopMove();
			for(var i in circles){
				if(circles[i]==this) break;
			}
			oPics.style.left=-i*iWidth+"px";
			startMove(lType.value,loop.value,time.value);
		})
	}
}