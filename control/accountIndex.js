// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"accountIndex",
		par:"",
		tem:["top_second","account_index","simple_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"旅博账户"});
			$("#head").html(head);
			var list=_.template(data.tem[2])({list:[
			{name:"收入明细",lid:"0"},
			{name:"支出明细",lid:"1"}
			]});
			$("#scroller").html(data.tem[1]+list);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".simple_list").unbind("tap").bind("tap",function(){
				if($(this).attr("lid")==="0"){
					window.location.hash="inIndex";
					}else{
						window.location.hash="outIndex";
						}
				});
			myScroll.refresh();
			}
		});
	})($,app,config);