// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"company",
		par:"at",
		tem:["top_second","title_desc"],
		fn:function(data){
			$("body").css("background-color","#fff");
			var head=_.template(data.tem[0])({left:"",center:"公司介绍"});
			$("#head").html(head);
			var list=_.template(data.tem[1])({list:[{title:'“旅博汇”介绍',desc:'“旅博汇”系深圳线谱网络科技有限公司开发的全新旅游电子商务平台，也是中国首家实行STC运营模式的旅游网站。全新的STC运营模式将让各类旅游产品供应商通过旅博汇终端服务平台与客户链形成一站式无缝对接。<br/><br/>深圳市线谱网络科技有限公司是一家互联网旅游公司，成立于2014年5月，总部设在深圳市福田区福田保税区，下设旅行社、传媒公司，航服公司、培训学院、各省、市分子公司等机构。<br/><br/>深圳市旅博汇国际旅行社有限公司<br/><br/>电话：0755-8860 0029<br/><br/>传真：0755-8860 5512<br/><br/>邮箱：lvbh@lvbh.cn<br/><br/>邮编：518048<br/><br/>地址：深圳市福田区福田保税区市花路21号<br/><br/>国际文化产业园2楼'}]});
			$("#scroller").html(list);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			//myScroll.refresh();
			$('img').load(function(){
				//myScroll.refresh();
				});
			obj.api.at(function(){},data.at);
			}
		});
	})($,app,config);