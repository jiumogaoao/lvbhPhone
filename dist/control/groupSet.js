!function(a,b,c){b.control.set({name:"groupSet",par:"at",tem:["top_second","title_input_list"],fn:function(d){function e(b,e){function f(b){var c=new FileReader;c.onload=function(b){a("[name='icon'] img").attr("src",b.target.result)},c.readAsDataURL(b)}var g=[{name:"icon",left:"头像",right:'<img id="groupIcon" src="'+c.sour+"center/tp.jspx?at="+e+"&a=1&b="+b.f+'"/><span class="fa fa-right"></span><form id="headform" action="'+c.sour+'center/tu.jspx" method="post" enctype="multipart/form-data"><input type="file" id="upload" name="filename"/><input type="hidden" name="at" value="'+e+'"/></form>',link:!0},{name:"id",left:"圈子ID",right:b.a,link:!0},{name:"name",left:"名称",right:(b.c||"")+' <apan class="fa fa-right"></span>',link:!0},{name:"word",left:"宣言",right:(b.d||"")+' <apan class="fa fa-right"></span>',link:!0},{name:"dsc",left:"介绍",right:'<apan class="fa fa-right"></span>',link:!0},{name:"group",left:"加入的圈子",right:'<apan class="fa fa-right"></span>',link:!0},{name:"invite",left:"分享与邀请",right:'<apan class="fa fa-right"></span>',link:!0}],h=_.template(d.tem[1])({list:g});a("#scroller").html(h),a("#headform").ajaxForm(),a("[name='name']").unbind("tap").bind("tap",function(){window.location.hash="groupEdit/0/"+b.c}),a("[name='word']").unbind("tap").bind("tap",function(){window.location.hash="groupEdit/1/"+b.d}),a("[name='dsc']").unbind("tap").bind("tap",function(){window.location.hash="groupEdit/2/"+b.e}),a("[name='group']").unbind("tap").bind("tap",function(){window.location.hash="groupAdd"}),a("[name='invite']").unbind("tap").bind("tap",function(){window.location.hash="invite"}),a(".title_input_list").css({margin:0}),a("#upload").css({opacity:0,width:"1.5rem",height:"1.5rem",position:"absolute",top:".2rem",left:"-.3rem"}),a("[name='icon'] img").css({width:"1.5rem",height:"1.5rem",display:"block","float":"left",position:"relative",top:".2rem",right:".3rem"}),a("[name='icon']").css({height:"2rem","line-height":"2rem","background-color":"#ebf7ff"}),a("[name='icon'] input").change(function(b){c.loadingOn(),a("#headform").ajaxSubmit(function(a){c.loadingOff();var d=b.target.files[0];f(d)})}),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}function f(a){b.api.run("group_getMy","at="+a,function(b){e(b,a)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var g=_.template(d.tem[0])({left:"",center:"圈子设置"});a("#head").html(g),b.api.at(f,d.at)}})}($,app,config);