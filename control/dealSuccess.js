// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealSuccess",
		par:"id",
		tem:["top_third","deal_flow","single_button"],
		fn:function(data){

			var head=_.template(data.tem[0])({
				left:" ",
				center:"订单提交信息",
				right:"关闭"
				});
			$("#head").html(head);
			
			var button=_.template(data.tem[2])({text:"转到订单中心",id:"payButton"});
			$("#scroller").html(data.tem[1]+button);
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				
			}
		});
	})($,app,config);