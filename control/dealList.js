// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealList",
		par:"type",
		tem:["top_third","deal_list"],
		fn:function(data){
			var titleArry=["成交订单","取消订单","作废订单"];
			var head=_.template(data.tem[0])({left:"",center:titleArry[data.type],right:'<span class="fa fa-search"></span>查询'});
			$("#head").html(head);
			function layout(list,at){
				var listA=_.template(data.tem[1])({
				type:data.type,
				list:list});
			$("#scroller").html(listA);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				window.location.hash="dealSearch/"+data.type;
				});
			$(".simple_list").unbind("tap").bind("tap",function(){
				window.location.hash="dealList/"+$(this).attr("lid");
				});
			$(".quxiao").unbind("tap").bind("tap",function(e){
				e.stopPropagation();
				console.log("at="+at+"&a="+$(this).parents(".deal_list").attr("lid"));
				obj.api.run("deal_cancel","at="+at+"&a="+$(this).parents(".deal_list").attr("lid"),function(){
					alert("退订申请已提交");
					window.location.reload();
					},function(e){alert(JSON.stringify(e));});
				});
			$(".zuofei").unbind("tap").bind("tap",function(e){
				e.stopPropagation();
				console.log("at="+at+"&a="+$(this).parents(".deal_list").attr("lid"));
				obj.api.run("deal_remove","at="+at+"&a="+$(this).parents(".deal_list").attr("lid"),function(){
					window.location.reload();
					},function(e){alert(JSON.stringify(e));});
				});
			$(".dianpin").unbind("tap").bind("tap",function(e){
				e.stopPropagation();
				window.location.hash="dealComment/"+$(this).parents(".deal_list").attr("lid");
				});
			$(".sanchu").unbind("tap").bind("tap",function(e){
				e.stopPropagation();
				console.log('at='+at+'&a='+$(this).parents(".deal_list").attr("lid"));
				obj.api.run("deal_delect",'at='+at+'&a='+$(this).parents(".deal_list").attr("lid"),function(){
					alert("删除成功");
					window.location.reload();
					},function(e){
					alert(JSON.stringify(e));
					});
			});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				}
			obj.api.at(function(at){
				console.log('at='+at+'&jparam={"c"="'+data.type+'"}');
				obj.api.run("deal_list_get",'at='+at+'&jparam={"c"="'+data.type+'"}',function(returnData){
					console.log(returnData);
					var list=[];
					var typeArry={"12":"出发地跟团","13":"目的地跟团"};
					$.each(returnData,function(i,n){
						list[i]={type:typeArry[n.e+""],state:n.i+"",title:n.f,start:n.l.split(" ")[0],end:n.m.split(" ")[0],price:n.n,last:n.r,id:n.a};
						});
					layout(list,at);
					},function(e){
					alert(JSON.stringify(e));
					});
				});
			
			
			}
		});
	})($,app,config);