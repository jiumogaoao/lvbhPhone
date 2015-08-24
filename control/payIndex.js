// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"payIndex",
		par:"id",
		tem:["top_second","pay_index"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"支付"});
			$("#head").html(head);
			$("#scroller").html(data.tem[1]);
			$("#scroller #lvbh").unbind("tap").bind("tap",function(){
				if($("#scroller .fa-checkbox").length){
					window.location.hash="payLvbh/"+data.id;
					}else{
						alert("必须同意旅游条款才能继续");
						}
				});
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