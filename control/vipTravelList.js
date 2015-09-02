// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"vipTravelList",
		par:"id",
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
			obj.scrollFn.add("vipTravelList",function(y){
				$("#head").css("background-color","rgba(0,158,255,"+((-1*y)/200)+")");
				});
			
			function layout(){
				var list=_.template(data.tem[3])({list:result,type:"0"});
			$("#scroller").html(data.tem[1]+data.tem[2]+list);
			$("#scroller .travel_list .point").unbind("tap").bind("tap",function(){
			window.location.hash="vipTravelDetail/"+$(this).attr("pid");	
				});
			$("#scroller .groupTop .nav").eq(1).addClass("hl");
			$("#scroller .group_nav .point").eq(0).addClass("hl");
			$("#scroller .groupTop .nav").eq(0).unbind("tap").bind("tap",function(){
				window.location.hash="vipMemberList/"+data.id;
				});
			$("#scroller .group_member").css({"background-color":"#fff","padding-bottom":".3rem","margin-top":"0px"});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			$('img').load(function(){
				myScroll.refresh();
				});
				}	
			
			function getList(at){
				var typeString="";
				if(type){typeString="&c=1";}
				obj.api.run("travel_get",'at='+at+'&a='+page+typeString+'&e='+data.id,function(returnData){
				returnData=returnData.data.travellist;
					$.each(returnData,function(i,n){
						result.push({"id":n.c,"title":n.f,"place":n.g,"image":n.e,"pra":n.j,"star":n.i,"com":n.h});
						});
					layout();
					},function(e){alert(JSON.stringify(e));});
				}
			obj.api.at(getList);



			}
		});
	})($,app,config);