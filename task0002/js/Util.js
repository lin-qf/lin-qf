function isArray(arr){
	return (arr instanceof Array);
}
function isFunction(fn){
	return (fn instanceof Function);
}
function cloneObject(src){
	var newsrc;
	if(isArray(src)||typeof(src)=="object"){
		newsrc=(isArray(src))?[]:{};
		for(var i in src){
			newsrc[i]=cloneObject(src[i]);
		}
	}else{
		newsrc=src;
	}
	return newsrc;
}
function uniqArray(arr){
	var b=[];
	if(!isArray(arr)) return false;
	for(var i=0,len=arr.length;i<len;i++){
		if(arr.lastIndexOf(arr[i])==i){
			b.push(arr[i]);
		}
	}
	return b;
}
function trim(str){
	var a=str.split("");
	while(a.indexOf(" ")==0){
		a.shift();
	}
	while(a.lastIndexOf(" ")==a.length-1){
		a.pop();
	}
	return a.join("");
}
function each(arr,fn){
	for(var i in arr){
		fn.call(arr[i],arr[i],i);
	}
}
function getObjectLength(obj){
	var count=0;
	for(var i in obj){
		count++;
	}
	return count;
}
function addClass(element,newClassName){
	var el=document.getElementById(element);
	var clName=el.className;
		clName=clName.split(" ");
		clName.push(newClassName);
		el.className=clName.join(" ");;
}
function removeClass(element,oldClassName){
	var el=document.getElementById(element);
	var clName=el.className;
		clName=clName.split(" ");
	var start=clName.indexOf(oldClassName);
		if(start>-1){
		el.className=clName.slice(start+1).join(" ");}
		else return;
}
function isSilblingNode(element,silblingNode){
	var p1=element.parentNode;
	var p2=silblingNode.parentNode;
	if(p1===p2) return true;
	else return false;
}
function getPosition(element){
	var el=document.getElementById(element);
		return{
			x:el.offsetLeft,
			y:el.offsetTop
		}
}
function $(selector){
	if(selector==document||selector==document.body){
		return selector;
	}
	var s=selector.split(/\s+/);
	if(s[s.length-1].indexOf("#")==-1){
		document.querySelectorAll(selector);
		return document.querySelectorAll(selector);
	}else{
		return document.querySelector(selector);
	}
}

function addEvent(element,event,listener){
	if(element.addEventListener){
		element.addEventListener(event,listener,false);
	}else{
		element.attachEvent("on"+event,listener);
	}
}
function removeEvent(element,event,listener){
	if(listener!=null&&listener!=undefined){
		if(removeEventListener){
		element.removeEventListener(event,listener);
			}else{
				element.detachEvent("on"+event,listener);
					}
		}else{

	}
}
function addClickEvent(element,listener){
	addEvent(element,"click",listener);
}
function addEnterEvent(element,listener){
	addEvent(element,"keydown",function(e){
		if(window.event) {
  	         keynum = e.keyCode}else if(e.which) {
  	           keynum = e.which}
  	if(keynum==13){ listener();}else return;
	});
}
function delegateEvent(element,tag,eventName,listener){
	$.on(element,eventName,function(){
		var e=event||window.event;
			target=e.srcElement?e.srcElement:e.target;
			if(target.tagName==tag.toUpperCase()){
			listener(e);
		}else{
			return;
		}
	})
}
$.on=addEvent;
$.un=removeEvent;
$.click=addClickEvent;
$.enter=addEnterEvent;
$.delegate=delegateEvent;

function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}