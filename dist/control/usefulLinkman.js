!function(a,b,c){b.control.set({name:"usefulLinkman",par:"type/id/state",tem:["top_second","double_line_list","single_button"],fn:function(c){function d(){var d=_.template(c.tem[1])({enable:!1,list:g,dscName:"手机号"}),e=_.template(c.tem[2])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用联系人',id:"addLinkman"});a("#scroller").html(d+e),a("#scroller #addLinkman").unbind("click").bind("click",function(){c.type?window.location.hash="linkmanAdd/"+c.type+"/"+c.id+"/"+c.state:window.location.hash="linkmanAdd"}),a("#scroller .point").unbind("click").bind("click",function(){c.type&&(h.linkMan={name:g[a(this).attr("num")].title,tel:g[a(this).attr("num")].dsc,email:g[a(this).attr("num")].email},b.cache("pruduct_input_"+c.id,h),window.location.hash="productInput/"+c.type+"/"+c.id+"/"+c.state)});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}function e(c){function e(e){i?c&&c():b.api.run("linker_get","at="+e+"&tp=3&pn="+f,function(b){10===b.data.length?f++:i=!0,b=b.data,a.each(b,function(a,b){g.push({title:b.b,dsc:b.c,email:b.d})}),d(),c&&c()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}b.api.at(e)}var f=1,g=[],h={},i=!1;b.cache("pruduct_input_"+c.id)&&(h=b.cache("pruduct_input_"+c.id));var j=_.template(c.tem[0])({left:"",center:"常用联系人"});a("#head").html(j),a("#head .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),e(),b.reflash.add("usefulLinkman",function(a){e(a)})}})}($,app,config);