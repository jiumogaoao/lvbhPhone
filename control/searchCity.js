// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"searchCity",
		par:"type/id/state",
		tem:["top_second","single_line_list"],
		fn:function(data){
			var result={};
			if(obj.cache("mail")){
				result=obj.cache("mail");
				}
			var head=_.template(data.tem[0])({left:"",center:"选择城市"});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			function layout(at,list){		
			var searchList=_.template(data.tem[1])(list);
			$("#scroller").html(searchList);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".point").unbind("tap").bind("tap",function(){
				result.city=$(this).html();
				obj.cache("mail",result);
				window.location.hash="emailAdd/"+data.type+"/"+data.id+"/"+data.state;
				});

			var delay=setTimeout(function(){myScroll.refresh();},200);
			$('img').load(function(){
				myScroll.refresh();
				});
				}
			
			
			function place(at,pro){
					if(result.province){
						$.each(pro,function(i,n){
							if(n.name===result.province){
								var list={list:[]};
								$.each(n.cityList,function(x,y){
									list.list.push(y.name);
									});
								layout(at,list);
								}
							});
						
						}
					
				}
			function province(at){
				obj.api.run("place_get","at="+at,function(returnData){
					place(at,returnData);
					},function(e){
					obj.pop.on("alert",{text:(e)});
					});
				}
			obj.api.at(province);
			}
		});
	})($,app,config);