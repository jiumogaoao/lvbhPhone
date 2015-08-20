// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"travellerAdd",
		par:"",
		tem:["top_third","traveller"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"添加常用旅客",right:"保存"});
			$("#head").html(head);

			$("#scroller").html(data.tem[1]);

			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);	
			
			
			}
		});
	})($,app,config);