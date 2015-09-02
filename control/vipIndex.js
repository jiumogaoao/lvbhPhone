// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"vipIndex",
		par:"",
		tem:["foot_nav","top_third","vip_list"],
		fn:function(data){
			var page=1;
			var result=[];
			var type=0;
			var head=_.template(data.tem[1])({left:"",center:'<div class="top_nav"><a class="top_nav_point top_nav_pointL">人气</a><a class="top_nav_point top_nav_pointR">财富</a><div class="clear"></div></div>',"right":'<span class="fa fa-search"></span>'});
			$("#head").html(head);
			$("#head .top_nav_pointL").addClass("hl");
			function layout(){
				var main=_.template(data.tem[2])({list:result});
				$("#scroller").html(main);
				$("#scroller .vip_list .point").unbind("tap").bind("tap",function(){
					window.location.hash="vipMemberList/"+$(this).attr("vid");
					});
				var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			$('img').load(function(){
				myScroll.refresh();
				});
				}
			$("#foot").html(data.tem[0]);
			$("#foot .fa-group").addClass("hl");
			$("#foot .point").eq(2).addClass("hl");
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			$('img').load(function(){
				myScroll.refresh();
				});
			function getVip(at){
			function getPage(callback){
				obj.api.run("group_get","at="+at+"&a="+page+"&b=10&d="+type,function(returnData){
				if(Number(returnData.pn) === page){
					page++;
					returnData=returnData.data;
					$.each(returnData,function(i,n){
				result.push({"img":"http://112.74.25.12:48080/sns/tpu.jspx?&a=2&b="+n.i+"&c="+n.l,"title":n.c,"id":n.b,"des":n.h,"hot":n.r,"money":n.p,"step":n.m});	
				});
			layout();
					}
			if(callback){callback();}
					},function(e){
					alert(JSON.stringify(e));
					});
				}
				getPage();
			obj.reflash.add("vipIndex",function(callback){
			getPage(callback);
			});	
				
				}
			function typeBind(at){
				$("#head .top_nav_pointL").unbind("tap").bind("tap",function(){
					type=0;
					page=1;
					result=[];
					$("#head .top_nav_point").removeClass("hl");
					$(this).addClass("hl");
					getVip(at);
					});
				$("#head .top_nav_pointR").unbind("tap").bind("tap",function(){
					type=1;
					page=1;
					result=[];
					$("#head .top_nav_point").removeClass("hl");
					$(this).addClass("hl");
					getVip(at);
					});
				getVip(at);
				}
			obj.api.at(typeBind);
			}
		});
	})($,app,config);