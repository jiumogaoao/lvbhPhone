!function(a,b,c){b.control.set({name:"vipTravelDetail",par:"id",tem:["top_second","travel_detail_top","travel_detail_middle","travel_detail_bottom","travel_detail_foot"],fn:function(c){function d(a){}var e=_.template(c.tem[0])({left:"",center:" "});a("#head").html(e),b.scrollFn.add("vipTravelDetail",function(b){a("#head").css("background-color","rgba(0,158,255,"+-1*b/200+")")}),a("#foot").html(c.tem[4]),a("#scroller").html(c.tem[1]+c.tem[2]+c.tem[3]);setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()}),b.api.at(d)}})}($,app,config);