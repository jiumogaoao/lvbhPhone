!function(a,b,c){b.control.set({name:"usefulInvoice",par:"type/id/state",tem:["top_second","single_line_list","single_button"],fn:function(c){function d(d){var e=_.template(c.tem[1])({list:d}),g=_.template(c.tem[2])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用发票抬头',id:"payButton"});a("#scroller").html(e+g),a("#scroller .point").unbind("tap").bind("tap",function(){f.invoice.title=a(this).html(),b.cache("pruduct_input_"+c.id,f),window.location.hash="productInput/"+c.type+"/"+c.id+"/"+c.state});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}function e(c){b.api.run("invoice_get","at="+c+"&tp=3",function(b){var c=[];a.each(b,function(a,b){c.push(b.b)}),d(c)},function(a){alert(JSON.stringify(a))})}var f={};b.cache("pruduct_input_"+c.id)&&(f=b.cache("pruduct_input_"+c.id));var g=_.template(c.tem[0])({left:"",center:"预定流程"});a("#head").html(g),a("#head .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),b.api.at(e)}})}($,app,config);