// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealSuccess",
		par:"id",
		tem:["top_third","deal_success"],
		fn:function(data){

			var head=_.template(data.tem[0])({
				left:" ",
				center:"订单提交信息",
				right:"关闭"
				});
			$("#head").html(head);
			$("#scroller").html(data.tem[1]);
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				
			}
		});
	})($,app,config);