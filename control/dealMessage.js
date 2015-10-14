// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealMessage",
		par:"id",
		tem:["top_second"],
		fn:function(data){
			var head=_.template(data.tem[0])({
				left:"",
				center:"预订须知"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#scroller").html('<img src="img/message.png" style="width:100%"/>');
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
				$('img').load(function(){
				//myScroll.refresh();
				});
			}
		});
	})($,app,config);