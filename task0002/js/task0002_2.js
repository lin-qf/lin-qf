var disp=$("#disp");
	$.on($("#btn"),"click",countDown);
	var count;
	var startTime,startYear,startMonth,startDay,startHour,startMinute,startSecond;
	function countDown(){
		 end=new Date($("#time").value);
		 endTime=end.getTime();
		 endYear=end.getFullYear();
		 endMonth=end.getMonth()+1;
		 endDay=end.getDate();
		count=setInterval(countDisp,1000);

	}
	function countDisp(){
			var gapYear=0,gapMonth=0,gapDay=0;
		     start=new Date();
		     startTime=start.getTime();
		     if(endTime<=startTime){
		     	disp.innerHTML="时间已经过去啦~";
		     	clearInterval(count);
		     	return;
		     }
			 startYear=start.getFullYear();
			 startDay=start.getDate();
			 startMonth=start.getMonth()+1;
			 startSecond=start.getSeconds();
			 startHour=start.getHours();
			 startMinute=start.getMinutes();
			var g=gap(startYear,startMonth,startDay,endYear,endMonth,endDay);
			disp.innerHTML=g.gy+"年"+g.gm+"月"+g.gd+"日"+(23-startHour)+"小时"+(59-startMinute)+"分钟"+(59-startSecond)+"秒";
	}
	function gap(y1,m1,d1,y2,m2,d2){
		var gy=0,gm=0,gd=0;
		var g1=new Date(y2+"-"+m1+"-"+31).getDate();
			 			switch(g1){
			 				case 31:g1=31;break;
			 				case 1:g1=30;break;
			 				case 2:g1=29;break;
			 				default:g1=28;break;
			 			}
		if(y2>y1){
			if(m2>m1){
					gy=y2-y1;
				if(d2>d1){
					gm=m2-m1;
					gd=d2-d1-1;
				}else if(d2==d1){
					gm=m2-m1-1;
					gd=0;
				}else{
					gm=m2-m1-1;
					gd=g1-d1+d2;
				}
		}else if(m2==m1){
				gm=12-m1+m2-1;
				if(d2>d1){
					gy=y2-y1;
					gd=d2-d1-1;
				}else if(d2==d1){
					gy=y2-y1-1;
				}else{
					gy=y2-y1-1;
					gd=g1-d1+d2;
				}
			}else{
				if(d2>d1){
					gy=y2-y1-1;
					gm=12-m1+m2-1;
					gd=d2-d1-1;
				}else if(d2==d1){
					gy=y2-y1-1;
					gm=12-m1+m2-1;
					gd=0;
				}else{
					gy=y2-y1-1;
					gm=gm=12-m1+m2-1;
					gd=g1-d1+d2;
				}
			}
	}else if(y2==y1){
		if(m2>m1){
			if(d2>d1){
					gm=m2-m1;
					gd=d2-d1-1;
				}else if(d2==d1){
					gm=m2-m1-1;
				}else{
					gm=m2-m1-1;
					gd=g1-d1+d2-1;
				}
		}else if(m2==m1){
			if(d2>d1){
				gd=d2-d1-1;
			}
		}
	}
	return{
		gy:gy,
		gm:gm,
		gd:gd
	}
}