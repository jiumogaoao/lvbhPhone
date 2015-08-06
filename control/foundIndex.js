// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"foundIndex",
		par:"",
		tem:["foot_nav","index_head","index_nav","product_group_list","group_member"],
		fn:function(data){
			$("#head").html(data.tem[1]);
			var main=[
				{title:"出发地跟团-国内精选",main:[
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"},
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"},
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"}
				]},
				{title:"出发地跟团-出境精选",main:[
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"},
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"},
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"}
				]},
				{title:"目的地跟团-国内惠",main:[
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"},
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"},
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"}
				]},
				{title:"目的地跟团-出境惠",main:[
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"},
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"},
					{image:"http://",name:"昆明大理丽江6天温泉SPA尊品美食团",price:"3380",place:"深圳"}
				]},
				{title:"旅游达人圈",main:[]}
			];
			var list=_.template(data.tem[3])({list:main});
			var group=_.template(data.tem[4])({list:[
			{image:"http://",name:"圈子成员",fans:"2",money:"2"},
			{image:"http://",name:"圈子成员",fans:"2",money:"2"},
			{image:"http://",name:"圈子成员",fans:"2",money:"2"},
			{image:"http://",name:"圈子成员",fans:"2",money:"2"},
			{image:"http://",name:"圈子成员",fans:"2",money:"2"},
			{image:"http://",name:"圈子成员",fans:"2",money:"2"},
			{image:"http://",name:"圈子成员",fans:"2",money:"2"},
			{image:"http://",name:"圈子成员",fans:"2",money:"2"}
			]});
			$("#scroller").html(data.tem[2]+list+group);
			$("#scroller .group_member").css({
				"background-color":"#fff",
				"padding-bottom":".2rem"
				});
			$("#foot").html(data.tem[0]);
			$("#foot .fa-found").addClass("hl");
			$("#foot .point").eq(1).addClass("hl");
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			}
		});
	})($,app,config);