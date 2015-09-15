// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"vipMemberList",
		par:"id/number",
		tem:["top_second","groupTop","group_nav","group_member"],
		fn:function(data){
			var page=1;
			var type=0;
			var result=[];
			var head=_.template(data.tem[0])({
				left:"",
				center:"TA的达人圈"
				});
			$("#head").html(head);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			obj.scrollFn.add("vipMemberList",function(y){
				$("#head").css("background-color","rgba(0,158,255,"+((-1*y)/200)+")");
				});
			function layout(at,sour){
				var top=_.template(data.tem[1])(sour);
				var list=_.template(data.tem[3])({list:result});
				var nav=_.template(data.tem[2])({list:[{id:"0",name:"人气"},{id:"1",name:"财富"}]});
			$("#scroller").html(top+nav+list);
			$("#scroller .groupTop .nav").eq(0).addClass("hl");
			$("#scroller .group_nav .point[nid='"+type+"']").addClass("hl");
			$("#scroller .group_nav .point").unbind("tap").bind("tap",function(){
				type=Number($(this).attr("nid"));
				result=[];
				getList(at,sour);
				});
			$("#scroller .groupTop .nav").eq(1).unbind("tap").bind("tap",function(){
				window.location.hash="vipTravelList/"+data.id+"/"+data.number;
				});
			$("#scroller .group_member").css({"background-color":"#fff","padding-bottom":".3rem","margin-top":"0px"});
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
			function getList(at,sour){
				obj.api.run("other_group_member_get",'at='+at+'&a='+page+'&c='+type+'&d='+data.id,function(returnData){
					returnData=returnData.data;
					$.each(returnData,function(i,n){
						result.push({image:config.sour+"center/tp.jspx?at="+at+"&a=1&b="+n.l,name:n.c,id:n.b,fans:n.r,money:n.p});
						});
					layout(at,sour);
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			function getSour(at){
				obj.api.run("group_get",'at='+at+'&a=1&b=1&d=0&e='+data.number,function(returnData){
					data.number=returnData.data[0].i;
				returnData=returnData.data[0];
				var sour={img:config.sour+"sns/tpu.jspx?at="+at+"&a=1&b="+returnData.i+"&c="+returnData.l,name:returnData.c,id:returnData.b,hot:returnData.r,money:returnData.p,dsc:returnData.h,step:returnData.m};
				getList(at,sour);
				},function(e){obj.pop.on("alert",{text:(json.stringify(e))});});
				
				}
			obj.api.at(getSour);			


			}
		});
	})($,app,config);