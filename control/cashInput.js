// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"cashInput",
		par:"name/card/bank/money/dsc",
		tem:["top_second","balance","title_input_list","single_button"],
		fn:function(data){
			var resultA={
					name:"",
					card:"",
					bank:"",
					money:"",
					dsc:""
				};
				if(obj.cache("cash_input")){
				resultA=obj.cache("cash_input");
				}
			var head=_.template(data.tem[0])({left:"",center:"提现金额"});
			$("#head").html(head);
			function layout(result,at){
				var nav=_.template(data.tem[1])({number:result.a2});
				var list=_.template(data.tem[2])({list:[
				{"name":"name","placehold":"请输入开户名","value":resultA.name||"","left":"开户名"},
				{"name":"number","placehold":"请输入卡号","value":resultA.card||"","left":"卡号"},
				{"name":"bank","placehold":"请输入右侧验证码","value":"","right":'<span class="result">'+(resultA.bank||"请选择银行")+'</span>'+' <span class="fa fa-right"></span>',"left":"银行","link":true},
				{"name":"money","placehold":"本次最多可提xxxx元，限100的倍数。","value":resultA.money||"","left":"金额"},
				{"name":"dsc","placehold":"填写您对本次提现的备注说明","value":resultA.dsc||"","left":"备注"}
			]});
			var button=_.template(data.tem[3])({"text":"提交申请","id":"cashButton"});
			$("#scroller").html(nav+list+button);
			$("[name='name'] input").unbind("change").bind("change",function(){
				resultA.name=$(this).val();
				});
			$("[name='number'] input").unbind("change").bind("change",function(){
				resultA.card=$(this).val();
				});
			$("[name='money'] input").unbind("change").bind("change",function(){
				resultA.money=$(this).val();
				});
			$("[name='dsc'] input").unbind("change").bind("change",function(){
				resultA.dsc=$(this).val();
				});
			$("#scroller .link").unbind("tap").bind("tap",function(){
				obj.cache("cash_input",resultA);
				window.location.hash="bankList";
				
				});	
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#cashButton").unbind("tap").bind("tap",function(){
				app.pop.on("password",null,function(){
					$("#pop .left").unbind("tap").bind("tap",function(){
						if(!$("[name='name'] input").val()){
							obj.pop.on("alert",{text:"开户名不能为空"});
							return false;
							}
						if(!$("[name='number'] input").val()){
							obj.pop.on("alert",{text:"卡号不能为空"});
							return false;
							}
						if($("[name='bank'] .result").html() === '请选择银行'){
							obj.pop.on("alert",{text:"请选择银行"});
							return false;
							}
						if(!$("[name='money'] input").val()){
							obj.pop.on("alert",{text:"金额不能为空"});
							return false;
							}
						if(!$("#pop .top").val()){
							obj.pop.on("alert",{text:"交易密码不能为空"});
							return false;
							}
						var send='at='+at+'&jparam={"a"="'+$("[name='money'] input").val()+'","b"="'+$("[name='bank'] .result").html()+'","c"="'+$("[name='name'] input").val()+'","d"="'+$("[name='number'] input").val()+'","e"="'+$("#pop .top").val()+'","f"="'+$("[name='dsc'] input").val()+'"}';
						obj.api.run("cash_order",send,function(){
							obj.pop.on("alert",{text:"提现申请已提交"});
							window.location.hash="accountIndex";
							},function(e){
							obj.pop.on("alert",{text:(JSON.stringify(e))});
							});
						});
					$("#pop .right").unbind("tap").bind("tap",function(){
						obj.pop.off();
						});	
					});
				});
			//myScroll.refresh();
			$('img').load(function(){
				//myScroll.refresh();
				});
				}
			function getAccount(at){
				var send='at='+at;
				obj.api.run("account_get",send,function(result){
					layout(result,at);
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			obj.api.at(getAccount);
			
			
			
			}
		});
	})($,app,config);