// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"linkmanAdd",
		par:"type/id/state",
		tem:["top_third","linkman"],
		fn:function(data){
			var result={
				name:"",
				phone:"",
				mail:"",
				sex:"1",
				dsc:""
				};
			var head=_.template(data.tem[0])({left:"",center:"添加常用联系人",right:"保存"});
			$("#head").html(head);
			var main=_.template(data.tem[1])(result);
			$("#scroller").html(main);
			$("#scroller [D_type='input']").each(function(){
				var that=this;
				$(that).unbind("change").bind("change",function(){
					result[$(that).attr("D_key")]=$(that).val();
					});
				});
			$("#scroller [D_type='radio']").each(function(){
				var that=this;
				$(that).find("[D_type='radioPoint']").unbind("click").bind("click",function(){
					result[$(that).attr("D_key")]=$(this).attr("D_value");
					$(that).find(".radio").removeClass("hl");
					$(this).addClass("hl");
					});
				});
			$(".top_third .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("click").bind("click",function(){
				obj.api.at(function(at){
					obj.api.run("linker_add",'at='+at+'&tp=0&jparam='+JSON.stringify({b:result.name,c:result.phone,d:result.mail,e:result.sex,g:result.dsc}),function(){
						if(data.type){
							window.location.hash="usefulLinkman/"+data.type+"/"+data.id+"/"+data.state;
							}else{
								window.location.hash="usefulLinkman";
								}
						
						},function(e){JSON.stringify(e);});
					});
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);	
			
			
			}
		});
	})($,app,config);