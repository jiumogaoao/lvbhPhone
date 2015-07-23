// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealResult",
		par:"type/search",
		tem:["top_second","deal_list"],
		fn:function(data){
			var titleArry=["成交订单","取消订单","作废订单"];
			var head=_.template(data.tem[0])({left:"",center:"查询结果"});
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
			$(".dianpin").unbind("tap").bind("tap",function(e){
				e.stopPropagation();
				window.location.hash="dealComment/"+$(this).parents(".deal_list").attr("lid");
				});
			$(".quxiao").unbind("tap").bind("tap",function(e){
				e.stopPropagation();
				var that=this;
				function popFn(){
					$("#pop .left").unbind("tap").bind("tap",function(){
						console.log("at="+at+"&a="+$(that).parents(".deal_list").attr("lid"));
						obj.pop.off();
					obj.api.run("deal_cancel","at="+at+"&a="+$(that).parents(".deal_list").attr("lid"),function(){
					alert("退订申请已提交");
					window.location.reload();
						},function(e){alert(JSON.stringify(e));});
					});
					$("#pop .right").unbind("tap").bind("tap",function(){
						obj.pop.off();
						});
					}
				obj.pop.on("confirm",{text:"确认要申请取消该订单吗？"},popFn);
				});
			$(".zuofei").unbind("tap").bind("tap",function(e){
				e.stopPropagation();
				var that=this;
					function popFn(){
						$("#pop .left").unbind("tap").bind("tap",function(){
							obj.pop.off();
							console.log("at="+at+"&a="+$(that).parents(".deal_list").attr("lid"));
				obj.api.run("deal_remove","at="+at+"&a="+$(that).parents(".deal_list").attr("lid"),function(){
					window.location.reload();
					},function(e){alert(JSON.stringify(e));});
							});
						$("#pop .right").unbind("tap").bind("tap",function(){
						obj.pop.off();
						});
						}
					obj.pop.on("confirm",{text:"确认要作废该订单吗？"},popFn);
				});
			$(".dianpin").unbind("tap").bind("tap",function(e){
				e.stopPropagation();
				window.location.hash="dealComment/"+$(this).parents(".deal_list").attr("lid");
				});
			$(".sanchu").unbind("tap").bind("tap",function(e){
				e.stopPropagation();
				var that=this;
				function popFn(){
				$("#pop .left").unbind("tap").bind("tap",function(){
							obj.pop.off();	
				console.log('at='+at+'&a='+$(that).parents(".deal_list").attr("lid"));
				obj.api.run("deal_delect",'at='+at+'&a='+$(that).parents(".deal_list").attr("lid"),function(){
					alert("删除成功");
					window.location.reload();
					},function(e){
					alert(JSON.stringify(e));
					});
				});	
				$("#pop .right").unbind("tap").bind("tap",function(){
						obj.pop.off();
						});
				}
				obj.pop.on("confirm",{text:"确认要删除该订单吗？"},popFn);
			});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			}
			obj.api.at(function(at){
				console.log('at='+at+'&jparam={"c"="'+data.type+'"'+data.search+'}');
				obj.api.run("deal_list_get",'at='+at+'&jparam={"c"="'+data.type+'"'+data.search+'}',function(returnData){
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