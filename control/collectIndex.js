// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"collectIndex",
		par:"",
		tem:["top_second","title_input_list"],
		fn:function(data){
			var head=_.template(data.tem[0])({left:"",center:"收藏"});
			$("#head").html(head);
			function layout(result){
			var list=_.template(data.tem[1])({list:[
			{name:"product",left:"产品",link:true,right:'<span class="fa fa-right"></span>'},
			{name:"travel",left:"游记",link:true,right:'<span class="fa fa-right"></span>'}
			]});
			$("#scroller").html(list);
			$("[name='product']").unbind("tap").bind("tap",function(){
				window.location.hash="collectProductList/0";
				});
			$("[name='travel']").unbind("tap").bind("tap",function(){
				window.location.hash="collectTravelList/0";
				});
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});

			var delay=setTimeout(function(){
				//myScroll.refresh();
				},200);
				$('img').load(function(){
				//myScroll.refresh();
				});
				}
			
			obj.api.at(layout);
			}
		});
	})($,app,config);