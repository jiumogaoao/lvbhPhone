// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"vipTravelDetail",
		par:"id/group",
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
			
			function layout(source,messageArry,com){
				var foot=_.template(data.tem[4])(source);
				$("#foot").html(foot);
				var top=_.template(data.tem[1])(source);
				var middle=_.template(data.tem[2])({list:messageArry});
				var bottom=_.template(data.tem[3])({list:com});
				$("#scroller").html(top+middle+bottom);
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
			$('img').load(function(){
				myScroll.refresh();
				});
				}
			
			function getCom(at,source,messageArry){
				var com=[];
				obj.api.run("travel_comment_get",'at='+at+'&a='+data.id,function(returnData){
					$.each(returnData,function(i,n){
						com.push({name:n.f,img:n.g,time:n.e,main:n.d});
						});
				layout(source,messageArry,com);
					},function(e){alert(JSON.stringift(e));});
				
				}	
			function getList(at){
				var typeString="";
				obj.api.run("travel_detail",'at='+at+'&a='+data.id,function(returnData){
				var source={"id":returnData.travel.a,"title":returnData.travel.f,"place":returnData.travel.e,"image":returnData.travel.c,"pra":returnData.travel.l,"star":returnData.travel.k,"com":returnData.travel.j};
				var messageArry=[];
					$.each(returnData.traveldetail,function(i,n){
						if(n.a){
							messageArry.push("<div>"+n.a+"</div>");
							}
						if(n.b){
							messageArry.push("<div><img src='"+n.a+"' onerror='app.nofound(\"img/travel_particulars_cover_img_default.png\")'/></div>");
							}
						});
					getCom(at,source,messageArry);
					
					},function(e){alert(JSON.stringify(e));});
				}
			obj.api.at(getList);



			}
		});
	})($,app,config);