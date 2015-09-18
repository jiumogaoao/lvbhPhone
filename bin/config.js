// JavaScript Document
var sourArry=["http://112.74.25.12:48080/","http://m.lvbh.cn/","http://192.168.1.14:8080/"];
var config={
	sour:sourArry[0],
	loadingOn:function(){
		if(app.cache("phone")&&app.cache("phone").phone){
			$("#loading").hide();
			$("#loadingBG").hide();	
			}else{
			$("#loading").show();
			$("#loadingBG").show();	
				}
		
		},
	loadingOff:function(){
		$("#loading").hide();
		$("#loadingBG").hide();
		}
	};
var uuid=function(){
		return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
	        return (v.toString(16)).toUpperCase();
    	});
	};