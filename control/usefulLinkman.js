// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"usefulLinkman",
		par:"type/id/state",
		tem:["top_second","double_line_list","single_button"],
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
					enable:false,
					list:list,
					dscName:"手机号"
					})
					
			var button=_.template(data.tem[2])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用联系人',id:"payButton"});
			$("#scroller").html(main+button);
			$("#scroller .point").unbind("tap").bind("tap",function(){
				result.linkMan={
					name:list[$(this).attr("num")].title,
					tel:list[$(this).attr("num")].dsc,
					email:list[$(this).attr("num")].email
				}
				obj.cache("pruduct_input_"+data.id,result);
					window.location.hash="productInput/"+data.type+"/"+data.id+"/"+data.state;
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				})
			}
			function getList(at){
				obj.api.run("linker_get",'at='+at+'&tp=3',function(returnData){
					var list=[];
					$.each(returnData,function(i,n){
						list.push({title:n.b,dsc:n.c,email:n.d});
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