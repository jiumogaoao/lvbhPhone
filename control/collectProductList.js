// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"collectProductList",
		par:"type",
		tem:["top_third","product_list","single_button"],
		fn:function(data){
			var result=[];
			var page=1;
			var titleArry=["管理","取消"];
			var pageArry=["1","0"];
			var head=_.template(data.tem[0])({left:"",center:"产品",right:titleArry[data.type]});
			$("#head").html(head);
			function layout(list,at){
			var listA=_.template(data.tem[1])({
				type:data.type,
				list:list
				});	
			var button=_.template(data.tem[2])({text:"取消收藏",id:"send"});
			if(data.type === "0"){
				$("#scroller").html(listA);
				}else{
					$("#scroller").html(listA+button);
					$("#send").unbind("tap").bind("tap",function(){
								var remove="";
				$(".product_list .point.hl").each(function(i){
					remove+=$(this).attr("pid");
					if(i !== ($(".product_list .point.hl").length-1)){
						remove+="-";
						}
					});
				obj.api.run("collect_remove",'at='+at+'&a='+remove,function(){
					window.location.hash="collectProductList/0";
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
						});
					}
			$(".product_list .point").unbind("tap").bind("tap",function(){
				window.location.hash="productDetail/"+$(this).attr("type")+"/"+$(this).attr("oid");
				});
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				window.location.hash="collectProductList/"+pageArry[data.type];
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
				}
			function getPage(callback){
			obj.api.at(function(at){
			obj.api.run("collect_get",'at='+at+'&c=1&a='+page,function(returnData){
					if(returnData.pn === page+""){
						page++;
						returnData=returnData.data;
					$.each(returnData,function(i,n){console.log(n);
						var addData=[];
						var add={image:n.g,title:n.d,dsc:n.e,price:n.ae,old:n.ad,star:n.ab,com:n.a,id:n.a,type:(n.b+8),oid:n.c};
					result.push(add);
						});
						layout(result,at);
						}
					if(callback){callback();}
					},function(e){obj.pop.on("alert",{text:(JSON.stringify(e))});});
				
				});
			}
			getPage();
			obj.reflash.add("collectProductList",function(callback){
			getPage(callback);
			});
			}
		});
	})($,app,config);