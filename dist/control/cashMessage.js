!function(a,b,c){b.control.set({name:"cashMessage",par:"",tem:["top_second","balance","cash_message","single_button"],fn:function(c){function d(b){var d=_.template(c.tem[1])({number:b.a2}),e=_.template(c.tem[3])({text:"确认提现",id:"cashButton"});a("#scroller").html(d+c.tem[2]+e),a(".top_third .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),a("#cashButton").unbind("click").bind("click",function(){window.location.hash="cashInput"}),myScroll.refresh(),a("img").load(function(){myScroll.refresh()})}function e(a){var c="at="+a;b.api.run("account_get",c,d,function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var f=_.template(c.tem[0])({left:"",center:"提现"});a("#head").html(f),b.api.at(e)}})}($,app,config);