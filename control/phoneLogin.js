// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"phoneLogin",
		par:"",
		tem:["top_third","nav_two","icon_input_list","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"登录",right:"注册"});
			$("#head").html(head);
			var nav=_.template(data.tem[1])({left:{text:"普通登录",hl:false},right:{text:"手机动态密码登录",hl:true}});
			

			function layout(at){
				var list=_.template(data.tem[2])({list:[
				{"name":"user","placehold":"请输入手机号","icon":"fa-man","value":"","other":""},
				{"name":"code","placehold":"验证码不区分大小写","icon":"fa-lock","value":"","other":"<img src='"+config.sour+"user/vm.jspx?at="+at+"&t="+new Date().getTime()+"'/>"},
				{"name":"key","placehold":"请输入动态密码","icon":"fa-lock","value":"","other":"<span style='font-size:.5rem;display:block;'>发送动态密码</span>"}
			]});
			var button=_.template(data.tem[3])({"text":"登录","id":"loginButton"});
			$("#scroller").html(nav+list+button);
			$("[name='code'] img").unbind("tap").bind("tap",function(){
				$(this).attr("src",config.sour+"user/vm.jspx?at="+at+"&t="+new Date().getTime());
			});
				$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				window.location.hash="regist";
				});
			$(".nav_two #left").unbind("tap").bind("tap",function(){
				window.location.hash="login";
				});
			$("#loginButton").unbind("tap").bind("tap",function(){
				if($("[name='user'] input").val() && $("[name='user'] input").val().length&&$("[name='key'] input").val() && $("[name='key'] input").val().length){
						obj.api.run("login_phone",{
							at:at,
							mobile:$("[name='user'] input").val(),
							mp:$("[name='key'] input").val()
							},function(){
							window.location.hash="index";
							},function(e){
							obj.pop.on("alert",{text:JSON.stringify(e)});
							$("[name='code'] img").attr("src",config.sour+"user/vm.jspx?at="+at+"&t="+new Date().getTime());
							});
					
					}else{obj.pop.on("alert",{text:"请完整填写登录信息"});}
				});
				$('img').load(function(){
				//myScroll.refresh();
				});
			function delay(){
				$("[name='key'] .other span").html("发送动态密码");
				$("[name='key'] .other").unbind("tap").bind("tap",function(){
				if(!$("[name='code'] input").val()){
					obj.pop.on("alert",{text:"获取动态密码必须先输入验证码"});
					return false;
				}	
				if($("[name='user'] input").val() && $("[name='user'] input").val().length){
						obj.api.run("login_phone_message",{
							at:at,
							mobile:$("[name='user'] input").val(),
							v:$("[name='code'] input").val()
							},function(data){
							$("[name='key'] .other").unbind("click");
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
						$("[name='code'] img").attr("src",config.sour+"user/vm.jspx?at="+at+"&t="+new Date().getTime());
						});	
					}else{obj.pop.on("alert",{text:"请填写手机号"});}
				});
				}	
			delay();
			//myScroll.refresh();
				}
			obj.api.at(layout);
			}
		});
	})($,app,config);