// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"searchIndex",
		par:"type/state",
		tem:["top_search","search_place","tap_right","nav_two"],
		fn:function(data){
			$("body").css({"background-color":"#fff"});
			function layout(at,list){
				var nav="";
				var urlArry=["","12","13"];
				var hlArry=[
				{left:{text:"国内"},right:{text:"出境"}},{left:{text:"国内",hl:true},right:{text:"出境"}},{left:{text:"国内"},right:{text:"出境",hl:true}}
				];
				var titleArry=["达人圈","出发地跟团","目的地跟团"];
				
					nav=_.template(data.tem[3])(hlArry[data.state]);
					
			var head=_.template(data.tem[0])({left:"",value:titleArry[data.type]});
			$("#head").html(head);
			
			var searchList=_.template(data.tem[1])({list:list});
			$("#scroller").html(nav+searchList);
			$(".nav_two .nav_point_frame").css({
				"background-color":"#fff"	
			});
			if(data.state!=="0"){
				$(".nav_two.nav_third").css({"margin-bottom":"0px"});
				}
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#registButton").unbind("tap").bind("tap",function(){
				window.location.hash="index";
				});
			$(".search_place .point").unbind("tap").bind("tap",function(){
				$(".point").removeClass("hl");
				$(this).addClass("hl");
				if(data.type !== "0"){
					window.location.hash="travelSearch/"+$(this).html();
					}else{
					window.location.hash="vipListSearch/"+$(this).attr("pid");	
						}
				});
			$(".top_search .center input").unbind("change").bind("change",function(){
				if(data.type !== "0"){
					var state=data.state;
					if(data.state==="0"){state="1";}
					window.location.hash="travelSearch/"+(Number(data.type)-1)+"/"+state+"/"+$(this).val();
					}else{
					window.location.hash="vipListSearch/"+$(this).val();	
						}
				});
			if(data.type === "0"){
				$(".search_place .list").css("width","90%");
				}else{
					$(".search_place .list").css("width","100%");
					$(".nav_two #left").unbind("tap").bind("tap",function(){
						window.location.hash="searchIndex/"+data.type+"/1";
						});
					$(".nav_two #right").unbind("tap").bind("tap",function(){
						window.location.hash="searchIndex/"+data.type+"/2";
						});
					}
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
			$('img').load(function(){
				//myScroll.refresh();
				});
				}
			function place(at,now,pro){
				obj.api.run("city_getAll","at="+at,function(returnData){
					var placeList={
				input:false,
				title:true,
				now:now.c,
				place:{}
				};
				if(data.type ==="0"){
					placeList.place={
					"A":{title:"A",main:[]},
					"B":{title:"B",main:[]},
					"C":{title:"C",main:[]},
					"D":{title:"D",main:[]},
					"E":{title:"E",main:[]},
					"F":{title:"F",main:[]},
					"G":{title:"G",main:[]},
					"H":{title:"H",main:[]},
					"I":{title:"I",main:[]},
					"J":{title:"J",main:[]},
					"K":{title:"K",main:[]},
					"L":{title:"L",main:[]},
					"M":{title:"M",main:[]},
					"N":{title:"N",main:[]},
					"O":{title:"O",main:[]},
					"P":{title:"P",main:[]},
					"Q":{title:"Q",main:[]},
					"R":{title:"R",main:[]},
					"S":{title:"S",main:[]},
					"T":{title:"T",main:[]},
					"U":{title:"U",main:[]},
					"V":{title:"V",main:[]},
					"W":{title:"W",main:[]},
					"X":{title:"X",main:[]},
					"Y":{title:"Y",main:[]},
					"Z":{title:"Z",main:[]}
				};
				$.each(returnData,function(i,n){
						placeList.place[n.f[0]].main.push({name:n.b,id:n.a});
						});
					}else{
					placeList.now=false;
					
						placeList.title=false;
						placeList.place.al={title:"al",main:[
						{name:"海南",id:"163",type:"1"},
						{name:"云南",id:"204",type:"1"},
						{name:"四川",id:"202",type:"1"},
						{name:"广西",id:"162",type:"1"},
						{name:"贵州",id:"203",type:"1"},
						{name:"华东连线",id:"0",type:"1"},
						{name:"泰国",id:"0",type:"2"},
						{name:"东南亚连线",id:"0",type:"2"},
						{name:"欧洲连线",id:"0",type:"2"}
						]};
						}
					layout(at,placeList);
					},function(e){
					obj.pop.on("alert",{text:(e)});
					});
				}
			function area(at,now,pro){

				var placeList={
				input:false,
				title:true,
				now:now.c,
				place:{}
				};
				placeList.now=false;
				if(data.state==="0"){
					placeList.title=false;
					}
				obj.api.run("search_place_get","at="+at+"&typeIdRes="+data.state,function(returnData){
					layout(at,returnData);	
					},function(e){
					obj.pop.on("alert",{text:(e)});
					});
				}
			function province(at,now){
				obj.api.run("province_getAll","at="+at,function(returnData){
					if(data.type === "0"){
						place(at,now,returnData);
						}else{
							area(at,now,returnData);
							}
					},function(e){obj.pop.on("alert",{text:(e)});});
				}
			function now(at){
				obj.api.run("city_get_now","at="+at,function(returnData){
					province(at,returnData);
					},function(e){
					obj.pop.on("alert",{text:(e)});
					});
				}
			obj.api.at(now);
			}
		});
	})($,app,config);