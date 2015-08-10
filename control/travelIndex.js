// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"travelIndex",
		par:"type/state",
		tem:["top_second","nav_four","nav_third","hot_nav","product_group_list"],
		fn:function(data){
			var titleArry=["出发地跟团","目的地跟团"];
			var hlArry=["left","center","right"];
			var hotArry=[
				[],
				["北京","天津","河北","山西","内蒙古","华北连线","辽宁","黑龙江","吉林","东北连线"],
				["日本","韩国","朝鲜","东亚连线","新加坡","马来西亚","泰国","印度尼西亚"]
			];
			var tagArry=[{name:"旅博汇",color:"#ffb54c"},{name:"旅博专团",color:"#39bf71"},{name:"旅博推荐",color:"#ff504c"}];
			var apiArry=["recommend_get_cf","recommend_get_md"];
			var head=_.template(data.tem[0])({
				left:"",
				center:titleArry[data.type]
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			var nav=_.template(data.tem[Number(data.type)+1])({
				left:{text:"推荐"},
				center:{text:"国内"},
				right:{text:"出境"},
				four:{text:'<span class="fa fa-place2" style="color:#ff840c"></span> 深圳'}
				});
			var hot="";
			if(data.state !== "0"){
				hot=_.template(data.tem[3])({list:hotArry[data.state]});
				}
			var list=_.template(data.tem[4])({
				list:[{title:false,main:[
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳",tag:tagArry[0],date:["07-03","07-03","07-03","07-03","07-03"]},
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳",tag:tagArry[1],date:["07-03","07-03","07-03","07-03","07-03"]},
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳",tag:tagArry[0],date:["07-03","07-03","07-03","07-03","07-03"]}
				]}]
				});
			$("#scroller").html(nav+hot+list);
			$(".hot_nav .button").unbind("tap").bind("tap",function(){
				window.location.hash="searchGt/"+data.type+"/"+(Number(data.state)-1);
				});
			$(".nav_two #"+hlArry[data.state]).addClass("hl");
			$(".nav_two #left").unbind("tap").bind("tap",function(){
				window.location.hash="travelIndex/"+data.type+"/0";
				});
			$(".nav_two #center").unbind("tap").bind("tap",function(){
				window.location.hash="travelIndex/"+data.type+"/1";
				});
			$(".nav_two #right").unbind("tap").bind("tap",function(){
				window.location.hash="travelIndex/"+data.type+"/2";
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			function getList(at,now){
				obj.api.run(apiArry[data.type],'aid='+now.startId,function(returnData){
					},function(e){
					alert(JSON.stringify(e));
					});
				}
			function getNow(at){
				obj.api.run("city_cf_get","at="+at,function(returnData){
					getList(at,returnData);
					});
				}
			obj.api.at(getNow);	
				
			}
		});
	})($,app,config);