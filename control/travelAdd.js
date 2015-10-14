// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"travelAdd",
		par:"type",
		tem:["top_third","title_input_list","travel_add","bottom_button"],
		fn:function(data){
			var titleArry=["写游记","编辑游记"];
			var head=_.template(data.tem[0])({left:"",center:titleArry[data.type],right:"保存"});
			$("#head").html(head);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			var foot=_.template(data.tem[3])({id:"sendButton",text:"继续添加"});
			$("#foot").html(foot);
			$("#foot").show();
			var top=_.template(data.tem[1])({list:[
			{link:true,name:"",left:"目的地",right:'<span class="fa fa-right"></span>'},
			{link:true,name:"title",left:"标题",right:'<input/>'},
			{link:true,name:"",left:"说说这次旅行",right:''},
			]});
			var text=["很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多字",""];
			var img=["http://",""];
			function layout(at){
			var list=_.template(data.tem[2])({
				text:text,
				img:img,
				at:at
				});	
			$("#scroller").html(top+list);
			$(".travel_add .delectButton").unbind("tap").bind("tap",function(){
				text.splice(Number($(this).parents(".point").attr("num")),1);
				img.splice(Number($(this).parents(".point").attr("num")),1);
				layout(at);
				});
			$(".travel_add text").unbind("change").bind("change",function(){
				text[Number($(this).parents(".point").attr("num"))]=$(this).val();
				});
			$(".travel_add form").each(function(){
				$(this).ajaxForm();
				});
			$(".travel_add input").unbind("change").bind("change",function(e){
				$(this).parents("form").ajaxSubmit(function(ureturn){
					console.log(ureturn.data.imgname);
					});
				});
			$("[name='title'] input").css({height:"1.8rem"});
			//myScroll.refresh();
			$('img').load(function(){
				//myScroll.refresh();
				});
				}
			function bind(at){
				$("#sendButton").unbind("tap").bind("tap",function(){
				text.push("");
				img.push("");
				layout(at);
				});
				layout(at);
				}
			obj.api.at(bind);
			}
		});
	})($,app,config);