!function(a,b,c){b.control.set({name:"groupMember",par:"type/id",tem:["top_third","group_member"],fn:function(c){function d(b,d){a.each(b,function(a,b){var c={image:b.e,name:b.c,fans:b.i,money:b.g,id:b.a,code:b.b};f.push(c)});var e=_.template(c.tem[1])({at:d,list:f});a("#scroller").html(e),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)});setTimeout(function(){myScroll.refresh()},200)}function e(a){function e(e){var f="";f+=c.id?"e="+c.id+"&a="+g+"&d="+c.type:"at="+a+"&a="+g+"&d="+c.type,b.api.run("group_member_get",f,function(b){b.pn===g+""&&(g++,b=b.data,d(b,a)),e&&e()},function(a){alert(JSON.stringify(a))})}e(),b.reflash.add("groupMember",function(a){e(a)})}var f=[],g=1,h=_.template(c.tem[0])({left:"",center:'<div class="top_nav"><a class="top_nav_point top_nav_pointL" href="#groupMember/0">人气</a><a class="top_nav_point top_nav_pointR" href="#groupMember/1">财富</a><div class="clear"></div></div>',right:'<span class="fa fa-search"></span>'});a("#head").html(h),a(".top_third .top_nav a").eq(c.type).addClass("hl"),b.api.at(e)}})}($,app,config);