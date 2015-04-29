var num=4;
	var len=5;
	var val="";
	$.on("#search","focus",function(){
		$("#result").style.display="block";
	})
	$.delegate("#result","li","mouseover",function(i){
			addClass(this,"active");
			num=testActive();
		})
	function testActive(){
		for(var i in $("#result li")){
			if($("#result li")[i]==$("[class=active]")[0])
			return parseInt(i,10);
		}
	}

	addKeyEvent("#search",40,function(){
		each($("#result li"),function(){
			removeClass(this,"active");
		});
		num++;
		addClass($("#result li")[num%len],"active");
	});
	addKeyEvent("#search",38,function(){
		num--;
		num=(num>=0)?num:(len+num);
		each($("#result li"),f3);
		addClass($("#result li")[num%len],"active");
	});
	$.delegate("#result","li","click",function(){
		$("#search").value=this.innerText;
		change();
		val=this.innerText;
	})
	$.delegate("#result","li","mouseout",function(){
			removeClass(this,"active");
		})
	$.on("#search","keyup",function(){
		change();
		val=$("#search").value;
	})
	function change(){
		var newval=$("#search").value;
		if(val!=newval){
			ajax("http://localhost:8000/test1/task0002/task0002_4.php",{
				data:{
					name:newval
				},
				onsuccess:newList
				}
			)
		}
	}
	function newList(responseText){
		var arr=responseText.split(",");
		var str="";
		for(var i in arr){
		str=str+"<li><span>"+val+"</span>"+arr[i]+"</li>";
		}
		$("#result").innerHTML=str;
	}