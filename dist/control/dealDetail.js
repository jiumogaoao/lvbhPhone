!function(a,b,c){b.control.set({name:"dealDetail",par:"id/at",tem:["top_second","collapse_list"],fn:function(c){function d(b){var d=_.template(c.tem[1])({list:b});a("#scroller").html(d),a(".top_third .leftButton").unbind("tap").bind("tap",function(){window.history.go(-1)}),a(".simple_list").unbind("tap").bind("tap",function(){window.location.hash="dealList/"+a(this).attr("lid")});setTimeout(function(){myScroll.refresh()},200)}function e(e){b.api.run("deal_detail","at="+e+"&a="+c.id,function(b){var c={12:"出发地跟团",13:"目的地跟团"},e={1:"待确认",2:"出游归来/已成交","2_1":"出游归来/已成交/待点评","2_2":"出游归来/已成交/一点评",4:"已确认/待签约支付",8:"已签约支付/待出游",16:"申请取消",32:"支付超时",64:"已取消/带退款",128:"已退款",256:"已取消订单",521:"已删除订单",1024:"支付中/待签约支付",2048:"退款中"},f=[],g={1:"男",2:"女"};a.each(b.shopcontact,function(a,b){f[a]={point:[{key:"姓名",value:b.b,hl:!1},{key:"性别",value:g[b.e+""],hl:!1},{key:"手机号",value:b.c,hl:!1},{key:"邮箱",value:b.d,hl:!1}],hl:!1}});var h=[];a.each(b.touristlist,function(a,b){h[a]={point:[{key:"姓名",value:b.a,hl:!1},{key:"英文名",value:b.f,hl:!1},{key:"证件类型",value:b.b,hl:!1},{key:"证件号码",value:b.c,hl:!1},{key:"证件有效期",value:b.k,hl:!1},{key:"国籍",value:b.h,hl:!1},{key:"性别",value:g[b.d+""],hl:!1},{key:"出生日期",value:b.i,hl:!1},{key:"手机号",value:b.e,hl:!1}],hl:!1}});var i={point:[{key:"发票抬头",value:"-",hl:!1},{key:"邮寄地址",value:"-",hl:!1},{key:"收件人",value:"-",hl:!1},{key:"手机号",value:"-",hl:!1}],hl:!1};b.invoiceinfo&&(i={point:[{key:"发票抬头",value:b.invoiceinfo.a,hl:!1},{key:"邮寄地址",value:b.invoiceinfo.b+b.invoiceinfo.c+b.invoiceinfo.d+b.invoiceinfo.e,hl:!1},{key:"收件人",value:b.invoiceinfo.g,hl:!1},{key:"手机号",value:b.invoiceinfo.f,hl:!1}],hl:!1});var j={point:[{key:"邮寄地址",value:"-",hl:!1},{key:"收件人",value:"-",hl:!1},{key:"手机号",value:"-",hl:!1}],hl:!1};b.pactinfo&&(j={point:[{key:"邮寄地址",value:b.pactinfo.a+b.pactinfo.b+b.pactinfo.c+b.pactinfo.e,hl:!1},{key:"收件人",value:b.pactinfo.f,hl:!1},{key:"手机号",value:b.pactinfo.e,hl:!1}],hl:!1});var k=[{title:"订单详情",group:[{point:[{key:"订单编号",value:b.shoporder.b,hl:!1},{key:"预定时间",value:b.shoporder.c,hl:!1},{key:"产品编号",value:b.shoporder.d,hl:!1},{key:"产品类别",value:c[b.shoporder.e+""],hl:!1}],hl:!1},{point:[{key:"产品名称",value:b.shoporder.f,hl:!1}],hl:!0},{point:[{key:"出发地",value:b.shoporder.j,hl:!1},{key:"目的地",value:b.shoporder.g,hl:!1},{key:"行程天数",value:b.shoporder.k+"天",hl:!1},{key:"起止时间",value:b.shoporder.l.split(" ")[0]+"至"+b.shoporder.m.split(" ")[0],hl:!1}],hl:!1},{point:[{key:"订单状态",value:e[b.shoporder.i+""],hl:!0},{key:"数量/单价",value:b.shoporder.n,hl:!1},{key:"预定人",value:b.shoporder.s,hl:!1},{key:"客源地",value:b.shoporder.t,hl:!1}],hl:!1},{point:[{key:"产品金额",value:b.shoporder.o,hl:!0},{key:"保险金额",value:b.shoporder.p,hl:!1},{key:"优惠金额",value:b.shoporder.q,hl:!1},{key:"订单金额",value:b.shoporder.h,hl:!0},{key:"支付时限",value:"00天00是52分30秒",hl:!1}],hl:!1}]},{title:"联系人信息",group:[{point:[{key:"姓名",value:b.shopcontact.b,hl:!1},{key:"性别",value:g[b.shopcontact.e+""],hl:!1},{key:"手机号",value:b.shopcontact.c,hl:!1},{key:"邮箱",value:b.shopcontact.d,hl:!1}],hl:!1}]},{title:"出游人信息",group:h},{title:"发票",group:[i]},{title:"合同",group:[j]},{title:"附言说明",group:[{point:[{key:"",value:"",dsc:b.shoporder.x||"-",hl:!1}],hl:!1}]}];d(k)},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}var f=_.template(c.tem[0])({left:"",center:"跟团游订单"});a("#head").html(f),b.api.at(e,c.at)}})}($,app,config);