// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"usefulEmail",
		par:"type/id/state/key",
		tem:["top_second","double_line_list","single_button","bottom_button"],
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
				center:"常用邮寄地址"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			function layout(){
				var button=_.template(data.tem[3])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用邮寄地址',id:"addMail"});
				var main=_.template(data.tem[1])({enable:false,
					list:resultA,
					dscName:""});
			$("#scroller").html(main);
			$("#foot").height("1.3rem");
			$("#foot").html(button);
			$(".bottom_button_frame").css({"height":"1.3rem","padding":"0px"});
			$(".bottom_button").css({
				"background-color":"#009eff",
				"width": "100%",
				"border-radius":"0px"
				});
			$("#foot").show();
			$("#scroller #addMail").unbind("tap").bind("tap",function(){
				if(data.type){
					window.location.hash="emailAdd/"+data.type+"/"+data.id+"/"+data.state;
					}else{
						window.location.hash="emailAdd";
						}
				});
			$("#scroller .point").unbind("tap").bind("tap",function(){
				if(data.type){
					if(data.key==="0"){
					result.invoice.place=resultA[$(this).attr("num")].dsc;
					result.invoice.name=resultA[$(this).attr("num")].name;
					result.invoice.phone=resultA[$(this).attr("num")].phone;
					}else{
					result.contract.place=resultA[$(this).attr("num")].dsc;
					result.contract.name=resultA[$(this).attr("num")].name;
					result.contract.phone=resultA[$(this).attr("num")].phone;
					}
				obj.cache("pruduct_input_"+data.id,result);
					window.location.hash="productInput/"+data.type+"/"+data.id+"/"+data.state;
					}	
				});
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
				$('img').load(function(){
				//myScroll.refresh();
				});
				}
			
			
			function getPage(callback){
				
				function getList(at){
					if(!out){
					obj.api.run("email_get",'at='+at+'&tp=3&pn='+page,function(returnData){
					if(returnData.data.length===10){
						page++;
						}else{
							out=true;
							}
					returnData=returnData.data;
					$.each(returnData,function(i,n){
						resultA.push({title:n.b,dsc:n.d,name:n.b,phone:n.f});
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
			obj.reflash.add("usefulEmail",function(callback){
			getPage(callback);});
			}
		});
	})($,app,config);