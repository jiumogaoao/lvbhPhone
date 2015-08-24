// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealList",
		par:"type/at",
		tem:["top_third","deal_list"],
		fn:function(data){
			var result=[];
			var page=1;
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
				var that=this;
				function popFn(){
					$("#pop .left").unbind("tap").bind("tap",function(){
						console.log("at="+at+"&a="+$(that).parents(".deal_list").attr("lid"));
						obj.pop.off();
					obj.api.run("deal_cancel","at="+at+"&a="+$(that).parents(".deal_list").attr("lid"),function(){
					obj.pop.on("alert",{text:"退订申请已提交"});
					window.location.reload();
						},function(e){
							obj.pop.on("alert",{text:JSON.stringify(e)});
							});
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
					},function(e){
						obj.pop.on("alert",{text:JSON.stringify(e)});
						});
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
					obj.pop.on("alert",{text:"删除成功"});
					window.location.reload();
					},function(e){
					obj.pop.on("alert",{text:JSON.stringify(e)});
					});
				});	
				$("#pop .right").unbind("tap").bind("tap",function(){
						obj.pop.off();
						});
				}
				obj.pop.on("confirm",{text:"确认要删除该订单吗？"},popFn);
			});
			$(".zhifu").unbind("tap").bind("tap",function(e){
				window.location.hash="payIndex/"+$(this).parents(".deal_list").attr("lid");
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
				}
			function getPage(callback){
			obj.api.at(function(at){
				obj.api.run("deal_list_get",'at='+at+'&jparam={"c"="'+data.type+'","b"="'+page+'"}',function(returnData){
				if(returnData.pn === page+""){
					page++;
					returnData=returnData.data;
					var typeArry={"12":"出发地跟团","13":"目的地跟团"};
					$.each(returnData,function(i,n){
						var list={type:typeArry[n.e+""],state:n.i+"",title:n.f,start:n.l.split(" ")[0],end:n.m.split(" ")[0],price:n.n,last:n.r,id:n.a};
						result.push(list);
						});
					layout(result,at);
					}
					if(callback){callback();}
					},function(e){
					obj.pop.on("alert",{text:JSON.stringify(e)});
					});
				},data.at);
			}
			getPage();
			obj.reflash.add("dealList",function(callback){
			getPage(callback);
			});
			}
		});
	})($,app,config);