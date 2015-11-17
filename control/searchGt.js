// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"searchGt",
		par:"type/state",
		tem:["top_second","search_place"],
		fn:function(data){
			var apiArry=["cf_table_get","md_table_get"];
			var typeArry=[12,13];
			function layout(at,list){
				var titleArry=["选择出发地","选择目的地"];				
			var head=_.template(data.tem[0])({left:"",center:titleArry[data.type]});
			$("#head").html(head);
			$("#head .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			var searchList=_.template(data.tem[1])(list);
			$("#scroller").html(searchList);
			$("#scroller .list").css("width","100%");
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".point").unbind("tap").bind("tap",function(){
				if(data.state==="4"){
					console.log($(this).attr("pid"));
					obj.cache("client_id",{id:$(this).attr("pid")});
					console.log(obj.cache("client_id"));
					window.history.go(-1);
					}else{
					$(".point").removeClass("hl");
				$(this).addClass("hl");
				obj.api.run("place_id_get","at="+at+"&pen="+$(this).attr("value"),function(returnData){
				window.location.hash="travelIndex/"+data.type+"/"+(Number(data.state)+1)+"/"+returnData;
				},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					}
				
				});

			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
			$('img').load(function(){
				//myScroll.refresh();
				});
				}
			
			function place(at,now,client,city){
				var placeList={
				input:true,
				title:true,
				now:client.s,
				place:{}
				};
				if(data.state==="4"){
					placeList.place.a={title:"",main:[]};
					$.each(client.as,function(i,n){
						var value=n.split(",");
						placeList.place.a.main.push({name:value[0],id:value[1],type:value[2]});
						});
						layout(at,placeList);
					}else{
				if(data.type === "1"){
					placeList.now=false;
					}	
				$.each(city,function(i,n){
						if(!placeList.place["place"+n.c[0]]){
							placeList.place["place"+n.c[0]]={title:n.c[0],main:[]};
							}
							placeList.place["place"+n.c[0]].main.push({name:n.b,id:n.a,type:"12"});
						});	
					layout(at,placeList);
						
						}
				
					
				}
			function province(at,now,client){
				obj.api.run("province_getAll","at="+at,function(returnData){
					place(at,now,client,returnData);
					},function(e){obj.pop.on("alert",{text:(JSON.stringify(e))});});
				}
			function tableGet(at,now,client){
				obj.api.run(apiArry[data.type],'at='+at+'&siteIdRes='+now.cid+'&categoryIdRes='+typeArry[data.type]+'&typeIdRes='+(data.state+1),function(returnData){
					place(at,now,client,returnData);
					});
				}
			function getClient(at,now){
				obj.api.run("client_get","at="+at+"&s="+(obj.cache("client_id").id||""),function(returnData){
					tableGet(at,now,returnData);
					},function(e){
					obj.pop.on("alert",{text:JSON.stringify(e)});
					});
				}
			function now(at){
				obj.api.run("city_get_now","at="+at,function(returnData){
					getClient(at,returnData);
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			obj.api.at(now);
			}
		});
	})($,app,config);