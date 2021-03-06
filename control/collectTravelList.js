// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"collectTravelList",
		par:"type",
		tem:["top_third","travel_list","single_button"],
		fn:function(data){
			var result=[];
			var page=1;
			var titleArry=["管理","取消"];
			var pageArry=["1","0"];
			var head=_.template(data.tem[0])({left:"",center:"游记",right:titleArry[data.type]});
			$("#head").html(head);
			function layout(list,at){
			var listA=_.template(data.tem[1])({
				type:data.type,
				list:list
				});	
			var button=_.template(data.tem[2])({text:"取消收藏",id:"send"});
			if(data.type === "0"){
				$("#scroller").html(listA);
				}else{
					$("#scroller").html(listA+button);
					$("#send").unbind("tap").bind("tap",function(){
						var remove="";
				$(".travel_list .hl").each(function(i){
					remove+=$(this).attr("pid");
					if(i !== ($(".travel_list .hl").length-1)){
						remove+="-";
						}
					});
				obj.api.run("collect_remove",'at='+at+'&a='+remove,function(){
					window.location.hash="collectTravelList/0";
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
						});
					}
			
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				window.location.hash="collectTravelList/"+pageArry[data.type];
				});
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
				$('img').load(function(){
				//myScroll.refresh();
				});
				}
			function getPage(callback){
			obj.api.at(function(at){
				obj.api.run("collect_get",'at='+at+'&c=0&a='+page,function(returnData){
					if(returnData.pn === page+""){
						page++;
						returnData=returnData.data;
					$.each(returnData,function(i,n){
						var add={id:n.a,title:n.d,place:n.ag,tag:n.ah,at:at,image:n.af,pra:n.ac,star:n.ab,com:n.aa};
					result.push(add);
						});
						layout(result,at);
						}
					if(callback){callback();}
					},function(e){obj.pop.on("alert",{text:(JSON.stringify(e))});});
				});
			}
			getPage();
			obj.reflash.add("collectTravelList",function(callback){
			getPage(callback);
			});
			}
		});
	})($,app,config);