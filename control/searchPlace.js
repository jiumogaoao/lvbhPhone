// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"searchPlace",
		par:"",
		tem:["top_second","search_place","tap_right"],
		fn:function(data){
			function layout(at,list){
				var result={
				phone:"",
				code:"",
				key:"",
				key2:"",
				place:{},
				pro:""
				};
				if(obj.cache("regist")){result=obj.cache("regist");}
				var tag=_.template(data.tem[2])(list);
			$("#otherFrame").html(tag);
			$(".tap").unbind("tap").bind("tap",function(){
				myScroll.scrollToElement($(".title[index='"+$(this).html()+"']")[0]);
				});
			$("#otherFrame").css({
				"position":"fixed",
				"top":"3rem",
				"right":"0rem",
				"width":"1rem",
				"background-color":"#fff",
				"z-index":"10"
				});
			$("#otherFrame").show();
			var head=_.template(data.tem[0])({left:"",center:"选择城市"});
			$("#head").html(head);
			var searchList=_.template(data.tem[1])(list);
			$("#scroller").html(searchList);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#registButton").unbind("tap").bind("tap",function(){
				window.location.hash="index";
				});
			$(".point").unbind("tap").bind("tap",function(){
				result.place={name:$(this).attr("value"),id:$(this).attr("pid")};
				result.pro=$(this).attr("pro");
				obj.cache("regist",result);
				window.location.hash="regist";
				});
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
			$('img').load(function(){
				//myScroll.refresh();
				});
				}
			
			
			function place(at,now){
				obj.api.run("city_getAll","at="+at,function(returnData){
					var placeList={
				input:true,	
				title:true,	
				now:now.c,
				place:{
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
				}
				};
					$.each(returnData,function(i,n){
						placeList.place[n.f[0]].main.push({name:n.b,id:n.a,pro:n.c});
						});
					layout(at,placeList);
					},function(e){
					obj.pop.on("alert",{text:(e)});
					});
				}
			function now(at){
				obj.api.run("city_get_now","at="+at,function(returnData){
					place(at,returnData);
					},function(e){
					obj.pop.on("alert",{text:(e)});
					});
				}
			obj.api.at(now);
			}
		});
	})($,app,config);