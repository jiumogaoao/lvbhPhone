!function(a,b,c){b.control.set({name:"foundIndex",par:"",tem:["foot_nav","top_second","pic_table"],fn:function(c){function d(c){b.api.run("diy_type_get","at="+c,function(b){for(var c=0;7>c;c++)b[c]&&(a("#scroller .frame_"+c).attr("num",b[c].a),a("#scroller .frame_"+c+" .title").html(b[c].b),a("#scroller .frame_"+c+" .icon").attr("src",b[c].d))},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var e=_.template(c.tem[1])({left:" ",center:"在这里发现世界，发现自我..."});a("#head").html(e),a("#head .center").css("font-size",".5rem"),a("#scroller").html(c.tem[2]),a("#foot").html(c.tem[0]),a("#foot .fa-found").addClass("hl"),a("#foot .point").eq(1).addClass("hl");setTimeout(function(){},200);a("img").load(function(){}),b.api.at(d)}})}($,app,config);