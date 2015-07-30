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
				{name:"id",left:"头像",type:"simple",value:"ML4321"},
				{name:"link",left:"圈子ID",type:"simple",value:"http://passport.lvbh.cn/w/ml4321"},
				{name:"qr",left:"名称",type:"simple",value:'<img src="http://"/>'}
				];
				var listA=_.template(data.tem[1])({list:list});
			$("#scroller").html(listA);
			$("[name='qr'] img").css({
				width:"3rem",
				height:"3rem"
				});
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				}

			obj.api.at(layout);	
			}
		});
	})($,app,config);