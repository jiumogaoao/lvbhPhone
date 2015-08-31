// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"mineIndex",
		par:"",
		tem:["foot_nav","mine_top"],
		fn:function(data){
			$("#head").html("");
			$("#scroller").html(data.tem[1]);
			$("#foot").html(data.tem[0]);
			$("#foot .fa-mine").addClass("hl");
			$("#foot .point").eq(3).addClass("hl");
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
			}
		});
	})($,app,config);