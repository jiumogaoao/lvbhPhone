// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"commentList",
		par:"id/type",
		tem:["top_second","comment_list"],
		fn:function(data){
			
			obj.api.at(function(at){
				var stepArry=["不满意","不满意","不满意","一般","满意","满意"];
			var head=_.template(data.tem[0])({
				left:"",
				center:"产品点评"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			function layout(list){
				var main=_.template(data.tem[1])(list);
			$("#scroller").html(main);
			$("#scroller .comment_list .button[pid='"+data.type+"']").addClass("hl");
			$("#scroller .comment_list .button").unbind("tap").bind("tap",function(){
				window.location.hash="commentList/"+data.id+"/"+$(this).attr("pid");
			});
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);	
				$('img').load(function(){
				//myScroll.refresh();
				});
				}
			
			obj.api.run("comment_get",'at='+at+'&c='+data.id+'&d='+data.type+'&1=0&b=10',function(returnData){
				var main={
					total:returnData.totalCount,
					good:returnData.goodNum,
					general:returnData.generalNum,
					poor:returnData.poorNum,
					list:[]
					};
				$.each(returnData.resultRemark.a,function(i,n){
					main.list.push({head:n.d,name:n.b,tag:n.c,time:n.a.e,step:JSON.parse(n.a.g),dsc:n.a.c});
					});
					layout(main);
				},function(e){
				obj.pop.on("alert",{text:(JSON.stringify(e))});
				});	
			});
			}
		});
	})($,app,config);