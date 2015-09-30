// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealSearch",
		par:"type",
		tem:["top_third","deal_search","single_button"],
		fn:function(data){
			$("body").css({"background-color":"#fff"});
			var head=_.template(data.tem[0])({left:"",center:"查询订单",right:"重置"});
			$("#head").html(head);
			var list=_.template(data.tem[1])({type:data.type});
			var button=_.template(data.tem[2])({text:"立即查询",id:"search"});
			$("#scroller").html(list+button);
			$(".top_third .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("click").bind("click",function(){
				$("#scroller input").val("");
				$("#scroller .button_both").removeClass("hl");
				});
			$("#scroller #search").unbind("click").bind("click",function(){
				var searchString="";
				if($("#goStart").val()){
					searchString+=',"g"="'+$("#goStart").val()+'"';
					}
				if($("#goEnd").val()){
					searchString+=',"h"="'+$("#goEnd").val()+'"';
					}
				if($("#bookStart").val()){
					searchString+=',"i"="'+$("#bookStart").val()+'"';
					}
				if($("#bookEnd").val()){
					searchString+=',"j"="'+$("#bookEnd").val()+'"';
					}
				searchString+=',"e"="'+$("#type .hl").attr("score")+'"';
				if($("#state .hl").attr("score") !== "0"){
					searchString+=',"f"="'+$("#state .hl").attr("score")+'"';
					}
				window.location.hash="dealResult/"+data.type+"/"+searchString;
				});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
			}
		});
	})($,app,config);