/*! This is uglify test - 2015-07-23 */!function(a,b,c){b.control.set({name:"searchPlace",par:"",tem:["top_second","search_place","tap_right"],fn:function(b){var c={now:"深圳",place:{A:[{name:"AA",id:""}],B:[{name:"BB",id:""}],C:[{name:"CC",id:""}],D:[{name:"DD",id:""}],E:[{name:"EE",id:""}],F:[{name:"FF",id:""}],G:[{name:"GG",id:""}],H:[{name:"HH",id:""}],I:[{name:"II",id:""}],J:[{name:"JJ",id:""}],K:[{name:"KK",id:""}],L:[{name:"LL",id:""}],M:[{name:"MM",id:""}],N:[{name:"NN",id:""}],O:[{name:"OO",id:""}],P:[{name:"PP",id:""}],Q:[{name:"QQ",id:""}],R:[{name:"RR",id:""}],S:[{name:"SS",id:""}],T:[{name:"TT",id:""}],U:[{name:"UU",id:""}],V:[{name:"VV",id:""}],W:[{name:"WW",id:""}],X:[{name:"XX",id:""}],Y:[{name:"YY",id:""}],Z:[{name:"ZZ",id:""}]}},d=_.template(b.tem[2])(c);a("#otherFrame").html(d),a(".tap").unbind("tap").bind("tap",function(){myScroll.scrollToElement(a(".title[index='"+a(this).html()+"']")[0])}),a("#otherFrame").css({position:"fixed",top:"3rem",right:"0rem",width:"1rem","background-color":"#fff","z-index":"10"}),a("#otherFrame").show();var e=_.template(b.tem[0])({left:"",center:"选择城市"});a("#head").html(e);var f=_.template(b.tem[1])(c);a("#scroller").html(f),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a("#registButton").unbind("tap").bind("tap",function(){window.location.hash="index"}),a(".point").unbind("tap").bind("tap",function(){a(".point").removeClass("hl"),a(this).addClass("hl")});setTimeout(function(){myScroll.refresh()},200)}})}($,app,config);