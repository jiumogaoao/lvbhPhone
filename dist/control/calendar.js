!function(a,b,c){b.control.set({name:"calendar",par:"type/id/state/page",tem:["top_second"],fn:function(c){function d(d,e){calendar.setData(d),calendar.setTarget("#scroller"),calendar.run(),a("#scroller .enable").unbind("tap").bind("tap",function(){f.date=_.indexBy(e,"b")[a(this).attr("did")],console.log(f),b.cache("pruduct_input_"+c.id,f),"0"===c.page?window.location.hash="productDetail/"+c.type+"/"+c.id:window.location.hash="productInput/"+c.type+"/"+c.id+"/"+c.state});setTimeout(function(){myScroll.refresh()},200)}function e(e){b.api.run(g[c.type],"aid="+c.id,function(b){var c={};a.each(b.priceArray,function(a,b){var d=b.c.split("-");c[d[0]]||(c[d[0]]={}),c[d[0]][d[1]]||(c[d[0]][d[1]]={}),c[d[0]][d[1]][d[2]]={price:b.f,id:b.b},0===b.e&&(c[d[0]][d[1]][d[2]].full=!0)}),d(c,b.priceArray)})}var f={},g={12:"cf_detail_get",13:"md_detail_get"};b.cache("pruduct_input_"+c.id)&&(f=b.cache("pruduct_input_"+c.id));var h=_.template(c.tem[0])({left:"",center:"选择团期"});a("#head").html(h),a("#head .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),a("img").load(function(){myScroll.refresh()}),b.api.at(e)}})}($,app,config);