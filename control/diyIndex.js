// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"diyIndex",
		par:"type/at/ut",
		tem:["top_second","diy_hot","diy_nav","product_group_list"],
		fn:function(data){
			$("body").css({"background-color":"#fff"});
			var result=[];
			var page=1;
			var head=_.template(data.tem[0])({
				left:"",
				center:"主题游"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#head .center").css("font-size",".5rem");
			function layout(){
				var list=_.template(data.tem[3])({list:[
			{main:result}
			]});
			$("#scroller").html(list+'<div class="clear"></div>');
			$(".product_group_list").addClass("found");
			$(".product_group_list .group").css({"border-top":"0px","margin-top":"0px"});
			$(".product_group_list .point").unbind("tap").bind("tap",function(){
				window.location.hash="productDetail/"+$(this).attr("type")+"/"+$(this).attr("pid");
				});
			$(".product_group_list").css({
				width:"8rem",
				float:"right",
				"background-color":"#fff"
				});
				var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
				$('img').load(function(){
				//myScroll.refresh();
				});
				}
			var otherTop="1.5rem";
			if(app.cache("phone")&&app.cache("phone").phone){
				 otherTop="0rem";
				}	
			$("#otherFrame").html(data.tem[2]);
			$("#otherFrame").css({
				"position":"fixed",
				"top":otherTop,
				"left":"0rem",
				"width":"2rem",
				"height":($(window).height()/($(window).width()/10)-1.5)+"rem",
				"background-color":"#fff",
				"z-index":"10"
				});
			$("#otherFrame").show();
			;(function(){
			var delay=setTimeout(function(){
				var leftScroll = {
	refresh:function(){},
	scrollToElement:function(target){
		var scrollT=$(target).offset().top-$("#scroller").offset().top;
		$("#middle").scrollTop(scrollT) ;
		},
	on:function(type,fn){
		var scrollTypt={
			"scroll":function(){
				fn();
				},
			"scrollEnd":function(){
				fn();
				}
			};
		}
	};
				},200);	
				})();
			
			
			$("#otherFrame [num='"+data.type+"']").addClass("hl");
			
			
			
			function getPage(callback){
				function getList(at){
				obj.api.run("diy_get","at="+at+"&d="+data.type+"&a="+page,function(returnData){
					if(returnData.pn === page+""){
					page++;
					returnData=returnData.data;
					$.each(returnData,function(i,n){
						var addData={image:n.e,name:n.b,price:n.d,place:n.f,id:n.a,type:n.c};
						result.push(addData);
						});
					layout();}
					if(callback){callback();}
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
				obj.api.at(getList,data.at);
				}
			getPage();
			obj.reflash.add("diyIndex",function(callback){
			getPage(callback);
			});
			}
		});
	})($,app,config);