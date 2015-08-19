// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"usefulEmail",
		par:"type/id/state/key",
		tem:["top_second","double_line_list","single_button"],
		fn:function(data){
			var result={}
			if(obj.cache("pruduct_input_"+data.id)){
				result=obj.cache("pruduct_input_"+data.id);
				}
			var head=_.template(data.tem[0])({
				left:"",
				center:"常用邮寄地址"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			function layout(list){
				var button=_.template(data.tem[2])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用邮寄地址',id:"payButton"});
				var main=_.template(data.tem[1])({enable:false,
					list:list,
					dscName:""});
			$("#scroller").html(main+button);
			$("#scroller .point").unbind("tap").bind("tap",function(){
				if(data.key=="0"){result.invoice.place=$(this).find(".dsc").html().replace(/ /g,"")}else{
					result.contract.place=$(this).find(".dsc").html().replace(/ /g,"");
					}
				obj.cache("pruduct_input_"+data.id,result);
					window.location.hash="productInput/"+data.type+"/"+data.id+"/"+data.state;
				})
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				}
			
			function getList(at){
				obj.api.run("email_get",'at='+at+'&tp=3',function(returnData){
					var list=[];
					$.each(returnData,function(i,n){
						list.push({title:n.b,dsc:n.d});
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