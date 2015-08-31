// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"index",
		par:"",
		tem:["foot_nav","index_head","index_nav","product_group_list","group_member","index_banner"],
		fn:function(data){
			function layout(main,vip,pomo){
			obj.scrollFn.add("index",function(y){
				$("#head").css("background-color","rgba(0,158,255,"+((-1*y)/200)+")");
				});
			var banner=	_.template(data.tem[5])({list:pomo});
			$("#head").html(data.tem[1]);
			$("#head .right").unbind("click").bind("click",function(){
				obj.bottom.on("tel");
				});
			var list=_.template(data.tem[3])({list:main});
			var group=_.template(data.tem[4])({list:vip});
			$("#scroller").html(banner+data.tem[2]+list+group);
			$(".product_group_list .group").css("border-top","0px");
$(".product_group_list .point").unbind("tap").bind("tap",function(){
				window.location.hash="productDetail/"+$(this).attr("type")+"/"+$(this).attr("pid");
				});
			$("#scroller .group_member").css({
				"background-color":"#fff",
				"padding-bottom":".2rem"
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			$('img').load(function(){
				myScroll.refresh();
				});	
			}
			$("#foot").html(data.tem[0]);
			$("#foot .fa-home").addClass("hl");
			$("#foot .point").eq(0).addClass("hl");
			
			function getMessage(at){
				var main=[
					{title:"出发地跟团-国内精选",main:[]},
					{title:"出发地跟团-出境精选",main:[]},
					{title:"目的地跟团-国内惠",main:[]},
					{title:"目的地跟团-出境惠",main:[]},
					{title:"旅游达人圈",main:[]}
				];
				var vip=[];
				var promo=[];
				var total=0;
				function totalCount(){
					total++;
					if(total===6){
						layout(main,vip,promo);
						}
					}
				obj.api.run("pomo_get",'at="'+at+'"',function(returnData){
					promo=returnData;
					totalCount();
					},function(e){
					alert(JSON.stringify(e));
					});
				obj.api.run("index_cfgj",'at="'+at+'"',function(returnData){
					$.each(returnData,function(i,n){
						var addData={image:n.a,name:n.b,price:n.c,place:n.d,id:n.e,type:12};
						main[1].main.push(addData);
						});
						totalCount();
					});
				obj.api.run("index_cfgn",'at="'+at+'"',function(returnData){
					$.each(returnData,function(i,n){
						var addData={image:n.a,name:n.b,price:n.c,place:n.d,id:n.e,type:12};
						main[0].main.push(addData);
						});
						totalCount();
					});
				obj.api.run("index_mdgj",'at="'+at+'"',function(returnData){
					$.each(returnData,function(i,n){
						var addData={image:n.a,name:n.b,price:n.c,place:n.d,id:n.e,type:13};
						main[3].main.push(addData);
						});
						totalCount();
					});
				obj.api.run("index_mdgn",'at="'+at+'"',function(returnData){
					$.each(returnData,function(i,n){
						var addData={image:n.a,name:n.b,price:n.c,place:n.d,id:n.e,type:13};
						main[2].main.push(addData);
						});
						totalCount();
					});
				obj.api.run("index_vip",'at="'+at+'"',function(returnData){
					$.each(returnData,function(i,n){
						var addData={image:n.a,name:n.b,fans:n.c,money:n.d,id:n.e};
						vip.push(addData);
						});
					totalCount();
					},function(e){
					alert(JSON.stringify(e));
					});
				}
			obj.api.at(getMessage);
			}
		});
	})($,app,config);