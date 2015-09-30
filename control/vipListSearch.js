// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"vipListSearch",
		par:"id/at",
		tem:["top_search","vip_list"],
		fn:function(data){
			var page=1;
			var result=[];
			var type=0;
			var now="";
			function layout(){
				var head=_.template(data.tem[0])({left:"",value:"达人圈"});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
				var main=_.template(data.tem[1])({list:result});
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
			
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			$('img').load(function(){
				myScroll.refresh();
				});
			function getVip(at){
			function getPage(callback){
				obj.api.run("group_get","at="+at+"&a="+page+"&b=10&d="+type+"&e="+data.id,function(returnData){
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
			obj.api.at(getVip,data.at);
			}
		});
	})($,app,config);