// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"login",
		par:"",
		tem:["top_third","nav_two","icon_input_list","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"登录",right:"注册"});
			$("#head").html(head);
			var nav=_.template(data.tem[1])({left:{text:"普通登录",hl:true},right:{text:"手动动态密码登录",hl:false}});
			
			var list=_.template(data.tem[2])({list:[
				{"name":"user","placehold":"请输入手机号/邮箱","icon":"fa-user","value":"","other":""},
				{"name":"key","placehold":"请输入密码","icon":"fa-lock","value":"","other":""},
				{"name":"code","placehold":"请输入右侧验证码","icon":"fa-pencil-square-o","value":"","other":""}
			]});
			var button=_.template(data.tem[3])({"text":"登录","id":"loginButton"});
			$("#scroller").html(nav+list+button);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				window.location.hash="regist";
				});
			$(".nav_two #right").unbind("tap").bind("tap",function(){
				window.location.hash="phoneLogin";
				});
			$("#loginButton").unbind("tap").bind("tap",function(){
				window.location.hash="index";
				});
			myScroll.refresh();
			}
		});
	})($,app.control,config);