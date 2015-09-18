// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"mineIndex",
		par:"",
		tem:["foot_nav","mine_top","mine_bottom"],
		fn:function(data){
			$("#head").html("");
			function layout(at,user){
				var top=_.template(data.tem[1])({
					login:user?true:false,
					user:{"number":user?user.t:false,"image":user?config.sour+"center/tp.jspx?at="+at+"&a=2&b="+user.n:false,"name":user?user.e:false,"id":user?user.u:false,"hot":user?user.c:false,"money":user?user.d:false,"tap":user?user.tap:false}
					});
				$("#scroller").html(top+data.tem[2]);
				$(".mine_top .message").unbind("tap").bind("tap",function(){
					window.location.hash="messageIndex/0/0";
					});
				$(".mine_top .deg").unbind("tap").bind("tap",function(){
					window.location.hash="selfInfo";
					});
			$(".mine_top .button.login").unbind("tap").bind("tap",function(){
				window.location.hash="login/mineIndex";
				});
			$(".mine_top .button.regist").unbind("tap").bind("tap",function(){
				window.location.href="https://passport.lvbh.cn/mobile/reg.jspx";
				});
			$(".mine_top .bottom .point").unbind("tap").bind("tap",function(){
				var that=this;
				if(user){
					if($(that).attr("src")){
					window.location.hash=$(that).attr("src");
					}
					}else{
					obj.pop.on("alert",{text:("请先登录")});
					window.location.hash="login/mineIndex";	
						}	
				});
			$(".mine_bottom .point").unbind("tap").bind("tap",function(){
				var that=this;
				if(user){
					if($(that).attr("href")){
					window.location.hash=$(that).attr("href");
					}
					}else{
					obj.pop.on("alert",{text:("请先登录")});
					window.location.hash="login/mineIndex";	
						}
				});
				}
			$("#foot").html(data.tem[0]);
			$("#foot .fa-mine").addClass("hl");
			$("#foot .point").eq(3).addClass("hl");
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
			function getuser(at){
				obj.api.run("user_get","at="+at,function(user){
					user.userinfo.tap=user.loglist.d;
					layout(at,user.userinfo);
					},function(e){
					layout(at);
					});
				}
			obj.api.at(getuser);
			}
		});
	})($,app,config);