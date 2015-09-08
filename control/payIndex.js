// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"payIndex",
		par:"id",
		tem:["top_second","pay_index"],
		fn:function(data){
			var bankArry={
				"1":{"id":"zfb","name":"支付宝支付","dsc":"支持支付宝和网银的用户使用","img":"img/center_icom_alipay.png"},
				"2":{"id":"cft","name":"财付通支付","dsc":"支持腾讯旗下财付通支付","img":"img/center_icom_tenpay.png"},
				"51":{"id":"jj","name":"奖金支付","dsc":"支持奖金支付","img":"img/center_icon_bonus.png"},
				"101":{"id":"wx","name":"微信支付","dsc":"支持微信支付安全快捷","img":"img/center_ciom_micro letter.png"},
				};
			var head=_.template(data.tem[0])({left:"",center:"支付"});
			$("#head").html(head);
			function layout(result){
				var main=_.template(data.tem[1])(result);
				$("#scroller").html(main);
			$("#scroller #zfb").unbind("tap").bind("tap",function(){
				if($("#scroller .fa-checkbox").length){
					$("#alipay").click();
					}else{
						alert("必须同意旅游条款才能继续");
						}
				});
			$("#scroller #cft").unbind("tap").bind("tap",function(){
				if($("#scroller .fa-checkbox").length){
					$("#tenpay").click();
					}else{
						alert("必须同意旅游条款才能继续");
						}
				});
			$("#scroller #lvbh").unbind("tap").bind("tap",function(){
				if($("#scroller .fa-checkbox").length){
					window.location.hash="payLvbh/"+data.id;
					}else{
						alert("必须同意旅游条款才能继续");
						}
				});
			$("#scroller #cxk").unbind("tap").bind("tap",function(){
				if($("#scroller .fa-checkbox").length){
					window.location.hash="cardList/"+data.id+"/0";
					}else{
						alert("必须同意旅游条款才能继续");
						}
				});
			$("#scroller #xyk").unbind("tap").bind("tap",function(){
				if($("#scroller .fa-checkbox").length){
					window.location.hash="cardList/"+data.id+"/1";
					}else{
						alert("必须同意旅游条款才能继续");
						}
				});
				var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
				}
			
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			
			function getDetail(at){
				obj.api.run("pay_detail",'at='+at+'&a='+data.id,function(returnData){
					console.log(returnData);
					var payList=[];
					$.each(returnData.list1,function(i,n){
						payList.push(bankArry[n.a]);
						});
					$.each(returnData.list2,function(i,n){
						payList.push(bankArry[n.a]);
						});
					layout({
						lastTime:returnData.b,
						number:returnData.go.x,
						name:returnData.go.n,
						start:returnData.go.r.split(" ")[0],
						end:moment(returnData.go.r.split(" ")[0],"YYYY-MM-DD").add(Number(returnData.lvDays),'days').format("YYYY-MM-DD"),
						city:returnData.go.o,
						price:returnData.go.i,
						payList:payList
						});
					},function(e){alert(JSON.stringify(e));});
				}
			obj.api.at(getDetail);
			}
		});
	})($,app,config);