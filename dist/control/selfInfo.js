!function(a,b,c){b.control.set({name:"selfInfo",par:"",tem:["top_second","title_input_list"],fn:function(c){function d(b){var d=_.template(c.tem[1])({list:[{link:!0,name:"nc",left:"昵称",right:b.e+' <span class="fa fa-right"></span>'},{link:!0,name:"zhxm",left:"真实姓名",right:b.f+' <span class="fa fa-right"></span>'},{link:!0,name:"xb",left:"性别",right:f[b.g]+' <span class="fa fa-right"></span>'},{link:!0,name:"csrq",left:"出生日期",right:b.h+' <span class="fa fa-right"></span>'},{link:!0,name:"qq",left:"QQ号",right:b.i+' <span class="fa fa-right"></span>'},{link:!0,name:"zhzcsj",left:"账号注册时间",right:b.k+' <span class="fa fa-right"></span>'},{link:!0,name:"qygs",left:"区域归属",right:b.l+" "+b.m+' <span class="fa fa-right"></span>'},{link:!0,name:"zhsj",left:"账号升级",right:'<span class="fa fa-right"></span>'},{link:!0,name:"zhaq",left:"账号安全",right:g[b.r]+'<span class="fa fa-right"></span>'}]});a("#scroller").html(d),a(".title_input_list").css("background-color","#eeeeee"),a(".title_input_list .point").css("background-color","#fff"),a("[name='zhzcsj'],[name='zhsj']").css("margin-top",".3rem"),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),myScroll.refresh(),a("img").load(function(){myScroll.refresh()})}function e(a){b.api.run("user_get","at="+a,function(a){d(a.userinfo)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var f=["","男","女"],g=["弱","中","强"],h=_.template(c.tem[0])({left:"",center:"个人信息"});a("#head").html(h),b.api.at(e)}})}($,app,config);