// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"index",
		par:"a/b/f/e/k",
		tem:["dsc","download"],
		fn:function(data){
			$("#main").html(data.tem[0]);
			$("#downLoad").html(data.tem[1]);
			myScroll.refresh();
			}
		});
	})($,app.control,config);