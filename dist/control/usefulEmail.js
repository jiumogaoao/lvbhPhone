!function(a,b,c){b.control.set({name:"usefulEmail",par:"type/id/state/key",tem:["top_second","double_line_list","single_button"],fn:function(c){function d(){var d=_.template(c.tem[2])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用邮寄地址',id:"addMail"}),e=_.template(c.tem[1])({enable:!1,list:f,dscName:""});a("#scroller").html(e+d),a("#scroller #addMail").unbind("tap").bind("tap",function(){window.location.hash="emailAdd/"+c.type+"/"+c.id+"/"+c.state}),a("#scroller .point").unbind("tap").bind("tap",function(){"0"===c.key?(h.invoice.place=f[a(this).attr("num")].dsc,h.invoice.name=f[a(this).attr("num")].name,h.invoice.phone=f[a(this).attr("num")].phone):(h.contract.place=f[a(this).attr("num")].dsc,h.contract.name=f[a(this).attr("num")].name,h.contract.phone=f[a(this).attr("num")].phone),b.cache("pruduct_input_"+c.id,h),window.location.hash="productInput/"+c.type+"/"+c.id+"/"+c.state});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}function e(c){function e(e){i?c&&c():b.api.run("email_get","at="+e+"&tp=3&pn="+g,function(b){10===b.data.length?g++:i=!0,b=b.data,a.each(b,function(a,b){f.push({title:b.b,dsc:b.d,name:b.b,phone:b.f})}),d(),c&&c()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}b.api.at(e)}var f=[],g=1,h={},i=!1;b.cache("pruduct_input_"+c.id)&&(h=b.cache("pruduct_input_"+c.id));var j=_.template(c.tem[0])({left:"",center:"常用邮寄地址"});a("#head").html(j),a("#head .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),e(),b.reflash.add("usefulEmail",function(a){e(a)})}})}($,app,config);