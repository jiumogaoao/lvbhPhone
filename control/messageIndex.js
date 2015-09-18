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
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				var stateA;
				if(data.state==="1"){stateA="0";}else{stateA="1";}
				window.location.hash="messageIndex/"+data.type+"/"+stateA;
				});
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			var nav=_.template(data.tem[1])({left:{text:"订单"},center:{text:"服务"},right:{text:"订阅"}});
			var main=_.template(data.tem[2])({
				list:[
			{hot:true,img:"img/"+picArry[data.type],title:"标题",time:"09:15",desc:"描述"},
			{hot:true,img:"img/"+picArry[data.type],title:"标题",time:"09:15",desc:"描述"},
			{hot:true,img:"img/"+picArry[data.type],title:"标题",time:"09:15",desc:"描述"}
			],state:data.state
			});
			$("#scroller").html(nav+main);
			$(".nav_third #left").unbind("tap").bind("tap",function(){
				window.location.hash="messageIndex/0/0";
				});
			$(".nav_third #center").unbind("tap").bind("tap",function(){
				window.location.hash="messageIndex/1/0";
				});
			$(".nav_third #right").unbind("tap").bind("tap",function(){
				window.location.hash="messageIndex/2/0";
				});
			$(".nav_third").each(function(){
				$(this).find(".nav_point_frame ").eq(data.type).addClass("hl");
				});
			$(".mine_message_list .point").unbind("tap").bind("tap",function(){
				if($(this).data("choose")){
					$(this).data("choose",false);
					$(this).removeClass("hl");
					$(this).find(".fa").removeClass("hl");
					}else{
						$(this).data("choose",true);
						$(this).addClass("hl");
						$(this).find(".fa").addClass("hl");
						}
				});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
			obj.api.at(function(){});
			}
		});
	})($,app,config);