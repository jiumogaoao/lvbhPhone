!function(a,b,c){b.control.set({name:"login",par:"",tem:["top_third","nav_two","icon_input_list","single_button"],fn:function(d){function e(e){var f=_.template(d.tem[1])({left:{text:"普通登录",hl:!0},right:{text:"手动动态密码登录",hl:!1}}),g=_.template(d.tem[2])({list:[{name:"user",placehold:"请输入手机号/邮箱",icon:"fa-man",value:"",other:""},{name:"key",placehold:"请输入密码",icon:"fa-lock",value:"",other:"",type:"password"},{name:"code",placehold:"请输入右侧验证码",icon:"fa-node",value:"",other:'<img src="'+c.sour+"user/v.jspx?at="+e+'"/>'}]}),h=_.template(d.tem[3])({text:"登录",id:"loginButton"});a("#scroller").html(f+g+h),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a(".top_third .rightButton").unbind("tap").bind("tap",function(){window.location.hash="regist"}),a(".nav_two #right").unbind("tap").bind("tap",function(){window.location.hash="phoneLogin"}),a("#loginButton").unbind("tap").bind("tap",function(){b.api.at(function(c){b.api.run("login",{at:c,ln:a("[name='user'] input").val(),p:a("[name='key'] input").val(),v:a("[name='code'] input").val(),r:null},function(){window.location.hash="index"},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})}),myScroll.refresh()}var f=_.template(d.tem[0])({left:"",center:"登录",right:"注册"});a("#head").html(f),b.api.at(function(a){e(a)})}})}($,app,config);