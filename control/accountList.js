// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"accountList",
		par:"type",
		tem:["top_third","account_list"],
		fn:function(data){
			var result=[];
			var page=1;
			var titleArry=["产品体验奖励","渠道体验奖励","取消订单退回","成交订单","取消订单支出"];
			var typeArry={
				"12":"出发跟团",
				"13":"目的跟团"
				};
			var stateArry={
				"1":"待确认",
				"2":"出游归来/已成交",
				"2_1":"出游归来/已成交/待点评",
				"2_2":"出游归来/已成交/已点评",
				"4":"已确认/待签约支付",
				"8":"已签约支付/待出游",
				"16":"申请取消",
				"32":"支付超时",
				"64":"已取消/待退款",
				"128":"已退款",
				"256":"已取消订单",
				"521":"已删除订单",
				"1024":"支付中/待签约支付",
				"2048":"退款中"
				};
			var dscArry=["返奖时间","返奖周期","返奖时间","交易时间","交易时间"];
			var headArry=[
				["奖金比例","奖金比例","取消违约金","订单编号","订单编号"],
				["奖金金额","奖金金额","","",""]
			]	
			var head=_.template(data.tem[0])({left:"",center:titleArry[data.type],right:'<span class="fa fa-search"></span>查询'});
			$("#head").html(head);
			var list=[
				{"type":typeArry["12"],"sub":stateArry["10086"]||"订单编号 "+"3424232","title":"sdfsdfs","dsc":dscArry[data.type]+"1天","table":[{head:"订单金额",main:"234234"},{head:headArry[0][data.type],main:"234234"},{head:headArry[1][data.type],main:"234234"}]},
				{"type":typeArry["12"],"sub":stateArry["10086"]||"订单编号 "+"3424232","title":"sdfsdfs","dsc":dscArry[data.type]+"1天","table":[{head:"订单金额",main:"234234"},{head:headArry[0][data.type],main:"234234"},{head:headArry[1][data.type],main:"234234"}]},
				{"type":typeArry["12"],"sub":stateArry["10086"]||"订单编号 "+"3424232","title":"sdfsdfs","dsc":dscArry[data.type]+"1天","table":[{head:"订单金额",main:"234234"},{head:headArry[0][data.type],main:"234234"},{head:headArry[1][data.type],main:"234234"}]},
				{"type":typeArry["12"],"sub":stateArry["10086"]||"订单编号 "+"3424232","title":"sdfsdfs","dsc":dscArry[data.type]+"1天","table":[{head:"订单金额",main:"234234"},{head:headArry[0][data.type],main:"234234"},{head:headArry[1][data.type],main:"234234"}]},
				{"type":typeArry["12"],"sub":stateArry["10086"]||"订单编号 "+"3424232","title":"sdfsdfs","dsc":dscArry[data.type]+"1天","table":[{head:"订单金额",main:"234234"},{head:headArry[0][data.type],main:"234234"},{head:headArry[1][data.type],main:"234234"}]}
			]
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
			
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				
			
			}
		});
	})($,app,config);