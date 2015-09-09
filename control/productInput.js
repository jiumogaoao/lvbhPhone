// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"productInput",
		par:"type/id/state",
		tem:["top_second","product_input","pay_list"],
		fn:function(data){
			var sellArry=["","","n","o","p","q"];
			var typeArry={"12":"gtcf","13":"gtmd"};
			var result={
				state:data.state,
				date:{
					c:"请选择团期",
					g:0,
					h:0,
					i:0,
					j:0,
					k:0,
					l:0,
					m:0,
					n:0,
					o:0,
					p:0,
					q:0
					},
				traveler:[],
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
				agree:false,
				dsc:""
				};
			if(obj.cache("pruduct_input_"+data.id)){
				result=obj.cache("pruduct_input_"+data.id);
				}
				console.log(result);
			var head=_.template(data.tem[0])({
				left:"",
				center:"填写订单信息"
				});
			
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
		function layout(at){
			function totalCount(target){
				if((result.child||result.child2)&&!result.man){
					alert("儿童必须有成人陪同");
					result.man=1;
					$("#scroller [d_key='man'] input").val(1);
					}
				if(result.oldman+result.oldman2===1&&!result.man){
					alert("老人必须结伴或由成人陪同");
					result.man=1;
					$("#scroller [d_key='man'] input").val(1);
					}
				if((result.man+result.child+result.child2+result.oldman+result.oldman2)===0){
					alert("参团人数至少1人");
					result.man=1;
					$("#scroller [d_key='man'] input").val(1);
					}
				var total=0;
				$("#scroller [D_type='number']").each(function(){
					total+=Number($(this).find("input").val());
					if($(this).find("input").val()==="0"){
						$(this).find(".numberSub").addClass("disable");
						}else{
							$(this).find(".numberSub").removeClass("disable");
							}
					});
				var totalPay=result.man*result.date.g+result.child*result.date.h+result.child2*result.date.i+result.oldman*result.date.j+result.oldman2*result.date.k;
				if(result.single){
					totalPay-=(total-result.child2)*result.date.l;
					}
				if(total>1&&total<=5){
					totalPay-=result.date[sellArry[total]]*total;
					$("[D_key='sell']").html("￥<span class='numCLASS'>"+(result.date[sellArry[total]]*total)+"</span>元");
					}else if(total>5){
						totalPay-=result.date.q*total;
						$("[D_key='sell']").html("￥<span class='numCLASS'>"+(result.date.q*total)+"</span>元");
						}else{
							$("[D_key='sell']").html("￥<span class='numCLASS'>0</span>元");
							}
				$("#scroller .totalPrice").html("￥<span class='numCLASS'>"+totalPay+"</span>");
				$("#scroller #totalMan").html("<span class='numCLASS'>"+total+"</span>人");
				$("#scroller #traveler").empty();
				if(!result.traveler){
					result.traveler=[];
					}
				var newTravel=[];
				for (var i=0;i<total;i++){
					var nb="";
					if(i===(total-1)){
						nb="nb";
						}
					newTravel[i]=result.traveler[i]||{b:"姓名"};
					$("#scroller #traveler").append('<div class="inputList '+nb+'">'+
						'<div class="inputTitle">出游人'+(i+1)+'</div>'+
						'<div class="readonly">'+newTravel[i].b+'</div>'+
						'<div class="clear"></div>'+
					'</div>');
					}
				result.traveler=newTravel;
				$("#scroller [D_type='inputGroup']").unbind("change").bind("change",function(){
				if(!obj.control.pointParse(result,$(this).attr("D_key"))){
					obj.control.pointParse(result,$(this).attr("D_key"),[""]);
					}
					obj.control.pointParse(result,$(this).attr("D_key"))[$(this).attr("D_num")]=$(this).val();
					console.log(result);
				});
				var foot=_.template(data.tem[2])(result);
				$("#foot").html(foot);
				
					$("#foot .pay_list .payButton").unbind("tap").bind("tap",function(){
						
				if(!result.date.b){
					alert("请先选择团期");
					return false;
					}
				if(!result.linkMan.name||!result.linkMan.tel||!result.linkMan.email){
					alert("请完整填写联系人信息");
					return false;
					}
				if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(result.linkMan.tel))){
					alert("联系人手机格式有误");
					return false;
					}
				if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(result.linkMan.email))){
					alert("联系人邮箱格式有误");
					return false;
					}
				if(result.invoice.on&&(!result.invoice.title||!result.invoice.place||!result.invoice.phone||!result.invoice.name)){
					alert("如需发票，请完整填写相关信息");
					return false;
					}
				if(result.invoice.on&&!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(result.invoice.phone))){
					alert("发票手机格式有误");
					return false;
					}
				if(result.contract.on&&(!result.contract.name||!result.contract.phone||!result.contract.place)){
					alert("如需邮寄合同，请完整填写相关信息");
					return false;
					}
				if(result.contract.on&&!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(result.contract.phone))){
					alert("邮寄合同手机格式有误");
					return false;
					}
				if(!result.agree){
					alert("必须接受合同条款才能报团");
					return false;
					}
				var singleMan=0;
				var correct=1;
				if(!result.single){
					singleMan=result.man+result.child+result.oldman+result.oldman2;
					}
				var goparam={
					a:data.type,
					b:data.id,
					c:result.date.b,
					j:data.state,
					d1:result.man,
					d3:result.child,
					d5:result.child2,
					d7:result.oldman,
					d8:result.oldman2,
					d9:result.man+result.child+result.oldman+result.oldman2
					};
				var goiparam={
					d:result.invoice.on?"1":"0",
					f:result.contract.on?"1":"0",
					g:result.agree.on?"1":"0",
					h:result.dsc,
					toursParam:[],
					contactParam:{b:result.linkMan.name,c:result.linkMan.tel,d:result.linkMan.email},
					addressParam:[],
					j:typeArry[data.type]
					};
				if(result.invoice.on){
					goiparam.invoiceParam={b:result.invoice.title};
					goiparam.addressParam.push({b:result.invoice.name,d:result.invoice.place,f:result.invoice.phone});
					}
				if(result.contract.on){
					goiparam.addressParam.push({b:result.contract.name,d:result.contract.place,f:result.contract.phone});
					}
				$.each(result.traveler,function(i,n){
					if(n.a){
						goiparam.toursParam.push(n);
						}else{
							alert("请完成出游人信息");
							correct=0;
							return false;
							}	
					});	
				if(correct){
					obj.api.run("deal_add",'at='+at+'&goparam='+JSON.stringify(goparam)+'&goiparam='+JSON.stringify(goiparam),function(returnData){
					obj.cache("pruduct_input_"+data.id,result);
					window.location.hash="dealSuccess/"+data.id;
					},function(e){
					alert(JSON.stringify(e));
					});
					}
				
				
						});
					
				myScroll.refresh();
				}
			var main=_.template(data.tem[1])(result);
			$("#scroller").html(main);
			
			totalCount();

			$("#scroller #postScript").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="postScript/"+data.type+"/"+data.id+"/"+data.state;
				});
			$("#scroller #message").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="dealMessage";
				});
			$("#scroller #usefulEmail0").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="usefulEmail/"+data.type+"/"+data.id+"/"+data.state+"/0";
				});
			$("#scroller #usefulEmail1").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="usefulEmail/"+data.type+"/"+data.id+"/"+data.state+"/1";
				});
			$("#scroller #usefulInvoice").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="usefulInvoice/"+data.type+"/"+data.id+"/"+data.state;
				});
			$("#scroller #usefulLinkman").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="usefulLinkman/"+data.type+"/"+data.id+"/"+data.state;
				});
			$("#scroller #usefulTraveler").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="usefulTraveler/"+data.type+"/"+data.id+"/"+data.state;
				});
			$("#scroller #date").unbind("tap").bind("tap",function(){
				obj.cache("pruduct_input_"+data.id,result);
				window.location.hash="calendar/"+data.type+"/"+data.id+"/"+data.state+"/1";
				});
			$("#scroller [D_type='input']").unbind("change").bind("change",function(){
					obj.control.pointParse(result,$(this).attr("D_key"),$(this).val());
				});
			$("#scroller [D_type='inputGroup']").unbind("change").bind("change",function(){
				if(!obj.control.pointParse(result,$(this).attr("D_key"))){
					obj.control.pointParse(result,$(this).attr("D_key"),[""]);
					}
					obj.control.pointParse(result,$(this).attr("D_key"))[$(this).attr("D_num")]=$(this).val();
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
					totalCount();
				});
			$("#scroller [D_type='toggle']").each(function(){
				var that=this;
				$(that).unbind("tap").bind("tap",function(){
				if(obj.control.pointParse(result,$(this).attr("D_key"))){
					obj.control.pointParse(result,$(this).attr("D_key"),false);
					$(this).find(".fa").removeClass("hl");
					$(this).parents(".list").find(".inputList").hide();
					$(this).parents(".list").find(".head").removeClass("bb");
					}else{
						obj.control.pointParse(result,$(this).attr("D_key"),true);
						$(this).find(".fa").addClass("hl");
						$(this).parents(".list").find(".inputList").show();
						$(this).parents(".list").find(".head").addClass("bb");
						}
						myScroll.refresh();
				});
				});
			
			$("#foot .pay_list .payButton").unbind("tap").bind("tap",function(){
				if(!result.date.b){
					alert("请先选择团期");
					return false;
					}
				if(!result.linkMan.name||!result.linkMan.tel||!result.linkMan.email){
					alert("请完整填写联系人信息");
					return false;
					}
				if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(result.linkMan.tel))){
					alert("联系人手机格式有误");
					return false;
					}
				if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(result.linkMan.email))){
					alert("联系人邮箱格式有误");
					return false;
					}
				if(result.invoice.on&&(!result.invoice.title||!result.invoice.place||!result.invoice.phone||!result.invoice.name)){
					alert("如需发票，请完整填写相关信息");
					return false;
					}
				if(result.invoice.on&&!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(result.invoice.phone))){
					alert("发票手机格式有误");
					return false;
					}
				if(result.contract.on&&(!result.contract.name||!result.contract.phone||!result.contract.place)){
					alert("如需邮寄合同，请完整填写相关信息");
					return false;
					}
				if(result.contract.on&&!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(result.contract.phone))){
					alert("邮寄合同手机格式有误");
					return false;
					}
				if(!result.agree){
					alert("必须接受合同条款才能报团");
					return false;
					}
				var singleMan=0;
				var correct=1;
				if(!result.single){
					singleMan=result.man+result.child+result.oldman+result.oldman2;
					}
				var goparam={
					a:data.type,
					b:data.id,
					c:result.date.b,
					j:data.state,
					d1:result.man,
					d3:result.child,
					d5:result.child2,
					d7:result.oldman,
					d8:result.oldman2,
					d9:result.man+result.child+result.oldman+result.oldman2
					};
				var goiparam={
					d:result.invoice.on?"1":"0",
					f:result.contract.on?"1":"0",
					g:result.agree.on?"1":"0",
					h:result.dsc,
					toursParam:[],
					contactParam:{b:result.linkMan.name,c:result.linkMan.tel,d:result.linkMan.email},
					addressParam:[],
					j:typeArry[data.type]
					};
				if(result.invoice.on){
					goiparam.invoiceParam={b:result.invoice.title};
					goiparam.addressParam.push({b:result.invoice.name,d:result.invoice.place,f:result.invoice.phone});
					}
				if(result.contract.on){
					goiparam.addressParam.push({b:result.contract.name,d:result.contract.place,f:result.contract.phone});
					}
				$.each(result.traveler,function(i,n){
					if(n.a){
						goiparam.toursParam.push(n);
						}else{
							alert("请完成出游人信息");
							correct=0;
							return false;
							}	
					});	
				if(correct){
					obj.api.run("deal_add",'at='+at+'&goparam='+JSON.stringify(goParam)+'&goiparam='+JSON.stringify(goiParam),function(returnData){
					window.location.hash="dealSuccess/"+returnData.go.x+"/"+returnData.go.m;
					},function(e){
					alert(JSON.stringify(e));
					});
					}
				
				});
			$("#scroller .title_input_list").css({"border-top":"1px solid #dcdcdc"});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
			}
			
			obj.api.at(layout);	
				
			}
		});
	})($,app,config);