!function(a,b,c){b.control.set({name:"cardList",par:"id/type",tem:["top_second","card_list","single_button"],fn:function(c){function d(b){var d=_.template(c.tem[1])(b);a("#scroller").html(d),a("#scroller .point").unbind("tap").bind("tap",function(){a("#scroller .point").removeClass("hl"),a("#scroller .point .fa").removeClass("hl"),a(this).addClass("hl"),a(this).find(".fa").addClass("hl"),a("#scroller [name='bankType']").val(a(this).attr("bankCode"))}),a("#scroller").css("padding-bottom","1.5rem");setTimeout(function(){},200);a("img").load(function(){})}function e(a){b.api.run("pay_detail","at="+a+"&a="+c.id,function(a){console.log(a),d({lastTime:a.b,number:a.go.x,name:a.go.n,start:a.go.r.split(" ")[0],end:moment(a.go.r.split(" ")[0],"YYYY-MM-DD").add(Number(a.lvDays),"days").format("YYYY-MM-DD"),city:a.go.o,price:a.go.i,cardList:g[c.type]})},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}a("body").css({"background-color":"#fff"});var f=["储蓄卡支付","信用卡支付"],g=[[{id:"12",img:"img/center_logo_industrlal and commerclal.png",name:"ICBC_D"},{id:"9",img:"img/center_logo_china cttic.png",name:"CITIC"},{id:"3",img:"img/center_logo_aerienltaral.png",name:"ABC"},{id:"18",img:"img/centet_icom_merehants.png",name:"CMB_D"},{id:"6",img:"img/center_logo_minsheng.png",name:"CMBC_D"},{id:"13",img:"img/center_logo_beijing.png",name:"BOB"},{id:"11",img:"img/center_logo_pudong.png",name:"SPDB"},{id:"7",img:"img/center_logo_communications.png",name:"COMM_D"},{id:"4",img:"img/center_logo_construction.png",name:"CCB_D"},{id:"14",img:"img/center_logo_post.png",name:"POSTGC"},{id:"8",img:"img/centet_logo_development.png",name:"GDB_D"},{id:"21",img:"img/center_logo_industrid.png",name:"CIB_D"},{id:"10",img:"img/centet_icom_shenzhen development.png",name:"SDB"},{id:"17",img:"img/center_logo_china.png",name:"BOC_D"},{id:"5",img:"img/center_logo_everbright.png",name:"CEB_D"},{id:"22",img:"img/center_logo_east asia.png",name:"BEA_D"},{id:"19",img:"img/conter_logo_ping an.png",name:"PAB"}],[{id:"24",img:"img/center_logo_industrlal and commerclal.png",name:"ICBC_C"},{id:"23",img:"img/centet_icom_merehants.png",name:"CMB_C"},{id:"26",img:"img/center_logo_minsheng.png",name:"CMBC_C"},{id:"28",img:"img/center_logo_communications.png",name:"COMM_C"},{id:"25",img:"img/center_logo_construction.png",name:"CCB_C"},{id:"27",img:"img/center_logo_industrid.png",name:"CIB_C"},{id:"30",img:"img/centet_logo_development.png",name:"GDB_C"},{id:"31",img:"img/center_logo_china.png",name:"BOC_C"},{id:"29",img:"img/center_logo_everbright.png",name:"CEB_C"},{id:"32",img:"img/center_logo_east asia.png",name:"BEA_C"}]],h=_.template(c.tem[0])({left:"",center:f[c.type]});a("#head").html(h);var i=_.template(c.tem[2])({id:"gotopay",text:"下一步"});a("#foot").html(i),a(".single_button").css({"margin-top":"0px"}),a("#foot").show(),a("#gotopay").unbind("tap").bind("tap",function(){a("#scroller [name='bankType']").val()&&a("#tenpay").submit()}),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),b.api.at(e)}})}($,app,config);