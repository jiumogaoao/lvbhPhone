// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"aboutIndex",
		par:"",
		tem:["top_second","title_input_list"],
		fn:function(data){
			$("body").css("background-color","#fff");
			var head=_.template(data.tem[0])({left:"",center:"关于我们"});
			$("#head").html(head);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			var list=_.template(data.tem[1])({list:[
			{link:true,name:"gsjs",left:"公司介绍",right:'<span class="fa fa-right"></span>'},
			{link:true,name:"yhxy",left:"用户协议",right:'<span class="fa fa-right"></span>'},
			{link:true,name:"mzsm",left:"免责申明",right:'<span class="fa fa-right"></span>'},
			{link:true,name:"ysbh",left:"隐私保护",right:'<span class="fa fa-right"></span>'},
			{link:true,name:"zscqbh",left:"知识产权保护",right:'<span class="fa fa-right"></span>'},
			{link:true,name:"kfdh",left:"客服电话",right:'400-606-2111 <span class="fa fa-right"></span>'},
			]});
			$("#scroller").html(list);
			$("[name='gsjs']").unbind("tap").bind("tap",function(){
				window.location.hash="company";
				});
			$("[name='yhxy']").unbind("tap").bind("tap",function(){
				window.location.hash="protocol";
				});
			$("[name='mzsm']").unbind("tap").bind("tap",function(){
				window.location.hash="exempy";
				});
			$("[name='ysbh']").unbind("tap").bind("tap",function(){
				window.location.hash="conceal";
				});
			$("[name='zscqbh']").unbind("tap").bind("tap",function(){
				window.location.hash="intellectual";
				});
			$("[name='kfdh']").unbind("tap").bind("tap",function(){
				obj.bottom.on("tel");
				});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
			obj.api.at(function(){},data.at);
			}
		});
	})($,app,config);