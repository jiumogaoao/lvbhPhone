/*! This is uglify test - 2015-07-22 */!function(a,b,c){b.set({name:"dealIndex",par:"",tem:["top_second","simple_list"],fn:function(b){var c=_.template(b.tem[0])({left:"",center:"跟团游订单"});a("#head").html(c);var d=_.template(b.tem[1])({list:[{name:"成交订单",lid:"0"},{name:"取消订单",lid:"1"},{name:"作废订单",lid:"2"}]});a("#scroller").html(d),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a(".simple_list").unbind("tap").bind("tap",function(){window.location.hash="dealList/"+a(this).attr("lid")}),myScroll.refresh()}})}($,app.control,config);