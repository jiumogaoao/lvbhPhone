// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealSuccess",
		par:"id/price",
		tem:["top_third","deal_success"],
		fn:function(data){
			var head=_.template(data.tem[0])({
				left:" ",
				center:"订单提交信息",
				right:"关闭"
				});
			$("#head").html(head);
			$("#head .rightButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			var main=_.template(data.tem[1])({
				number:data.id,
				price:data.price
				});
			$("#scroller").html(main);
			$("#scroller .single_button").unbind("tap").bind("tap",function(){
				window.location.hash="dealIndex";
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