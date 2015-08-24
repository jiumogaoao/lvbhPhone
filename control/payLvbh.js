// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"payLvbh",
		par:"id",
		tem:["top_second","pay_lvbh","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"旅博账户支付"});
			$("#head").html(head);
			var button=_.template(data.tem[2])({
				id:"pay",
				text:"确认支付"
				});
			$("#scroller").html(data.tem[1]+button);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
			}
		});
	})($,app,config);