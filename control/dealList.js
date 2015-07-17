// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"dealList",
		par:"type",
		tem:["top_third","deal_list"],
		fn:function(data){
			var titleArry=["成交订单","取消订单","作废订单"]
			var head=_.template(data.tem[0])({left:"",center:titleArry[data.type],right:'<span class="fa fa-search"></span>查询'});
			$("#head").html(head);
			var list=_.template(data.tem[1])({
				type:data.type,
				list:[
			{type:"出发地跟团",state:"0",title:"【巴厘岛6日半自助游（4钻）】泳池别墅、下午茶、增SPA直飞 特卖汇",start:"2015-07-08",end:"2015-07-18",price:"989",last:"00时32分52秒",id:"0"},
			{type:"出发地跟团",state:"1",title:"【巴厘岛6日半自助游（4钻）】泳池别墅、下午茶、增SPA直飞 特卖汇",start:"2015-07-08",end:"2015-07-18",price:"989",last:"00时32分52秒",id:"1"},
			{type:"出发地跟团",state:"2",title:"【巴厘岛6日半自助游（4钻）】泳池别墅、下午茶、增SPA直飞 特卖汇",start:"2015-07-08",end:"2015-07-18",price:"989",last:"00时32分52秒",id:"2"},
			{type:"出发地跟团",state:"3",title:"【巴厘岛6日半自助游（4钻）】泳池别墅、下午茶、增SPA直飞 特卖汇",start:"2015-07-08",end:"2015-07-18",price:"989",last:"00时32分52秒",id:"3"}
			]});
			$("#scroller").html(list);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".simple_list").unbind("tap").bind("tap",function(){
				window.location.hash="dealList/"+$(this).attr("lid");
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			
			}
		});
	})($,app.control,config);