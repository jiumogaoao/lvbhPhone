// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"cashMessage",
		par:"",
		tem:["top_second","balance","cash_message","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"提现"});
			$("#head").html(head);
			function layout(result){
				var nav=_.template(data.tem[1])({number:result.a2});

			var button=_.template(data.tem[3])({"text":"确认提现","id":"cashButton"});

			$("#scroller").html(nav+data.tem[2]+button);
				
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#cashButton").unbind("tap").bind("tap",function(){
				window.location.hash="cashInput";
				});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
				}
			function getAccount(at){
				var send='at='+at;
				obj.api.run("account_get",send,layout,function(e){
					alert(JSON.stringify(e));
					});
				}
			obj.api.at(getAccount);
			
			
			
			}
		});
	})($,app,config);