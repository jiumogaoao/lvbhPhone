// JavaScript Document
;(function(){
	window.app={};
	app.route={};
	app.control={};
	app.api={};
	app.pop={
		on:function(view,data,fn){
			if(view){
				config.loadingOn();
				$.ajax({ 
							url:"view/"+view+".html",
							dataType:"html",
							error:function(err){
								config.loadingOff();
								alert("错误"+JSON.stringify(err));
								},
							success: function(html){
								config.loadingOff();								
							var popHtml=_.template(html)(data||null);
							$("#pop").html(popHtml);
							$("#pop").show();
							$("#pop").css("top",(($(window).height()-$("#pop").height())/($(window).width()/10))/2+"rem");
							$("#loadingBG").show();
							if(fn){fn()};
							}
						});
				}		
			},
		off:function(){
			$("#pop").hide();
			$("#pop").empty();
			$("#loadingBG").hide();
			}
		};
	app.cookies=function(key,value){
		if(value&&typeof(value) ==="object"){
			Cookies("lvbh_"+key,JSON.stringify(value),{expires:24*3600*1000});
			}else if(Cookies("lvbh_"+key)){
				return JSON.parse(Cookies("lvbh_"+key));
				}else{
					return false;
					}
		};
	})();