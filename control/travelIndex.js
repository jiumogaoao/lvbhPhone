// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"travelIndex",
		par:"type/state/id",
		tem:["top_second","nav_four","nav_third","hot_nav","product_group_list"],
		fn:function(data){
			var titleArry=["出发地跟团","目的地跟团"];
			var typeArry=[12,13]
			var hlArry=["left","center","right"];
			var tagArry=[{name:"旅博汇",color:"#ffb54c"},{name:"旅博专团",color:"#39bf71"},{name:"旅博推荐",color:"#ff504c"}];
			var tableAtty=["cf_table_get","md_table_get"];
			var apiArry=["recommend_get_cf","recommend_get_md"];
			var head=_.template(data.tem[0])({
				left:"",
				center:titleArry[data.type]
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			function layout(at,now,product,hot){
				if(!hot){
					hot="";
					}
				var nav=_.template(data.tem[Number(data.type)+1])({
				left:{text:"推荐"},
				center:{text:"国内"},
				right:{text:"出境"},
				four:{text:'<span class="fa fa-place2" style="color:#ff840c"></span> '+now.startName}
				});
			var list=_.template(data.tem[4])({
				list:[{title:false,main:product}]
				});
			$("#scroller").html(nav+hot+list);
			$(".product_group_list .point").unbind("tap").bind("tap",function(){
				window.location.hash="productDetail/"+$(this).attr("type")+"/"+$(this).attr("pid");
				});
			$(".hot_nav .point").unbind("tap").bind("tap",function(){
					window.location.hash="travelIndex/"+data.type+"/"+data.state+"/"+$(this).attr("id");
					});
			$(".hot_nav .button").unbind("tap").bind("tap",function(){
				window.location.hash="searchGt/"+data.type+"/"+(Number(data.state)-1);
				});
			$(".nav_two #"+hlArry[data.state]).addClass("hl");
			$(".nav_two #left").unbind("tap").bind("tap",function(){
				window.location.hash="travelIndex/"+data.type+"/0";
				});
			$(".nav_two #center").unbind("tap").bind("tap",function(){
				window.location.hash="travelIndex/"+data.type+"/1";
				});
			$(".nav_two #right").unbind("tap").bind("tap",function(){
				window.location.hash="travelIndex/"+data.type+"/2";
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				})
				}
			
			function getRecommend(at,now){
				obj.api.run(apiArry[data.type],'aid='+now.startId,function(returnData){
					var productList=[];
					$.each(returnData,function(i,n){
						var addData={image:"http://"+n.gd.cc,name:n.gd.b,price:n.gd.f,place:n.gd.w,tag:{name:n.cd.a,class:n.cd.b},date:n.sd,id:n.gd.a,type:typeArry[data.type],state:n.gd.e};
						productList.push(addData);
						});
					layout(at,now,productList);
					},function(e){
					alert(JSON.stringify(e));
					});
				}
			function getcf(at,now,hot){
				obj.api.run("cf_product_get",'aid='+now.startId+'&bid='+data.id,function(returnData){
					var productList=[];
					$.each(returnData,function(i,n){
						var addData={image:"http://"+n.gd.cc,name:n.gd.b,price:n.gd.f,place:n.gd.w,date:n.sd,id:n.gd.a,type:12,state:n.gd.e};
						productList.push(addData);
						});
					layout(at,now,productList,hot);
					},function(e){
						alert(JSON.stringify(e));
						});
				}
			function getmd(at,now,hot){
				obj.api.run("md_product_get",'aid='+data.id,function(returnData){
					var productList=[];
					$.each(returnData,function(i,n){
						var addData={image:"http://"+n.gd.cc,name:n.gd.b,price:n.gd.f,place:n.gd.w,date:n.sd,id:n.gd.a,type:13,state:n.gd.e};
						productList.push(addData);
						});
					layout(at,now,productList,hot);
					},function(e){
						alert(JSON.stringify(e));
						});
				}
			function getTable(at,now){
				obj.api.run(tableAtty[data.type],"tp="+data.state,function(returnData){
					var table=[];
					if(returnData&&returnData.length){
						$.each(returnData,function(i,n){
						var addData={name:n.b,id:n.a};
						table.push(addData);
						});
					var hot=_.template(data.tem[3])({list:table});
				if(!data.id){
					data.id=returnData[0].a;
					}
				if(data.type==="0"){
					getcf(at,now,hot);
					}else{
					getmd(at,now,hot);	
						}	
						}else{
							alert("该项暂无数据");
							}
					
					},function(e){
					alert(JSON.stringify(e));
					});
				}
			function getNow(at){
				obj.api.run("city_cf_get","at="+at,function(returnData){
					if(data.state==="0"){
						getRecommend(at,returnData);
						}else{
							getTable(at,returnData);
							}				
					});
				}
			obj.api.at(getNow);	
				
			}
		});
	})($,app,config);