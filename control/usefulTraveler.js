// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"usefulTraveler",
		par:"type/id/state",
		tem:["top_third","double_line_list","single_button"],
		fn:function(data){
			var result={}
			if(obj.cache("pruduct_input_"+data.id)){
				result=obj.cache("pruduct_input_"+data.id);
				}
			var head=_.template(data.tem[0])({
				left:"",
				center:"常用旅客",
				right:"确定"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			
			function layout(list,returnData){
				$("#head .rightButton").unbind("click").bind("click",function(){
				if(!result.traveler){
					result.traveler=[""];
					}
				$("#scroller .hl").each(function(i){
					result.traveler[i]=returnData[$(this).parents(".point").attr("num")];
					});
				obj.cache("pruduct_input_"+data.id,result);
					window.location.hash="productInput/"+data.type+"/"+data.id+"/"+data.state;
				})
				var main=_.template(data.tem[1])({
					enable:true,
					list:list,
					dscName:"手机号"
					})
				var button=_.template(data.tem[2])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用旅客',id:"payButton"});
			$("#scroller").html(main+button);
			$("#scroller .fa-checkbox").unbind("tap").bind("tap",function(){
				if($(this).data("choose")){
					$(this).data("choose",false);
					$(this).removeClass("hl");
					}else{
						if($("#scroller .hl").length<result.traveler.length){
							$(this).data("choose",true);
						$(this).addClass("hl");
							}else{
								alert("可选人数已满")
								}
						
						}
				});
				var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				})
				}
			
			
			function getList(at){
				obj.api.run("traveler_get",'at='+at+'&tp=3',function(returnData){
					var list=[];
					$.each(returnData,function(i,n){
						list.push({title:n.b,dsc:n.f});
						})
					layout(list,returnData)
					},function(e){
					alert(JSON.stringify(e))
					})
				}
			obj.api.at(getList);		
			}
		});
	})($,app,config);