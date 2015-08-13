// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"calendar",
		par:"id",
		tem:["top_second"],
		fn:function(data){

			var head=_.template(data.tem[0])({
				left:"",
				center:"选择团期"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			calendar.setTarget("#scroller");
			calendar.run();
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				
			}
		});
	})($,app,config);