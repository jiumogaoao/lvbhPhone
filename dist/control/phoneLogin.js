/*! This is uglify test - 2015-07-23 */!function(a,b,c){b.control.set({name:"phoneLogin",par:"",tem:["top_third","nav_two","icon_input_list","single_button"],fn:function(c){function d(){a("[name='key'] .other span").html("发送动态密码"),a("[name='key'] .other").unbind("tap").bind("tap",function(){a("[name='user'] input").val()&&a("[name='user'] input").val().length&&b.api.at(function(c){b.api.run("login_phone_message",{at:c,mobile:a("[name='user'] input").val()},function(b){a("[name='key'] .other").unbind("tap");var c=60,e=setInterval(function(){0!==c?(a("[name='key'] .other span").html(c+"秒后可再次发送"),c--):(clearInterval(e),d())},1e3)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})})}var e=_.template(c.tem[0])({left:"",center:"登录",right:"注册"});a("#head").html(e);var f=_.template(c.tem[1])({left:{text:"普通登录",hl:!1},right:{text:"手动动态密码登录",hl:!0}}),g=_.template(c.tem[2])({list:[{name:"user",placehold:"请输入手机号",icon:"fa-user",value:"",other:""},{name:"key",placehold:"请输入动态密码",icon:"fa-lock",value:"",other:"<span style='font-size:.5rem;display:block;'>发送动态密码</span>"}]}),h=_.template(c.tem[3])({text:"登录",id:"loginButton"});a("#scroller").html(f+g+h),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a(".top_third .rightButton").unbind("tap").bind("tap",function(){window.location.hash="regist"}),a(".nav_two #left").unbind("tap").bind("tap",function(){window.location.hash="login"}),a("#loginButton").unbind("tap").bind("tap",function(){a("[name='user'] input").val()&&a("[name='user'] input").val().length&&a("[name='key'] input").val()&&a("[name='key'] input").val().length&&b.api.at(function(c){b.api.run("login_phone",{at:c,mobile:a("[name='user'] input").val(),mp:a("[name='key'] input").val()},function(){window.location.hash="index"},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})})}),d(),myScroll.refresh()}})}($,app,config);