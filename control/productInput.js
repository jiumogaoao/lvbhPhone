// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"productInput",
		par:"id",
		tem:["top_second","product_input"],
		fn:function(data){

			var head=_.template(data.tem[0])({
				left:"",
				center:"填写订单信息"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			$("#scroller").html(data.tem[1]);
			$("#scroller .product_input .button").unbind("tap").bind("tap",function(){
				obj.bottom.on("pay_list",{},function(){
					
					},function(e){
					alert(JSON.stringify(e));
					});
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			function getList(at,now){
				/*obj.api.run(apiArry[data.type],'aid='+now.startId,function(returnData){
					debugger;
					},function(e){
					alert(JSON.stringify(e));
					})*/
				}
			function getNow(at){
				obj.api.run("city_cf_get","at="+at,function(returnData){
					getList(at,returnData);
					});
				}
			obj.api.at(getNow);	
				
			}
		});
	})($,app,config);