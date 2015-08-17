// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"calendar",
		par:"type/id",
		tem:["top_second"],
		fn:function(data){
			var result={};
			var apiArry={"12":"cf_detail_get","13":"md_detail_get"}
			if(obj.cache("pruduct_input_"+data.id)){
				result=obj.cache("pruduct_input_"+data.id);
				}
			var head=_.template(data.tem[0])({
				left:"",
				center:"选择团期"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			function layout(list){
				calendar.setData(list);
				calendar.setTarget("#scroller");
				calendar.run();
				$("#scroller .enable").unbind("tap").bind("tap",function(){
					result.date=$(this).attr("did");
					console.log(result);
					obj.cache("pruduct_input_"+data.id,result);
					window.location.hash="productInput/"+data.type+"/"+data.id;
					});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				}
			
			
			
			function getList(at){
				obj.api.run(apiArry[data.type],'aid='+data.id,function(returnData){
				var list={};
			$.each(returnData.priceArray,function(i,n){
				var date=n.c.split("-");
				if(!list[date[0]]){
					list[date[0]]={}
					}
				if(!list[date[0]][date[1]]){
					list[date[0]][date[1]]={}
					}
				list[date[0]][date[1]][date[2]]={price:n.f,id:n.b}
				if(n.e===0){
					list[date[0]][date[1]][date[2]].full=true;
					}
				});
				layout(list)
				})
				}
			obj.api.at(getList);	
			}
		});
	})($,app,config);