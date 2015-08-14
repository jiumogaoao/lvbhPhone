// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"postScript",
		par:"value",
		tem:["top_third","input_single"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"附言说明",right:"保存"});
			$("#head").html(head);
			function layout(at){
				var listA=_.template(data.tem[1])({type:1,value:data.value||"",placeholder:"请输入你的附言说明"});
			$("#scroller").html(listA);
			
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){

				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				}

			obj.api.at(layout);	
			}
		});
	})($,app,config);