!function(a,b,c){b.control.set({name:"index",par:"",tem:["foot_nav","index_head","index_nav","product_group_list","group_member","index_banner"],fn:function(d){function e(c,e,f){b.scrollFn.add("index",function(b){a("#head").css("background-color","rgba(0,158,255,"+-1*b/200+")")});var g=_.template(d.tem[5])({list:f});a("#head").html(d.tem[1]),a("#head .right").unbind("click").bind("click",function(){b.bottom.on("tel")});var h=_.template(d.tem[3])({list:c}),i=_.template(d.tem[4])({list:e});a("#scroller").html(g+d.tem[2]+h+i),a(".product_group_list .icon").unbind("tap").bind("tap",function(){window.location.hash=a(this).attr("href")}),a(".product_group_list .group").css("border-top","0px"),a(".product_group_list .point").unbind("tap").bind("tap",function(){window.location.hash="productDetail/"+a(this).attr("type")+"/"+a(this).attr("pid")}),a("#scroller .group_member").css({"background-color":"#fff","padding-bottom":".2rem"});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}function f(d){function f(){j++,6===j&&e(g,h,i)}var g=[{title:"出发地跟团-国内精选",href:"travelIndex/0/1",main:[]},{title:"出发地跟团-出境精选",href:"travelIndex/0/2",main:[]},{title:"目的地跟团-国内惠",href:"travelIndex/1/1",main:[]},{title:"目的地跟团-出境惠",href:"travelIndex/1/2",main:[]},{title:"旅游达人圈",main:[]}],h=[],i=[],j=0;b.api.run("pomo_get",'at="'+d+'"',function(a){i=a,f()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}),b.api.run("index_cfgj",'at="'+d+'"',function(b){a.each(b,function(a,b){var c={image:b.a,name:b.b,price:b.c,place:b.d,id:b.e,type:12};g[1].main.push(c)}),f()}),b.api.run("index_cfgn",'at="'+d+'"',function(b){a.each(b,function(a,b){var c={image:b.a,name:b.b,price:b.c,place:b.d,id:b.e,type:12};g[0].main.push(c)}),f()}),b.api.run("index_mdgj",'at="'+d+'"',function(b){a.each(b,function(a,b){var c={image:b.a,name:b.b,price:b.c,place:b.d,id:b.e,type:13};g[3].main.push(c)}),f()}),b.api.run("index_mdgn",'at="'+d+'"',function(b){a.each(b,function(a,b){var c={image:b.a,name:b.b,price:b.c,place:b.d,id:b.e,type:13};g[2].main.push(c)}),f()}),b.api.run("index_vip",'at="'+d+'"',function(b){a.each(b,function(a,b){var e={image:c.sour+"sns/tpu.jspx?at="+d+"&a=1&b="+b.i+"&c="+b.l,name:b.c,fans:b.r,money:b.p,id:b.b};h.push(e)}),f()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}a("#foot").html(d.tem[0]),a("#foot .fa-home").addClass("hl"),a("#foot .point").eq(0).addClass("hl"),b.api.at(f)}})}($,app,config);