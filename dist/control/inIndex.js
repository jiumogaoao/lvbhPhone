!function(a,b,c){b.control.set({name:"inIndex",par:"",tem:["top_second","simple_list"],fn:function(b){var c=_.template(b.tem[0])({left:"",center:"收入明细"});a("#head").html(c);var d=_.template(b.tem[1])({list:[{name:"产品体验奖励",lid:"0"},{name:"渠道体验奖励",lid:"1"},{name:"取消订单退回",lid:"2"}]});a("#scroller").html(d),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a(".simple_list").unbind("tap").bind("tap",function(){window.location.hash="accountList/"+a(this).attr("lid")}),myScroll.refresh()}})}($,app,config);