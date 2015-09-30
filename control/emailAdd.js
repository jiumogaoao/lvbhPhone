// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"emailAdd",
		par:"type/id/state",
		tem:["top_third","mail"],
		fn:function(data){
			var result={
				place:"",
				name:"",
				phone:"",
				province:"",
				city:"",
				area:"",
				detail:"",
				code:"",
				tel:""
				};
				if(obj.cache("mail")){
					result=obj.cache("mail");
					obj.cache("mail",null,true);
					}
			var head=_.template(data.tem[0])({left:"",center:"添加常用邮寄地址",right:"保存"});
			$("#head").html(head);
			var main=_.template(data.tem[1])(result);
			$("#scroller").html(main);
			$("#scroller #province").unbind("click").bind("click",function(){
				obj.cache("mail",result);
				window.location.hash="searchProvince/"+data.type+"/"+data.id+"/"+data.state;
				});
			$("#scroller #city").unbind("click").bind("click",function(){
				obj.cache("mail",result);
				if(data.type){
					window.location.hash="searchCity/"+data.type+"/"+data.id+"/"+data.state;
					}else{
						window.location.hash="searchCity";
						}
				});
			$("#scroller #area").unbind("click").bind("click",function(){
				obj.cache("mail",result);
				if(data.type){
					window.location.hash="searchArea/"+data.type+"/"+data.id+"/"+data.state;
					}else{
				window.location.hash="searchArea";
					}
				});
			$("#scroller [D_type='input']").each(function(){
				var that=this;
				$(that).unbind("change").bind("change",function(){
					result[$(that).attr("D_key")]=$(that).val();
					});
				});
			$(".top_third .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("click").bind("click",function(){
				if(result.tel.split("-").length<2){
					obj.pop.on("alert",{text:"固话格式为“区号-电话号码”"});
					return false;
					}
				obj.api.at(function(at){
					obj.api.run("email_add",'at='+at+'&tp=0&jparam='+JSON.stringify({b:result.name,c:result.place,d:result.detail,e:result.code,f:result.phone,g:result.tel,i:result.province,j:result.city,k:result.area,h:1}),function(){
						if(data.type){
							window.location.hash="usefulEmail/"+data.type+"/"+data.id+"/"+data.state;
							}else{
								window.location.hash="usefulEmail";
								}
						
						},function(e){obj.pop.on("alert",{text:JSON.stringify(e)});});
					});
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);	
			
			
			}
		});
	})($,app,config);