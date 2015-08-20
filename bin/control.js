// JavaScript Document
;(function($,obj,config){
	obj.control.bind=function(scope,data,eventArry){
		var cdata=$.extend({},data);
		function  targetBind(e){
			eventArry[type][eve](e,cdata[$(this).attr("D_data")]);
			}
		function typeFn(){
				var target=$(this);
				for (var eve in eventArry[type]){
					if(eve === "init"){
					eventArry[type][eve](target,cdata[target.attr("D_data")]);
					}else{
						$(this).unbind(eve).bind(eve,targetBind);
						}
					}	
				}
		for (var type in eventArry){
			scope.find("[D_type = '"+type+"']").each(typeFn);
			} 
		};
	obj.control.pointParse=function(target,point,value){
		if(!target){return false;}
		if(!point){return false;}
		var result=false;
		point=point.split(".");
		function roll(key,num){
			if(typeof(key[point[num]])==="undefined"&&num !== point.length-1){
				key[point[num]]={};
				}
			if(num === point.length-1){
				if(typeof(value) !== "undefined"){
					key[point[num]]=value;	
					}
				result=key[point[num]];
			}else{
				roll(key[point[num]],num+1);
				}
			}
		roll(target,0);
		return result;
		};
	obj.control.set=function(data){
		obj.route.set(data);
		};
	})($,app,config);