// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"travellerAdd",
		par:"type/id/state",
		tem:["top_third","traveller"],
		fn:function(data){
			var result={
				name:"",
				number:"",
				lastNumber:"",
				sendPlace:"",
				enLastName:"",
				enName:"",
				birthday:"",
				sex:"1",
				national:"",
				phone:"",
				cardType:1,
				cardName:["","身份证","护照","军官证","港澳通行证","台胞证","回乡证"]
				};
				if(obj.cache("traveler")){
					result=obj.cache("traveler");
					obj.cache("traveler",null,true);
					}
			var apiArry=[
			function(){return false;},
			function(){
				if(!(/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.name)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.cardType)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.number)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.phone))){
					obj.pop.on("alert",{text:("只能输入汉字，字母，数字或空格")});
					return false;
					}
				if(!/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/.test(result.number)){
					obj.pop.on("alert",{text:("身份证格式有误")});
					return false;
					}
				if(!/^0?1[3|4|5|8][0-9]\d{8}$/.test(result.phone)){
					obj.pop.on("alert",{text:("手机号格式有误")});
					return false;
					}
				return JSON.stringify({b:result.name,d:result.cardType,e:result.number,f:result.phone
				});},
			function(){
				if(!(/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.name)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.cardType)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.number)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.phone)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.lastNumber)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.sendPlace)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.enLastName)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.enName)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.national))){
					obj.pop.on("alert",{text:("只能输入汉字，字母，数字或空格")});
					return false;
					}
				if(!/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/.test(result.number)){
					obj.pop.on("alert",{text:("证件号格式有误")});
					return false;
					}
				if(!/^\\d{4}-\\d{2}-\\d{2}$/.test(result.lastNumber)){
					obj.pop.on("alert",{text:("有效期不能小于当天")});
					return false;
					}
				if(!(/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.enLastName)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.enName))){
					obj.pop.on("alert",{text:("英文姓名只能包含字母，且不能超过20个")});
					return false;
					}
				if(!/^[A-Za-z0-9]+$/.test(result.birthday)){
					obj.pop.on("alert",{text:("日期格式有误")});
					return false;
					}
				if(!/^0?1[3|4|5|8][0-9]\d{8}$/.test(result.phone)){
					obj.pop.on("alert",{text:("手机号格式有误")});
					return false;
					}
				return JSON.stringify({b:result.name,d:result.cardType,e:result.number,m:result.lastNumber,l:result.sendPlace,k:result.enLastName,j:result.enName,o:result.birthday,c:result.sex,n:result.national,f:result.phone});
				},
			function(){
				if(!(/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.name)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.cardType)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.number)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.phone))){
					obj.pop.on("alert",{text:("只能输入汉字，字母，数字或空格")});
					return false;
					}
				if(!/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/.test(result.number)){
					obj.pop.on("alert",{text:("证件号格式有误")});
					return false;
					}
				if(!/^[A-Za-z0-9]+$/.test(result.birthday)){
					obj.pop.on("alert",{text:("日期格式有误")});
					return false;
					}
				if(!/^0?1[3|4|5|8][0-9]\d{8}$/.test(result.phone)){
					obj.pop.on("alert",{text:("手机号格式有误")});
					return false;
					}
				return JSON.stringify({b:result.name,d:result.cardType,e:result.number,o:result.birthday,c:result.sex,f:result.phone});
				},
			function(){
				if(!(/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.name)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.cardType)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.number)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.phone)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.lastNumber)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.sendPlace)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.enLastName)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.enName)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.national))){
					obj.pop.on("alert",{text:("只能输入汉字，字母，数字或空格")});
					return false;
					}
				if(!/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/.test(result.number)){
					obj.pop.on("alert",{text:("证件号格式有误")});
					return false;
					}
				if(!/^\\d{4}-\\d{2}-\\d{2}$/.test(result.lastNumber)){
					obj.pop.on("alert",{text:("有效期不能小于当天")});
					return false;
					}
				if(!(/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.enLastName)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.enName))){
					obj.pop.on("alert",{text:("英文姓名只能包含字母，且不能超过20个")});
					return false;
					}
				if(!/^[A-Za-z0-9]+$/.test(result.birthday)){
					obj.pop.on("alert",{text:("日期格式有误")});
					return false;
					}
				if(!/^0?1[3|4|5|8][0-9]\d{8}$/.test(result.phone)){
					obj.pop.on("alert",{text:("手机号格式有误")});
					return false;
					}
				return JSON.stringify({b:result.name,d:result.cardType,e:result.number,m:result.lastNumber,l:result.sendPlace,k:result.enLastName,j:result.enName,o:result.birthday,n:result.national,f:result.phone});
				},
			function(){
				if(!(/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.name)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.cardType)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.number)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.phone))){
					obj.pop.on("alert",{text:("只能输入汉字，字母，数字或空格")});
					return false;
					}
				if(!/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/.test(result.number)){
					obj.pop.on("alert",{text:("证件号格式有误")});
					return false;
					}
				if(!/^[A-Za-z0-9]+$/.test(result.birthday)){
					obj.pop.on("alert",{text:("日期格式有误")});
					return false;
					}
				if(!/^0?1[3|4|5|8][0-9]\d{8}$/.test(result.phone)){
					obj.pop.on("alert",{text:("手机号格式有误")});
					return false;
					}
				return JSON.stringify({b:result.name,d:result.cardType,e:result.number,o:result.birthday,c:result.sex,f:result.phone});
				},
			function(){
				if(!(/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.name)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.cardType)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.number)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(result.phone))){
					obj.pop.on("alert",{text:("只能输入汉字，字母，数字或空格")});
					return false;
					}
				if(!/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/.test(result.number)){
					obj.pop.on("alert",{text:("证件号格式有误")});
					return false;
					}
				if(!/^[A-Za-z0-9]+$/.test(result.birthday)){
					obj.pop.on("alert",{text:("日期格式有误")});
					return false;
					}
				if(!/^0?1[3|4|5|8][0-9]\d{8}$/.test(result.phone)){
					obj.pop.on("alert",{text:("手机号格式有误")});
					return false;
					}
				return JSON.stringify({b:result.name,d:result.cardType,e:result.number,o:result.birthday,f:result.phone});}
			];
			var head=_.template(data.tem[0])({left:"",center:"添加常用旅客",right:"保存"});
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
				$(that).find("[D_type='radioPoint']").unbind("tap").bind("tap",function(){
					result[$(that).attr("D_key")]=$(this).attr("D_value");
					$(that).find("[D_type='radioPoint']").removeClass("hl");
					$(this).addClass("hl");
					});
				});
			$("#scroller #cardType").unbind("tap").bind("tap",function(){
				obj.cache("traveler",result);
				window.location.hash="travelerCardType/"+data.type+"/"+data.id+"/"+data.state;
				});
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$(".top_third .rightButton").unbind("tap").bind("tap",function(){
				obj.api.at(function(at){
					obj.api.run("traveler_add",'at='+at+'&tp=0&jparam='+apiArry[result.cardType](),function(){
						window.location.hash="usefulTraveler/"+data.type+"/"+data.id+"/"+data.state;
						},function(e){JSON.stringify(e);});
					});
				});
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);	
			
			
			}
		});
	})($,app,config);