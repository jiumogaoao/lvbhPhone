// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"accountList",
		par:"type/search",
		tem:["top_third","account_list"],
		fn:function(data){
			var titleArry=["产品体验奖励","渠道体验奖励","取消订单退回","成交订单","取消订单支出","提现"];
			var dscArry=["返奖时间","返奖周期","返奖时间","成交订单","交易时间","提现时间"];
			var headArry=[
			["奖金比例","奖金比例","取消违约金","订单编号","取消违约金","提现税费","实际提现"],
			["奖金金额","奖金金额","","","","",""]
			];
			var result=[];
			var page=1;
			var head=_.template(data.tem[0])({left:"",center:titleArry[data.type],right:'<span class="fa fa-search"></span>查询'});
			$("#head").html(head);
			function layout(list,at){
			function dscTime(n){
				if(data.type === "0"||data.type === "2"){
					return n.i;
					}else if(data.type === "3"){
						return n.p||"";
						}else if(data.type === "4"){
							return n.g;
							}else{
							return "待会算（交易当前季度）";
							}
				}
			function formSecond(n){
				if(data.type === "0"||data.type === "1"){
					return n.g;
					}else if(data.type === "2"){
						return n.n;
						}else{
							return n.a;
							}
				}
			function subNum(n){
				if(data.type === "3"){
					return "已成交";
					}else{
						return "订单编号"+n.a;
						}
				}
			function getId(n){
				if(data.type === "4"){
					return n.a;
					}else{
						return n.q;
						}
				}
			$.each(list,function(i,n){
				var addData={"type":n.c,"sub":subNum(n),"title":n.d,"dsc":dscArry[data.type]+dscTime(n),"table":[{head:"订单金额",main:n.e},{head:headArry[0][data.type],main:formSecond(n)}],"id":getId(n)};
				if(data.type === "0"||data.type === "1"){
					addData.table[2]={head:headArry[1][data.type],main:n.h};
					}
				result.push(addData);
				});
				var listA=_.template(data.tem[1])({
				type:data.type,
				list:result});
			$("#scroller").html(listA);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				window.location.hash="accountSearch/"+data.type;
				});
			
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
				$('img').load(function(){
				//myScroll.refresh();
				});
				}
			
			function getIncome(at){
				function getPage(callback){
					var send="";
				if(data.type === "3"||data.type === "4"){
					send='at='+at+'&jparam={"c"="'+(Number(data.type)-2)+'","b"="'+page+'"'+(data.search||'')+'}';
					obj.api.run("expend_get",send,function(list){
						if(list.pn === page+""){
					page++;
					list=list.data;
						layout(list,at);}
						if(callback){callback();}
						},function(e){obj.pop.on("alert",{text:(JSON.stringify(e))});});
					}else{
					send='at='+at+'&jparam={"c"="'+data.type+'","b"="'+page+'"'+(data.search||'')+'}';
					obj.api.run("income_get",send,function(list){
						if(list.pn === page+""){
					page++;
					list=list.data;
						layout(list,at);}
						if(callback){callback();}
						},
					function(e){obj.pop.on("alert",{text:(JSON.stringify(e))});});
						}
				}
				getPage();
			obj.reflash.add("accountList",function(callback){
			getPage(callback);
			});	
				}
			obj.api.at(getIncome);	
			
			}
		});
	})($,app,config);