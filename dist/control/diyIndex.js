!function(a,b,c){b.control.set({name:"diyIndex",par:"type/at",tem:["top_second","diy_hot","diy_nav","product_group_list"],fn:function(c){function d(b){var d=_.template(c.tem[3])({list:[{main:b}]});a("#scroller").html(c.tem[1]+d+'<div class="clear"></div>'),a(".product_group_list .point").unbind("tap").bind("tap",function(){window.location.hash="productDetail/"+a(this).attr("type")+"/"+a(this).attr("pid")}),a(".product_group_list").css({width:"8rem","float":"right","background-color":"#fff"});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}function e(e){b.api.run("diy_get","d="+c.type,function(b){var c=[];a.each(b,function(a,b){var d={image:"http://"+b.e,name:b.b,price:b.d,place:b.f,id:b.a,type:b.c};c.push(d)}),d(c)},function(a){alert(JSON.stringify(a))})}var f=_.template(c.tem[0])({left:"",center:"主题游"});a("#head").html(f),a("#head .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),a("#head .center").css("font-size",".5rem"),a("#otherFrame").html(c.tem[2]),a("#otherFrame").css({position:"fixed",top:"1.5rem",left:"0rem",width:"2rem",height:a(window).height()/(a(window).width()/10)-1.5+"rem","background-color":"#fff","z-index":"10"}),a("#otherFrame").show(),a("#otherFrame [num='"+c.type+"']").addClass("hl"),b.api.at(e,c.at)}})}($,app,config);