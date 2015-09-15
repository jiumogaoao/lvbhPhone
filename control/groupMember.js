// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"groupMember",
		par:"type/id",
		tem:["top_third","group_member"],
		fn:function(data){
			var result=[];
			var page=1;
			var head=_.template(data.tem[0])({left:"",center:'<div class="top_nav"><a class="top_nav_point top_nav_pointL" href="#groupMember/0">人气</a><a class="top_nav_point top_nav_pointR" href="#groupMember/1">财富</a><div class="clear"></div></div>',"right":'<span class="fa fa-search"></span>'});
			$("#head").html(head);
			$(".top_third .top_nav a").eq(data.type).addClass("hl");
			function layout(list,at){
				$.each(list,function(i,n){
					var add={"image":n.e,"name":n.c,"fans":n.i,"money":n.g,"id":n.a,"code":n.b};
					result.push(add);
					});
				var listA=_.template(data.tem[1])({at:at,list:result});
			$("#scroller").html(listA);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#scroller .group_member").css({
				"background-color":"#fff",
				"padding-top":".3rem",
				"padding-bottom":".3rem"});	
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
				}
			
			function getmember(at){
				function getPage(callback){
				var send="";
				if(data.id){
					send+='e='+data.id+'&a='+page+'&d='+data.type;
					}else{
						send+='at='+at+'&a='+page+'&d='+data.type;
						}
				obj.api.run("group_member_get",send,function(list){
					if(list.pn === page+""){
					page++;
					list=list.data;
					layout(list,at);
					}
					if(callback){callback();}
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
				getPage();
				obj.reflash.add("groupMember",function(callback){
			getPage(callback);
			});	
				}
			obj.api.at(getmember);
			}
		});
	})($,app,config);