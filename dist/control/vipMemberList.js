!function(a,b,c){b.control.set({name:"vipMemberList",par:"id/number",tem:["top_second","groupTop","group_nav","group_member"],fn:function(d){function e(b,c){var e=_.template(d.tem[1])(c),g=_.template(d.tem[3])({list:j}),h=_.template(d.tem[2])({list:[{id:"0",name:"人气"},{id:"1",name:"财富"}]});a("#scroller").html(e+h+g),a("#scroller .groupTop .nav").eq(0).addClass("hl"),a("#scroller .group_nav .point[nid='"+i+"']").addClass("hl"),a("#scroller .group_nav .point").unbind("tap").bind("tap",function(){i=Number(a(this).attr("nid")),j=[],f(b,c)}),a("#scroller .groupTop .nav").eq(1).unbind("tap").bind("tap",function(){window.location.hash="vipTravelList/"+d.id+"/"+d.number}),a("#scroller .group_member").css({"background-color":"#fff","padding-bottom":".3rem","margin-top":"0px"});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}function f(f,g){b.api.run("other_group_member_get","at="+f+"&a="+h+"&c="+i+"&d="+d.id,function(b){b=b.data,a.each(b,function(a,b){j.push({image:c.sour+"center/tp.jspx?at="+f+"&a=1&b="+b.l,name:b.c,id:b.b,fans:b.r,money:b.p})}),e(f,g)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}function g(a){b.api.run("group_get","at="+a+"&a=1&b=1&d=0&e="+d.number,function(b){d.number=b.data[0].i,b=b.data[0];var e={img:c.sour+"sns/tpu.jspx?at="+a+"&a=1&b="+b.i+"&c="+b.l,name:b.c,id:b.b,hot:b.r,money:b.p,dsc:b.h,step:b.m};f(a,e)},function(a){b.pop.on("alert",{text:json.stringify(a)})})}var h=1,i=0,j=[],k=_.template(d.tem[0])({left:"",center:"TA的达人圈"});a("#head").html(k),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),b.scrollFn.add("vipMemberList",function(b){a("#head").css("background-color","rgba(0,158,255,"+-1*b/200+")")});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()}),b.api.at(g)}})}($,app,config);