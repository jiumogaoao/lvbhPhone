// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"bindPhone",
		par:"",
		tem:["top_second","title_input_list","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"更换新号码"});
			$("#head").html(head);
			var main=_.template(data.tem[1])({list:[
			{"name":"number","left":"新手机号","placehold":"请输入新手机号","right":null},
			{"name":"code","left":"短信验证码","placehold":"请输入验证码","right":'<span style="color:#009eff">发送验证密码</span>'}
			]});
			var button=_.template(data.tem[2])({id:"bindPhone",text:"保存"});
			$("#scroller").html(main);
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
				
			

			}
		});
	})($,app,config);