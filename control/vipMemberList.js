// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"vipMemberList",
		par:"id",
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
			obj.scrollFn.add("vipMemberList",function(y){
				$("#head").css("background-color","rgba(0,158,255,"+((-1*y)/200)+")");
				});
			function layout(){
				var list=_.template(data.tem[3])({list:result});
			$("#scroller").html(data.tem[1]+data.tem[2]+list);
			$("#scroller .groupTop .nav").eq(0).addClass("hl");
			$("#scroller .group_nav .point").eq(0).addClass("hl");
			
			$("#scroller .groupTop .nav").eq(1).unbind("tap").bind("tap",function(){
				window.location.hash="vipTravelList/"+data.id;
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
			function getList(at){
				obj.api.run("group_member_get",'at='+at+'&a='+page+'&d='+type+'&e='+data.id,function(returnData){
					returnData=returnData.data;
					$.each(returnData,function(i,n){
						result.push({image:n.l,name:n.c,id:n.b,fans:n.r,money:n.p});
						});
					layout();
					},function(e){
					alert(JSON.stringify(e));
					});
				}
			function getSour(at){
				getList(at);
				}
			obj.api.at(getSour);			


			}
		});
	})($,app,config);