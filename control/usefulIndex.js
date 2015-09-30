// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"usefulIndex",
		par:"",
		tem:["top_second","title_input_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({
				left:"",
				center:"常用信息"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			var main=_.template(data.tem[1])({
				list:[
					{name:"traveller",left:"常用旅客",right:'<span class="fa fa-right"></span>',link:true},
					{name:"linkman",left:"常用联系人",right:'<span class="fa fa-right"></span>',link:true},
					{name:"mail",left:"常用邮寄地址",right:'<span class="fa fa-right"></span>',link:true},
					{name:"invoice",left:"常用发票",right:'<span class="fa fa-right"></span>',link:true}
				]
				});	
			$("#scroller").html(main);
			$(".point[name='traveller']").unbind("click").bind("click",function(){
				window.location.hash="usefulTraveler";
				});
			$(".point[name='linkman']").unbind("click").bind("click",function(){
				window.location.hash="usefulLinkman";
				});
			$(".point[name='mail']").unbind("click").bind("click",function(){
				window.location.hash="usefulEmail";
				});
			$(".point[name='invoice']").unbind("click").bind("click",function(){
				window.location.hash="usefulInvoice";
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