// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"accountDetail",
		par:"type/id",
		tem:["top_second","collapse_list"],
		fn:function(data){
			var titleArry=["产品体验奖励详情","渠道体验奖励详情","取消订单退回详情","成交订单详情","取消订单支出详情","提现详情"];
			var head=_.template(data.tem[0])({left:"",center:titleArry[data.type]});
			$("#head").html(head);
			function layout(result){
				if(data.type === "0"||data.type === "1"||data.type === "2"||data.type === "3"){
					result=_.indexBy(result.data,"q")[data.id];
			
					}else{
							result=_.indexBy(result.data,"a")[data.id];
							}
				var dataFn=[
				function(result){
					listA=[{group:[
					{point:[{"key":"订单编号","value":result.a}]},
					{point:[{"key":"产品编号","value":result.b}]},
					{point:[{"key":"产品类别","value":result.c}]},
					{point:[{"key":"产品名称","value":result.d}]},
					{point:[{"key":"订单金额","value":"￥"+result.e}]},
					{point:[{"key":"奖金来源","value":result.f}]},
					{point:[{"key":"奖金类别","value":"产品体验奖"}]},
					{point:[{"key":"奖金比例","value":result.g}]},
					{point:[{"key":"奖金金额","value":"￥"+result.h}]},
					{point:[{"key":"返奖时间","value":result.i}]}
					]}];
					},
				function(result){
					listA=[{group:[
					{point:[{"key":"订单编号","value":result.a}]},
					{point:[{"key":"产品类别","value":result.c}]},
					{point:[{"key":"产品名称","value":result.d}]},
					{point:[{"key":"订单金额","value":"￥"+result.e}]},
					{point:[{"key":"奖金来源","value":result.f}]},
					{point:[{"key":"奖金类别","value":"渠道体验奖"}]},
					{point:[{"key":"奖金比例","value":result.g}]},
					{point:[{"key":"奖金金额","value":"￥"+result.h}]},
					{point:[{"key":"周期","value":"一年"}]},
					{point:[{"key":"状态","value":" "}]},
					{point:[{"key":"返奖时间","value":result.i}]}
					]}];
					},
				function(result){
					listA=[{group:[
					{point:[{"key":"订单编号","value":result.a}]},
					{point:[{"key":"产品编号","value":result.b}]},
					{point:[{"key":"产品类别","value":result.c}]},
					{point:[{"key":"产品名称","value":result.d}]},
					{point:[{"key":"订单金额","value":"￥"+result.e}]},
					{point:[{"key":"应退会员","value":result.o}]},
					{point:[{"key":"取消违约金","value":result.n}]},
					{point:[{"key":"支付方式","value":result.l}]},
					{point:[{"key":"交易时间","value":result.p}]},
					{point:[{"key":"返奖时间","value":result.i}]}
					]}];
					},
				function(result){
					listA=[{group:[
					{point:[{"key":"订单编号","value":result.a}]},
					{point:[{"key":"产品编号","value":result.b}]},
					{point:[{"key":"产品类别","value":result.c}]},
					{point:[{"key":"产品名称","value":result.d}]},
					{point:[{"key":"订单金额","value":"￥"+result.e}]},
					{point:[{"key":"订单状态","value":"已支付/待出游"}]},
					{point:[{"key":"交易时间","value":result.p}]}
					]}];
					},
				function(result){
					listA=[{group:[
					{point:[{"key":"订单编号","value":result.a}]},
					{point:[{"key":"产品编号","value":result.b}]},
					{point:[{"key":"产品类别","value":result.e}]},
					{point:[{"key":"产品名称","value":result.c}]},
					{point:[{"key":"订单金额","value":"￥"+result.j}]},
					{point:[{"key":"取消违约金","value":"￥"+result.f}]},
					{point:[{"key":"交易时间","value":result.g}]}
					]}];
					},
				function(result){
					listA=[{group:[
					{point:[{"key":"提现编号","value":result.a}]},
					{point:[{"key":"提现金额","value":"￥"+result.g}]},
					{point:[{"key":"提现税费","value":"￥"+result.h}]},
					{point:[{"key":"实际提现","value":"￥"+result.i}]},
					{point:[{"key":"提现账户","value":result.c}]},
					{point:[{"key":"提现状态","value":result.d}]},
					{point:[{"key":"申请时间","value":result.b}]},
					{point:[{"key":"提现时间","value":result.f}]},
					{point:[{"key":"备   注","value":result.e}]}
					]}];
					}
				];
			var listA=[];
			dataFn[data.type](result);
			var list=_.template(data.tem[1])({list:listA});
			$("#scroller").html(list);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			myScroll.refresh();
				}
			
			function getdetail(at){
				var send="";
				if(data.type === "0"||data.type === "1"||data.type === "2"){
					send='at='+at+'&jparam={"c"="'+data.type+'"}';
					obj.api.run("income_get",send,layout,function(e){alert(JSON.stringify(e));});
					}else if(data.type === "5"){
					send='at='+at+'&jparam={"c"="0"}';
					obj.api.run("expend_get",send,layout,function(e){alert(JSON.stringify(e));});
						}else{
					send='at='+at+'&jparam={"c"="'+(Number(data.type)-2)+'"}';
					obj.api.run("expend_get",send,layout,function(e){alert(JSON.stringify(e));});	
						}
				}
			obj.api.at(getdetail);
			}
		});
	})($,app,config);