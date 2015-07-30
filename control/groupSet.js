// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"groupSet",
		par:"",
		tem:["top_second","title_input_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"圈子设置"});
			$("#head").html(head);
			function layout(result){
				var list=[
				{name:"icon",left:"头像",right:'<img id="groupIcon" src="'+config.sour+'sns/tpu.jspx?a=1&b='+result.a+'&c='+result.f+'"/><apan class="fa fa-angle-right"></span>',link:true},
				{name:"id",left:"圈子ID",right:result.a,link:true},
				{name:"name",left:"名称",right:result.c+' <apan class="fa fa-angle-right"></span>',link:true},
				{name:"word",left:"宣言",right:result.d+' <apan class="fa fa-angle-right"></span>',link:true},
				{name:"dsc",left:"介绍",right:'<apan class="fa fa-angle-right"></span>',link:true},
				{name:"group",left:"加入的圈子",right:'<apan class="fa fa-angle-right"></span>',link:true},
				{name:"invite",left:"分享与邀请",right:'<apan class="fa fa-angle-right"></span>',link:true},
				];
				var listA=_.template(data.tem[1])({list:list});
			$("#scroller").html(listA);
			var uploader = WebUploader.create({
				auto: true,
				// swf文件路径
				swf: window.origin+ 'include/Uploader.swf',
			
				// 文件接收服务端。
				server: 'http://webuploader.duapp.com/server/fileupload.php',
			
				// 选择文件的按钮。可选。
				// 内部根据当前运行是创建，可能是input元素，也可能是flash.
				pick: '#filePicker',
			
				// 只允许选择图片文件。
				accept: {
					title: 'Images',
					extensions: 'gif,jpg,jpeg,bmp,png',
					mimeTypes: 'image/*'
				}
			});
			$("[name='name']").unbind("tap").bind("tap",function(){
				window.location.hash="groupEdit/0/"+result.c
				});
			$("[name='word']").unbind("tap").bind("tap",function(){
				window.location.hash="groupEdit/1/"+result.d
				});
			$("[name='dsc']").unbind("tap").bind("tap",function(){
				window.location.hash="groupEdit/2/"+result.e
				});
			$("[name='group']").unbind("tap").bind("tap",function(){
				window.location.hash="groupAdd"
				});
			$("[name='invite']").unbind("tap").bind("tap",function(){
				window.location.hash="invite"
				});
			$(".title_input_list").css({
				margin:0})
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
					})
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				}
			function getGroup(at){
				obj.api.run("group_getMy","at="+at,layout,function(e){
					alert(JSON.stringify(e));
					})
				}
			obj.api.at(getGroup);	
			}
		});
	})($,app,config);