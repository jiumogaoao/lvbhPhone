// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"payIndex",
		par:"id",
		tem:["top_second","pay_index"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"支付"});
			$("#head").html(head);
			function layout(result){
				var main=_.template(data.tem[1])(result);
				$("#scroller").html(main);
			$("#scroller #lvbh").unbind("tap").bind("tap",function(){
				if($("#scroller .fa-checkbox").length){
					window.location.hash="payLvbh/"+data.id;
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
					layout({
						lastTime:"222",
						number:returnData.shoporder.b,
						name:returnData.shoporder.f,
						start:returnData.shoporder.l,
						end:returnData.shoporder.m,
						city:returnData.shoporder.j,
						price:returnData.shoporder.o
						});
					},function(e){alert(JSON.stringify(e))});
				}
			obj.api.at(getDetail);
			}
		});
	})($,app,config);