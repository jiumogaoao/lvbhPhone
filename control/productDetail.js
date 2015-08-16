// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"productDetail",
		par:"type/id/date",
		tem:["top_third","nav_third","product_top","product_center","nav_third","product_bottom","title_input_list","single_button"],
		fn:function(data){
			var apiArry={"12":"cf_detail_get","13":"md_detail_get"}
			var typeArry={"12":"出发地跟团","13":"目的地跟团"}
			var head=_.template(data.tem[0])({
				left:"",
				center:"产品详情",
				right:'<a href="tel:400-606-2111" style="color:#fff;text-decoration: none;"><span class="fa fa-phone2"></span></a>'
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			function layout(at,top,center,bottom){
				var nav=_.template(data.tem[4])({left:{text:"产品特色",hl:true},center:{text:"详细行程"},right:{text:"费用说明"}});
			var bottomList=_.template(data.tem[6])({list:[
				{left:"预订须知",right:"<span class='fa fa-right'></span>",link:true,name:"message"},
				{left:"预订流程",right:"<span class='fa fa-right'></span>",link:true,name:"flow"},
				{left:"产品点评",right:"<span class='fa fa-right'></span>",link:true,name:"comment"}
			]});
			var button=_.template(data.tem[7])({text:'立即预定',id:"payButton"})
			var topT=_.template(data.tem[2])(top);
			var centerT=_.template(data.tem[3])(center);
			var bottomT=_.template(data.tem[5])(bottom)
			$("#scroller").html(topT+centerT+nav+bottomT+bottomList+button);
			$("#payButton").unbind("tap").bind("tap",function(){
				window.location.hash="productInput/"+data.id+"/"+(data.date||"");
				})
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
				}
			
			function getList(at){
				obj.api.run(apiArry[data.type],'aid='+data.id,function(returnData){debugger;
					var gd=returnData.gtinfo.gd;
					var pa=returnData.priceArray[0];
					var tagArry=[];
					gd.ee=JSON.parse(gd.ee)
					$.each(gd.ee.info.tag,function(i,n){
						var addData={name:n.nam,color:n.cs}
						tagArry.push(addData);
						})
						
					var top={
					image:["http://","http://","http://","http://"],
					type:typeArry[data.type],
					number:gd.c||"",
					tag:tagArry,
					title:gd.b||"",
					price:gd.f||"",
					oldPrice:gd.g||""
				};
					var center={
					satisfy:gd.l||"",
					comment:gd.m||"",
					collect:100,
					date:pa.c||"",
					twoMan:pa.n||"",
					threeMan:pa.o||"",
					fourMan:pa.p||"",
					fiveMan:pa.q||""
				};
					var bottom={
				start:gd.w||"",
				end:gd.x||"",
				line:gd.aa||"",
				day:"5天4夜",
				hotel:gd.z||"",
				traffic:gd.d||"",
				rally:gd.k||"",
				tel:gd.y||"",
				special:gd.bb||"",
				detaiLine:gd.p||"",
				include:gd.r||"",
				noinclude:gd.s||"",
				payself:gd.t||""
				};
					layout(at,top,center,bottom)
					},function(e){
					alert(JSON.stringify(e))
					});
				}
			obj.api.at(getList);	
				
			}
		});
	})($,app,config);