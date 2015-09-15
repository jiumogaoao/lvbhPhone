// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"groupSet",
		par:"at",
		tem:["top_second","title_input_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"圈子设置"});
			$("#head").html(head);
			function layout(result){
				var list=[
				{name:"icon",left:"头像",right:'<img id="groupIcon" src="'+config.sour+'sns/tpu.jspx?a=1&b='+result.a+'&c='+result.f+'"/><span class="fa fa-right"></span><input type="file" id="upload"/>',link:true},
				{name:"id",left:"圈子ID",right:result.a,link:true},
				{name:"name",left:"名称",right:result.c+' <apan class="fa fa-right"></span>',link:true},
				{name:"word",left:"宣言",right:result.d+' <apan class="fa fa-right"></span>',link:true},
				{name:"dsc",left:"介绍",right:'<apan class="fa fa-right"></span>',link:true},
				{name:"group",left:"加入的圈子",right:'<apan class="fa fa-right"></span>',link:true},
				{name:"invite",left:"分享与邀请",right:'<apan class="fa fa-right"></span>',link:true},
				];
				var listA=_.template(data.tem[1])({list:list});
			$("#scroller").html(listA);
			$("[name='name']").unbind("tap").bind("tap",function(){
				window.location.hash="groupEdit/0/"+result.c;
				});
			$("[name='word']").unbind("tap").bind("tap",function(){
				window.location.hash="groupEdit/1/"+result.d;
				});
			$("[name='dsc']").unbind("tap").bind("tap",function(){
				window.location.hash="groupEdit/2/"+result.e;
				});
			$("[name='group']").unbind("tap").bind("tap",function(){
				window.location.hash="groupAdd";
				});
			$("[name='invite']").unbind("tap").bind("tap",function(){
				window.location.hash="invite";
				});
			$(".title_input_list").css({
				margin:0});
			$("#upload").css({"opacity":0,"width":"1.5rem","height":"1.5rem","position":"absolute","top":".2rem","left":"-.3rem"});
			$("[name='icon'] img").css({
				"width":"1.5rem",
				"height":"1.5rem",
				"display":"block",
				"float":"left",
				"position":"relative",
				"top":".2rem",
				"right":".3rem"
				});
			$("[name='icon']").css({
					"height":"2rem",
					"line-height":"2rem",
					"background-color":"#ebf7ff"
					});
		function preview2(file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var $img = $("[name='icon'] img").attr("src", e.target.result);
            };
            reader.readAsDataURL(file);
        }
			 $("[name='icon'] input").change(function(e) {
                var file = e.target.files[0];
                preview2(file);
            });
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
				}
			function getGroup(at){
				obj.api.run("group_getMy","at="+at,layout,function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			obj.api.at(getGroup,data.at);	
			}
		});
	})($,app,config);