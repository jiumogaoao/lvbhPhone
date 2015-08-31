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
								app.pop.on("alert",{text:"错误"+JSON.stringify(err)});
								},
							success: function(html){
								config.loadingOff();								
							var popHtml=_.template(html)(data||null);
							$("#pop").html(popHtml);
							$("#pop").show();
							$("#pop").css("top",(($(window).height()-$("#pop").height())/($(window).width()/10))/2+"rem");
							$("#loadingBG").show();
							if(fn){fn();}
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
	app.bottom={
		on:function(view,data,fn){
			if(view){
				config.loadingOn();
				$.ajax({ 
							url:"view/"+view+".html",
							dataType:"html",
							error:function(err){
								config.loadingOff();
								app.pop.on("alert",{text:"错误"+JSON.stringify(err)});
								},
							success: function(html){
								config.loadingOff();								
							var popHtml=_.template(html)(data||null);
							$("#bottomFrame").html(popHtml);
							$("#bottomFrame").show();
							$("#loadingBG").show();
							if(fn){fn();}
							}
						});
				}		
			},
		off:function(){
			$("#bottomFrame").hide();
			$("#bottomFrame").empty();
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
	app.cache=function(key,value,remove){
		if(value&&typeof(value) ==="object"){
			localStorage.setItem("lvbh_"+key,JSON.stringify(value));
			}else if(localStorage.getItem("lvbh_"+key)){
				if(remove){
					localStorage.removeItem("lvbh_"+key);
					}else{
				return JSON.parse(localStorage.getItem("lvbh_"+key));		
						}
				}else{
					return false;
					}
		};
	var reflashLock=false;
	var reflashArry={};
	app.reflash={};
	app.reflash.run=function(){
		if(!reflashLock){
			reflashLock=true;
			var page=window.location.hash.replace("#","").split("/")[0]||"index";
			console.log(page);
			if(reflashArry[page]){
				reflashArry[page](function(){
					reflashLock=false;
					});
				}else{
					reflashLock=false;
					}
			}
		};
	app.reflash.add=function(key,fn){
		if(!reflashArry[key]){
			reflashArry[key]=fn;
			}
		};
	var scrollLock=false;
	var scrollArry={};
	app.scrollFn={};
	app.scrollFn.run=function(h){
			var page=window.location.hash.replace("#","").split("/")[0]||"index";
			if(scrollArry[page]){
				scrollArry[page](h);
				}

		};
	app.scrollFn.add=function(key,fn){
		if(!scrollArry[key]){
			scrollArry[key]=fn;
			}
		};
	app.nofound=function(url){
		var img=event.srcElement;
		img.src=url;
		img.onerror=null; 
		};
	})();