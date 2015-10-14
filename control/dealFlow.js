// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealFlow",
		par:"type/id/state",
		tem:["top_second","deal_flow","bottom_button"],
		fn:function(data){
			var result={
				traveler:[""],
				man:1,
				child:0,
				child2:0,
				oldman:0,
				oldman2:0,
				single:true,
				linkMan:{
					name:"",
					tel:"",
					email:""
				},
				invoice:{
					on:false,
					title:"",
					place:"",
					name:"",
					phone:""
					},
				contract:{
					on:false,
					place:"",
					name:"",
					phone:""
					},
				agree:false
				};
				if(obj.cache("pruduct_input_"+data.id)){
					result=obj.cache("pruduct_input_"+data.id);
					}
			var head=_.template(data.tem[0])({
				left:"",
				center:"预定流程"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			function layout(at){
				var button=_.template(data.tem[2])({text:'立即预定',id:"payButton"});
			$("#foot").html(button);
			$("#foot").show();
			$("#scroller").html(data.tem[1]);
			function go2(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="productInput/"+data.type+"/"+data.id+"/"+result.state;
				}
			$("#payButton").unbind("tap").bind("tap",function(){
				obj.api.run("user_get","at="+at,function(user){
				window.location.hash="productInput/"+data.type+"/"+data.id+"/"+result.state;
					},function(e){
					obj.pop.on("alert",{text:("请先登录")});
					window.location.hash="login/productDetail$"+data.type+"$"+data.id+"$"+result.state;
					});
				});
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
			$('img').load(function(){
				//myScroll.refresh();
				});	
				}
			obj.api.at(layout);
			}
		});
	})($,app,config);