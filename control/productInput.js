// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"productInput",
		par:"type/id",
		tem:["top_second","product_input"],
		fn:function(data){
			var result={
				traveler:[""],
				man:1,
				child:0,
				child2:0,
				oldman:0,
				oldman2:0,
				single:true,
				linkMan:{
					name:"",
					tel:"",
					email:""
				},
				invoice:{
					on:false,
					title:"",
					place:"",
					name:"",
					phone:""
					},
				contract:{
					on:false,
					place:"",
					name:"",
					phone:""
					},
				agree:false
				};
			if(obj.cache("pruduct_input_"+data.id)){
				result=obj.cache("pruduct_input_"+data.id);
				obj.cache("pruduct_input_"+data.id,null,true);
				}
				console.log(result);
			var head=_.template(data.tem[0])({
				left:"",
				center:"填写订单信息"
				});
			function totalCount(){
				var total=0;
				$("#scroller [D_type='number']").each(function(){
					total+=Number($(this).find("input").val());
					});
				$("#scroller #totalMan").html(total+"人");
				$("#scroller #traveler").empty();
				if(!result.traveler){
					result.traveler=[];
					}
				var newTravel=[];
				for (var i=0;i<total;i++){
					newTravel[i]=result.traveler[i]||"";
					$("#scroller #traveler").append('<div class="inputList">'+
						'<div class="inputTitle">出游人'+(i+1)+'</div>'+
						'<input placeholder="姓名" D_num="'+i+'" D_key="traveler" D_type="inputGroup" value="'+newTravel[i]+'"/>'+
						'<div class="clear"></div>'+
					'</div>')
					}
				result.traveler=newTravel;
				$("#scroller [D_type='inputGroup']").unbind("change").bind("change",function(){
				if(!obj.control.pointParse(result,$(this).attr("D_key"))){
					obj.control.pointParse(result,$(this).attr("D_key"),[""]);
					}
					obj.control.pointParse(result,$(this).attr("D_key"))[$(this).attr("D_num")]=$(this).val();
					console.log(result);
				});
				}
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			var main=_.template(data.tem[1])(result)
			$("#scroller").html(main);
			$("#scroller #usefulEmail0").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="usefulEmail/"+data.type+"/"+data.id+"/0";
				})
			$("#scroller #usefulEmail1").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="usefulEmail/"+data.type+"/"+data.id+"/1";
				})
			$("#scroller #usefulInvoice").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="usefulInvoice/"+data.type+"/"+data.id;
				})
			$("#scroller #usefulLinkman").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="usefulLinkman/"+data.type+"/"+data.id;
				})
			$("#scroller #usefulTraveler").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="usefulTraveler/"+data.type+"/"+data.id;
				});
			$("#scroller #date").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="calendar/"+data.type+"/"+data.id;
				});
			$("#scroller [D_type='inputGroup']").unbind("change").bind("change",function(){
				if(!obj.control.pointParse(result,$(this).attr("D_key"))){
					obj.control.pointParse(result,$(this).attr("D_key"),[""]);
					}
					obj.control.pointParse(result,$(this).attr("D_key"))[$(this).attr("D_num")]=$(this).val();
					console.log(result);
				});
			$("#scroller [D_type='number']").each(function(){
				var that=this;
				$(that).find(".numberSub").unbind("tap").bind("tap",function(){
					if(obj.control.pointParse(result,$(that).attr("D_key"))&&obj.control.pointParse(result,$(that).attr("D_key"))>0){
						obj.control.pointParse(result,$(that).attr("D_key"),obj.control.pointParse(result,$(that).attr("D_key"))-1);
						}else{
							obj.control.pointParse(result,$(that).attr("D_key"),0);
							}
					$(that).find("input").val(obj.control.pointParse(result,$(that).attr("D_key")));
					totalCount();
					});
				$(that).find(".numberAdd").unbind("tap").bind("tap",function(){
						if(!obj.control.pointParse(result,$(that).attr("D_key"))){
							obj.control.pointParse(result,$(that).attr("D_key"),Number($(that).find("input").val()));
							}
						obj.control.pointParse(result,$(that).attr("D_key"),obj.control.pointParse(result,$(that).attr("D_key"))+1);
					$(that).find("input").val(obj.control.pointParse(result,$(that).attr("D_key")));
					totalCount();
					});
				$(that).find("input").unbind("change").bind("change",function(){
					obj.control.pointParse(result,$(that).attr("D_key"),Number($(that).find("input").val()));
					totalCount();
					});	
				});
			$("#scroller [D_type='checkBox']").unbind("tap").bind("tap",function(){
				var that=this;
				if(obj.control.pointParse(result,$(that).attr("D_key"))){
					obj.control.pointParse(result,$(that).attr("D_key"),false);
					$(that).removeClass("hl");
					}else{
						obj.control.pointParse(result,$(that).attr("D_key"),true);
						$(that).addClass("hl");
						}
				});
			$("#scroller [D_type='toggle']").each(function(){
				var that=this;
				$(that).unbind("tap").bind("tap",function(){
				if(obj.control.pointParse(result,$(this).attr("D_key"))){
					obj.control.pointParse(result,$(this).attr("D_key"),false);
					$(this).removeClass("hl");
					$(this).parents(".list").find(".inputList").hide();
					}else{
						obj.control.pointParse(result,$(this).attr("D_key"),true);
						$(this).addClass("hl");
						$(this).parents(".list").find(".inputList").show();
						}
				});
				})
			
			$("#scroller .product_input .button").unbind("tap").bind("tap",function(){
				obj.bottom.on("pay_list",{},function(){
					
					},function(e){
					alert(JSON.stringify(e));
					});
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			function getList(at,now){
				/*obj.api.run(apiArry[data.type],'aid='+now.startId,function(returnData){
					debugger;
					},function(e){
					alert(JSON.stringify(e));
					})*/
				}
			function getNow(at){
				obj.api.run("city_cf_get","at="+at,function(returnData){
					getList(at,returnData);
					});
				}
			obj.api.at(getNow);	
				
			}
		});
	})($,app,config);