// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealPassword",
		par:"",
		tem:["top_second","error_input_list","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"设置交易密码"});
			$("#head").html(head);
			
			function layout(at){
			var list=[
			{title:"原密码",err:"原始密码错误，请重新输入",placeholder:"请输入原始密码",value:"",name:"old",type:"password"},
			{title:"新密码",err:"6-18位由数字和字母组成",placeholder:"请输入6-18位由数字和字母组成的交易密码",value:"",name:"new",type:"password"},
			{title:"确认密码",err:"两次输入不一样",placeholder:"请再次输入新的交易密码",value:"",name:"new2",type:"password"}
			];
			var listA=_.template(data.tem[1])({list:list});
			var button=_.template(data.tem[2])({"text":"保存","id":"passButton"});
			$("#scroller").html(listA+button);				
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#passButton").unbind("tap").bind("tap",function(){
				if(!$("[name='old']").val()){
					$("[name='old']").parent().addClass("err");
					return false;
					}
				if(!$("[name='new']").val()){
					$("[name='new']").parent().addClass("err");
					return false;
					}
				if(!$("[name='new2']").val()||$("[name='new']").val() !== $("[name='new2']").val()){
					$("[name='new2']").parent().addClass("err");
					return false;
					}
				obj.api.run("deal_password",{at:at,o:$("[name='old']").val(),p:$("[name='new']").val()},function(){
					obj.pop.on("alert",{text:("修改成功")});
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
				});
			myScroll.refresh();
			$('img').load(function(){
				myScroll.refresh();
				});
				}
			obj.api.at(layout);
			
			
			
			}
		});
	})($,app,config);