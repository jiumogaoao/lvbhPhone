// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealDetail",
		par:"id/at",
		tem:["top_second","collapse_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"跟团游订单"});
			$("#head").html(head);
			function layout(listData){
				var list=_.template(data.tem[1])({list:listData});
			$("#scroller").html(list);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".simple_list").unbind("tap").bind("tap",function(){
				window.location.hash="dealList/"+$(this).attr("lid");
				});
				
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
			$('img').load(function(){
				//myScroll.refresh();
				});
				}
			function getData(at){
				
				obj.api.run("deal_detail",'at='+at+'&a='+data.id,function(returnData){
					var typeArry={"12":"出发地跟团","13":"目的地跟团"};
					var stateArry={
						"1":"待确认",
						"2":"出游归来/已成交",
						"2_1":"出游归来/已成交/待点评",
						"2_2":"出游归来/已成交/一点评",
						"4":"已确认/待签约支付",
						"8":"已签约支付/待出游",
						"16":"申请取消",
						"32":"支付超时",
						"64":"已取消/带退款",
						"128":"已退款",
						"256":"已取消订单",
						"521":"已删除订单",
						"1024":"支付中/待签约支付",
						"2048":"退款中"};
						var contactArry=[];
						var sexArry={"1":"男","2":"女"};
						$.each(returnData.shopcontact,function(i,n){
							contactArry[i]={point:[
					{key:"姓名",value:n.b,hl:false},
					{key:"性别",value:sexArry[n.e+""],hl:false},
					{key:"手机号",value:n.c,hl:false},
					{key:"邮箱",value:n.d,hl:false}
				],hl:false};
							});
						var touristArry=[];
						$.each(returnData.touristlist,function(i,n){
							touristArry[i]={point:[
					{key:"姓名",value:n.a,hl:false},
					{key:"英文名",value:n.f,hl:false},
					{key:"证件类型",value:n.b,hl:false},
					{key:"证件号码",value:n.c,hl:false},
					{key:"证件有效期",value:n.k,hl:false},
					{key:"国籍",value:n.h,hl:false},
					{key:"性别",value:sexArry[n.d+""],hl:false},
					{key:"出生日期",value:n.i,hl:false},
					{key:"手机号",value:n.e,hl:false}
				],hl:false};
							});
					var invoiceinfo={point:[
					{key:"发票抬头",value:"-",hl:false},
					{key:"邮寄地址",value:"-",hl:false},
					{key:"收件人",value:"-",hl:false},
					{key:"手机号",value:"-",hl:false}
				],hl:false};
					if(returnData.invoiceinfo){
						invoiceinfo={point:[
					{key:"发票抬头",value:returnData.invoiceinfo.a,hl:false},
					{key:"邮寄地址",value:returnData.invoiceinfo.b+returnData.invoiceinfo.c+returnData.invoiceinfo.d+returnData.invoiceinfo.e,hl:false},
					{key:"收件人",value:returnData.invoiceinfo.g,hl:false},
					{key:"手机号",value:returnData.invoiceinfo.f,hl:false}
				],hl:false};
						}
					var pactinfo={point:[
					{key:"邮寄地址",value:"-",hl:false},
					{key:"收件人",value:"-",hl:false},
					{key:"手机号",value:"-",hl:false}
				],hl:false};
					if(returnData.pactinfo){
						pactinfo={point:[
					{key:"邮寄地址",value:returnData.pactinfo.a+returnData.pactinfo.b+returnData.pactinfo.c+returnData.pactinfo.e,hl:false},
					{key:"收件人",value:returnData.pactinfo.f,hl:false},
					{key:"手机号",value:returnData.pactinfo.e,hl:false}
				],hl:false};
						}	
					var list=[
			{title:"订单详情",
			group:[
				{
					point:[
						{key:"订单编号",value:returnData.shoporder.b,hl:false},
						{key:"预定时间",value:returnData.shoporder.c,hl:false},
						{key:"产品编号",value:returnData.shoporder.d,hl:false},
						{key:"产品类别",value:typeArry[returnData.shoporder.e+""],hl:false}
						],
					hl:false
				},
				{
					point:[
						{key:"产品名称",value:returnData.shoporder.f,hl:false}
						],
					hl:true
				},
				{
					point:[
						{key:"出发地",value:returnData.shoporder.j,hl:false},
						{key:"目的地",value:returnData.shoporder.g,hl:false},
						{key:"行程天数",value:returnData.shoporder.k+"天",hl:false},
						{key:"起止时间",value:returnData.shoporder.l.split(" ")[0]+"至"+returnData.shoporder.m.split(" ")[0],hl:false}
						],
					hl:false
				},
				{
					point:[
						{key:"订单状态",value:stateArry[returnData.shoporder.i+""],hl:true},
						{key:"数量/单价",value:returnData.shoporder.n,hl:false},
						{key:"预定人",value:returnData.shoporder.s,hl:false},
						{key:"客源地",value:returnData.shoporder.t,hl:false}
						],
					hl:false
				},
				{
					point:[
						{key:"产品金额",value:returnData.shoporder.o,hl:true},
						{key:"保险金额",value:returnData.shoporder.p,hl:false},
						{key:"优惠金额",value:returnData.shoporder.q,hl:false},
						{key:"订单金额",value:returnData.shoporder.h,hl:true},
						{key:"支付时限",value:"00天00是52分30秒",hl:false}
						],
					hl:false
				}
			]},
			{title:"联系人信息",
			group:[{point:[
					{key:"姓名",value:returnData.shopcontact.b,hl:false},
					{key:"性别",value:sexArry[returnData.shopcontact.e+""],hl:false},
					{key:"手机号",value:returnData.shopcontact.c,hl:false},
					{key:"邮箱",value:returnData.shopcontact.d,hl:false}
				],hl:false}]},
			{title:"出游人信息",
			group:touristArry},
			{title:"发票",
			group:[invoiceinfo]},
			{title:"合同",
			group:[pactinfo]},
			{title:"附言说明",
			group:[
				{point:[{key:"",value:"",dsc:returnData.shoporder.x || "-",hl:false}],hl:false}
			]}
			];
			layout(list);
					},function(e){
					obj.pop.on("alert",{text:JSON.stringify(e)});
					});
				
				}
			obj.api.at(getData,data.at);
			}
		});
	})($,app,config);