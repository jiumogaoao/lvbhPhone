!function(a,b,c){b.control.set({name:"collectTravelList",par:"type",tem:["top_third","travel_list","single_button"],fn:function(c){function d(d,e){var f=_.template(c.tem[1])({type:c.type,list:d}),g=_.template(c.tem[2])({text:"取消收藏",id:"send"});"0"===c.type?a("#scroller").html(f):(a("#scroller").html(f+g),a("#send").unbind("tap").bind("tap",function(){var c="";a(".travel_list .hl").each(function(b){c+=a(this).attr("pid"),b!==a(".travel_list .hl").length-1&&(c+="-")}),b.api.run("collect_remove","at="+e+"&a="+c,function(){window.location.hash="collectTravelList/0"},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a(".top_third .rightButton").unbind("tap").bind("tap",function(){window.location.hash="collectTravelList/"+i[c.type]});setTimeout(function(){},200);a("img").load(function(){})}function e(c){b.api.at(function(e){b.api.run("collect_get","at="+e+"&c=0&a="+g,function(b){b.pn===g+""&&(g++,b=b.data,a.each(b,function(a,b){var c={id:b.a,title:b.d,place:b.ag,tag:b.ah,at:e,image:b.af,pra:b.ac,star:b.ab,com:b.aa};f.push(c)}),d(f,e)),c&&c()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})}var f=[],g=1,h=["管理","取消"],i=["1","0"],j=_.template(c.tem[0])({left:"",center:"游记",right:h[c.type]});a("#head").html(j),e(),b.reflash.add("collectTravelList",function(a){e(a)})}})}($,app,config);