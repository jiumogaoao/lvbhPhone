!function(a,b,c){b.control.set({name:"accountDetail",par:"type/id",tem:["top_second","collapse_list"],fn:function(c){function d(b){b="0"===c.type||"1"===c.type||"2"===c.type||"3"===c.type?_.indexBy(b.data,"q")[c.id]:_.indexBy(b.data,"a")[c.id];var d=[function(a){e=[{group:[{point:[{key:"订单编号",value:a.a}]},{point:[{key:"产品编号",value:a.b}]},{point:[{key:"产品类别",value:a.c}]},{point:[{key:"产品名称",value:a.d}]},{point:[{key:"订单金额",value:"￥"+a.e}]},{point:[{key:"奖金来源",value:a.f}]},{point:[{key:"奖金类别",value:"产品体验奖"}]},{point:[{key:"奖金比例",value:a.g}]},{point:[{key:"奖金金额",value:"￥"+a.h}]},{point:[{key:"返奖时间",value:a.i}]}]}]},function(a){e=[{group:[{point:[{key:"订单编号",value:a.a}]},{point:[{key:"产品类别",value:a.c}]},{point:[{key:"产品名称",value:a.d}]},{point:[{key:"订单金额",value:"￥"+a.e}]},{point:[{key:"奖金来源",value:a.f}]},{point:[{key:"奖金类别",value:"渠道体验奖"}]},{point:[{key:"奖金比例",value:a.g}]},{point:[{key:"奖金金额",value:"￥"+a.h}]},{point:[{key:"周期",value:"一年"}]},{point:[{key:"状态",value:" "}]},{point:[{key:"返奖时间",value:a.i}]}]}]},function(a){e=[{group:[{point:[{key:"订单编号",value:a.a}]},{point:[{key:"产品编号",value:a.b}]},{point:[{key:"产品类别",value:a.c}]},{point:[{key:"产品名称",value:a.d}]},{point:[{key:"订单金额",value:"￥"+a.e}]},{point:[{key:"应退会员",value:a.o}]},{point:[{key:"取消违约金",value:a.n}]},{point:[{key:"支付方式",value:a.l}]},{point:[{key:"交易时间",value:a.p}]},{point:[{key:"返奖时间",value:a.i}]}]}]},function(a){e=[{group:[{point:[{key:"订单编号",value:a.a}]},{point:[{key:"产品编号",value:a.b}]},{point:[{key:"产品类别",value:a.c}]},{point:[{key:"产品名称",value:a.d}]},{point:[{key:"订单金额",value:"￥"+a.e}]},{point:[{key:"订单状态",value:"已支付/待出游"}]},{point:[{key:"交易时间",value:a.p}]}]}]},function(a){e=[{group:[{point:[{key:"订单编号",value:a.a}]},{point:[{key:"产品编号",value:a.b}]},{point:[{key:"产品类别",value:a.e}]},{point:[{key:"产品名称",value:a.c}]},{point:[{key:"订单金额",value:"￥"+a.j}]},{point:[{key:"取消违约金",value:"￥"+a.f}]},{point:[{key:"交易时间",value:a.g}]}]}]},function(a){e=[{group:[{point:[{key:"提现编号",value:a.a}]},{point:[{key:"提现金额",value:"￥"+a.g}]},{point:[{key:"提现税费",value:"￥"+a.h}]},{point:[{key:"实际提现",value:"￥"+a.i}]},{point:[{key:"提现账户",value:a.c}]},{point:[{key:"提现状态",value:a.d}]},{point:[{key:"申请时间",value:a.b}]},{point:[{key:"提现时间",value:a.f}]},{point:[{key:"备   注",value:a.e}]}]}]}],e=[];d[c.type](b);var f=_.template(c.tem[1])({list:e});a("#scroller").html(f),a(".top_third .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),myScroll.refresh(),a("img").load(function(){myScroll.refresh()})}function e(a){var e="";"0"===c.type||"1"===c.type||"2"===c.type?(e="at="+a+'&jparam={"c"="'+c.type+'"}',b.api.run("income_get",e,d,function(a){b.pop.on("alert",{text:JSON.stringify(a)})})):"5"===c.type?(e="at="+a+'&jparam={"c"="0"}',b.api.run("expend_get",e,d,function(a){b.pop.on("alert",{text:JSON.stringify(a)})})):(e="at="+a+'&jparam={"c"="'+(Number(c.type)-2)+'"}',b.api.run("expend_get",e,d,function(a){b.pop.on("alert",{text:JSON.stringify(a)})}))}var f=["产品体验奖励详情","渠道体验奖励详情","取消订单退回详情","成交订单详情","取消订单支出详情","提现详情"],g=_.template(c.tem[0])({left:"",center:f[c.type]});a("#head").html(g),b.api.at(e)}})}($,app,config);