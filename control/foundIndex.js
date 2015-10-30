// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"foundIndex",
		par:"",
		tem:["foot_nav","top_second","pic_table"],
		fn:function(data){
			var head=_.template(data.tem[1])({
				left:" ",
				center:"在这里发现世界，发现自我..."
				});
			$("#head").html(head);
			$("#head .center").css("font-size",".5rem");
			$("#scroller").html(data.tem[2]);
			$("#foot").html(data.tem[0]);
			$("#foot .fa-found").addClass("hl");
			$("#foot .point").eq(1).addClass("hl");
			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
			$('img').load(function(){
				//myScroll.refresh();
				});
			function getIndex(at){
				obj.api.run("diy_type_get","at="+at,function(returnData){
					for (var i=0;i<7;i++){
						if(returnData[i]){
							$("#scroller .frame_"+i).attr("num",returnData[i].a);
							$("#scroller .frame_"+i+" .title").html(returnData[i].b);
							$("#scroller .frame_"+i+" .icon").attr("src",returnData[i].f+"62_"+returnData[i].e);
							}
						}
					},function(e){
					obj.pop.on("alert",{text:(JSON.stringify(e))});
					});
				}
			
			obj.api.at(getIndex);
			}
		});
	})($,app,config);