// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"outIndex",
		par:"",
		tem:["top_second","simple_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"支出明细"});
			$("#head").html(head);
			var list=_.template(data.tem[1])({list:[
			{name:"提现",lid:"5"},
			{name:"成交订单",lid:"3"},
			{name:"取消订单支出",lid:"4"}
			]});
			$("#scroller").html(list);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".simple_list").unbind("tap").bind("tap",function(){
				if($(this).attr("lid")==="5"){
					window.location.hash="inIndex";
					}else{
						window.location.hash="accountList/"+$(this).attr("lid");
						}
				});
			myScroll.refresh();
			}
		});
	})($,app,config);