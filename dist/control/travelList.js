!function(a,b,c){b.control.set({name:"travelList",par:"nav/type",tem:["top_third","travel_list","second_button","nav_third"],fn:function(c){function d(d,e){var f=_.template(c.tem[1])({type:c.type,list:d}),g=_.template(c.tem[2])({left:"删除",right:"提交审核"});"0"===c.type?a("#scroller").html(m+f):(a("#scroller").html(m+f+g),a(".third_button #left").unbind("tap").bind("tap",function(){var c="";a(".travel_list .hl").each(function(b){c+=a(this).attr("pid"),b!==a(".travel_list .hl").length-1&&(c+="-")}),b.api.run("travel_remove","at="+e+"&a="+c,function(){window.location.hash="travelList/2/0"},function(a){alert(JSON.stringify(a))})}),a(".third_button #right").unbind("tap").bind("tap",function(){var c="";a(".travel_list .hl").each(function(b){c+=a(this).attr("pid"),b!==a(".travel_list .hl").length-1&&(c+="-")}),b.api.run("travel_commit","at="+e+"&a="+c,function(){window.location.hash="travelList/2/0"},function(a){alert(JSON.stringify(a))})})),a(".nav_third .nav_point_frame").eq(c.nav).addClass("hl"),a(".nav_third #left").unbind("tap").bind("tap",function(){window.location.hash="travelList/0/0"}),a(".nav_third #center").unbind("tap").bind("tap",function(){window.location.hash="travelList/1/0"}),a(".nav_third #right").unbind("tap").bind("tap",function(){window.location.hash="travelList/2/0"}),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a(".top_third .manageButton").unbind("tap").bind("tap",function(){window.location.hash="travelList/2/"+j[c.type]}),"2"===c.nav&&"1"===c.type&&a(".travel_list .right").unbind("tap").bind("tap",function(){window.location.hash="travelEdit/"+a(this).parents(".point").attr("pid")});setTimeout(function(){myScroll.refresh()},200)}function e(e){b.api.at(function(h){b.api.run("travel_get","at="+h+"&c="+k[c.nav]+"&a="+g,function(b){b.pn===g+""&&(g++,b=b.data,a.each(b,function(a,b){var c={image:b.e,title:b.f,place:b.g,tag:b.m,pra:b.j,star:b.i,com:b.h,id:b.c,gid:b.d};f.push(c)}),d(f,h)),e&&e()},function(a){alert(JSON.stringify(a))})})}var f=[],g=1,h=["管理","取消"],i=['<div class="newButton"><span class="fa fa-pencil-square-o"></span></div><div class="clear"></div>','<div class="newButton"><span class="fa fa-pencil-square-o"></span></div><div class="clear"></div>','<div class="newButton"><span class="fa fa-pencil-square-o"></span></div><div class="manageButton">'+h[c.type]+'</div><div class="clear"></div>'],j=["1","0"],k=["2","8","1"],l=_.template(c.tem[0])({left:"",center:"游记",right:i[c.nav]}),m=_.template(c.tem[3])({left:{text:"已发布"},center:{text:"审核中"},right:{text:"草稿箱"}});a("#head").html(l),a("#head .newButton").css({"float":"right"}),a("#head .manageButton").css({"float":"right","margin-right":".2rem"}),e(),b.reflash.add("travelList",function(a){e(a)})}})}($,app,config);