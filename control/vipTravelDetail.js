// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"vipTravelDetail",
		par:"id",
		tem:["top_second","travel_detail_top","travel_detail_middle","travel_detail_bottom","travel_detail_foot"],
		fn:function(data){
			var page=1;
			var type=0;
			var result=[];
			var head=_.template(data.tem[0])({
				left:"",
				center:" "
				});
			$("#head").html(head);
			obj.scrollFn.add("vipTravelDetail",function(y){
				$("#head").css("background-color","rgba(0,158,255,"+((-1*y)/200)+")");
				});
			$("#foot").html(data.tem[4]);
			$("#scroller").html(data.tem[1]+data.tem[2]+data.tem[3]);
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			$('img').load(function(){
				myScroll.refresh();
				});
			function getList(at){}
			obj.api.at(getList);



			}
		});
	})($,app,config);