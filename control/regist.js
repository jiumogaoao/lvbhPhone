// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"regist",
		par:"",
		tem:["top_second","icon_place_list","icon_input_list","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"注册"});
			$("#head").html(head);
			var list=_.template(data.tem[2])({list:[
				{"name":"user","placehold":"请输入11位手机号","icon":"fa-pad","value":"","other":""},
				{"name":"code","placehold":"请输入短信验证码","icon":"fa-node","value":"","other":"<span style='font-size:.5rem;display:block;'>发送短信验证码</span>"},
				{"name":"key","placehold":"请输入6-16位字母数字组合密码","icon":"fa-lock","value":"","other":""},
				{"name":"key2","placehold":"请再次输入密码","icon":"fa-lock","value":"","other":""}
				]});
			var button=_.template(data.tem[3])({"text":"注册","id":"registButton"});
			
			function layout(at){
				$("#scroller").html(data.tem[1]+list+button);
			function delay(){
				$("[name='code'] .other span").html("发送动态密码");
				$("[name='code'] .other").unbind("tap").bind("tap",function(){
				if($("[name='user'] input").val() && $("[name='user'] input").val().length){
						obj.api.run("login_phone_message",{
							at:at,
							mobile:$("[name='user'] input").val()
							},function(data){
							$("[name='key'] .other").unbind("tap");
							var total=60;
							var timeOut=setInterval(function(){
								if(total !== 0){
									$("[name='key'] .other span").html(total+"秒后可再次发送");
									total--;
									}else{
										clearInterval(timeOut);
										delay();
										}
								},1000);
						},function(e){
						obj.pop.on("alert",{text:JSON.stringify(e)});
						});	
					}else{obj.pop.on("alert",{text:"请填写手机号"});}
				});
				}	
			delay();
			
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#registButton").unbind("tap").bind("tap",function(){
				window.location.hash="index";
				});
			$(".icon_input_list.place").unbind("tap").bind("tap",function(){
				window.location.hash="searchPlace";
				});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
				};
			obj.api.at(layout);
			}
		});
	})($,app,config);