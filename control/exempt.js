// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"exempt",
		par:"at",
		tem:["top_second","title_desc"],
		fn:function(data){
			$("body").css("background-color","#fff");
			var head=_.template(data.tem[0])({left:"",center:"免责申明"});
			$("#head").html(head);
			var list=_.template(data.tem[1])({list:[{title:'免责申明',desc:'用户在本网站达人圈、游记攻略等频道上传发布的资料内容（包括但不限于图片、视频、flash、点评等），应保证为原创或已得到充分授权，并距有准确性、真实性、正当性、合法性，且不含任何侵犯第三方权益的内容，因抄袭，转载、侵犯等行为所产生的纠纷由用户自行解决，本网站不承担任何法律责任。<br/><br/>用户因提供资料的不正确、不完整、不及时而导致用户自身损失，本网站不承担任何法律责任。<br/><br/>本网站禁止制作、复制、发布、传播等具有反动、色情、暴力、淫秽等内容的信息，一经发现，立即删除。若用户因违反法律法规，所导致的一切损害等，均由用户自行承担全部责任，本网站不承担任何法律责任。<br/><br/>任何单位或个人认为本网站内容可能涉嫌侵犯其著作权，应及时向本网站提出书面权利通知，并提供身份证明、权属证明及详细侵权情况证明。本网站收到上述法律文件后，将会依法尽快处理。'}]});
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