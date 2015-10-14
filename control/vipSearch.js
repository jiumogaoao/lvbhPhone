// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"vipSearch",
		par:"",
		tem:["top_third","vip_search"],
		fn:function(data){
			$("body").css("background-color","#fff");
			var head=_.template(data.tem[0])({left:" ",center:"搜索",right:"取消"});
			$("#head").html(head);
			function layout(at){
				$("#scroller").html(data.tem[1]);
				$("#scroller input").unbind("change").bind("change",function(){
					$("#scroller .bottom").empty();
					obj.api.run("group_get","at="+at+"&a=0&b=10&d=0&e="+$(this).val(),function(returnData){
						returnData=returnData.data;
						$.each(returnData,function(i,n){
							$("<div class=\"point\" gid=\""+n.b+"\" gname=\""+n.i+"\">"+
								"<img src=\""+config.sour+"sns/tpu.jspx?at="+at+"&a=1&b="+n.i+"&c="+n.l+"\" class=\"left\" onerror=\"app.nofound(this,'img/collect_img_picture.png')\"/>"+
								"<div class=\"right\">"+
									"<div class=\"name\">"+n.c+"</div>"+
									"<div class=\"id\">ID: "+n.b+"</div>"+
								"</div>"+
								"<div class=\"clear\"></div>"+
							"</div>").appendTo($("#scroller .bottom"));
							});
							$("#scroller .bottom .point").unbind("tap").bind("tap",function(){
								window.location.hash="vipMemberList/"+$(this).attr("gid")+"/"+$(this).attr("gname");
								});
							//myScroll.refresh();
				$('img').load(function(){
					//myScroll.refresh();
					});
						},function(e){
						obj.pop.on("alert",{text:JSON.stringify(e)});
						});
					});
				$(".top_third .rightButton").unbind("tap").bind("tap",function(){
					window.history.go(-1);
					});
				//myScroll.refresh();
				$('img').load(function(){
					//myScroll.refresh();
					});
				
				}
			
			obj.api.at(layout);
			}
		});
	})($,app,config);