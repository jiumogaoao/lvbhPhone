// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"searchProvince",
		par:"type/id/state",
		tem:["top_second","search_place"],
		fn:function(data){
			var result={};
			if(obj.cache("mail")){
				result=obj.cache("mail");
				}
			function layout(at,list){				
			var head=_.template(data.tem[0])({left:"",center:"选择省/直辖市"});
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
				result.province=$(this).attr("value");
				obj.cache("mail",result);
				window.location.hash="emailAdd/"+data.type+"/"+data.id+"/"+data.state;
				});

			var delay=setTimeout(function(){myScroll.refresh();},200);
			$('img').load(function(){
				myScroll.refresh();
				});
				}
			
			
			function place(at,pro){
					var placeList={
				input:false,
				title:true,
				now:false,
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
					"X":{title:"X",main:[]},
					"Y":{title:"Y",main:[]},
					"Z":{title:"Z",main:[]},
					}
				};
				$.each(pro,function(i,n){
					if(!placeList.place[n.key+""]){
						placeList.place[n.key+""]={title:n.key,main:[]};
						}
						placeList.place[n.key+""].main.push({name:n.name,id:null});
					});	
					layout(at,placeList);
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