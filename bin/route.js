// JavaScript Document
;(function($,obj,config){
	var routeArry={};
	function changePage(){
		$("#GoToTop").hide();
		var hash="index";
		if(location.hash){
			hash=location.hash.replace("#","");
			hash=hash.split("?")[0];
			}
		var hashArry=hash.split("/");
		function runRoute(){
			app.pop.off();
			$("body").css({"background-color":"#eeeeee"});
			$("#head").css("background-color","#009eff");
			$("#middle").scrollTop(0);
			if(hashArry[0]==="index"){
				$("#foot").empty();
				$("#foot").css("height","1.5rem");
				$("#foot").show();
				$("#head").show();
				$("#head").height("1.5rem");
				$("#head").css("background-color","rgba(0,158,255,0)");
					$("#middle").css({
						top:"0rem",
						bottom:"0rem"
						});
					$("#scroller").css({"padding-bottom":"1.5rem"});
				}else if(hashArry[0]==="mineIndex"){
					$("#foot").empty();
				$("#foot").css("height","1.5rem");
				$("#foot").show();
				$("#head").hide();
				$("#middle").css("top","0px");
					$("#scroller").css({"padding-bottom":"1.5rem"});
					}else if(hashArry[0]==="vipTravelDetail"){
					$("#head").show();
				$("#foot").empty();
				$("#foot").css("height","1.3rem");
				$("#foot").show();
				$("#head").height("1.5rem");
				$("#head").css("background-color","rgba(0,158,255,0)");
					$("#middle").css({
						top:"0rem",
						bottom:"0rem"
						});
					$("#scroller").css({"padding-bottom":"1.3rem"});
				
					}else if(hashArry[0]==="vipIndex"){
					$("#foot").empty();
				$("#foot").css("height","1.5rem");
				$("#foot").show();
				$("#head").show();
				$("#head").height("1.5rem");
				$("#head").css("background-color","rgba(0,158,255,1)");
					$("#middle").css({
						top:"1.5rem",
						bottom:"0rem"
						});
					$("#scroller").css({"padding-bottom":"1.5rem"});
					}else if(hashArry[0]==="foundIndex"){
					$("#foot").empty();
					$("#foot").css("height","1.5rem");
				$("#foot").show();
				$("#head").show();
				$("#head").height("1.5rem");
					$("#middle").css({
						top:"1.5rem",
						bottom:"0rem"
						});
					$("#scroller").css({"padding-bottom":"1.5rem"});
					}else if(hashArry[0]==="productDetail"||hashArry[0]==="productInput"||hashArry[0]==="messageList"||hashArry[0]==="dealFlow"||hashArry[0]==="travelAdd"){
						$("#head").height("1.5rem");
						$("#head").show();
						$("#middle").css({
						top:"1.5rem",
						bottom:"0rem"
						});
						$("#scroller").css({"padding-bottom":"4rem"});
						$("#foot").empty();
						$("#foot").css("height","2rem");
						$("#foot").show();
						}else if(hashArry[0]==="vipTravelList"||hashArry[0]==="vipMemberList"){
				$("#foot").hide();
				$("#head").show();
				$("#head").height("1.5rem");
				$("#head").css("background-color","rgba(0,158,255,0)");
					$("#middle").css({
						top:"0rem",
						bottom:"0rem"
						});
					$("#scroller").css({"padding-bottom":"0rem"});
							}else{
					$("#foot").empty();
					$("#foot").hide();
					$("#head").show();
					$("#head").height("1.5rem");
					$("#middle").css({
						top:"1.5rem",
						bottom:"0rem"
						});
					$("#scroller").css({"padding-bottom":"0rem"});
					}
				var dataObj={};
				if(routeArry[hashArry[0]].par){
					var dataArry=routeArry[hashArry[0]].par.split("/");
					for(var i=0;i<dataArry.length;i++){
				dataObj[dataArry[i]]=hashArry[i+1];
				}
					}
				if(dataObj.at){
					app.cache("phone",{"phone":true});
					}
				if(dataObj.ut&&app.cache("phone")&&app.cache("phone").phone){
					app.cookies("login_"+at,{login:dataObj.ut});	
					}
				if(app.cache("phone")&&app.cache("phone").phone){
					$("#head").hide();
					$("#middle").css({"top":"0rem","bottom":"0rem"});
					//$("#foot").hide();
					}
				if(routeArry[hashArry[0]].tem.length){
					var totalUrl=0;
					var urlArry=[];
					$.each(routeArry[hashArry[0]].tem,function(i,n){
						var urlNum=i;
						config.loadingOn();
						$.ajax({ 
							url:"view/"+n+".html",
							dataType:"html",
							cache:false,
							error:function(err){
								config.loadingOff();
								window.app.pop.on("alert",{text:"错误"+JSON.stringify(err)});
								},
							success: function(data){
								config.loadingOff();								
							urlArry[urlNum]=data;
							totalUrl++;
							if(totalUrl === routeArry[hashArry[0]].tem.length){
								dataObj.tem=urlArry;
								routeArry[hashArry[0]].fn(dataObj);
								}
							}
						});
						});
					}else{
					routeArry[hashArry[0]].fn(dataObj);	
						}
			}
		if(routeArry[hashArry[0]]){
			runRoute();
			}else{
				config.loadingOn();
				$.ajax({ 
							url:"control/"+hashArry[0]+".js",
							dataType:"script",
							cache:false,
							error:function(err){
								config.loadingOff();
								window.app.pop.on("alert",{text:"错误"+JSON.stringify(err)});
								window.location.hash="";
								},
							success: function(data){
								config.loadingOff();								
								runRoute();
							}
						});
			}
		}
	window.onhashchange=function(){
		$("#foot").empty();
		$("#head").empty();
		$("#scroller").empty();
		$("#otherFrame").hide();
		changePage();
		};
	var set=function(data){
		if(data&&data.name){
			routeArry[data.name]={
				par:data.par||"",
				tem:data.tem||[],
				fn:data.fn||function(){}
				};
			}
		};		
		obj.set=function(data){
			set(data);
			};
		obj.init=function(){
			changePage();
			};
	})($,app.route,config);