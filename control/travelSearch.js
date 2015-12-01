// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"travelSearch",
		par:"search/at",
		tem:["top_second","nav_four","nav_third","hot_nav","product_group_list","product_dropdown"],
		fn:function(data){
			var at="";
			var result={
				categoryIdRes:"",
				startIdRes:"",
				endIdRes:""
			};
			var titleArry=["出发地跟团","目的地跟团"];
			var typeArry=[12,13];
			var hlArry=["left","center","right"];
			var tagArry=[{name:"旅博汇",color:"#ffb54c"},{name:"旅博专团",color:"#39bf71"},{name:"旅博推荐",color:"#ff504c"}];
			var tableAtty=["cf_table_get","md_table_get"];
			var apiArry=["recommend_get_cf","recommend_get_md"];
			var head=_.template(data.tem[0])({left:"",center:'<div class="top_nav" style="width:78%"><a class="top_nav_point top_nav_pointL" pid="12">出发地跟团</a><a class="top_nav_point top_nav_pointR" pid="13">目的地跟团</a><div class="clear"></div></div>'});
			$("#head").html(head);
			$("#head .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			function reload(){
				obj.api.run("search_get","at="+at+"&keyWord="+data.search+"&categoryIdRes="+result.categoryIdRes+"&startIdRes="+result.startIdRes+"&endIdRes="+result.endIdRes,function(returnData){
					result={
				categoryIdRes:returnData.cid,
				startIdRes:returnData.sid,
				endIdRes:returnData.eid,
				endList:returnData.endList,
				startList:returnData.startList,
				gtyList:returnData.gtyList
			};
				layout();
				},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
				});
			}
			function layout(){

				$(".top_nav_point").removeClass("hl");
				$(".top_nav_point[pid='"+result.categoryIdRes+"']").addClass("hl");
				$(".top_nav_point").unbind("tap").bind("tap",function(){
					result.categoryIdRes=$(this).attr("pid");
					result.startIdRes="";
					result.endIdRes="";
					reload();
				});

				var showEnd=[];
				var endValue={id:0,name:"全部"};
				$.each(result.endList,function(i,n){
					if(Number(result.endIdRes)===Number(n.a)){
						endValue={id:n.a,name:n.b};
					}
					showEnd.push({id:n.a,name:n.b});
				});
				var showStart=[];
				var startValue={id:0,name:"全部"};
				$.each(result.startList,function(i,n){
					if(Number(result.startIdRes)===Number(n.a)){
						startValue={id:n.a,name:n.b};
					}
					showStart.push({id:n.a,name:n.b});
				});
				var dropdown=_.template(data.tem[5])({
					list:[
						{id:"md",title:"目的地",value:endValue,list:showEnd},
						{id:"cf",title:"参团城市",value:startValue,list:showStart}
					]
				});
				var showList=[];
				$.each(result.gtyList,function(i,n){
					showList.push({image:n.gd.cc,name:n.gd.b,price:n.gd.f,place:n.gd.w,date:n.sd,id:n.gd.a,type:13,state:n.gd.e,rePrice:n.gd.hh});
				});
				var productList=_.template(data.tem[4])({
						list:[{title:false,main:showList}]
				});
				$("#scroller").html(dropdown+productList);
				$("#cf .pointFrame").unbind("tap").bind("tap",function(){
					result.startIdRes=$(this).attr("pid");
					reload();
				});
				$("#md .pointFrame").unbind("tap").bind("tap",function(){
					result.startIdRes="";
					result.endIdRes=$(this).attr("pid");
					reload();
				});
				$(".product_group_list .point").unbind("tap").bind("tap",function(){
				window.location.hash="productDetail/"+$(this).attr("type")+"/"+$(this).attr("pid")+"//"+(data.sid||"");
				});
				}
			
			function getSearch(ata){
				at=ata;
				obj.api.run("search_get","at="+at+"&keyWord="+data.search,function(returnData){
					result={
				categoryIdRes:returnData.cid,
				startIdRes:returnData.sid,
				endIdRes:returnData.eid,
				endList:returnData.endList,
				startList:returnData.startList,
				gtyList:returnData.gtyList
			};
				layout();
				},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
				});
			}
			
			obj.api.at(getSearch,data.at);	
				
			}
		});
	})($,app,config);