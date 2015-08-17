// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"commentList",
		par:"id",
		tem:["top_second","comment_list"],
		fn:function(data){

			var head=_.template(data.tem[0])({
				left:"",
				center:"产品点评"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			$("#scroller").html(data.tem[1]);
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			obj.api.run("comment_get",'Pd='+data.id+'&Level=0&pageNo=0&pageSize=10',function(returnData){
				debugger;
				},function(e){
				alert(JSON.stringify(e))
				})	
			}
		});
	})($,app,config);