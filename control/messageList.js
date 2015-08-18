// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"messageList",
		par:"type/id",
		tem:["top_second","message_list","single_button"],
		fn:function(data){
			var apiArry={"12":"cf_detail_get","13":"md_detail_get"}
			var head=_.template(data.tem[0])({
				left:"",
				center:"预订须知"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			function layout(list){
				var button=_.template(data.tem[2])({text:'立即预定',id:"payButton"});
				var main=_.template(data.tem[1])({list:list});
			$("#scroller").html(main+button);
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				}	
			
			function getList(at){
				obj.api.run(apiArry[data.type],'aid='+data.id,function(returnData){
					var list=[{title:"预定说明",main:returnData.gtinfo.gd.u},{title:"注意事项",main:returnData.gtinfo.gd.v}]
					layout(list);
					})
			}
			obj.api.at(getList);	
			}
		});
	})($,app,config);