// JavaScript Document
;(function(){
	window.calendar={};
	var target="body";
	var data={
		"2015":{
			"01":{
				"01":{price:"999"}
				}
			},
		"2017":{
			"05":{
				"07":{price:"999"}
				}
			}
		}
	function init(){
		$(target).html("<div class='calendar_choose'></div>");
		var firstYear=0;
		var lastYear=0;
		var firstMonth=0;
		var lastMonth=0;
		var totalMonth=0;
		var totalDay=[0,31,28,31,30,31,30,31,31,30,31,30,31];
		function layout(year,month){
			var point=$('<div class="list">'+
			'<div class="head">'+year+"年"+month+"月"+'</div>'+
				'<table width="100%" border="0px" cellpadding="0" cellspacing="0">'+
					'<thead>'+
					'<tr>'+
					  '<th align="center" valign="middle" width="14.2%" style="color:#ff6d00">日</th>'+
					  '<th align="center" valign="middle" width="14.2%">一</th>'+
					  '<th align="center" valign="middle" width="14.2%">二</th>'+
					  '<th align="center" valign="middle" width="14.2%">三</th>'+
					  '<th align="center" valign="middle" width="14.2%">四</th>'+
					  '<th align="center" valign="middle" width="14.2%">五</th>'+
					  '<th align="center" valign="middle" width="14.2%" style="color:#ff6d00">六</th>'+
					'</tr>'+
					'</thead>'+
				  '<tbody valign="top">'+
				
				  '</tbody>'+
				'</table>'+
			'</div>').appendTo($(target+" .calendar_choose"));
			for (var i=0;i<6;i++){
			point.find("tbody").append($('<tr>'+
			  '<td align="center" num="'+(i*7+0)+'" class="weekend disable" width="14.2%">&nbsp;</td>'+
			  '<td align="center" num="'+(i*7+1)+'" class="disable" width="14.2%">&nbsp;</td>'+
			  '<td align="center" num="'+(i*7+2)+'" class="disable" width="14.2%">&nbsp;</td>'+
			  '<td align="center" num="'+(i*7+3)+'" class="disable" width="14.2%">&nbsp;</td>'+
			  '<td align="center" num="'+(i*7+4)+'" class="disable" width="14.2%">&nbsp;</td>'+
			  '<td align="center" num="'+(i*7+5)+'" class="disable" width="14.2%">&nbsp;</td>'+
			  '<td align="center" num="'+(i*7+6)+'" class="weekend disable" width="14.2%">&nbsp;</td>'+
			'</tr>'));
			};
			if((year%4==0 && year%100!=0)||(year%100==0 && year%400==0)){
				totalDay[2]=29;
				}
			var firstDay=new Date(year,month-1,1).getDay()-1;
			for(var i=1;i<=totalDay[month];i++){
				var showDay=i;
				if(i<10){
					showDay="0"+i;
					}
				var showMonth=month;
				if(showMonth<10){
					showMonth="0"+month;
					}
				point.find("[num='"+(i+firstDay)+"']").empty();
				point.find("[num='"+(i+firstDay)+"']").append($('<div class="dayNum">'+i+'</div>'));
				point.find("[num='"+(i+firstDay)+"']").attr("date",year+"-"+showMonth+"-"+showDay);
				}
				if(data[year]&&data[year][showMonth]){
					$.each(data[year][showMonth],function(x,y){
						point.find("[date='"+year+"-"+showMonth+"-"+x+"']").removeClass("disable").addClass("enable").append('<div class="price">￥'+y.price+'</div>');	
						});
					}
				if(!point.find("[num='35'] .dayNum").length){
					point.find("[num='35']").parent().remove();
					}
				if(!point.find("[num='28'] .dayNum").length){
					point.find("[num='28']").parent().remove();
					}
			}
		$.each(data,function(i,n){
			if(firstYear===0||firstYear>Number(i)){
				firstYear=Number(i);
				}
			if(lastYear===0||lastYear<Number(i)){
				lastYear=Number(i);
				}
			})
			$.each(data[firstYear],function(i){
				if(firstMonth===0||firstMonth>Number(i)){
					firstMonth=Number(i);
					}
				})
			$.each(data[lastYear],function(i){
				if(lastMonth===0||lastMonth>Number(i)){
					lastMonth=Number(i);
					}
				})
			for(var y=firstYear;y<=lastYear;y++){
				var start=1;
				var end=12;
				if(y==firstYear){
					start=firstMonth;
					}
				if(y==lastYear){
					end=lastMonth;
					}
				for(var i=start;i<=end;i++){
					layout(y,i);
					}
				}
			
			
			
		}
	window.calendar.setTarget=function(value){
		target=value;
		}
	window.calendar.setData=function(value){
		data=value;
		}
	window.calendar.run=function(){
		init();
		}
	})();