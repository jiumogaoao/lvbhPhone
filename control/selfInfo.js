// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"selfInfo",
		par:"",
		tem:["top_second","title_input_list","single_button"],
		fn:function(data){
			var sexArry=["","男","女"];
			var safeArry=["弱","中","强"];
			var head=_.template(data.tem[0])({left:"",center:"个人信息"});
			$("#head").html(head);
			function layout(user){
				var list=_.template(data.tem[1])({list:[
			{link:true,name:"nc",left:"昵称",right:(user.e||"")+' <span class="fa fa-right"></span>'},
			{link:true,name:"zhxm",left:"真实姓名",right:(user.f||"")+' <span class="fa fa-right"></span>'},
			{link:true,name:"xb",left:"性别",right:(sexArry[user.g]||"")+' <span class="fa fa-right"></span>'},
			{link:true,name:"csrq",left:"出生日期",right:(user.h||"")+' <span class="fa fa-right"></span>'},
			{link:true,name:"qq",left:"QQ号",right:(user.i||"")+' <span class="fa fa-right"></span>'},
			{link:true,name:"zhzcsj",left:"账号注册时间",right:(user.k||"")},
			{link:true,name:"qygs",left:"区域归属",right:(user.l||"")+" "+(user.m||"")},
			{link:true,name:"zhsj",left:"账号升级",right:''},
			{link:true,name:"zhaq",left:"账号安全",right:(safeArry[user.r]||"")},
			]});
				var button=_.template(data.tem[2])({id:"esc",text:"安全退出登录"});
			$("#scroller").html(list+button);
			$(".single_button").css({
				"background-color":"transparent",
				"border":"1px solid red",
				"color":"red"
				});
			$(".single_button").unbind("tap").bind("tap",function(){
				Cookies("lvbh_at","",{expires:-1});
				window.location.hash="login";
				});
			$(".point[name='nc']").unbind("tap").bind("tap",function(){
				window.location.hash="userEdit/0";
			})
			$(".point[name='zhxm']").unbind("tap").bind("tap",function(){
				window.location.hash="userEdit/1";
			})
			$(".point[name='xb']").unbind("tap").bind("tap",function(){
				window.location.hash="userEdit/2";
			})
			$(".point[name='csrq']").unbind("tap").bind("tap",function(){
				window.location.hash="userEdit/3";
			})
			$(".point[name='qq']").unbind("tap").bind("tap",function(){
				window.location.hash="userEdit/4";
			})
			$(".point[name='qygs']").unbind("tap").bind("tap",function(){
				window.location.hash="userEdit/5";
			})
			$(".title_input_list").css("background-color","#eeeeee");
			$(".title_input_list .point").css("background-color","#fff");
			$("[name='zhzcsj'],[name='zhsj']").css("margin-top",".3rem");
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			//myScroll.refresh();
			$('img').load(function(){
				//myScroll.refresh();
				});
				}
			
			function getInfo(at){
				obj.api.run("user_get","at="+at,function(user){
					layout(user.userinfo);
					},function(e){
					obj.pop.on("alert",{text:JSON.stringify(e)});
					});
				}
			obj.api.at(getInfo);
			}
		});
	})($,app,config);