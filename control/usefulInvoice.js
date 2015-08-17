// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"usefulInvoice",
		par:"type/id",
		tem:["top_second","single_line_list","single_button"],
		fn:function(data){
			var result={}
			if(obj.cache("pruduct_input_"+data.id)){
				result=obj.cache("pruduct_input_"+data.id);
				}
			var head=_.template(data.tem[0])({
				left:"",
				center:"预定流程"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			function layout(list){
			var main=_.template(data.tem[1])({
				list:list
				});
			var button=_.template(data.tem[2])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用发票抬头',id:"payButton"});
			$("#scroller").html(main+button);
			$("#scroller .point").unbind("tap").bind("tap",function(){
				result.invoice.title=$(this).html();
				obj.cache("pruduct_input_"+data.id,result);
					window.location.hash="productInput/"+data.type+"/"+data.id;
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);	
				}
			
				
			function getList(at){
				obj.api.run("invoice_get",'at='+at+'&tp=3',function(returnData){debugger;
					var list=[];
					$.each(returnData,function(i,n){
						list.push(n.b);
						})
					layout(list)
					},function(e){
					alert(JSON.stringify(e))
					})
				}
			obj.api.at(getList);	
			}
		});
	})($,app,config);