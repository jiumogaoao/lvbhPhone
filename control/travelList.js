// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"travelList",
		par:"nav/type",
		tem:["top_third","travel_list","second_button","nav_third"],
		fn:function(data){
			var result=[];
			var page=1;
			var titleArry=["管理","取消"];
			var navArry=[
			'<div class="newButton"><span class="fa fa-edit"></span></div><div class="clear"></div>',
			'<div class="newButton"><span class="fa fa-edit"></span></div><div class="clear"></div>',
			'<div class="newButton"><span class="fa fa-edit"></span></div><div class="manageButton">'+titleArry[data.type]+'</div><div class="clear"></div>'
			];
			var pageArry=["1","0"];
			var typeArry=["2","8","1"];
			var head=_.template(data.tem[0])({left:"",center:"游记",right:navArry[data.nav]});
			var nav=_.template(data.tem[3])({left:{text:"已发布"},center:{text:"审核中"},right:{text:"草稿箱"}});
			$("#head").html(head);
			$("#head .newButton").css({float:"right"});
			$("#head .manageButton").css({float:"right","margin-right":".2rem"});
			function layout(list,at){
			var listA=_.template(data.tem[1])({
				type:data.type,
				list:list
				});	
			var button=_.template(data.tem[2])({left:"删除",right:"提交审核"});
			if(data.type === "0"){
				$("#scroller").html(nav+listA);
				}else{
					$("#scroller").html(nav+listA+button);
					$(".third_button #left").unbind("tap").bind("tap",function(){
						
						var remove="";
				$(".travel_list .hl").each(function(i){
					remove+=$(this).attr("pid");
					if(i !== ($(".travel_list .hl").length-1)){
						remove+="-";
						}
					});
				obj.api.run("travel_remove",'at='+at+'&a='+remove,function(){
					window.location.hash="travelList/2/0";
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
						
						});
					$(".third_button #right").unbind("tap").bind("tap",function(){
						var remove="";
				$(".travel_list .hl").each(function(i){
					remove+=$(this).attr("pid");
					if(i !== ($(".travel_list .hl").length-1)){
						remove+="-";
						}
					});
				obj.api.run("travel_commit",'at='+at+'&a='+remove,function(){
					window.location.hash="travelList/2/0";
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
						});
					}
			$(".travel_list .point").unbind("tap").bind("tap",function(){
				window.location.hash="vipTravelDetail/"+$(this).attr("pid")+"/"+$(this).attr("gid");
				});
			$(".nav_third .nav_point_frame").eq(data.nav).addClass("hl");
			$(".nav_third #left").unbind("tap").bind("tap",function(){
				window.location.hash="travelList/0/0";
				});
			$(".nav_third #center").unbind("tap").bind("tap",function(){
				window.location.hash="travelList/1/0";
				});
			$(".nav_third #right").unbind("tap").bind("tap",function(){
				window.location.hash="travelList/2/0";
				});
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .manageButton").unbind("tap").bind("tap",function(){
				window.location.hash="travelList/2/"+pageArry[data.type];
				});
			if(data.nav==="2"&&data.type==="1"){
				$(".travel_list .right").unbind("tap").bind("tap",function(){
				window.location.hash="travelEdit/"+$(this).parents(".point").attr("pid");
				});
				}
			
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
				}
			function getPage(callback){
			obj.api.at(function(at){
				obj.api.run("travel_get",'at='+at+'&c='+typeArry[data.nav]+'&a='+page,function(returnData){
					if(returnData.pn === page+""){
						page++;
						returnData=returnData.data;
					$.each(returnData.travellist,function(i,n){
						var add={image:n.e,title:n.f,place:n.g,tag:n.m,pra:n.j,star:n.i,com:n.h,id:n.c,gid:n.d};
					result.push(add);
						});
						layout(result,at);
						}
					if(callback){callback();}
					},function(e){obj.pop.on("alert",{text:(JSON.stringify(e))});});
				});
			}
			getPage();
			obj.reflash.add("travelList",function(callback){
			getPage(callback);
			});
			}
		});
	})($,app,config);