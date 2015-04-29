	var drag=false;
	var target;
	var box=$("#box");
	var left=$("#left ul")[0];
	var right=$("#right ul")[0];
	var info=$("#info");
	var oLi=document.getElementsByTagName("li");
	var gapX,gapY;
		$.on(document,"mousemove",function(){
			if(!drag) return;
			target.style.left=event.clientX-gapX+"px";
			target.style.top=event.clientY-gapY+"px";
			console.log(target.offsetLeft,target.offsetTop);
			return false;
		})
		$.on(document,"mouseup",function(){
			stopMove();
			putIn(target);
			target.releaseCapture&&target.releaseCapture();
			return false;
		})
	function init(){
		var l1=$("#left li").length;
		for(var i=0;i<oLi.length;i++){
		oLi[i].style.top=((i>l1-1)?(i-l1)*32:i*32)+"px";
		$.on(oLi[i],"mousedown",function(){
			drag=true;
			target=this;
			target.setCapture&&target.setCapture();
			startMove(target);
			return false;
		})
			}
	}
	function startMove(obj){
		drag=true;
		gapX=event.clientX-obj.offsetLeft;
		gapY=event.clientY-obj.offsetTop;
	}
	function stopMove(){
		drag=false;
		return false;
	}
	function putIn(obj){
		if(obj.parentNode.parentNode.id=="left"){
			if(obj.offsetLeft>140&&obj.offsetTop>0){
			obj.style.left=0+"px";
			info.innerHTML="";
			right.appendChild(obj);
			init();
			}else if(obj.offsetLeft>22&&obj.offsetTop>0){
				info.innerHTML="想把我放到右边去吗，那就在往右一些~";
			}else if(obj.offsetLeft>140&&obj.offsetTop<0){
				info.innerHTML="想把我放到右边去吗，那就在往下一些~";
			}
		}else{
			if(obj.offsetLeft<-140&&obj.offsetTop>0){
			obj.style.left=0+"px";
			left.appendChild(obj);
			init();
			}else if(obj.offsetLeft<-22&&obj.offsetTop>0){
				info.innerHTML="想把我放到左边去吗，那就在往左一些~";
			}else if(obj.offsetLeft<-140&&obj.offsetTop<0){
				info.innerHTML="想把我放到左边去吗，那就在往下一些~";
			}
		}
	}
	init();