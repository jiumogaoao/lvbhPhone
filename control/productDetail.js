// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"productDetail",
		par:"type/id/at/ut",
		tem:["top_third","nav_third","product_top","product_center","nav_third","product_bottom","title_input_list","bottom_button"],
		fn:function(data){
			var result={
				traveler:[""],
				man:1,
				child:0,
				child2:0,
				oldman:0,
				oldman2:0,
				single:true,
				linkMan:{
					name:"",
					tel:"",
					email:""
				},
				invoice:{
					on:false,
					title:"",
					place:"",
					name:"",
					phone:""
					},
				contract:{
					on:false,
					place:"",
					name:"",
					phone:""
					},
				agree:false,
				collect:0
				};
			if(obj.cache("pruduct_input_"+data.id)){
				result=obj.cache("pruduct_input_"+data.id);
				}
			var button=_.template(data.tem[7])({text:'立即预定',id:"payButton"});
			$("#foot").html(button);
			$("#foot").show();
			var collectArry={"12":"4","13":"5"};
			var apiArry={"12":"cf_detail_get","13":"md_detail_get"};
			var typeArry={"12":"出发地跟团","13":"目的地跟团"};
			var head=_.template(data.tem[0])({
				left:"",
				center:"产品详情",
				right:'<span class="fa fa-phone2"></span>'
				});
			$("#head").html(head);
			
			$("#head .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#head .rightButton").unbind("tap").bind("tap",function(){
				obj.bottom.on("tel");
				});
			function layout(at,top,center,bottom){
				var nav=_.template(data.tem[4])({left:{text:"产品特色",hl:true},center:{text:"详细行程"},right:{text:"费用说明"}});
			var bottomList=_.template(data.tem[6])({list:[
				{left:"预订须知",right:"<span class='fa fa-right'></span>",link:true,name:"message"},
				{left:"预订流程",right:"<span class='fa fa-right'></span>",link:true,name:"flow"},
				{left:"产品点评",right:"<span class='fa fa-right'></span>",link:true,name:"comment"}
			]});
			
			var topT=_.template(data.tem[2])(top);
			var centerT=_.template(data.tem[3])(center);
			var bottomT=_.template(data.tem[5])(bottom);
			$("#scroller").html(topT+centerT+nav+bottomT+bottomList);
			if(result.collect!==2){
				$(".product_top .collect").css({"background-color":"#93d7ff"});
			}else{
				$(".product_top .collect").css({"background-color":"rgba(0,0,0,0.3)"});
			}
			$(".nav_two.nav_third").attr("id","guding");
			$("#otherFrame").html(nav);
			$("#otherFrame").css({
				width:"100%",
				height:"1.3rem",
				position:"absolute",
				top:"1.05rem",
				"z-index":"10"
				});
			$("#otherFrame").hide();
			obj.scrollFn.add("productDetail",function(y){
				var juli=1.5;
				if(app.cache("phone")&&app.cache("phone").phone){
					juli=0;
					$("#otherFrame").css("top","-.4rem");
					}
				if(($("#guding").offset().top*10)/$(window).width()<=juli){
					$("#otherFrame").show();
					if($("#cpts").offset().top>0&&($("#cpts").offset().top*10)/$(window).width()<3){
						$(".nav_two.nav_third .nav_point_frame").removeClass("hl");
						$(".nav_two.nav_third #left").addClass("hl");	
						}
					if($("#xxxc").offset().top>0&&($("#xxxc").offset().top*10)/$(window).width()<3){
						$(".nav_two.nav_third .nav_point_frame").removeClass("hl");
						$(".nav_two.nav_third #center").addClass("hl");	
						}
					if($("#fysm").offset().top>0&&($("#fysm").offset().top*10)/$(window).width()<3){
						$(".nav_two.nav_third .nav_point_frame").removeClass("hl");
						$(".nav_two.nav_third #right").addClass("hl");	
						}
					}else{$("#otherFrame").hide();}
				});
			$("#scroller .product_top .collect").unbind("tap").bind("tap",function(){
				obj.api.run("collect_add",'at='+at+'&t='+collectArry[data.type]+'&id='+data.id+'&cn='+result.title.replace(/&lt;/g,"<").replace(/&gt;/g,">")+'&desc='+result.title.replace(/&lt;/g,"<").replace(/&gt;/g,">"),function(returnData){
					obj.pop.on("alert",{text:("收藏成功")});
					$(".product_top .collect").css({"background-color":"rgba(0,0,0,0.3)"});
					},function(e){obj.pop.on("alert",{text:(JSON.stringify(e))});});
				});
			$("#scroller #date").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="calendar/"+data.type+"/"+data.id+"/"+result.state+"/0";
				});
			$("#payButton").unbind("tap").bind("tap",function(){
				obj.api.run("user_get","at="+at,function(user){
				window.location.hash="productInput/"+data.type+"/"+data.id+"/"+result.state;
					},function(e){	
					window.location.hash="login/productDetail$"+data.type+"$"+data.id+"$$"+result.state;
					});
				});
			$(".title_input_list [name='message']").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="messageList/"+data.type+"/"+data.id+"/"+result.state;
				});
			$(".title_input_list [name='flow']").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="dealFlow/"+data.type+"/"+data.id+"/"+result.state;
				});
			$(".title_input_list [name='comment']").unbind("tap").bind("tap",function(){
				window.location.hash="commentList/"+data.id+"/0";
				});
			$("#scroller .share").unbind("tap").bind("tap",function(){
				obj.bottom.on("share",{list:[
				{image:"img/weibo.png",name:"新浪微博",id:"xinlang"},
				{image:"img/qq.png",name:"腾讯QQ",id:"qq"},
				{image:"img/qzone.png",name:"QQ空间",id:"qzone"}
				]},function(){
					$(".share [sid='xinlang']").unbind("tap").bind("tap",function(){
						window.location.href="http://service.weibo.com/share/share.php?url="+window.location.href+"&appkey=&searchPic=true";
						});
					$(".share [sid='qq']").unbind("tap").bind("tap",function(){
						window.location.href="http://connect.qq.com/widget/shareqq/index.html?url="+encodeURIComponent(window.location.href)+"&desc=&title="+encodeURIComponent(top.title)+"&summary=&pics=&flash=&site=&style=201&width=32&height=32&showcount=";
						});
					$(".share [sid='qzone']").unbind("tap").bind("tap",function(){
						window.location.href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+window.location.href+"&title="+top.title+"&desc="+top.title+"&summary=&site=lvbh";
						});
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				});
			
			$(".nav_third #left").unbind("tap").bind("tap",function(){
				$(".nav_third .nav_point_frame").removeClass("hl");
				$(this).addClass("hl");
				myScroll.scrollToElement($("#noChange")[0]);
				//myScroll.refresh();
				});
			$(".nav_third #center").unbind("tap").bind("tap",function(){
				$(".nav_third .nav_point_frame").removeClass("hl");
				$(this).addClass("hl");
				myScroll.scrollToElement($("#xxxc")[0]);
				//myScroll.refresh();
				});
			$(".nav_third #right").unbind("tap").bind("tap",function(){
				$(".nav_third .nav_point_frame").removeClass("hl");
				$(this).addClass("hl");
				myScroll.scrollToElement($("#fysm")[0]);
				//myScroll.refresh();
				});
			$(".nav_third").css({"margin-top":".4rem",
			"margin-bottom":"0px",
			"border-top":"1px solid #dcdcdc"
			});
			$(".title_input_list").css({
				"border-top":"1px solid #dcdcdc"
				});
			var delay=setTimeout(function(){
				$("[show='left']").show();
				//myScroll.refresh();
				},1000);
				$('img').load(function(){
				//myScroll.refresh();
				});
				}
			function chechCollect(at,top,center,bottom){
				obj.api.run("collect_check","at="+at+"&typeIdRes="+data.id+"&infoIdRes="+((data.type==="12")?4:5),function(returnData){
					result.collect=returnData.data;
					layout(at,top,center,bottom);
				},function(e){
					$("#scroller").html('<img src="img/upDate.png" style="width:100%;"/>');
					$("#foot").hide();
					//obj.pop.on("alert",{text:(JSON.stringify(e))});
				});
			}
			function getList(at){
				obj.api.run(apiArry[data.type],'aid='+data.id+"&at="+at,function(returnData){
				result.state=returnData.gtinfo.gd.e;
					var gd=returnData.gtinfo.gd;
					if(!result.date){
						result.date=returnData.priceArray[0];
						}
					var pa=result.date;
					var tagArry=[];
					result.title=gd.b;
					gd.ee=JSON.parse(gd.ee);
					$.each(gd.ee.info.tag,function(i,n){
						var addData={name:n.nam,color:n.cs};
						tagArry.push(addData);
						});		
					var top={
					image:returnData.gtinfo.pics,
					type:typeArry[data.type],
					number:gd.c||"",
					tag:tagArry,
					title:gd.b||"",
					price:gd.f||"",
					oldPrice:gd.g||""
				};
					var center={
					satisfy:(gd.l*100).toFixed(0),
					comment:gd.m,
					collect:gd.gg,
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
					chechCollect(at,top,center,bottom);
					},function(e){
					$("#scroller").html('<img src="img/upDate.png" style="width:100%;"/>');
					$("#foot").hide();
					//obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			obj.api.at(getList,data.at);	
				
			}
		});
	})($,app,config);