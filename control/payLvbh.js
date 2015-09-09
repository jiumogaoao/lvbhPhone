// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"payLvbh",
		par:"id",
		tem:["top_second","pay_lvbh","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"旅博账户支付"});
			$("#head").html(head);
			var button=_.template(data.tem[2])({
				id:"pay",
				text:"确认支付"
				});
			function layout(at,result){
				var main = _.template(data.tem[1])(result);
				$("#scroller").html(main+button);
				$("#pay").unbind("tap").bind("tap",function(){
					//if(result.balance>=result.price){
						app.pop.on("password",null,function(){
					$("#pop .left").unbind("tap").bind("tap",function(){
						if(!$("#pop .top").val()){
							app.pop.on("alert",{text:"交易密码不能为空"});
							return false;
							}
						obj.api.run("key_check",'at='+at+'&a='+result.number+'&b='+$("#pop .top").val(),function(){
							},function(e){alert(e);});
						});
					$("#pop .right").unbind("tap").bind("tap",function(){
						app.pop.off();
						});	
					});
					//	}else{
					//		alert("余额不足");
					//		}
					
					});
				}
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
			function getDetail(at){
				obj.api.run("pay_detail",'at='+at+'&a='+data.id,function(returnData){
					console.log(returnData);
					layout(at,{
						lastTime:returnData.b,
						number:returnData.go.x,
						name:returnData.go.n,
						start:returnData.go.r.split(" ")[0],
						end:moment(returnData.go.r.split(" ")[0],"YYYY-MM-DD").add(Number(returnData.lvDays),'days').format("YYYY-MM-DD"),
						city:returnData.go.o,
						price:returnData.go.i,
						balance:returnData.c
						});
					},function(e){alert(JSON.stringify(e));});
				}
			obj.api.at(getDetail);
			}
		});
	})($,app,config);