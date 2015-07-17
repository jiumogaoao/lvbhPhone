// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"regist",
		par:"",
		tem:["top_second","icon_place_list","icon_input_list","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"注册"});
			$("#head").html(head);
			var list=_.template(data.tem[2])({list:[
				{"name":"user","placehold":"请输入11位手机号","icon":"fa-mobile","value":"","other":""},
				{"name":"code","placehold":"请输入短信验证码","icon":"fa-pencil-square-o","value":"","other":"<span style='font-size:.5rem;display:block;'>发送短信验证码</span>"},
				{"name":"key","placehold":"请输入6-16位字母数字组合密码","icon":"fa-lock","value":"","other":""},
				{"name":"key2","placehold":"请再次输入密码","icon":"fa-lock","value":"","other":""}
				]});
			var button=_.template(data.tem[3])({"text":"注册","id":"registButton"});
			$("#scroller").html(data.tem[1]+list+button);
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
			}
		});
	})($,app.control,config);