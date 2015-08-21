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
					console.log(result)
					})
				});
			$("#scroller [D_type='radio']").each(function(){
				var that=this;
				$(that).find("[D_type='radioPoint']").unbind("tap").bind("tap",function(){
					result[$(that).attr("D_key")]=$(this).attr("D_value");
					$(that).find("[D_type='radioPoint']").removeClass("hl");
					$(this).addClass("hl");
					console.log(result)
					})
				});
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				obj.api.at(function(at){
					obj.api.run("linker_get",'at='+at+'&tp=0&jparam='+JSON.stringify({b:result.name,c:result.phone,d:result.mail,e:result.sex,h:result.dsc}),function(){
						window.location.hash="usefulLinkman/"+data.type+"/"+data.id+"/"+data.state;
						},function(e){JSON.stringify(e);});
					});
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);	
			
			
			}
		});
	})($,app,config);