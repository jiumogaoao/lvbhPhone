!function(a,b,c){b.control.set({name:"accountIndex",par:"",tem:["top_second","account_index","simple_list"],fn:function(c){function d(b){var d=_.template(c.tem[1])({total:b.a0,freeze:b.a1,useful:b.a2}),e=_.template(c.tem[2])({list:[{name:"收入明细",lid:"0"},{name:"支出明细",lid:"1"}]});a("#scroller").html(d+e),a(".top_third .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),a(".simple_list").unbind("click").bind("click",function(){"0"===a(this).attr("lid")?window.location.hash="inIndex":window.location.hash="outIndex"});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}function e(a){var c="at="+a;b.api.run("account_get",c,d,function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var f=_.template(c.tem[0])({left:"",center:"旅博账户"});a("#head").html(f),b.api.at(e)}})}($,app,config);