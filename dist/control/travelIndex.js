!function(a,b,c){b.control.set({name:"travelIndex",par:"type/state/id/at",tem:["top_second","nav_four","nav_third","hot_nav","product_group_list"],fn:function(c){function d(b,d,e,f,g){g||(g="");var h=_.template(c.tem[Number(c.type)+1])({left:{text:"推荐"},center:{text:"国内"},right:{text:"出境"},four:{text:'<span class="fa fa-place2" style="color:#ff840c"></span> '+f.s}}),i=_.template(c.tem[4])({list:[{title:!1,main:e}]});a("#scroller").html(h+g+i),c.id&&a(".hot_nav .point#"+c.id).addClass("hl"),a(".product_group_list .point").unbind("click").bind("click",function(){window.location.hash="productDetail/"+a(this).attr("type")+"/"+a(this).attr("pid")}),a(".hot_nav .point").unbind("click").bind("click",function(){window.location.hash="travelIndex/"+c.type+"/"+c.state+"/"+a(this).attr("id")}),a(".nav_four #four").unbind("click").bind("click",function(){window.location.hash="searchGt/"+c.type+"/4"}),a(".hot_nav .button").unbind("click").bind("click",function(){window.location.hash="searchGt/"+c.type+"/"+(Number(c.state)-1)}),a(".nav_two #"+m[c.state]).addClass("hl"),a(".nav_two #left").unbind("click").bind("click",function(){window.location.hash="travelIndex/"+c.type+"/0"}),a(".nav_two #center").unbind("click").bind("click",function(){window.location.hash="travelIndex/"+c.type+"/1"}),a(".nav_two #right").unbind("click").bind("click",function(){window.location.hash="travelIndex/"+c.type+"/2"});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}function e(e,f,g){b.api.run(o[c.type],"aid="+f.startId,function(b){var h=[];a.each(b,function(a,b){var d={image:b.gd.cc,name:b.gd.b,price:b.gd.f,place:b.gd.w,tag:{name:b.cd.a,"class":b.cd.b},date:b.sd,id:b.gd.a,type:l[c.type],state:b.gd.e};h.push(d)}),d(e,f,h,g)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}function f(e,f,g,h){b.api.run("cf_product_get","aid="+f.startId+"&bid="+c.id,function(b){var c=[];a.each(b,function(a,b){var d={image:b.gd.cc,name:b.gd.b,price:b.gd.f,place:b.gd.w,date:b.sd,id:b.gd.a,type:12,state:b.gd.e};c.push(d)}),d(e,f,c,h,g)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}function g(e,f,g,h){b.api.run("md_product_get","aid="+c.id,function(b){var c=[];a.each(b,function(a,b){var d={image:b.gd.cc,name:b.gd.b,price:b.gd.f,place:b.gd.w,date:b.sd,id:b.gd.a,type:13,state:b.gd.e};c.push(d)}),d(e,f,c,h,g)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}function h(d,e,h){b.api.run(n[c.type],"tp="+c.state,function(i){var j=[];if(i&&i.length){a.each(i,function(a,b){var c={name:b.b,id:b.a};j.push(c)});var k=_.template(c.tem[3])({list:j});c.id||(c.id=i[0].a),"0"===c.type?f(d,e,k,h):g(d,e,k,h)}else b.pop.on("alert",{text:"该项暂无数据"})},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}function i(a,d){console.log(b.cache("client_id")),b.api.run("client_get","at="+a+"&s="+(b.cache("client_id").id||""),function(b){"0"===c.state?e(a,d,b):h(a,d,b)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}function j(a){b.api.run("city_cf_get","at="+a,function(b){i(a,b)})}var k=["出发地跟团","目的地跟团"],l=[12,13],m=["left","center","right"],n=["cf_table_get","md_table_get"],o=["recommend_get_cf","recommend_get_md"],p=_.template(c.tem[0])({left:"",center:k[c.type]});a("#head").html(p),a("#head .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),b.api.at(j,c.at)}})}($,app,config);