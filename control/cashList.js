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
			function layout(list,at){
			$.each(list,function(i,n){
				var addData={"sub":"提现编号 "+n.a,"dsc":"提现时间"+n.f,"table":[{head:"提现金额",main:n.g},{head:"提现税费",main:n.h},{head:"实际提现",main:n.i}],"id":n.a};
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
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				})
				}
			
			
			function getIncome(at){
				function getPage(callback){
					var send='at='+at+'&jparam={"c"="0"'+(data.search||'')+',"b"="'+page+'"}';
					obj.api.run("expend_get",send,function(list){
						if(list.pn === page+""){
					page++;
					list=list.data;
						layout(list,at);
						}
						if(callback){callback();}
						},function(e){alert(JSON.stringify(e));});
					}
				getPage();
			obj.reflash.add("cashList",function(callback){
			getPage(callback);
			});	
				}
			obj.api.at(getIncome);	
			}
		});
	})($,app,config);