// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"travellerAdd",
		par:"type/id/state",
		tem:["top_third","traveller"],
		fn:function(data){
			var result={
				name:"",
				number:"",
				lastNumber:"",
				sendPlace:"",
				enLastName:"",
				enName:"",
				birthday:"",
				sex:"1",
				national:"",
				phone:"",
				cardType:1,
				cardName:["","身份证","护照","军官证","港澳通行证","台胞证","回乡证"]
				};
				if(obj.cache("traveler")){
					result=obj.cache("traveler");
					obj.cache("traveler",null,true);
					}
			var apiArry=[
			function(){return false;},
			function(){return JSON.stringify({b:result.name,d:result.cardType,e:result.number,f:result.phone});},
			function(){return JSON.stringify({b:result.name,d:result.cardType,e:result.number,m:result.lastNumber,l:result.sendPlace,k:result.enLastName,j:result.enName,o:result.birthday,c:result.sex,n:result.national,f:result.phone});},
			function(){return JSON.stringify({b:result.name,d:result.cardType,e:result.number,o:result.birthday,c:result.sex,f:result.phone});},
			function(){return JSON.stringify({b:result.name,d:result.cardType,e:result.number,m:result.lastNumber,l:result.sendPlace,k:result.enLastName,j:result.enName,o:result.birthday,n:result.national,f:result.phone});},
			function(){return JSON.stringify({b:result.name,d:result.cardType,e:result.number,o:result.birthday,c:result.sex,f:result.phone});},
			function(){return JSON.stringify({b:result.name,d:result.cardType,e:result.number,o:result.birthday,f:result.phone});}
			];
			var head=_.template(data.tem[0])({left:"",center:"添加常用旅客",right:"保存"});
			$("#head").html(head);
			var main=_.template(data.tem[1])(result);
			$("#scroller").html(main);
			$("#scroller [D_type='input']").each(function(){
				var that=this;
				$(that).unbind("change").bind("change",function(){
					result[$(that).attr("D_key")]=$(that).val();
					console.log(result)
					})
				});
			$("#scroller [D_type='radio']").each(function(){
				var that=this;
				$(that).find("[D_type='radioPoint']").unbind("tap").bind("tap",function(){
					result[$(that).attr("D_key")]=$(this).attr("D_value");
					$(that).find("[D_type='radioPoint']").removeClass("hl");
					$(this).addClass("hl");
					console.log(result)
					})
				});
			$("#scroller #cardType").unbind("tap").bind("tap",function(){
				obj.cache("traveler",result);
				window.location.hash="travelerCardType/"+data.type+"/"+data.id+"/"+data.state;
				});
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				obj.api.at(function(at){
					obj.api.run("traveler_add",'at='+at+'&tp=0&jparam='+apiArry[result.cardType](),function(){
						window.location.hash="usefulTraveler/"+data.type+"/"+data.id+"/"+data.state;
						},function(e){JSON.stringify(e);});
					});
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);	
			
			
			}
		});
	})($,app,config);