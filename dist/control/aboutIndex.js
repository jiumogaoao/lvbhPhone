!function(a,b,c){b.control.set({name:"aboutIndex",par:"",tem:["top_second","title_input_list"],fn:function(c){a("body").css("background-color","#fff");var d=_.template(c.tem[0])({left:"",center:"关于我们"});a("#head").html(d),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)});var e=_.template(c.tem[1])({list:[{link:!0,name:"gsjs",left:"公司介绍",right:'<span class="fa fa-right"></span>'},{link:!0,name:"yhxy",left:"用户协议",right:'<span class="fa fa-right"></span>'},{link:!0,name:"mzsm",left:"免责申明",right:'<span class="fa fa-right"></span>'},{link:!0,name:"ysbh",left:"隐私保护",right:'<span class="fa fa-right"></span>'},{link:!0,name:"zscqbh",left:"知识产权保护",right:'<span class="fa fa-right"></span>'},{link:!0,name:"kfdh",left:"客服电话",right:'400-606-2111 <span class="fa fa-right"></span>'}]});a("#scroller").html(e),a("[name='gsjs']").unbind("tap").bind("tap",function(){window.location.hash="company"}),a("[name='yhxy']").unbind("tap").bind("tap",function(){window.location.hash="protocol"}),a("[name='mzsm']").unbind("tap").bind("tap",function(){window.location.hash="exempy"}),a("[name='ysbh']").unbind("tap").bind("tap",function(){window.location.hash="conceal"}),a("[name='zscqbh']").unbind("tap").bind("tap",function(){window.location.hash="intellectual"}),a("[name='kfdh']").unbind("tap").bind("tap",function(){b.bottom.on("tel")}),myScroll.refresh(),a("img").load(function(){myScroll.refresh()}),b.api.at(function(){},c.at)}})}($,app,config);