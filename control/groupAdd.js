// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"groupAdd",
		par:"type/value",
		tem:["top_second","group_add"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"加入圈子"});
			$("#head").html(head);
			function layout(at){

			$("#scroller").html(data.tem[1]);
			
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".group_add .button").unbind("tap").bind("tap",function(){
				window.location.hash="groupSet";
				});
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
				$('img').load(function(){
				//myScroll.refresh();
				});
				}

			obj.api.at(layout);	
			}
		});
	})($,app,config);