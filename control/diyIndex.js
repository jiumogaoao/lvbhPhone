// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"diyIndex",
		par:"type",
		tem:["top_second","diy_hot","diy_nav","product_group_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({
				left:"",
				center:"主题游"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			$("#head .center").css("font-size",".5rem");
			function layout(main){
				var list=_.template(data.tem[3])({list:[
			{main:main}
			]});
			$("#scroller").html(data.tem[1]+list+'<div class="clear"></div>');
			$(".product_group_list .point").unbind("tap").bind("tap",function(){
				window.location.hash="productDetail/"+$(this).attr("type")+"/"+$(this).attr("pid");
				});
			$(".product_group_list").css({
				width:"8rem",
				float:"right",
				"background-color":"#fff"
				});
				var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				})
				}
			
				
			$("#otherFrame").html(data.tem[2]);
			$("#otherFrame").css({
				"position":"fixed",
				"top":"1.5rem",
				"left":"0rem",
				"width":"2rem",
				"height":($(window).height()/($(window).width()/10)-1.5)+"rem",
				"background-color":"#fff",
				"z-index":"10"
				});
			$("#otherFrame").show();
			$("#otherFrame [num='"+data.type+"']").addClass("hl");
			
			function getList(at){
				obj.api.run("diy_get","d="+data.type,function(returnData){
					var main=[];
					$.each(returnData,function(i,n){
						var addData={image:"http://"+n.e,name:n.b,price:n.d,place:n.f,id:n.a,type:n.c};
						main.push(addData);
						});
					layout(main);
					},function(e){
					alert(JSON.stringify(e));
					});
				}
			obj.api.at(getList);
			}
		});
	})($,app,config);