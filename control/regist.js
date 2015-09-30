// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"regist",
		par:"",
		tem:["top_second","icon_place_list","icon_input_list","single_button"],
		fn:function(data){
			var result={
				phone:"",
				code:"",
				key:"",
				key2:"",
				place:{},
				pro:""
				};
			if(obj.cache("regist")){
				result=obj.cache("regist");
				obj.cache("regist",null,true);
				}
			var head=_.template(data.tem[0])({left:"",center:"注册"});
			$("#head").html(head);
			var list=_.template(data.tem[2])({list:[
				{"name":"user","placehold":"请输入11位手机号","icon":"fa-pad","value":result.phone||"","other":""},
				{"name":"code","placehold":"请输入短信验证码","icon":"fa-node","value":result.code||"","other":"<span style='font-size:.5rem;display:block;'>发送短信验证码</span>"},
				{"name":"key","placehold":"请输入6-16位字母数字组合密码","icon":"fa-lock","value":result.key||"","other":"","type":"password"},
				{"name":"key2","placehold":"请再次输入密码","icon":"fa-lock","value":result.key2||"","other":"","type":"password"}
				]});
			var button=_.template(data.tem[3])({"text":"注册","id":"registButton"});
			var place=_.template(data.tem[1])({place:result.place.name||""});
			function layout(at){
				$("#scroller").html(place+list+button);
				$("[name='user'] input").unbind("change").bind("change",function(){
					result.phone=$(this).val();
					});
				$("[name='code'] input").unbind("change").bind("change",function(){
					result.code=$(this).val();
					});
				$("[name='key'] input").unbind("change").bind("change",function(){
					result.key=$(this).val();
					});
				$("[name='key2'] input").unbind("change").bind("change",function(){
					result.key2=$(this).val();
					});
			function delay(){
				$("[name='code'] .other span").html("发送动态密码");
				$("[name='code'] .other").unbind("click").bind("click",function(){
				if($("[name='user'] input").val() && $("[name='user'] input").val().length){
						obj.api.run("regist_phone_message",{
							at:at,
							mobile:$("[name='user'] input").val()
							},function(data){
							$("[name='code'] .other").unbind("click");
							var total=60;
							var timeOut=setInterval(function(){
								if(total !== 0){
									$("[name='code'] .other span").html(total+"秒后可再次发送");
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
			
			$(".top_third .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			$("#registButton").unbind("click").bind("click",function(){
				if(!result.phone.length){
					obj.pop.on("alert",{text:JSON.stringify("请输入手机号")});
					return false;
					}
				if(!result.code.length){
					obj.pop.on("alert",{text:JSON.stringify("请输入验证码")});
					return false;
					}
				if(!result.key.length||!result.key2.length){
					obj.pop.on("alert",{text:JSON.stringify("请输入密码")});
					return false;
					}
				if(result.key.length!==result.key2.length){
					obj.pop.on("alert",{text:JSON.stringify("重复输入密码有误")});
					return false;
					}
				if(!result.place.name){
					obj.pop.on("alert",{text:JSON.stringify("请选择归属地")});
					return false;
					}
				obj.api.run("regist","at="+at+"&mobile="+result.phone+"&t=11&p="+result.key+"&v="+result.code+"&s1="+result.pro+"&s2="+result.place.id+"&pid=&r=",function(sc){
					obj.pop.on("alert",{text:"注册成功"});
					window.location.hash="index";
					},function(e){obj.pop.on("alert",{text:JSON.stringify(e)});});
				});
			$(".icon_input_list.place").unbind("click").bind("click",function(){
				obj.cache("regist",result);
				window.location.hash="searchPlace";
				});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
				}
			obj.api.at(layout);
			}
		});
	})($,app,config);