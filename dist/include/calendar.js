!function(){function a(){function a(a,d){for(var e=$('<div class="list"><div class="head"><span class="numCLASS">'+a+'</span>年<span class="numCLASS">'+d+'</span>月</div><table width="100%" border="0px" cellpadding="0" cellspacing="0"><thead><tr><th align="center" valign="middle" width="14.2%" style="color:#ff6d00">日</th><th align="center" valign="middle" width="14.2%">一</th><th align="center" valign="middle" width="14.2%">二</th><th align="center" valign="middle" width="14.2%">三</th><th align="center" valign="middle" width="14.2%">四</th><th align="center" valign="middle" width="14.2%">五</th><th align="center" valign="middle" width="14.2%" style="color:#ff6d00">六</th></tr></thead><tbody valign="top"></tbody></table></div>').appendTo($(b+" .calendar_choose")),f=0;6>f;f++)e.find("tbody").append($('<tr><td align="center" num="'+(7*f+0)+'" class="weekend disable" width="14.2%">&nbsp;</td><td align="center" num="'+(7*f+1)+'" class="disable" width="14.2%">&nbsp;</td><td align="center" num="'+(7*f+2)+'" class="disable" width="14.2%">&nbsp;</td><td align="center" num="'+(7*f+3)+'" class="disable" width="14.2%">&nbsp;</td><td align="center" num="'+(7*f+4)+'" class="disable" width="14.2%">&nbsp;</td><td align="center" num="'+(7*f+5)+'" class="disable" width="14.2%">&nbsp;</td><td align="center" num="'+(7*f+6)+'" class="weekend disable" width="14.2%">&nbsp;</td></tr>'));(a%4==0&&a%100!=0||a%100==0&&a%400==0)&&(h[2]=29);for(var g=new Date(a,d-1,1).getDay()-1,f=1;f<=h[d];f++){var i=f;10>f&&(i="0"+f);var j=d;10>j&&(j="0"+d),e.find("[num='"+(f+g)+"']").empty(),e.find("[num='"+(f+g)+"']").append($('<div class="dayNum"><span class="numCLASS">'+f+"</span></div>")),e.find("[num='"+(f+g)+"']").attr("date",a+"-"+j+"-"+i)}c[a]&&c[a][j]&&$.each(c[a][j],function(b,c){c.full?e.find("[date='"+a+"-"+j+"-"+b+"']").append('<div class="price">已满</div>'):e.find("[date='"+a+"-"+j+"-"+b+"']").removeClass("disable").addClass("enable").attr("did",c.id).append('<div class="price">￥<span class="numCLASS">'+c.price+'</span></div><div class="rest">余'+c.rest+"</div>")}),e.find("[num='35'] .dayNum").length||e.find("[num='35']").parent().remove(),e.find("[num='28'] .dayNum").length||e.find("[num='28']").parent().remove()}$(b).html("<div class='calendar_choose'></div>");var d=0,e=0,f=0,g=0,h=[0,31,28,31,30,31,30,31,31,30,31,30,31],i=0;if($.each(c,function(a,b){i=1,(0===d||d>Number(a))&&(d=Number(a)),(0===e||e<Number(a))&&(e=Number(a))}),i){$.each(c[d],function(a){(0===f||f>Number(a))&&(f=Number(a))}),$.each(c[e],function(a){(0===g||g>Number(a))&&(g=Number(a))});for(var j=d;e>=j;j++){var k=1,l=12;j==d&&(k=f),j==e&&(l=g);for(var m=k;l>=m;m++)a(j,m)}}else app.pop.on("alert",{text:"没有有效团期"})}window.calendar={};var b="body",c={2015:{"01":{"01":{price:"999"}}},2017:{"05":{"07":{price:"999"}}}};window.calendar.setTarget=function(a){b=a},window.calendar.setData=function(a){c=a},window.calendar.run=function(){a()}}();