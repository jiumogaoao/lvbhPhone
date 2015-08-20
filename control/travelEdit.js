// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"travelEdit",
		par:"id",
		tem:["top_third","title_input_list","travel_edit","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"编辑游记",right:"保存"});
			$("#head").html(head);
			function layout(returnData,at){
				var list=[
				{name:"place",left:"目的地",right:'<span class="fa fa-right"></span>',link:true},
				{name:"title",left:"标题",right:'<input placeholder="请输入标题"/>',link:true},
				{name:"talk",left:"说说这次旅行",link:true}
				];
				var listA=_.template(data.tem[1])({list:list});
				var button=_.template(data.tem[3])({text:"继续添加",id:"addlist"});
			$("#scroller").html(listA+data.tem[2]);
			$(".title_input_list").css({
				margin:0});
			$("[name='place']").css({
					"background-color":"#ebf7ff"
					});
			$("[name='title'] input").css({
					width:"100%",
					height:"100%",
					"line-height":"1.4rem",
					"text-align":"right"
					});
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
				}
			function getGroup(at){
				obj.api.run("travel_detail","at="+at+"&a="+data.id,function(returnData){
					layout(returnData,at);
					},function(e){
					alert(JSON.stringify(e));
					});
				}
			obj.api.at(getGroup);	
			}
		});
	})($,app,config);