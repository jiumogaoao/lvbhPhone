!function(a,b,c){b.control.set({name:"dealMessage",par:"id",tem:["top_second"],fn:function(b){var c=_.template(b.tem[0])({left:"",center:"预订须知"});a("#head").html(c),a("#head .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a("#scroller").html('<img src="img/message.png" style="width:100%"/>');setTimeout(function(){},200);a("img").load(function(){})}})}($,app,config);