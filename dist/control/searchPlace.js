/*! This is uglify test - 2015-07-16 */!function(a,b,c){b.set({name:"searchPlace",par:"",tem:["top_second","search_place"],fn:function(b){var c=_.template(b.tem[0])({left:"",center:"选择城市"});a("#head").html(c),a("#scroller").html(b.tem[1]),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a("#registButton").unbind("tap").bind("tap",function(){window.location.hash="index"})}})}($,app.control,config);