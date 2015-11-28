// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"travelIndex",
		par:"type/state/id/sid/at",
		tem:["top_second","nav_four","nav_third","hot_nav","product_group_list","product_dropdown"],
		fn:function(data){
			var titleArry=["出发地跟团","目的地跟团"];
			var typeArry=[12,13];
			var hlArry=["left","center","right"];
			var tagArry=[{name:"旅博汇",color:"#ffb54c"},{name:"旅博专团",color:"#39bf71"},{name:"旅博推荐",color:"#ff504c"}];
			var tableAtty=["cf_table_get","md_table_get"];
			var apiArry=["recommend_get_cf","recommend_get_md"];
			var head=_.template(data.tem[0])({
				left:"",
				center:titleArry[data.type]
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			function layout(at,now,product,client,hot){
				var start="深圳";
				if(data.sid){
					$.each(now,function(i,n){
						if(n.a===Number(data.sid)){
							start=n.b;
						}
					});
				}
				if(!hot){
					hot="";
					}else{
						hot=_.template(data.tem[5])({list:hot});
					}
				var nav=_.template(data.tem[2])({
				left:{text:"推荐"},
				center:{text:"国内"},
				right:{text:"出境"},
				four:{text:'<span class="fa fa-place2" style="color:#ff840c"></span> '+start}
				});
			var list=_.template(data.tem[4])({
				list:[{title:false,main:product}]
				});
			$("#scroller").html(nav+hot+list);
			if(data.id){
				$(".hot_nav .point#"+data.id).addClass("hl");
				}
			$("#endLine .pointFrame").unbind("tap").bind("tap",function(){
				window.location.hash="travelIndex/"+data.type+"/"+data.state+"/"+$(this).attr("pid");
			});
			$("#startLine .pointFrame").unbind("tap").bind("tap",function(){
				window.location.hash="travelIndex/"+data.type+"/"+data.state+"/"+(data.id||"")+"/"+$(this).attr("pid");
			});
			$(".product_group_list .point").unbind("tap").bind("tap",function(){
				window.location.hash="productDetail/"+$(this).attr("type")+"/"+$(this).attr("pid")+"//"+(data.sid||"");
				});
			$(".hot_nav .point").unbind("tap").bind("tap",function(){
					window.location.hash="travelIndex/"+data.type+"/"+data.state+"/"+$(this).attr("id")+"/"+(data.sid||"");
					});
			$(".nav_four #four").unbind("tap").bind("tap",function(){
					window.location.hash="searchGt/"+data.type+"/4/travelIndex$"+data.type+"$"+data.state+"$"+(data.id||"")+"$";
					});
			$(".hot_nav .button").unbind("tap").bind("tap",function(){
				window.location.hash="searchGt/"+data.type+"/"+(Number(data.state)-1);
				});
			$(".nav_two #"+hlArry[data.state]).addClass("hl");
			$(".nav_two #left").unbind("tap").bind("tap",function(){
				window.location.hash="travelIndex/"+data.type+"/0//"+(data.sid||"");
				});
			$(".nav_two #center").unbind("tap").bind("tap",function(){
				window.location.hash="travelIndex/"+data.type+"/1//"+(data.sid||"");
				});
			$(".nav_two #right").unbind("tap").bind("tap",function(){
				window.location.hash="travelIndex/"+data.type+"/2//"+(data.sid||"");
				});
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
				$('img').load(function(){
				//myScroll.refresh();
				});
				}
			
			function getRecommend(at,now,client){
				obj.api.run(apiArry[data.type],'siteIdRes='+client.sid+'&at='+at+'&categoryIdRes='+typeArry[data.type],function(returnData){
					var productList=[];
					$.each(returnData,function(i,n){
						var addData={image:n.gd.cc,name:(n.gd.b.length>40)?(n.gd.b.substr(0,40)+"..."):n.gd.b,price:n.gd.f,place:n.gd.w,tag:{name:n.cd.a,class:n.cd.b},date:n.sd,id:n.gd.a,type:typeArry[data.type],state:n.gd.e,rePrice:n.gd.hh};
						productList.push(addData);
						});
					layout(at,now,productList,client);
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			function getcf(at,now,hot,client,table){
				obj.api.run("cf_product_get",'siteIdRes='+client.sid+'&at='+at+'&categoryIdRes='+typeArry[data.type]+'&typeIdRes='+data.state+'&startIdRes='+(data.sid||1214)+'&endIdRes='+(data.id||table[0].id),function(returnData){
					var productList=[];
					$.each(returnData,function(i,n){
						var addData={image:n.gd.cc,name:n.gd.b,price:n.gd.f,place:n.gd.w,date:n.sd,id:n.gd.a,type:12,state:n.gd.e,rePrice:n.gd.hh};
						productList.push(addData);
						});
					layout(at,now,productList,client,hot);
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
				}
			function getmd(at,now,hot,client,table){
				obj.api.run("md_product_get",'siteIdRes='+client.sid+'&at='+at+'&categoryIdRes='+typeArry[data.type]+'&typeIdRes='+data.state+'&endIdRes='+(data.id||table[0].id)+'&startIdRes='+(data.sid||1214),function(returnData){
					var productList=[];
					$.each(returnData,function(i,n){
						var addData={image:n.gd.cc,name:n.gd.b,price:n.gd.f,place:n.gd.w,date:n.sd,id:n.gd.a,type:13,state:n.gd.e,rePrice:n.gd.hh};
						productList.push(addData);
						});
					layout(at,now,productList,client,hot);
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
				}
			function getNow(at,hot,client,table){
				
				obj.api.run("city_cf_get","at="+at+"&siteIdRes="+client.sid+"&categoryIdRes="+typeArry[data.type]+'&typeIdRes='+data.state+'&endIdRes='+(data.id||table[0].id),function(returnData){
						if(data.state==="0"){
						getRecommend(at,returnData,client);
						}else{
							var startTable=[];
							var startValue=null;
							$.each(returnData,function(i,n){
								if(data.sid&&data.sid===n.a+""){
									startValue={name:n.b,id:n.a};
								}
								startTable.push({name:n.b,id:n.a});
							});
							if(!startTable){
							startTable={name:"全部",id:0};
						}
							hot.push({
									id:"startLine",
									title:"参团城市",
									value:startValue,
									list:startTable
								});
							/**********/
							if(data.type==="0"){
					getcf(at,returnData,hot,client,table);
					}else{
					getmd(at,returnData,hot,client,table);	
						}	
							/**********/
							}
						//getClient(at,returnData);		
					});
				}
			function getTable(at,client){
				obj.api.run(tableAtty[data.type],'at='+at+'&siteIdRes='+client.sid+'&categoryIdRes='+typeArry[data.type]+'&typeIdRes='+Number(data.state),function(returnData){
					var endValue=null;
					var table=[];
					if(returnData&&returnData.length){
						$.each(returnData,function(i,n){
						if(data.id&&data.id===n.a+""){
							endValue={name:n.b,id:n.a};
						}	
						var addData={name:n.b,id:n.a};
						table.push(addData);
						});
						if(!endValue){
							endValue={name:"全部",id:0};
						}
						var showValue=[
								{
									id:"endLine",
									title:"目的地",
									value:endValue,
									list:table
								}
								
							];
					var hot=showValue;
				if(!data.id){
					data.id=returnData[0].a;
					}
				getNow(at,hot,client,table);
/*
				if(data.type==="0"){
					getcf(at,now,hot,client,table);
					}else{
					getmd(at,now,hot,client,table);	
						}	
*/
						}else{
							obj.pop.on("alert",{text:("该项暂无数据")});
							}
					
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			function getClient(at){
				console.log(obj.cache("client_id"));
				obj.api.run("client_get","at="+at+"&s="+(obj.cache("client_id").id||""),function(returnData){
					getTable(at,returnData);
					/*
					if(data.state==="0"){
						getRecommend(at,now,returnData);
						}else{
							getTable(at,now,returnData);
							}	
							*/
					},function(e){
					obj.pop.on("alert",{text:JSON.stringify(e)});
					});
				}
			
			obj.api.at(getClient,data.at);	
				
			}
		});
	})($,app,config);