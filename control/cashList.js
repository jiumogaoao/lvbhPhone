// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"cashList",
		par:"type/search",
		tem:["top_third","cash_list"],
		fn:function(data){
			var result=[];
			var page=1;	
			var head=_.template(data.tem[0])({left:"",center:"提现",right:'<span class="fa fa-search"></span>查询'});
			$("#head").html(head);
			function layout(result){
				var list=[]
			$.each(result,function(i,n){
				var addData={"sub":"提现编号 "+n.a,"dsc":"提现时间"+n.f,"table":[{head:"提现金额",main:n.g},{head:"提现税费",main:n.h},{head:"实际提现",main:n.i}],"id":n.a}
				list.push(addData);
				});
				var listA=_.template(data.tem[1])({
				type:data.type,
				list:list});
			$("#scroller").html(listA);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				window.location.hash="accountSearch/"+data.type;
				});
			
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				}
			
			
			function getIncome(at){
				var send='at='+at+'&jparam={"c"="0"'+(data.search||'')+'}';
					obj.api.run("expend_get",send,layout,function(e){alert(JSON.stringify(e))});
				};	
			obj.api.at(getIncome);	
			}
		});
	})($,app,config);