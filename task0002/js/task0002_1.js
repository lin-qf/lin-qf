	var arr=[];
		var show=false;
		var disp=$("#disp");
		$.on($("#habbit"),"keyup",enterWord);
		$.on($("#btn"),"click",process);
		function enterWord(){
			    arr=trim($("#habbit").value);
				arr=arr.split(/[\t\s,，；;]+/);
				if(arr.length>10){ 
					$("#info").style.display="block";
					show=false;
					}else{
					$("#info").style.display="none";
					show=true;	
					}
				}
		function process(){
			disp.innerHTML="";
			if(arr.length==0){disp.innerHTML="您的输入不能为空";
							
							  return false;}else if(show){
			var str="";
			disp.innerHTML+="您的兴趣爱好有：";
			for(var i in arr){
				var newdisp1=document.createElement("label");
					newdisp1.innerHTML="<br>"+arr[i];
					newdisp2=document.createElement("input");
					newdisp2.type="checkbox";
				disp.appendChild(newdisp1);
				disp.appendChild(newdisp2);
				}
			}
		}