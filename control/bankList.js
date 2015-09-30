// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"bankList",
		par:"name/card/money/dsc",
		tem:["top_second","bank_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"选择银行"});
			$("#head").html(head);
			var listA=[
				{"name":"中国农业银行","id":"0"},
				{"name":"中国建设银行","id":"1"},
				{"name":"中国光大银行","id":"2"},
				{"name":"中国民生银行","id":"3"},
				{"name":"交通银行","id":"4"},
				{"name":"广东发展银行","id":"5"},
				{"name":"中信银行","id":"6"},
				{"name":"深圳发展银行","id":"7"},
				{"name":"上海浦东发展银行","id":"8"},
				{"name":"中国工商银行","id":"9"},
				{"name":"北京银行","id":"10"},
				{"name":"中国邮政储蓄银行","id":"11"},
				{"name":"中国银行","id":"12"},
				{"name":"招商银行","id":"13"},
				{"name":"平安银行","id":"14"},
				{"name":"兴业银行","id":"15"},
				{"name":"东亚银行","id":"16"}
			];
			var list=_.template(data.tem[1])({list:listA});
			$("#scroller").html(list);
			$(".top_third .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			$(".bank_list .button").unbind("click").bind("click",function(){
	window.location.hash="#cashInput/"+(data.name||"")+"/"+(data.card||"")+"/"+($(this).html()||"")+"/"+(data.money||"")+"/"+(data.dsc||"");
	});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
			}
		});
	})($,app,config);