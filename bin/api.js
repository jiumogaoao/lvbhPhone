// JavaScript Document
;(function($,obj,config){
	var api={};
	var add=function(name,url,data,method){
		if(!api[name]){
			api[name]={url:url||"",
						data:data||null,
						cache:null,
						method:method||"get",
						cacheTime:0
			};
			return api[name];
			}
		};
	var run=function(name,data,suc,err){
		function runApi(){
			if(!data){
				data=api[name].cacheTime;
				}
			if(data&&typeof(data) === "object"){
				}
				var sendData=data;
				config.loadingOn();
			$.ajax({ 
							url:api[name].url,
							dataType:"text",
							method:api[name].method,
							data:sendData,
							cache:false,
							error:function(e){
								config.loadingOff();
								err(e);
								},
							success: function(returnData){
								config.loadingOff();
								if(returnData&&returnData[0] === "{"){
									returnData=JSON.parse(returnData);
								if(returnData.success === true){
									if(name === "deal_list_get"||name === "expend_get"||name === "income_get"||name === "point_get"||name === "group_member_get"||name === "collect_get"||name === "travel_get"||name === "diy_get"||name === "linker_get"||name === "invoice_get"||name === "email_get"||name === "group_get"||name === "other_group_member_get"||name === "other_travel_get"){
										suc(returnData);
										}else{
										suc(returnData.data||returnData);	
										}
								}else if(returnData.errorCode){
									if(err){err(returnData.message);}
									}else{
										err("未知错误");
										}
									}else{
										suc(returnData);
										}
								
								}
						});	
			}
		if(api[name]){
			runApi();
			}else{
				config.loadingOn();
				$.ajax({ 
							url:"api/"+name+".js",
							dataType:"script",
							cache:true,
							error:function(err){
								config.loadingOff();
								window.app.pop.on("alert",{text:"错误"+JSON.stringify(err)});
								return false;
								},
							success: function(){
								config.loadingOff();								
								runApi();
							}
						});
				}
		};
	obj.add=function(name,url,data,method){
		add(name,url,data,method);
		};
	obj.run=function(name,data,suc,err){
		run(name,data,suc,err);
		};
	obj.at=function(fn,input){
		if(input){
			app.cookies("at",{at:input});
			}
		if(app.cookies("at")){
			fn(app.cookies("at").at);
			}else{
				run("at_get",null,function(data){
					app.cookies("at",data);
					fn(app.cookies("at").at);
			},function(e){
				window.app.pop.on("alert",{text:JSON.stringify(e)});
				return false;
			});
				}
		};
	})($,app.api,config);