// JavaScript Document
;(function(){
	window.app={};
	app.route={};
	app.control={};
	app.api={};
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