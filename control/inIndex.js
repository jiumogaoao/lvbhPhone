// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"inIndex",
		par:"",
		tem:["top_second","simple_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"收入明细"});
			$("#head").html(head);
			var list=_.template(data.tem[1])({list:[
			{name:"产品体验奖励",lid:"0"},
			{name:"渠道体验奖励",lid:"1"},
			{name:"取消订单退回",lid:"2"}
			]});
			$("#scroller").html(list);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".simple_list").unbind("tap").bind("tap",function(){
					window.location.hash="accountList/"+$(this).attr("lid");
				});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				})
			}
		});
	})($,app,config);