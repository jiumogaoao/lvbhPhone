// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"mineIndex",
		par:"",
		tem:["foot_nav","mine_top","mine_bottom"],
		fn:function(data){
			$("#head").html("");
			$("#scroller").html(data.tem[1]+data.tem[2]);
			$(".mine_bottom .point").unbind("tap").bind("tap",function(){
				window.location.hash=$(this).attr("href");
				});
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