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
				obj.api.run("place_id_get","at="+at+"&pen="+$(this).attr("value"),function(returnData){
				window.location.hash="travelIndex/"+data.type+"/"+(Number(data.state)+1)+"/"+returnData;
				},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				});

			var delay=setTimeout(function(){myScroll.refresh();},200);
			$('img').load(function(){
				myScroll.refresh();
				});
				}
			
			function place(at,now,pro){
				obj.api.run("search_place_get","at="+at,function(returnData){
					var placeList={
				input:true,
				title:true,
				now:now.c,
				place:{}
				};
				if(data.type === "1"){
					placeList.now=false;
					}
				
				$.each(returnData[Number(data.state)+1],function(i,n){
						placeList.place["place"+i]={title:n.name,main:[]};
						$.each(n.member,function(o,p){
							placeList.place["place"+i].main.push({name:p.name,id:"",type:p.type});
							});
						});	
					layout(at,placeList);
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			function province(at,now){
				obj.api.run("province_getAll","at="+at,function(returnData){
					place(at,now,returnData);
					},function(e){obj.pop.on("alert",{text:(JSON.stringify(e))});});
				}
			function now(at){
				obj.api.run("city_get_now","at="+at,function(returnData){
					province(at,returnData);
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			obj.api.at(now);
			}
		});
	})($,app,config);