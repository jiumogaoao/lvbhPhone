// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"postScript",
		par:"type/id",
		tem:["top_second","input_single","single_button"],
		fn:function(data){
			$("body").css({"background-color":"#fff"});
			var result={};
			if(obj.cache("pruduct_input_"+data.id)){
				result=obj.cache("pruduct_input_"+data.id);}
			var head=_.template(data.tem[0])({left:"",center:"附言说明",right:"保存"});
			$("#head").html(head);
			function layout(at){
				var listA=_.template(data.tem[1])({type:1,value:result.dsc||"",placeholder:"请输入你的附言说明"});
				var button=_.template(data.tem[2])({text:'保存',id:"saveScript"});
			$("#scroller").html(listA+button);
			
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#saveScript").unbind("tap").bind("tap",function(){
				result.dsc=$(".input_single textarea").val();
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="productInput/"+data.type+"/"+data.id;
				});
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
				$('img').load(function(){
				//myScroll.refresh();
				});
				}

			obj.api.at(layout);	
			}
		});
	})($,app,config);