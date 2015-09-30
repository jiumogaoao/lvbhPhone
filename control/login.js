// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"login",
		par:"url",
		tem:["top_third","nav_two","icon_input_list","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"登录",right:"注册"});
			$("#head").html(head);
			function layout(at){
				var nav=_.template(data.tem[1])({left:{text:"普通登录",hl:true},right:{text:"手机动态密码登录",hl:false}});
				var list=_.template(data.tem[2])({list:[
				{"name":"user","placehold":"请输入手机号/邮箱","icon":"fa-man","value":"","other":""},
				{"name":"key","placehold":"请输入密码","icon":"fa-lock","value":"","other":"","type":"password"},
				{"name":"code","placehold":"请输入右侧验证码","icon":"fa-node","value":"","other":'<img id="code" src="'+config.sour+'user/v.jspx?at='+at+'"/>'}
			]});
			var button=_.template(data.tem[3])({"text":"登录","id":"loginButton"});
			$("#scroller").html(nav+list+button);
			$("#code").unbind("click").bind("click",function(){
				$(this).attr("src",config.sour+'user/v.jspx?at='+at+'&t='+new Date().getTime());
				});
			$(".top_third .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("click").bind("click",function(){
				window.location.hash="regist";
				});
			$(".nav_two #right").unbind("click").bind("click",function(){
				window.location.hash="phoneLogin";
				});
			$("#loginButton").unbind("click").bind("click",function(){
				if(!$("[name='user'] input").val()){
					obj.pop.on("alert",{text:"请输入登录账号"});
					return false;
					}
				if(!$("[name='key'] input").val()){
					obj.pop.on("alert",{text:"请输入登录密码"});
					return false;
					}
				if(!$("[name='code'] input").val()){
					obj.pop.on("alert",{text:"请输入验证码"});
					return false;
					}
				obj.api.at(function(at){
					obj.api.run("login",{
						at:at,
						ln:$("[name='user'] input").val(),
						p:$("[name='key'] input").val(),
						v:$("[name='code'] input").val(),
						r:null
						},function(returnData){	
						if(data.url){
							window.location.hash=data.url.replace(/\$/g,"/");
							}else{
							window.location.hash="index";	
								}
						},function(e){
						$("#code").attr("src",config.sour+'user/v.jspx?at='+at+'&t='+new Date().getTime());
						obj.pop.on("alert",{text:JSON.stringify(e)});
						});
					});
				});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
				}
			obj.api.at(function(at){
				layout(at);
				});
			}
		});
	})($,app,config);