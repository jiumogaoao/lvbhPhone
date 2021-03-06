// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"protocol",
		par:"at",
		tem:["top_second","title_desc"],
		fn:function(data){
			$("body").css("background-color","#fff");
			var head=_.template(data.tem[0])({left:"",center:"用户协议"});
			$("#head").html(head);
			var list=_.template(data.tem[1])({list:[
			{title:'用户协议',desc:'旅博汇所提供的各项服务的所有权与运作权归深圳市旅博汇国际旅行社有限公司所有，一旦用户完成注册流程，即表示用户自愿接受本协议的全部条款。'},
			{title:'服务目的',desc:'旅博汇服务的具体内容由本网站根据实际情况提供，并对其所提供的服务拥有最终解释权。'},
			{title:'会员权利及义务',desc:'用户在申请使用本网站服务时，必须提供真实准确的个人资料，如个人资料有变动，须及时更新。<br/><br/>用户注册成功后，将得到一个会员账号及相应的密码，用户应妥善保管该会员账号和密码，并对以其会员账号进行的所有活动和时间负法律责任。因黑客行为或会员保管疏忽致使账号被他人非法所用，本网站不承担任何责任。如发现任何非法使用会员账号或安全漏洞的情况，请立即与本网站联系。<br/><br/>会员有权使用旅博汇向其提供的各项服务，并同意接受本网站通过电子邮件、手机短信、电话外呼等形式向会员提供相关服务信息（如预订确认、信息变更、旅游资讯服务等）。<br/><br/>会员在使用本网站服务过程中，必须遵循国家的法律法规；遵守所有与网络服务有关的网络协议、规定和程序。<br/><br/>用户承诺不利用本网站发布任何危害国家安全、泄露国家机密、颠覆国家政权、破坏国家统一等内容。<br/><br/>用户承诺不利用本网站发布任何危害社会，破坏民族团结，宣传不法宗教组织等内容。'}
			]});
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