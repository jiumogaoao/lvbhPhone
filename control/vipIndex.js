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
			var now="";
			function layout(){
				
				var main=_.template(data.tem[2])({list:result});
				$("#scroller").html(main);
				$("#scroller .vip_list .point").unbind("click").bind("click",function(){
					window.location.hash="vipMemberList/"+$(this).attr("vid")+"/"+$(this).attr("number");
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
				result.push({"img":config.sour+"sns/tpu.jspx?at="+at+"&a=1&b="+n.i+"&c="+n.l,"title":n.c,"id":n.b,"des":n.h,"hot":n.r,"money":n.p,"step":n.m,"number":n.i});	
				});
			layout();
					}
			if(callback){callback();}
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
				getPage();
			obj.reflash.add("vipIndex",function(callback){
			getPage(callback);
			});	
				
				}
			function typeBind(at,now){
				var head=_.template(data.tem[1])({left:"<div style='font-size:.4rem;width:2rem;'>"+now.c+" <span class='fa fa-open'></span></div>",center:'<div class="top_nav"><a class="top_nav_point top_nav_pointL">人气</a><a class="top_nav_point top_nav_pointR">财富</a><div class="clear"></div></div>',"right":'<span style="font-size:.7rem;" class="fa fa-search"></span>'});
			$("#head").html(head);
			$("#head .rightButton").unbind("click").bind("click",function(){
				window.location.hash="vipSearch";
				});
			$("#head .top_nav_pointL").addClass("hl");
				$("#head .top_nav_pointL").unbind("click").bind("click",function(){
					type=0;
					page=1;
					result=[];
					$("#head .top_nav_point").removeClass("hl");
					$(this).addClass("hl");
					getVip(at);
					});
				$("#head .top_nav_pointR").unbind("click").bind("click",function(){
					type=1;
					page=1;
					result=[];
					$("#head .top_nav_point").removeClass("hl");
					$(this).addClass("hl");
					getVip(at);
					});
				getVip(at);
				}
			function getNow(at){
				obj.api.run("city_get_now","at="+at,function(returnData){
					now=returnData;
					typeBind(at,now);
					},function(e){
					obj.pop.on("alert",{text:(e)});
					});
				}
			
			obj.api.at(getNow);
			}
		});
	})($,app,config);