// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"userEdit",
		par:"type",
		tem:["top_third","input_single"],
		fn:function(data){
			var valueArry=["","",""];
			if(obj.cache("group_set")){
				valueArry=[obj.cache("group_set").name,obj.cache("group_set").word,obj.cache("group_set").dsc];
				}
			var nameArry=["编辑昵称","编辑姓名","编辑性别","编辑出生日期","编辑QQ号码"];
			var typeArry=[0,0,2,3,0];
			var sendArry=["a","b","c","d","e"];
			var placeholderArry=["请输入昵称","请输入姓名","请输入性别","请输入出生日期","请输入QQ号码"];
			var head=_.template(data.tem[0])({left:"",center:nameArry[data.type],right:"保存"});
			$("#head").html(head);
			function layout(at){
				var listA=_.template(data.tem[1])({type:typeArry[data.type],value:valueArry[data.type],placeholder:placeholderArry[data.type]});
			$("#scroller").html(listA);
			
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				obj.api.run("group_set","at="+at+"&"+sendArry[data.type]+"="+$(".input_single .main").val(),function(){
					window.location.hash="groupSet";
					},function(e){obj.pop.on("alert",{text:(JSON.stringify(e))});});
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