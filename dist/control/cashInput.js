!function(a,b,c){b.control.set({name:"cashInput",par:"name/card/bank/money/dsc",tem:["top_second","balance","title_input_list","single_button"],fn:function(c){function d(d,e){var f=_.template(c.tem[1])({number:d.a2}),g=_.template(c.tem[2])({list:[{name:"name",placehold:"请输入开户名",value:c.name||"",left:"开户名"},{name:"number",placehold:"请输入卡号",value:c.card||"",left:"卡号"},{name:"bank",placehold:"请输入右侧验证码",value:"",right:'<span class="result">'+(c.bank||"请选择银行")+'</span> <span class="fa fa-angle-right"></span>',left:"银行",link:!0},{name:"money",placehold:"本次最多可提xxxx元，限100的倍数。",value:c.money||"",left:"金额"},{name:"dsc",placehold:"填写您对本次提现的备注说明",value:c.dsc||"",left:"备注"}]}),h=_.template(c.tem[3])({text:"提交申请",id:"cashButton"});a("#scroller").html(f+g+h),a("#scroller .link").unbind("tap").bind("tap",function(){window.location.hash="bankList/"+(a("[name='name'] input").val()||"")+"/"+(a("[name='number'] input").val()||"")+"/"+(a("[name='money'] input").val()||"")+"/"+(a("[name='dsc'] input").val()||"")}),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a("#cashButton").unbind("tap").bind("tap",function(){app.pop.on("password",null,function(){a("#pop .left").unbind("tap").bind("tap",function(){if(!a("[name='name'] input").val())return app.pop.on("alert",{text:"开户名不能为空"}),!1;if(!a("[name='number'] input").val())return app.pop.on("alert",{text:"卡号不能为空"}),!1;if("请选择银行"===a("[name='bank'] .result").html())return app.pop.on("alert",{text:"请选择银行"}),!1;if(!a("[name='money'] input").val())return app.pop.on("alert",{text:"金额不能为空"}),!1;if(!a("#pop .top").val())return app.pop.on("alert",{text:"交易密码不能为空"}),!1;var c="at="+e+'&jparam={"a"="'+a("[name='money'] input").val()+'","b"="'+a("[name='bank'] .result").html()+'","c"="'+a("[name='name'] input").val()+'","d"="'+a("[name='number'] input").val()+'","e"="'+a("#pop .top").val()+'","f"="'+a("[name='dsc'] input").val()+'"}';b.api.run("cash_order",c,function(){app.pop.on("alert",{text:"提现申请已提交"}),window.location.hash="accountIndex"},function(a){alert(JSON.stringify(a))})}),a("#pop .right").unbind("tap").bind("tap",function(){app.pop.off()})})}),myScroll.refresh()}function e(a){var c="at="+a;b.api.run("account_get",c,function(b){d(b,a)},function(a){alert(JSON.stringify(a))})}var f=_.template(c.tem[0])({left:"",center:"提现金额"});a("#head").html(f),b.api.at(e)}})}($,app,config);