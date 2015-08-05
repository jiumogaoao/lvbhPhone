// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"index",
		par:"",
		tem:["foot_nav","index_head","index_nav","product_group_list"],
		fn:function(data){
			$("#head").html(data.tem[1]);
			$("#scroller").html(data.tem[2]+data.tem[3]);
			$("#foot").html(data.tem[0]);
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			}
		});
	})($,app,config);