!function(a,b,c){b.control.set({name:"payIndex",par:"id",tem:["top_second","pay_index"],fn:function(b){var c=_.template(b.tem[0])({left:"",center:"支付"});a("#head").html(c),a("#scroller").html(b.tem[1]),a("#scroller #lvbh").unbind("tap").bind("tap",function(){a("#scroller .fa-checkbox").length?window.location.hash="payLvbh/"+b.id:alert("必须同意旅游条款才能继续")}),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}})}($,app,config);