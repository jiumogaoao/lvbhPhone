// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"intellectual",
		par:"at",
		tem:["top_second","title_desc"],
		fn:function(data){
			$("body").css("background-color","#fff");
			var head=_.template(data.tem[0])({left:"",center:"知识产权申明"});
			$("#head").html(head);
			var list=_.template(data.tem[1])({list:[{title:'知识产权申明',desc:'本网站（www.lvbh.cn）所有的产品、技术、程序、页面（包括但不限于页面设计及内容）、文字、图片、视频等内容均属于本网站的知识产权，仅供用户查阅交流，未经授权，任何人不得擅自使用，否则，将依法追究法律责任。<br/><br/>“旅博汇”、“lvbh.cn”及相关图形、标识等为本网站注册商标，任何人不得擅自使用，否则，将依法追究法律责任。'}]});
			$("#scroller").html(list);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
			obj.api.at(function(){},data.at);
			}
		});
	})($,app,config);