// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealIndex",
		par:"",
		tem:["top_second","simple_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"跟团游订单"});
			$("#head").html(head);
			var list=_.template(data.tem[1])({list:[
			{name:"成交订单",lid:"0"},
			{name:"取消订单",lid:"1"},
			{name:"作废订单",lid:"2"}
			]});
			$("#scroller").html(list);
			$(".top_third .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			$(".simple_list").unbind("click").bind("click",function(){
				window.location.hash="dealList/"+$(this).attr("lid");
				});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
			}
		});
	})($,app,config);