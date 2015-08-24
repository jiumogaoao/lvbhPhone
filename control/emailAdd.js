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
			$("#scroller #province").unbind("tap").bind("tap",function(){
				obj.cache("mail",result);
				window.location.hash="searchProvince/"+data.type+"/"+data.id+"/"+data.state;
				});
			$("#scroller #city").unbind("tap").bind("tap",function(){
				obj.cache("mail",result);
				window.location.hash="searchCity/"+data.type+"/"+data.id+"/"+data.state;
				});
			$("#scroller #area").unbind("tap").bind("tap",function(){
				obj.cache("mail",result);
				window.location.hash="searchArea/"+data.type+"/"+data.id+"/"+data.state;
				});
			$("#scroller [D_type='input']").each(function(){
				var that=this;
				$(that).unbind("change").bind("change",function(){
					result[$(that).attr("D_key")]=$(that).val();
					console.log(result)
					})
				});
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				obj.api.at(function(at){
					obj.api.run("email_get",'at='+at+'&tp=0&jparam='+JSON.stringify({b:result.name,c:result.place,d:result.detail,e:result.code,f:result.phone,g:result.tel,i:result.province,j:result.city,k:result.area}),function(){
						window.location.hash="usefulEmail/"+data.type+"/"+data.id+"/"+data.state;
						},function(e){JSON.stringify(e);});
					});
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);	
			
			
			}
		});
	})($,app,config);