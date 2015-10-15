// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"usefulTraveler",
		par:"type/id/state",
		tem:["top_second","double_line_list","single_button","bottom_button"],
		fn:function(data){
			var page=1;
			var last=false;
			var result={};
			var resultA=[];
			var resultB=[];
			
			if(obj.cache("pruduct_input_"+data.id)){
				result=obj.cache("pruduct_input_"+data.id);
				}
			var head=_.template(data.tem[0])({
				left:"",
				center:"常用旅客"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			
			function layout(returnData){
				
				var main=_.template(data.tem[1])({
					enable:data.type?true:false,
					list:resultA,
					dscName:"手机号"
					});
				var button=_.template(data.tem[3])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用旅客',id:"addTraveller"});
				var buttonSend=_.template(data.tem[2])({text:'确定',id:"addTravellerA"});
			$("#scroller").html(main+buttonSend);
			$("#addTravellerA").unbind("tap").bind("tap",function(){
				if(!result.traveler){
					result.traveler=[""];
					}
				$("#scroller .hl").each(function(i){
					result.traveler[i]=resultB[$(this).parents(".point").attr("num")];
					});
				obj.cache("pruduct_input_"+data.id,result);
					window.location.hash="productInput/"+data.type+"/"+data.id+"/"+data.state;
				});
			$("#foot").height("1.3rem");
			$("#foot").html(button);
			$(".bottom_button_frame").css({"height":"1.3rem","padding":"0px"});
			$(".bottom_button").css({
				"background-color":"#009eff",
				"width": "100%",
				"border-radius":"0px"
				});
			$("#foot").show();
			$("#scroller .fa-checkbox").unbind("tap").bind("tap",function(){
				if($(this).data("choose")){
					$(this).data("choose",false);
					$(this).removeClass("hl");
					}else{
						if($("#scroller .hl").length<result.traveler.length){
							$(this).data("choose",true);
						$(this).addClass("hl");
							}else{
								obj.pop.on("alert",{text:("可选人数已满")});
								}
						
						}
				});
			$("#addTraveller").unbind("tap").bind("tap",function(){
				if(data.type){
					window.location.hash="travellerAdd/"+data.type+"/"+data.id+"/"+data.state;
					}else{
						window.location.hash="travellerAdd";
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
				if(!last){	
				obj.api.run("traveler_get",'at='+at+'&a='+page,function(returnData){
					if(returnData.length === 10){
						page++;
						}else{
						last=true;	
							}
					$.each(returnData,function(i,n){
							resultB.push(n);
							resultA.push({title:n.b,dsc:n.f,type:n.q,enable:(n.q==="2")?true:false});
						});
					layout(returnData);
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
			obj.reflash.add("usefulTraveler",function(callback){
			getPage(callback);
			});		
			}
		});
	})($,app,config);