// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"usefulInvoice",
		par:"type/id/state",
		tem:["top_second","single_line_list","single_button"],
		fn:function(data){
			var resultA=[];
			var page=1;
			var result={};
			var out=false;
			if(obj.cache("pruduct_input_"+data.id)){
				result=obj.cache("pruduct_input_"+data.id);
				}
			var head=_.template(data.tem[0])({
				left:"",
				center:"常用发票抬头"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			function layout(){
			var main=_.template(data.tem[1])({
				list:resultA
				});
			var button=_.template(data.tem[2])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用发票抬头',id:"addInvoice"});
			$("#scroller").html(main+button);
			$("#scroller #addInvoice").unbind("click").bind("click",function(){
				if(data.type){
					window.location.hash="invoiceAdd/"+data.type+"/"+data.id+"/"+data.state;
					}else{
						window.location.hash="invoiceAdd";
						}
				
				});
			$("#scroller .point").unbind("click").bind("click",function(){
				if(data.type){
					result.invoice.title=$(this).html();
				obj.cache("pruduct_input_"+data.id,result);
					window.location.hash="productInput/"+data.type+"/"+data.id+"/"+data.state;
					}
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);	
				$('img').load(function(){
				myScroll.refresh();
				});
				}
			
				
			
			function getPage(callback){
				function getList(at){
				if(!out){
					obj.api.run("invoice_get",'at='+at+'&tp=3&pn='+page,function(returnData){
				if(returnData.data.length===10){
					page++;
					}else{
						out=true;
						}
					returnData=returnData.data;
					$.each(returnData,function(i,n){
						resultA.push(n.b);
						});
					layout();
					if(callback){callback();}
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
					}else{
						if(callback){callback();}
						}	
				
				}
			obj.api.at(getList);
				}	
			getPage();
			obj.reflash.add("usefulInvoice",function(callback){
			getPage(callback);});
			}
		});
	})($,app,config);