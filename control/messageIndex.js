// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"messageIndex",
		par:"type/state",
		tem:["top_third","nav_third","mine_message_list"],
		fn:function(data){
			var rightArry=["管理","取消"];
			var picArry=["mail_icon_order.png","mail_icon_serve.png","mail_icon_subscription.png"];
			$("body").css("background-color","#fff");
			var head=_.template(data.tem[0])({left:"",center:"消息",right:rightArry[data.state]});
			$("#head").html(head);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			var nav=_.template(data.tem[1])({left:{text:"订单"},center:{text:"服务"},right:{text:"订阅"}});
			var main=_.template(data.tem[2])({list:[
			{hot:true,img:"img/"+picArry[data.type],title:"标题",time:"09:15",desc:"描述"},
			{hot:true,img:"img/"+picArry[data.type],title:"标题",time:"09:15",desc:"描述"},
			{hot:true,img:"img/"+picArry[data.type],title:"标题",time:"09:15",desc:"描述"}
			]});
			$("#scroller").html(nav+main);
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
			obj.api.at(function(){});
			}
		});
	})($,app,config);