// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"searchGt",
		par:"type/state",
		tem:["top_second","search_place"],
		fn:function(data){
			function layout(at,list){

				var titleArry=["选择出发地","选择目的地"];				
			
			var head=_.template(data.tem[0])({left:"",center:titleArry[data.type]});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			var searchList=_.template(data.tem[1])(list);
			$("#scroller").html(searchList);
			$("#scroller .list").css("width","100%");
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".point").unbind("tap").bind("tap",function(){
				$(".point").removeClass("hl");
				$(this).addClass("hl");
				});

			var delay=setTimeout(function(){myScroll.refresh();},200);
				}
			
			
			function place(at,now,pro){
				obj.api.run("city_getAll","at="+at,function(returnData){
					var placeList={
				input:true,
				title:true,
				now:now.c,
				place:{}
				};
				if(data.type === "1"){
					placeList.now=false;
					}
				$.each(pro,function(i,n){
						placeList.place[n.a+""]={title:n.b,main:[]};
					});	
				$.each(returnData,function(i,n){
						placeList.place[n.c].main.push({name:n.b,id:n.a});
					});
						
					layout(at,placeList);
					},function(e){
					alert(e);
					});
				}
			function province(at,now){
				obj.api.run("province_getAll","at="+at,function(returnData){
					place(at,now,returnData);
					},function(e){alert(e);});
				}
			function now(at){
				obj.api.run("city_get_now","at="+at,function(returnData){
					province(at,returnData);
					},function(e){
					alert(e);
					});
				}
			obj.api.at(now);
			}
		});
	})($,app,config);