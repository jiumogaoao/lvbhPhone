// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"vipTravelDetail",
		par:"id/group",
		tem:["top_third","travel_detail_top","travel_detail_middle","travel_detail_bottom","travel_detail_foot"],
		fn:function(data){
			var page=1;
			var type=0;
			var result=[];
			var head=_.template(data.tem[0])({
				left:"",
				center:"游记详情",
				right:'<span class="fa fa-share2"></span>'
				});
			$("#head").html(head);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			obj.scrollFn.add("vipTravelDetail",function(y){
				$("#head").css("background-color","rgba(0,158,255,"+(y/200)+")");
				});
			
			function layout(at,source,messageArry,com){
				$("#head .rightButton").unbind("tap").bind("tap",function(){
				
				obj.bottom.on("share",{list:[
				{image:"img/weibo.png",name:"新浪微博",id:"xinlang"},
				{image:"img/qq.png",name:"腾讯QQ",id:"qq"},
				{image:"img/qzone.png",name:"QQ空间",id:"qzone"}
				]},function(){
					$(".share [sid='xinlang']").unbind("tap").bind("tap",function(){
						window.location.href="http://service.weibo.com/share/share.php?url="+window.location.href+"&appkey=&searchPic=true";
						});
					$(".share [sid='qq']").unbind("tap").bind("tap",function(){
						window.location.href="http://connect.qq.com/widget/shareqq/index.html?url="+encodeURIComponent(window.location.href)+"&desc=&title="+encodeURIComponent(source.title)+"&summary=&pics=&flash=&site=&style=201&width=32&height=32&showcount=";
						});
					$(".share [sid='qzone']").unbind("tap").bind("tap",function(){
						window.location.href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+window.location.href+"&title="+source.title+"&desc="+source.title+"&summary=&site=lvbh";
						});
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				
				});
				var foot=_.template(data.tem[4])(source);
				$("#foot").html(foot);
				var top=_.template(data.tem[1])(source);
				var middle=_.template(data.tem[2])({list:messageArry});
				var bottom=_.template(data.tem[3])({list:com});
				$("#scroller").html(top+middle+bottom);
				$("#comInput").unbind("change").bind("change",function(){
					obj.api.run("user_get","at="+at,function(user){
				obj.api.run("com_send",'at='+at+'&a='+data.id+'&b='+$(this).val(),function(){
						window.location.reload();
						},function(e){
						obj.pop.on("alert",{text:JSON.stringify(e)});
						});
					},function(e){
					obj.pop.on("alert",{text:"请先登录"});
						window.location.hash="login/vipTravelDetail$"+data.id+"$"+data.group;
					});
					});
				$("#prise.enable").unbind("tap").bind("tap",function(){
					obj.api.run("user_get","at="+at,function(user){
				obj.api.run("pra_add",'at='+at+'&a='+data.id,function(){
						window.location.reload();
						},function(e){
						obj.pop.on("alert",{text:JSON.stringify(e)});
						});
					},function(e){
					obj.pop.on("alert",{text:"请先登录"});
						window.location.hash="login/vipTravelDetail$"+data.id+"$"+data.group;
					});	
					});
				$("#showchang.enable").unbind("tap").bind("tap",function(){
					
					obj.api.run("user_get","at="+at,function(user){
				obj.api.run("collect_add","at="+at+"&t=2&id="+data.id+"&cn="+source.title+"&desc= ",function(){
						window.location.reload();
						},function(e){
						obj.pop.on("alert",{text:JSON.stringify(e)});
						});
					},function(e){
					obj.pop.on("alert",{text:"请先登录"});
						window.location.hash="login/vipTravelDetail$"+data.id+"$"+data.group;
					});		
					});
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
			$('img').load(function(){
				//myScroll.refresh();
				});
				}
			
			function getCom(at,source,messageArry){
				var com=[];
				obj.api.run("travel_comment_get",'at='+at+'&a='+data.id,function(returnData){
					$.each(returnData,function(i,n){
						com.push({name:n.f,img:n.g,time:n.e,main:n.d});
						});
				layout(at,source,messageArry,com);
					},function(e){obj.pop.on("alert",{text:(JSON.stringift(e))});});
				
				}	
			function getList(at){
				var typeString="";
				obj.api.run("travel_detail",'at='+at+'&a='+data.id,function(returnData){
				var source={"id":returnData.travel.a,"title":returnData.travel.f,"place":returnData.travel.e,"image":returnData.travel.c,"pra":returnData.travel.l,"star":returnData.travel.k,"com":returnData.travel.j,"praed":returnData.travel.ba||0,"comed":returnData.travel.bc||0,"stared":returnData.travel.bb||0};
				var messageArry=[];
					$.each(returnData.traveldetail,function(i,n){
						if(n.a){
							messageArry.push("<div class='text'>"+n.a+"</div>");
							}
						});
					getCom(at,source,messageArry);
					
					},function(e){obj.pop.on("alert",{text:(JSON.stringify(e))});});
				}
			obj.api.at(getList);



			}
		});
	})($,app,config);