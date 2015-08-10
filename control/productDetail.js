// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"productDetail",
		par:"id",
		tem:["top_third","nav_third","product_top"],
		fn:function(data){

			var head=_.template(data.tem[0])({
				left:"",
				center:"产品详情",
				right:'<span class="fa fa-phone2"></span>'
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			
			$("#scroller").html(data.tem[2]);

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