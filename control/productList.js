// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"productList",
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
			if(data.type=="0"){
				$("#scroller").html(listA);
				}else{
					$("#scroller").html(listA+button);
					$("#send").unbind("tap").bind("tap",function(){
						window.location.hash="productList/0";
						});
					}
			
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				window.location.hash="productList/"+pageArry[data.type];
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				}
			function getPage(callback){
			obj.api.at(function(at){
				var list=[
				{image:"http://",title:"毛里求斯-塞舌尔7晚9点自助游",dsc:"毛求洲际，塞舌尔凯宾斯基。",price:"9999",old:"10299",star:"123",com:"123",id:"1"},
				{image:"http://",title:"毛里求斯-塞舌尔7晚9点自助游",dsc:"毛求洲际，塞舌尔凯宾斯基。",price:"9999",old:"10299",star:"123",com:"123",id:"2"},
				{image:"http://",title:"毛里求斯-塞舌尔7晚9点自助游",dsc:"毛求洲际，塞舌尔凯宾斯基。",price:"9999",old:"10299",star:"123",com:"123",id:"3"},
				{image:"http://",title:"毛里求斯-塞舌尔7晚9点自助游",dsc:"毛求洲际，塞舌尔凯宾斯基。",price:"9999",old:"10299",star:"123",com:"123",id:"4"},
				{image:"http://",title:"毛里求斯-塞舌尔7晚9点自助游",dsc:"毛求洲际，塞舌尔凯宾斯基。",price:"9999",old:"10299",star:"123",com:"123",id:"5"}
				]
				layout(list);
				if(callback){callback();}
				return false;
				obj.api.run("deal_list_get",'at='+at+'&jparam={"c"="'+data.type+'","b"="'+page+'"}',function(returnData){
				if(returnData.pn === page+""){
					page++;
					returnData=returnData.data;
					var typeArry={"12":"出发地跟团","13":"目的地跟团"};
					$.each(returnData,function(i,n){
						var list={type:typeArry[n.e+""],state:n.i+"",title:n.f,start:n.l.split(" ")[0],end:n.m.split(" ")[0],price:n.n,last:n.r,id:n.a};
						result.push(list);
						});
					layout(result,at);
					}
					if(callback){callback();}
					},function(e){
					obj.pop.on("alert",{text:JSON.stringify(e)});
					});
				});
			}
			getPage();
			obj.reflash.add("productList",function(callback){
			getPage(callback);
			});
			}
		});
	})($,app,config);