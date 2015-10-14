// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"travelerCardType",
		par:"type/id/state",
		tem:["top_second","single_line_list"],
		fn:function(data){
			var result={};
			if(obj.cache("traveler")){
				result=obj.cache("traveler");
				}
			var head=_.template(data.tem[0])({left:"",center:"选择证件类型"});
			$("#head").html(head);
			var main=_.template(data.tem[1])({list:["身份证","护照","军官证","港澳通行证","台胞证","回乡证"]});
			$("#scroller").html(main);
			$("#scroller .point").unbind("tap").bind("tap",function(){
				result.cardType=Number($(this).attr("num"))+1;
				obj.cache("traveler",result);
				window.location.hash="travellerAdd/"+data.type+"/"+data.id+"/"+data.state;
				});
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);	
			
			
			}
		});
	})($,app,config);