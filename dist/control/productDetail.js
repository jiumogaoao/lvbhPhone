!function(a,b,c){b.control.set({name:"productDetail",par:"type/id/at/ut",tem:["top_third","nav_third","product_top","product_center","nav_third","product_bottom","title_input_list","bottom_button"],fn:function(c){function d(d,e,g,i){var j=_.template(c.tem[4])({left:{text:"产品特色",hl:!0},center:{text:"详细行程"},right:{text:"费用说明"}}),k=_.template(c.tem[6])({list:[{left:"预订须知",right:"<span class='fa fa-right'></span>",link:!0,name:"message"},{left:"预订流程",right:"<span class='fa fa-right'></span>",link:!0,name:"flow"},{left:"产品点评",right:"<span class='fa fa-right'></span>",link:!0,name:"comment"}]}),l=_.template(c.tem[2])(e),m=_.template(c.tem[3])(g),n=_.template(c.tem[5])(i);a("#scroller").html(l+m+j+n+k),a(".nav_two.nav_third").attr("id","guding"),a("#otherFrame").html(j),a("#otherFrame").css({width:"100%",height:"1.3rem",position:"absolute",top:"1.05rem","z-index":"10"}),a("#otherFrame").hide(),b.scrollFn.add("productDetail",function(b){10*a("#guding").offset().top/a(window).width()<=1.5?(a("#otherFrame").show(),a("#cpts").offset().top>0&&10*a("#cpts").offset().top/a(window).width()<3&&(a(".nav_two.nav_third .nav_point_frame").removeClass("hl"),a(".nav_two.nav_third #left").addClass("hl")),a("#xxxc").offset().top>0&&10*a("#xxxc").offset().top/a(window).width()<3&&(a(".nav_two.nav_third .nav_point_frame").removeClass("hl"),a(".nav_two.nav_third #center").addClass("hl")),a("#fysm").offset().top>0&&10*a("#fysm").offset().top/a(window).width()<3&&(a(".nav_two.nav_third .nav_point_frame").removeClass("hl"),a(".nav_two.nav_third #right").addClass("hl"))):a("#otherFrame").hide()}),a("#scroller .product_top .collect").unbind("tap").bind("tap",function(){b.api.run("collect_add","at="+d+"&t="+h[c.type]+"&id="+c.id+"&cn="+f.title+"&desc="+f.title,function(a){alert("收藏成功")},function(a){alert(JSON.stringify(a))})}),a("#scroller #date").unbind("tap").bind("tap",function(){app.cookies("login_"+d)&&app.cookies("login_"+d).login?(b.cache("pruduct_input_"+c.id,f),window.location.hash="calendar/"+c.type+"/"+c.id+"/"+f.state+"/0"):(alert("请先登录"),window.location.hash="login")}),a("#payButton").unbind("tap").bind("tap",function(){app.cookies("login_"+d)&&app.cookies("login_"+d).login?(b.cache("pruduct_input_"+c.id,f),window.location.hash="productInput/"+c.type+"/"+c.id+"/"+f.state):(alert("请先登录"),window.location.hash="login/productDetail$"+c.type+"$"+c.id)}),a(".title_input_list [name='message']").unbind("tap").bind("tap",function(){window.location.hash="messageList/"+c.type+"/"+c.id}),a(".title_input_list [name='flow']").unbind("tap").bind("tap",function(){window.location.hash="dealFlow/"+c.id}),a(".title_input_list [name='comment']").unbind("tap").bind("tap",function(){window.location.hash="commentList/"+c.id}),a("#scroller .share").unbind("tap").bind("tap",function(){b.bottom.on("share",{list:[{image:"img/weibo.png",name:"新浪微博",id:"xinlang"},{image:"img/qq.png",name:"腾讯QQ",id:"qq"},{image:"img/qzone.png",name:"QQ空间",id:"qzone"}]},function(){a(".share [sid='xinlang']").unbind("tap").bind("tap",function(){window.location.href="http://service.weibo.com/share/share.php?url="+window.location.href+"&appkey=&searchPic=true"}),a(".share [sid='qq']").unbind("tap").bind("tap",function(){window.location.href="http://connect.qq.com/widget/shareqq/index.html?url="+encodeURIComponent(window.location.href)+"&desc=&title="+encodeURIComponent(e.title)+"&summary=&pics=&flash=&site=&style=201&width=32&height=32&showcount="}),a(".share [sid='qzone']").unbind("tap").bind("tap",function(){window.location.href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+window.location.href+"&title="+e.title+"&desc="+e.title+"&summary=&site=lvbh"})},function(a){alert(JSON.stringify(a))})}),a(".nav_third .nav_point_frame").unbind("tap").bind("tap",function(){a(".nav_third .nav_point_frame").removeClass("hl"),a(this).addClass("hl"),a(".product_bottom .list").hide(),a(".product_bottom [show='"+a(this).attr("id")+"']").show(),myScroll.refresh()}),a(".nav_third").css({"margin-top":".4rem","margin-bottom":"0px","border-top":"1px solid #dcdcdc"}),a(".title_input_list").css({"border-top":"1px solid #dcdcdc"});setTimeout(function(){a("[show='left']").show(),myScroll.refresh()},1e3);a("img").load(function(){myScroll.refresh()})}function e(e){b.api.run(i[c.type],"aid="+c.id,function(b){f.state=b.gtinfo.gd.e;var g=b.gtinfo.gd;f.date||(f.date=b.priceArray[0]);var h=f.date,i=[];f.title=g.b,g.ee=JSON.parse(g.ee),a.each(g.ee.info.tag,function(a,b){var c={name:b.nam,color:b.cs};i.push(c)});var k={image:b.gtinfo.pics,type:j[c.type],number:g.c||"",tag:i,title:g.b||"",price:g.f||"",oldPrice:g.g||""},l={satisfy:g.l,comment:g.m,collect:g.gg,date:h.c||"",twoMan:h.n||"",threeMan:h.o||"",fourMan:h.p||"",fiveMan:h.q||""},m={start:g.w||"",end:g.x||"",line:g.aa||"",day:"5天4夜",hotel:g.z||"",traffic:g.d||"",rally:g.k||"",tel:g.y||"",special:g.bb||"",detaiLine:g.p||"",include:g.r||"",noinclude:g.s||"",payself:g.t||""};d(e,k,l,m)},function(a){alert(JSON.stringify(a))})}var f={traveler:[""],man:1,child:0,child2:0,oldman:0,oldman2:0,single:!0,linkMan:{name:"",tel:"",email:""},invoice:{on:!1,title:"",place:"",name:"",phone:""},contract:{on:!1,place:"",name:"",phone:""},agree:!1};b.cache("pruduct_input_"+c.id)&&(f=b.cache("pruduct_input_"+c.id));var g=_.template(c.tem[7])({text:"立即预定",id:"payButton"});a("#foot").html(g),a("#foot").show();var h={12:"4",13:"5"},i={12:"cf_detail_get",13:"md_detail_get"},j={12:"出发地跟团",13:"目的地跟团"},k=_.template(c.tem[0])({left:"",center:"产品详情",right:'<span class="fa fa-phone2"></span>'});a("#head").html(k),a("#head .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),a("#head .rightButton").unbind("click").bind("click",function(){b.bottom.on("tel")}),b.api.at(e,c.at)}})}($,app,config);