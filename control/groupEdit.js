// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"groupEdit",
		par:"type/value",
		tem:["top_third","input_single"],
		fn:function(data){
			var nameArry=["编辑名称","编辑宣言","编辑介绍"];
			var typeArry=[0,0,1];
			var sendArry=["a","b","c"];
			var placeholderArry=["请输入名称","请输入宣言","请输入介绍"];
			var head=_.template(data.tem[0])({left:"",center:nameArry[data.type],right:"保存"});
			$("#head").html(head);
			function layout(at){
				var listA=_.template(data.tem[1])({type:typeArry[data.type],value:data.value||"",placeholder:placeholderArry[data.type]});
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