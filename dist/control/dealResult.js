!function(a,b,c){b.control.set({name:"dealResult",par:"type/search",tem:["top_second","deal_list"],fn:function(c){function d(d,e){var f=_.template(c.tem[1])({type:c.type,list:d});a("#scroller").html(f),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a(".top_third .rightButton").unbind("tap").bind("tap",function(){window.location.hash="dealSearch/"+c.type}),a(".simple_list").unbind("tap").bind("tap",function(){window.location.hash="dealList/"+a(this).attr("lid")}),a(".dianpin").unbind("tap").bind("tap",function(b){b.stopPropagation(),window.location.hash="dealComment/"+a(this).parents(".deal_list").attr("lid")}),a(".quxiao").unbind("tap").bind("tap",function(c){function d(){a("#pop .left").unbind("tap").bind("tap",function(){console.log("at="+e+"&a="+a(f).parents(".deal_list").attr("lid")),b.pop.off(),b.api.run("deal_cancel","at="+e+"&a="+a(f).parents(".deal_list").attr("lid"),function(){b.pop.on("alert",{text:"退订申请已提交"}),window.location.reload()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}),a("#pop .right").unbind("tap").bind("tap",function(){b.pop.off()})}c.stopPropagation();var f=this;b.pop.on("confirm",{text:"确认要申请取消该订单吗？"},d)}),a(".zhifu").unbind("tap").bind("tap",function(b){b.stopPropagation(),window.location.hash="payIndex/"+a(this).parents(".deal_list").attr("lid")}),a(".zuofei").unbind("tap").bind("tap",function(c){function d(){a("#pop .left").unbind("tap").bind("tap",function(){b.pop.off(),console.log("at="+e+"&a="+a(f).parents(".deal_list").attr("lid")),b.api.run("deal_remove","at="+e+"&a="+a(f).parents(".deal_list").attr("lid"),function(){window.location.reload()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}),a("#pop .right").unbind("tap").bind("tap",function(){b.pop.off()})}c.stopPropagation();var f=this;b.pop.on("confirm",{text:"确认要作废该订单吗？"},d)}),a(".dianpin").unbind("tap").bind("tap",function(b){b.stopPropagation(),window.location.hash="dealComment/"+a(this).parents(".deal_list").attr("lid")}),a(".sanchu").unbind("tap").bind("tap",function(c){function d(){a("#pop .left").unbind("tap").bind("tap",function(){b.pop.off(),console.log("at="+e+"&a="+a(f).parents(".deal_list").attr("lid")),b.api.run("deal_delect","at="+e+"&a="+a(f).parents(".deal_list").attr("lid"),function(){b.pop.on("alert",{text:"删除成功"}),window.location.reload()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}),a("#pop .right").unbind("tap").bind("tap",function(){b.pop.off()})}c.stopPropagation();var f=this;b.pop.on("confirm",{text:"确认要删除该订单吗？"},d)});setTimeout(function(){},200);a("img").load(function(){})}function e(e){b.api.at(function(h){console.log("at="+h+'&jparam={"c"="'+c.type+'","b"="'+g+'"'+c.search+"}"),b.api.run("deal_list_get","at="+h+'&jparam={"c"="'+c.type+'","b"="'+g+'"'+c.search+"}",function(b){if(b.pn===g+""){g++,b=b.data;var c={12:"出发地跟团",13:"目的地跟团"};a.each(b,function(a,b){var d={type:c[b.e+""],state:b.i+"",title:b.f,start:b.l.split(" ")[0],end:b.m.split(" ")[0],price:b.n,last:b.r,id:b.a};f.push(d)}),d(f,h)}e&&e()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})}var f=[],g=1,h=_.template(c.tem[0])({left:"",center:"查询结果"});a("#head").html(h),e(),b.reflash.add("dealList",function(a){e(a)})}})}($,app,config);