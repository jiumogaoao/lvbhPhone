!function(a,b,c){b.control.set({name:"regist",par:"",tem:["top_second","icon_place_list","icon_input_list","single_button"],fn:function(c){function d(c){function d(){a("[name='code'] .other span").html("发送动态密码"),a("[name='code'] .other").unbind("tap").bind("tap",function(){a("[name='user'] input").val()&&a("[name='user'] input").val().length?b.api.run("regist_phone_message",{at:c,mobile:a("[name='user'] input").val()},function(b){a("[name='code'] .other").unbind("click");var c=60,e=setInterval(function(){0!==c?(a("[name='code'] .other span").html(c+"秒后可再次发送"),c--):(clearInterval(e),d())},1e3)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}):b.pop.on("alert",{text:"请填写手机号"})})}a("#scroller").html(i+g+h),a("[name='user'] input").unbind("change").bind("change",function(){e.phone=a(this).val()}),a("[name='code'] input").unbind("change").bind("change",function(){e.code=a(this).val()}),a("[name='key'] input").unbind("change").bind("change",function(){e.key=a(this).val()}),a("[name='key2'] input").unbind("change").bind("change",function(){e.key2=a(this).val()}),d(),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a("#registButton").unbind("tap").bind("tap",function(){return e.phone.length?e.code.length?e.key.length&&e.key2.length?e.key.length!==e.key2.length?(b.pop.on("alert",{text:JSON.stringify("重复输入密码有误")}),!1):e.place.name?void b.api.run("regist","at="+c+"&mobile="+e.phone+"&t=11&p="+e.key+"&v="+e.code+"&s1="+e.pro+"&s2="+e.place.id+"&pid=&r=",function(a){b.pop.on("alert",{text:"注册成功"}),window.location.hash="index"},function(a){b.pop.on("alert",{text:JSON.stringify(a)})}):(b.pop.on("alert",{text:JSON.stringify("请选择归属地")}),!1):(b.pop.on("alert",{text:JSON.stringify("请输入密码")}),!1):(b.pop.on("alert",{text:JSON.stringify("请输入验证码")}),!1):(b.pop.on("alert",{text:JSON.stringify("请输入手机号")}),!1)}),a(".icon_input_list.place").unbind("tap").bind("tap",function(){b.cache("regist",e),window.location.hash="searchPlace"}),a("img").load(function(){})}var e={phone:"",code:"",key:"",key2:"",place:{},pro:""};b.cache("regist")&&(e=b.cache("regist"),b.cache("regist",null,!0));var f=_.template(c.tem[0])({left:"",center:"注册"});a("#head").html(f);var g=_.template(c.tem[2])({list:[{name:"user",placehold:"请输入11位手机号",icon:"fa-pad",value:e.phone||"",other:""},{name:"code",placehold:"请输入短信验证码",icon:"fa-node",value:e.code||"",other:"<span style='font-size:.5rem;display:block;'>发送短信验证码</span>"},{name:"key",placehold:"请输入6-16位字母数字组合密码",icon:"fa-lock",value:e.key||"",other:"",type:"password"},{name:"key2",placehold:"请再次输入密码",icon:"fa-lock",value:e.key2||"",other:"",type:"password"}]}),h=_.template(c.tem[3])({text:"注册",id:"registButton"}),i=_.template(c.tem[1])({place:e.place.name||""});b.api.at(d)}})}($,app,config);