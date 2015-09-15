// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"vipTravelList",
		par:"id/number",
		tem:["top_second","groupTop","group_nav","travel_list"],
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
			obj.scrollFn.add("vipTravelList",function(y){
				$("#head").css("background-color","rgba(0,158,255,"+((-1*y)/200)+")");
				});
			
			function layout(at,sour){
				var list=_.template(data.tem[3])({list:result,type:"0"});
			var top=_.template(data.tem[1])(sour);
			var nav=_.template(data.tem[2])({list:[{id:"0",name:"全部"},{id:"1",name:"国内"},{id:"2",name:"国际"}]});
			
			$("#scroller").html(top+nav+list);
			$("#scroller .travel_list .point").unbind("tap").bind("tap",function(){
			window.location.hash="vipTravelDetail/"+$(this).attr("pid")+"/"+data.id;	
				});
			$("#scroller .groupTop .nav").eq(1).addClass("hl");
			$("#scroller .group_nav .point[nid='"+type+"']").addClass("hl");
			$("#scroller .group_nav .point").unbind("tap").bind("tap",function(){
				type=Number($(this).attr("nid"));
				result=[];
				getList(at,sour);
				});
			$("#scroller .groupTop .nav").eq(0).unbind("tap").bind("tap",function(){
				window.location.hash="vipMemberList/"+data.id+"/"+data.number;
				});
			$("#scroller .group_member").css({"background-color":"#fff","padding-bottom":".3rem","margin-top":"0px"});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			$('img').load(function(){
				myScroll.refresh();
				});
				}	
			
			function getList(at,sour){
				var d="";
				if(type !== 0){
					d="&d="+type;
					}
				obj.api.run("other_travel_get",'at='+at+'&a='+page+"&c=2"+d+'&e='+data.id,function(returnData){
				var code=returnData.data.invitecode;
				returnData=returnData.data.travellist;
					$.each(returnData,function(i,n){
						result.push({"id":code,"title":n.f,"place":n.g,"image":n.e,"pra":n.j,"star":n.i,"com":n.h});
						});
					layout(at,sour);
					},function(e){obj.pop.on("alert",{text:(JSON.stringify(e))});});
				}
			function getSour(at){
				obj.api.run("group_get",'at='+at+'&a=1&b=1&d=0&e='+data.number,function(returnData){
				returnData=returnData.data[0];
				var sour={img:config.sour+"sns/tpu.jspx?at="+at+"&a=1&b="+returnData.i+"&c="+returnData.l,name:returnData.c,id:returnData.b,hot:returnData.r,money:returnData.p,dsc:returnData.h,step:returnData.m};
				getList(at,sour);
				},function(e){obj.pop.on("alert",{text:(json.stringify(e))});});
				}
			obj.api.at(getSour);



			}
		});
	})($,app,config);