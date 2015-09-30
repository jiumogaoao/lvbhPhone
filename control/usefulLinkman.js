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
			var out=false;
			if(obj.cache("pruduct_input_"+data.id)){
				result=obj.cache("pruduct_input_"+data.id);
				}
			var head=_.template(data.tem[0])({
				left:"",
				center:"常用联系人"
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
			$("#scroller #addLinkman").unbind("click").bind("click",function(){
				if(data.type){
					window.location.hash="linkmanAdd/"+data.type+"/"+data.id+"/"+data.state;
					}else{
						window.location.hash="linkmanAdd";
						}
				
				});
			$("#scroller .point").unbind("click").bind("click",function(){
				if(data.type){
					result.linkMan={
					name:resultA[$(this).attr("num")].title,
					tel:resultA[$(this).attr("num")].dsc,
					email:resultA[$(this).attr("num")].email
				};
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
					obj.api.run("linker_get",'at='+at+'&tp=3&pn='+page,function(returnData){
					if(returnData.data.length === 10){
					page++;
					}else{
						out=true;
						}
					returnData=returnData.data;
					$.each(returnData,function(i,n){
						resultA.push({title:n.b,dsc:n.c,email:n.d});
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
			obj.reflash.add("usefulLinkman",function(callback){
			getPage(callback);});
			}
		});
	})($,app,config);