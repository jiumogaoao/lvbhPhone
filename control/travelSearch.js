// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"travelSearch",
		par:"type/state/id/at",
		tem:["top_search","nav_four","nav_third","hot_nav","product_group_list"],
		fn:function(data){
			var titleArry=["出发地跟团","目的地跟团"];
			var typeArry=[12,13];
			var hlArry=["left","center","right"];
			var tagArry=[{name:"旅博汇",color:"#ffb54c"},{name:"旅博专团",color:"#39bf71"},{name:"旅博推荐",color:"#ff504c"}];
			var tableAtty=["cf_table_get","md_table_get"];
			var apiArry=["recommend_get_cf","recommend_get_md"];
			var head=_.template(data.tem[0])({
				left:"",
				value:titleArry[data.type]
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			function layout(at,product){
			var list=_.template(data.tem[4])({
				list:[{title:false,main:product}]
				});
			$("#scroller").html(list);
			$(".product_group_list .point").unbind("click").bind("click",function(){
				window.location.hash="productDetail/"+$(this).attr("type")+"/"+$(this).attr("pid");
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
				}
			
			function getcf(at,now){
				obj.api.run("cf_product_get",'aid='+now.startId+'&bid='+data.id,function(returnData){
					var productList=[];
					$.each(returnData,function(i,n){
						var addData={image:"http://"+n.gd.cc,name:n.gd.b,price:n.gd.f,place:n.gd.w,date:n.sd,id:n.gd.a,type:12,state:n.gd.e};
						productList.push(addData);
						});
					layout(at,productList);
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
						});
				}
			function getmd(at,now){
				obj.api.run("md_product_get",'aid='+data.id,function(returnData){
					var productList=[];
					$.each(returnData,function(i,n){
						var addData={image:"http://"+n.gd.cc,name:n.gd.b,price:n.gd.f,place:n.gd.w,date:n.sd,id:n.gd.a,type:13,state:n.gd.e};
						productList.push(addData);
						});
					layout(at,productList);
					},function(e){
						obj.pop.on("alert",{text:(JSON.stringify(e))});
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
					getcf(at,now);
					}else{
					getmd(at,now);	
						}	
						}else{
							obj.pop.on("alert",{text:("该项暂无数据")});
							}
					
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			function getNow(at){
				obj.api.run("city_cf_get","at="+at,function(returnData){
					
							getTable(at,returnData);
											
					});
				}
			function changeId(at){
				obj.api.run("place_id_get","at="+at+"&pen="+data.id,function(returnData){
					data.id=returnData;
					getNow(at);
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			obj.api.at(changeId,data.at);	
				
			}
		});
	})($,app,config);