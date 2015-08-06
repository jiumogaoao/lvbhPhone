// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"diyIndex",
		par:"type",
		tem:["top_second","diy_hot","diy_nav","product_group_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({
				left:"",
				center:"主题游"
				});
			$("#head").html(head);
			$("#head .center").css("font-size",".5rem");
			var list=_.template(data.tem[3])({list:[
			{main:[
				{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"},
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"},
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"}
			]}
			]});
			$("#scroller").html(data.tem[1]+list+'<div class="clear"></div>');
			$(".product_group_list").css({
				width:"8rem",
				float:"right",
				"background-color":"#fff"
				});
			$("#otherFrame").html(data.tem[2]);
			$("#otherFrame").css({
				"position":"fixed",
				"top":"1.5rem",
				"left":"0rem",
				"width":"2rem",
				"height":($(window).height()/($(window).width()/10)-1.5)+"rem",
				"background-color":"#fff",
				"z-index":"10"
				});
			$("#otherFrame").show();
			$("#otherFrame [num='"+data.type+"']").addClass("hl");
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			}
		});
	})($,app,config);