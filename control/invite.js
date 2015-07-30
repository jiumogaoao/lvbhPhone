// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"invite",
		par:"",
		tem:["top_third","title_input_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"分享与邀请",right:"分享"});
			$("#head").html(head);
			function layout(result){
				var list=[
				{name:"id",left:"圈子ID：",type:"simple",value:"ML4321"},
				{name:"link",left:"邀请链接：",type:"simple",value:"http://passport.lvbh.cn/w/ml4321"},
				{name:"qr",left:"圈子二维码：",type:"simple",value:'<img src="http://"/>'}
				];
				var listA=_.template(data.tem[1])({list:list});
			$("#scroller").html(listA);
			$("[name='qr'] img").css({
				width:"3rem",
				height:"3.8rem",
				display:"block",
				"padding-top":".4rem",
				"padding-bottom":".4rem"
				});
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				obj.bottom.on("share",{list:[
				{image:"img/weixin.png",name:"微信"},
				{image:"img/friend.png",name:"朋友圈"},
				{image:"img/weibo.png",name:"新浪微博"},
				{image:"img/qq.png",name:"腾讯QQ"},
				{image:"img/qzone.png",name:"QQ空间"}
				]},function(){
					
					},function(e){
					alert(JSON.stringify(e));
					});
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				}

			obj.api.at(layout);	
			}
		});
	})($,app,config);