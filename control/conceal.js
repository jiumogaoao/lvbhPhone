// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"conceal",
		par:"at",
		tem:["top_second","title_desc"],
		fn:function(data){
			$("body").css("background-color","#fff");
			var head=_.template(data.tem[0])({left:"",center:"隐私保护"});
			$("#head").html(head);
			var list=_.template(data.tem[1])({list:[{desc:'本网站非常重视对会员隐私的保护,并承诺对会员个人信息予以保密.为了给会员提供更准确的服务,本网站可能会以如下方式,使用会员提交的个人信息,仅限于本网站经营业务所需范围内.<br/><br/>1.本网站会在会员自愿提供信息的情况下收集会员的个人信息,如姓名.联系电话.邮件地址.身份信息.信用卡数据等.<br/>2.本网站可能会保留一些用户与旅游相关的使用习惯信息,及收集一些特定的关于会员所使用机器的技术信息,如IP地址.操作系统版本.浏览器版本.推荐网站等.以便更好的服于用户.<br/>3.本网站利用收集的信息来提供和改进服务,开发新的服务产品会为会员提升服务质量.经会员的许可,本网站还可使用信息为会员提供定制服务,如提供旅游相关信息.<br/><br/>本网站在下列情况下,会遵照会员的意愿或法律规定,可能透露会员信息:<br/><br/>1.会员使用信用卡支付时,本网站须向银行提供必要 的会员信用卡数据及个人数据作为核对交易之用.<br/>2.会员通过本网站预定产品,本网站会将会员相关数据传送至航空公司.酒店.旅行社或其他第三方以便安排会员出游之行程.<br/>3.根据相关法律法规要求或相关政府主管部门要求<br/>4.为维护本网站的合法权益.<br/>5.护院本人同意让第三方共享资料.<br/>6.会员违反了本网站服务条款或其他任何服务规则<br/><br/>会员可以随时登陆本网站对会员个人信息作出查看或修改,用户自愿注册个人信息并有权在任何时候拒绝提供个人信息.<br/><br/>本网站关联或合作公司允许本网站会员登录关联公司使用其他服务,本网站会员在关联公司的任何行为均需遵守改平台服务协议的规则及相关使用说明.为了实现上述功能,用户同意其个人信息和数据同步至关联公司系统并允许其使用.<br/><br/>如用户以本网站关联或合作公司账户信息登录本网站,为了实现向用户提供同等功能服务,用户同意本万展将其在关联公司登记的个人信息同步至本网站系统并允许使用.'
}]});
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