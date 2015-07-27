// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"cashInput",
		par:"bank",
		tem:["top_second","balance","title_input_list","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"提现金额"});
			$("#head").html(head);
			function layout(result,at){
				var nav=_.template(data.tem[1])({number:result.a2});
				var list=_.template(data.tem[2])({list:[
				{"name":"name","placehold":"请输入开户名","value":"","left":"开户名"},
				{"name":"number","placehold":"请输入卡号","value":"","left":"卡号"},
				{"name":"bank","placehold":"请输入右侧验证码","value":"","right":(data.bank||"请选择银行")+' <span class="fa fa-angle-right"></span>',"left":"银行","link":true},
				{"name":"money","placehold":"本次最多可提xxxx元，限100的倍数。","value":"","left":"金额"},
				{"name":"dsc","placehold":"填写您对本次提现的备注说明","value":"","left":"备注"}
			]});
			var button=_.template(data.tem[3])({"text":"提交申请","id":"cashButton"});
			$("#scroller").html(nav+list+button);
			$("#scroller .link").unbind("tap").bind("tap",function(){
				window.location.hash="bankList";
				});	
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#cashButton").unbind("tap").bind("tap",function(){
				app.pop.on("password",{"text":"1"},function(){
					
					});
				})
			myScroll.refresh();
				}
			function getAccount(at){
				var send='at='+at;
				obj.api.run("account_get",send,function(result){
					layout(result,at);
					},function(e){
					alert(JSON.stringify(e))
					});
				};
			obj.api.at(getAccount);
			
			
			
			}
		});
	})($,app,config);