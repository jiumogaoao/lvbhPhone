// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"invoiceAdd",
		par:"type/id/state",
		tem:["top_third","input_single"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"添加常用发票抬头",right:"保存"});
			$("#head").html(head);
			var main=_.template(data.tem[1])({type:0,value:"",placeholder:"请填写发票抬头"});
			$("#scroller").html(main);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				obj.api.at(function(at){
					obj.api.run("invoice_get",'at='+at+'&tp=0&jparam='+JSON.stringify({b:$(".input_single .main").val()}),function(){
						window.location.hash="usefulInvoice/"+data.type+"/"+data.id+"/"+data.state;
						},function(e){JSON.stringify(e);});
					});
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);	
			
			
			}
		});
	})($,app,config);