// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"productDetail",
		par:"type/id",
		tem:["top_third","nav_third","product_top","product_center","nav_third","product_bottom","title_input_list","single_button"],
		fn:function(data){

			var head=_.template(data.tem[0])({
				left:"",
				center:"产品详情",
				right:'<a href="tel:400-606-2111" style="color:#fff;text-decoration: none;"><span class="fa fa-phone2"></span></a>'
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			var nav=_.template(data.tem[4])({left:{text:"产品特色",hl:true},center:{text:"详细行程"},right:{text:"费用说明"}});
			var bottomList=_.template(data.tem[6])({list:[
				{left:"预订须知",right:"<span class='fa fa-right'></span>",link:true,name:"message"},
				{left:"预订流程",right:"<span class='fa fa-right'></span>",link:true,name:"flow"},
				{left:"产品点评",right:"<span class='fa fa-right'></span>",link:true,name:"comment"}
			]});
			var button=_.template(data.tem[7])({text:'立即预定',id:"payButton"})
			$("#scroller").html(data.tem[2]+data.tem[3]+nav+data.tem[5]+bottomList+button);
			$(".title_input_list [name='message']").unbind("tap").bind("tap",function(){
				window.location.hash="messageList/"+data.id;
				});
			$(".title_input_list [name='flow']").unbind("tap").bind("tap",function(){
				window.location.hash="dealFlow/"+data.id;
				});
			$(".title_input_list [name='comment']").unbind("tap").bind("tap",function(){
				window.location.hash="commentList/"+data.id;
				});
			$("#scroller .share").unbind("tap").bind("tap",function(){
				obj.bottom.on("share",{list:[
				{image:"img/weixin.png",name:"微信"},
				{image:"img/friend.png",name:"朋友圈"},
				{image:"img/weibo.png",name:"新浪微博"},
				{image:"img/qq.png",name:"腾讯QQ"},
				{image:"img/qzone.png",name:"QQ空间"}
				]},function(){
					
					},function(e){
					alert(JSON.stringify(e));
					});
				})
			
			$(".nav_third .nav_point_frame").unbind("tap").bind("tap",function(){
				$(".nav_third .nav_point_frame").removeClass("hl");
				$(this).addClass("hl");
				$(".product_bottom .list").hide();
				$(".product_bottom [show='"+$(this).attr("id")+"']").show();
				myScroll.refresh();
				});
			
			$(".nav_third").css("margin-top",".2rem");
			var delay=setTimeout(function(){
				$("[show='left']").show();
				myScroll.refresh();
				},200);
			function getList(at,now){
				/*obj.api.run(apiArry[data.type],'aid='+now.startId,function(returnData){
					debugger;
					},function(e){
					alert(JSON.stringify(e));
					})*/
				}
			function getNow(at){
				obj.api.run("city_cf_get","at="+at,function(returnData){
					getList(at,returnData);
					});
				}
			obj.api.at(getNow);	
				
			}
		});
	})($,app,config);