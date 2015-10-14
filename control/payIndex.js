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
				if($("#scroller .fa-checkbox.hl").length){
					$("#alipay").submit();
					}else{
						obj.pop.on("alert",{text:("必须同意旅游条款才能继续")});
						}
				});
			$("#scroller #cft").unbind("tap").bind("tap",function(){
				if($("#scroller .fa-checkbox.hl").length){
					$("#tenpay").submit();
					}else{
						obj.pop.on("alert",{text:("必须同意旅游条款才能继续")});
						}
				});
			$("#scroller #lvbh").unbind("tap").bind("tap",function(){
				if($("#scroller .fa-checkbox.hl").length){
					window.location.hash="payLvbh/"+data.id;
					}else{
						obj.pop.on("alert",{text:("必须同意旅游条款才能继续")});
						}
				});
			$("#scroller #cxk").unbind("tap").bind("tap",function(){
				if($("#scroller .fa-checkbox.hl").length){
					window.location.hash="cardList/"+data.id+"/0";
					}else{
						obj.pop.on("alert",{text:("必须同意旅游条款才能继续")});
						}
				});
			$("#scroller #xyk").unbind("tap").bind("tap",function(){
				if($("#scroller .fa-checkbox.hl").length){
					window.location.hash="cardList/"+data.id+"/1";
					}else{
						obj.pop.on("alert",{text:("必须同意旅游条款才能继续")});
						}
				});
				var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
				$('img').load(function(){
				//myScroll.refresh();
				});
				}
			
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			
			function getDetail(at){
				obj.api.run("pay_detail",'at='+at+'&a='+data.id,function(returnData){
					var payList=[];
					var lastTime=0;
						if(returnData.b){
							lastTime=moment(returnData.b,"YYYY-MM-DD HH:mm:ss").format("x")-moment().format("x");
							if(lastTime>1000*60*60*24){
								lastTime="1天以上";
								}else{
									var hour=parseInt(lastTime/(1000*60*60))%24;
									var minute=parseInt(lastTime/(1000*60))%60;
									var second=parseInt(lastTime/1000)%60;
									lastTime=hour+"时"+minute+"分"+second+"秒";
									}}
					$.each(returnData.list1,function(i,n){
						payList.push(bankArry[n.a]);
						});
					layout({
						lastTime:lastTime,
						number:returnData.go.x,
						name:returnData.go.n,
						start:returnData.go.r.split(" ")[0],
						end:moment(returnData.go.r.split(" ")[0],"YYYY-MM-DD").add(Number(returnData.lvDays),'days').format("YYYY-MM-DD"),
						city:returnData.go.o,
						price:returnData.go.i,
						payList:payList
						});
					},function(e){obj.pop.on("alert",{text:(JSON.stringify(e))});});
				}
			obj.api.at(getDetail);
			}
		});
	})($,app,config);