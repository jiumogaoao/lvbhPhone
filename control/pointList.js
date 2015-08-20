// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"pointList",
		par:"type/id",
		tem:["top_second","point_list"],
		fn:function(data){
			var result=[];
			var page=1;
			var head=_.template(data.tem[0])({left:"",center:"积分账户"});
			$("#head").html(head);
			function layout(listA){
			$.each(listA.data,function(i,n){
				var add={"name":n.a,"time":n.c,"scroe":n.b};
				result.push(add);
				});	
			var list=_.template(data.tem[1])({
				total:listA.jfpoint,
				list:result
				});
			$("#scroller").html(list);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
				var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
				}
			
			function getdetail(at){
				function getPage(callback){
				obj.api.run("point_get",'at='+at,
				function(listA){
					if(listA.pn === page+""){
					page++;
					layout(listA);			
					}
					if(callback){callback();}
				},function(e){
					alert(JSON.stringify(e));
					});
				
				}
				getPage();
			obj.reflash.add("dealList",function(callback){
			getPage(callback);
			});
								}
			obj.api.at(getdetail);
			}
		});
	})($,app,config);