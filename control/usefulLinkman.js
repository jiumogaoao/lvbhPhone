// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"usefulLinkman",
		par:"type/id/state",
		tem:["top_second","double_line_list","single_button"],
		fn:function(data){
			var page=1;
			var resultA=[];
			var result={};
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
			function layout(){
				var main=_.template(data.tem[1])({
					enable:false,
					list:resultA,
					dscName:"手机号"
					});
					
			var button=_.template(data.tem[2])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用联系人',id:"addLinkman"});
			$("#scroller").html(main+button);
			$("#scroller #addLinkman").unbind("tap").bind("tap",function(){
				window.location.hash="linkmanAdd/"+data.type+"/"+data.id+"/"+data.state;
				});
			$("#scroller .point").unbind("tap").bind("tap",function(){
				result.linkMan={
					name:resultA[$(this).attr("num")].title,
					tel:resultA[$(this).attr("num")].dsc,
					email:resultA[$(this).attr("num")].email
				};
				obj.cache("pruduct_input_"+data.id,result);
					window.location.hash="productInput/"+data.type+"/"+data.id+"/"+data.state;
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
				obj.api.run("linker_get",'at='+at+'&tp=3&pn='+page,function(returnData){
					if(returnData.pn === page+""){
					page++;
					returnData=returnData.data;
					$.each(returnData,function(i,n){
						resultA.push({title:n.b,dsc:n.c,email:n.d});
						});
					layout();}
					if(callback){callback();}
					},function(e){
					alert(JSON.stringify(e));
					});
			}
			obj.api.at(getList);
				}	
			getPage();
			obj.reflash.add("usefulLinkman",function(callback){
			getPage(callback);})
			}
		});
	})($,app,config);