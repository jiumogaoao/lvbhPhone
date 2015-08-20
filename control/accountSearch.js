// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"accountSearch",
		par:"type",
		tem:["top_third","account_search","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"设置查询条件",right:"重置"});
			$("#head").html(head);
			var titleArry=["返奖时间","周期","提交时间","交易时间","提交时间","交易时间"];
			var list=_.template(data.tem[1])({type:data.type,dateTitle:titleArry[data.type]});
			var button=_.template(data.tem[2])({text:"立即查询",id:"search"});
			$("#scroller").html(list+button);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				$("#scroller input").val("");
				$("#scroller .button_both").removeClass("hl");
				});
			$("#scroller #search").unbind("tap").bind("tap",function(){
				var searchString="";
				if($("#g").length&&$("#g").val()){
					searchString+=',"g"="'+$("#g").val()+'"';
					}
				if($("#h").length&&$("#h").val()){
					searchString+=',"h"="'+$("#h").val()+'"';
					}
				if($("#round").length){
					searchString+=',"g"="'+$("#round .hl").attr("g")+'","h"="'+$("#round .hl").attr("h")+'"';
					}
				if($("#e").length){
					searchString+=',"e"="'+$("#e .hl").attr("score")+'"';
					}
				if($("#f").length){
					searchString+=',"f"="'+$("#f .hl").attr("score")+'"';
					}
				if($("#i").length&&$("#i").val()){
					searchString+=',"i"="'+$("#i").val()+'"';
					}
				if(data.type === "5"){
					window.location.hash="cashList/"+data.type+"/"+searchString;
					}else{
						window.location.hash="accountList/"+data.type+"/"+searchString;
						}
				
				});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
			}
		});
	})($,app,config);