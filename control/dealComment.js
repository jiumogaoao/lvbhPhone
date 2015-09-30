// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"dealComment",
		par:"id/type/code/",
		tem:["top_second","deal_comment","single_button"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"产品点评"});
			$("#head").html(head);
			var button=_.template(data.tem[2])({text:"提交",id:"submit"});
			$("#scroller").html(data.tem[1]+button);
			$(".top_third .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			$("#submit").unbind("click").bind("click",function(){
				obj.api.at(function(at){
					var sendString='at='+at+'&a=';
					$(".list").each(function(i){
						sendString+=$(this).attr("name")+":"+$(this).find(".hl").attr("socer");
						if($(".list").length-1 !== i){
							sendString+=",";
							}
						});
					sendString+="&b="+data.type+"&c="+data.code+"&d="+data.id+"&e="+$("#dsc");
					obj.api.run("deal_comment",sendString,function(){
						obj.pop.on("alert",{text:"评论提交成功"});
						window.location.hash="dealIndex";
						},function(e){
						obj.pop.on("alert",{text:JSON.stringify(e)});
						});
					});
				
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			$('img').load(function(){
				myScroll.refresh();
				});
			}
		});
	})($,app,config);