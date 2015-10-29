// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"messageIndex",
		par:"type/state",
		tem:["top_third","nav_third","mine_message_list","message_foot"],
		fn:function(data){
			var result=[];
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
			function layout(at){
			if(data.state==="1"){
				$("#foot").height("1.3rem");
				$("#foot").html(data.tem[3]);
				$("#foot").show();
				$("#middle").css("bottom","1.3rem");
				$(".message_foot .left").unbind("tap").bind("tap",function(){
					var sendId="";
							if($(".mine_message_list .fa.hl").length){
								$(".mine_message_list .fa.hl").each(function(i){
									if(i===0){
										sendId=$(this).attr("pid");
										}else{
											sendId+="-"+$(this).attr("pid");
											}
									});
								}
					obj.api.run("message_done","at="+at+"&a="+sendId,function(){
								obj.pop.off();
								window.location.hash="messageIndex/"+data.type+"/0";
								},function(e){
									obj.pop.on("alert",{text:JSON.stringify(e)});
									});			
					});
				$(".message_foot .right").unbind("tap").bind("tap",function(){
					obj.pop.on("confirm",{text:"确定要删除么？"},function(){
						$("#pop .buttonFrame").css("padding","0px");
						$("#pop .left").unbind("tap").bind("tap",function(){
							var sendId="";
							if($(".mine_message_list .fa.hl").length){
								$(".mine_message_list .fa.hl").each(function(i){
									if(i===0){
										sendId=$(this).attr("rid");
										}else{
											sendId+="-"+$(this).attr("rid");
											}
									});
								}
							obj.api.run("message_remove","at="+at+"&a="+sendId,function(){
								obj.pop.off();
								window.location.hash="messageIndex/"+data.type+"/0";
								},function(e){
									obj.pop.on("alert",{text:JSON.stringify(e)});
									});
							});
						$("#pop .right").unbind("tap").bind("tap",function(){
							obj.pop.off();
							});
						});
					});
				}
				var nav=_.template(data.tem[1])({left:{text:"订单"},center:{text:"服务"},right:{text:"订阅"}});
			var main=_.template(data.tem[2])({
				list:result,state:data.state
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
			//myScroll.refresh();
			$('img').load(function(){
				//myScroll.refresh();
				});
				}
			
			function getlist(at){
				obj.api.run("message_get","at="+at,function(returnData){
					$.each(returnData,function(i,n){
						var hot=false;
						if(n.h==="1"){hot=true;}
						result.push({hot:hot,img:"img/"+picArry[data.type],title:n.b,time:n.f,desc:n.g,id:n.i,id2:n.a});
					});
					layout(at);
					},function(e){
					obj.pop.on("alert",{text:JSON.stringify(e)});
					});
				}
			obj.api.at(getlist);
			}
		});
	})($,app,config);