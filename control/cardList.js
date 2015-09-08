// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"cardList",
		par:"id/type",
		tem:["top_second","card_list","single_button"],
		fn:function(data){
			$("body").css({"background-color":"#fff"});
			var titleArry=["储蓄卡支付","信用卡支付"];
			var cardArry=[
			[
				{id:"12",img:"img/center_logo_industrlal and commerclal.png","name":"ICBC_D"},
				{id:"9",img:"img/center_logo_china cttic.png","name":"CITIC"},
				{id:"3",img:"img/center_logo_aerienltaral.png","name":"ABC"},
				{id:"18",img:"img/center_logo_aerienltaral.png","name":"CMB_D"},
				{id:"6",img:"img/center_logo_minsheng.png","name":"CMBC_D"},
				{id:"13",img:"img/center_logo_beijing.png","name":"BOB"},
				{id:"11",img:"img/center_logo_pudong.png","name":"SPDB"},
				{id:"7",img:"img/center_logo_communications.png","name":"COMM_D"},
				{id:"4",img:"img/center_logo_communications.png","name":"CCB_D"},
				{id:"14",img:"img/center_logo_post.png","name":"POSTGC"},
				{id:"8",img:"img/centet_logo_development.png","name":"GDB_D"},
				{id:"21",img:"img/center_logo_industrid.png","name":"CIB_D"},
				{id:"10",img:"img/centet_icom_shenzhen development.png","name":"SDB"},
				{id:"17",img:"img/center_logo_china.png","name":"BOC_D"},
				{id:"5",img:"img/center_logo_everbright.png","name":"CEB_D"},
				{id:"22",img:"img/center_logo_east asia.png","name":"BEA_D"},
				{id:"19",img:"img/conter_logo_ping an.png","name":"PAB"}
			],
			[
				{id:"24",img:"img/center_logo_industrlal and commerclal.png","name":"ICBC_C"},
				{id:"23",img:"img/centet_icom_merehants.png","name":"CMB_C"},
				{id:"26",img:"img/center_logo_minsheng.png","name":"CMBC_C"},
				{id:"28",img:"img/center_logo_communications.png","name":"COMM_C"},
				{id:"25",img:"img/center_logo_construction.png","name":"CCB_C"},
				{id:"27",img:"img/center_logo_industrid.png","name":"CIB_C"},
				{id:"30",img:"img/centet_logo_development.png","name":"GDB_C"},
				{id:"31",img:"img/center_logo_china.png","name":"BOC_C"},
				{id:"29",img:"img/center_logo_everbright.png","name":"CEB_C"},
				{id:"32",img:"img/center_logo_east asia.png","name":"BEA_C"}
			]
			];
			var head=_.template(data.tem[0])({left:"",center:titleArry[data.type]});
			$("#head").html(head);
			var button=_.template(data.tem[2])({id:"gotopay",text:"下一步"});
			$("#foot").html(button);
			$(".single_button").css({"margin-top":"0px"});
			$("#foot").show();
			function layout(result){
				var main=_.template(data.tem[1])(result);
				$("#scroller").html(main);
				$("#scroller .point").unbind("tap").bind("tap",function(){
					$("#scroller .point").removeClass("hl");
					$("#scroller .point .fa").removeClass("hl");
					$(this).addClass("hl");
					$(this).find(".fa").addClass("hl");
					});
				$("#scroller").css("padding-bottom","1.5rem");
				var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				$('img').load(function(){
				myScroll.refresh();
				});
				}
			
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			
			function getDetail(at){
				obj.api.run("pay_detail",'at='+at+'&a='+data.id,function(returnData){
					console.log(returnData);
					layout({
						lastTime:returnData.b,
						number:returnData.go.x,
						name:returnData.go.n,
						start:returnData.go.r.split(" ")[0],
						end:moment(returnData.go.r.split(" ")[0],"YYYY-MM-DD").add(Number(returnData.lvDays),'days').format("YYYY-MM-DD"),
						city:returnData.go.o,
						price:returnData.go.i,
						cardList:cardArry[data.type]
						});
					},function(e){alert(JSON.stringify(e));});
				}
			obj.api.at(getDetail);
			}
		});
	})($,app,config);