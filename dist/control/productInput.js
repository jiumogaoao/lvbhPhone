!function(a,b,c){b.control.set({name:"productInput",par:"type/id/state",tem:["top_second","product_input"],fn:function(c){function d(c){!h.child&&!h.child2||h.man||(alert("儿童必须有成人陪同"),h.man=1,a("#scroller [d_key='man'] input").val(1)),h.oldman+h.oldman2!==1||h.man||(alert("老人必须结伴或由成人陪同"),h.man=1,a("#scroller [d_key='man'] input").val(1)),h.man+h.child+h.child2+h.oldman+h.oldman2===0&&(alert("参团人数至少1人"),h.man=1,a("#scroller [d_key='man'] input").val(1));var d=0;a("#scroller [D_type='number']").each(function(){d+=Number(a(this).find("input").val()),"0"===a(this).find("input").val()?a(this).find(".numberSub").addClass("disable"):a(this).find(".numberSub").removeClass("disable")});var e=h.man*h.date.g+h.child*h.date.h+h.child2*h.date.i+h.oldman*h.date.j+h.oldman2*h.date.k;h.single&&(e-=(d-h.child2)*h.date.l),d>1&&5>=d?(e-=h.date[f[d]]*d,a("[D_key='sell']").html("￥<span class='numCLASS'>"+h.date[f[d]]*d+"</span>元")):d>5?(e-=h.date.q*d,a("[D_key='sell']").html("￥<span class='numCLASS'>"+h.date.q*d+"</span>元")):a("[D_key='sell']").html("￥<span class='numCLASS'>0</span>元"),a("#scroller .totalPrice").html("￥<span class='numCLASS'>"+e+"</span>"),a("#scroller #totalMan").html("<span class='numCLASS'>"+d+"</span>人"),a("#scroller #traveler").empty(),h.traveler||(h.traveler=[]);for(var g=[],i=0;d>i;i++){var j="";i===d-1&&(j="nb"),g[i]=h.traveler[i]||{b:"姓名"},a("#scroller #traveler").append('<div class="inputList '+j+'"><div class="inputTitle">出游人'+(i+1)+'</div><div class="readonly">'+g[i].b+'</div><div class="clear"></div></div>')}h.traveler=g,a("#scroller [D_type='inputGroup']").unbind("change").bind("change",function(){b.control.pointParse(h,a(this).attr("D_key"))||b.control.pointParse(h,a(this).attr("D_key"),[""]),b.control.pointParse(h,a(this).attr("D_key"))[a(this).attr("D_num")]=a(this).val(),console.log(h)}),myScroll.refresh()}function e(e){var f=_.template(c.tem[1])(h);a("#scroller").html(f),d(),a("#scroller .payList u").unbind("tap").bind("tap",function(){b.bottom.on("pay_list",h,function(){a("#scroller .pay_list .payButton").unbind("tap").bind("tap",function(){if(!h.date.b)return alert("请先选择团期"),!1;if(!h.linkMan.name||!h.linkMan.tel||!h.linkMan.email)return alert("请完整填写联系人信息"),!1;if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(h.linkMan.tel))return alert("联系人手机格式有误"),!1;if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(h.linkMan.email))return alert("联系人邮箱格式有误"),!1;if(h.invoice.on&&(!h.invoice.title||!h.invoice.place||!h.invoice.phone||!h.invoice.name))return alert("如需发票，请完整填写相关信息"),!1;if(h.invoice.on&&!/^1[3|4|5|8][0-9]\d{4,8}$/.test(h.invoice.phone))return alert("发票手机格式有误"),!1;if(h.contract.on&&(!h.contract.name||!h.contract.phone||!h.contract.place))return alert("如需邮寄合同，请完整填写相关信息"),!1;if(h.contract.on&&!/^1[3|4|5|8][0-9]\d{4,8}$/.test(h.contract.phone))return alert("邮寄合同手机格式有误"),!1;if(!h.agree)return alert("必须接受合同条款才能报团"),!1;var d=0,f=1;h.single||(d=h.man+h.child+h.oldman+h.oldman2);var i=({a:c.type,b:c.id,c:h.date.b,j:c.state,d1:h.man,d3:h.child,d5:h.child2,d7:h.oldman,d8:h.oldman2,d9:h.man+h.child+h.oldman+h.oldman2},{d:h.invoice.on?"1":"0",f:h.contract.on?"1":"0",g:h.agree.on?"1":"0",h:h.dsc,toursParam:[],contactParam:{b:h.linkMan.name,c:h.linkMan.tel,d:h.linkMan.email},addressParam:[],j:g[c.type]});h.invoice.on&&(i.invoiceParam={b:h.invoice.title},i.addressParam.push({b:h.invoice.name,d:h.invoice.place,f:h.invoice.phone})),h.contract.on&&i.addressParam.push({b:h.contract.name,d:h.contract.place,f:h.contract.phone}),a.each(h.traveler,function(a,b){return b.a?void i.toursParam.push(b):(alert("请完成出游人信息"),f=0,!1)}),f&&b.api.run("deal_add","at="+e+"&goparam="+JSON.stringify(goParam)+"&goiparam="+JSON.stringify(goiParam),function(a){b.cache("pruduct_input_"+c.id,h),window.location.hash="dealSuccess/"+c.id},function(a){alert(JSON.stringify(a))})})},function(a){alert(JSON.stringify(a))})}),a("#scroller #postScript").unbind("tap").bind("tap",function(){b.cache("pruduct_input_"+c.id,h),window.location.hash="postScript/"+c.type+"/"+c.id+"/"+c.state}),a("#scroller #message").unbind("tap").bind("tap",function(){b.cache("pruduct_input_"+c.id,h),window.location.hash="dealMessage"}),a("#scroller #usefulEmail0").unbind("tap").bind("tap",function(){b.cache("pruduct_input_"+c.id,h),window.location.hash="usefulEmail/"+c.type+"/"+c.id+"/"+c.state+"/0"}),a("#scroller #usefulEmail1").unbind("tap").bind("tap",function(){b.cache("pruduct_input_"+c.id,h),window.location.hash="usefulEmail/"+c.type+"/"+c.id+"/"+c.state+"/1"}),a("#scroller #usefulInvoice").unbind("tap").bind("tap",function(){b.cache("pruduct_input_"+c.id,h),window.location.hash="usefulInvoice/"+c.type+"/"+c.id+"/"+c.state}),a("#scroller #usefulLinkman").unbind("tap").bind("tap",function(){b.cache("pruduct_input_"+c.id,h),window.location.hash="usefulLinkman/"+c.type+"/"+c.id+"/"+c.state}),a("#scroller #usefulTraveler").unbind("tap").bind("tap",function(){b.cache("pruduct_input_"+c.id,h),window.location.hash="usefulTraveler/"+c.type+"/"+c.id+"/"+c.state}),a("#scroller #date").unbind("tap").bind("tap",function(){b.cache("pruduct_input_"+c.id,h),window.location.hash="calendar/"+c.type+"/"+c.id+"/"+c.state+"/1"}),a("#scroller [D_type='input']").unbind("change").bind("change",function(){b.control.pointParse(h,a(this).attr("D_key"),a(this).val())}),a("#scroller [D_type='inputGroup']").unbind("change").bind("change",function(){b.control.pointParse(h,a(this).attr("D_key"))||b.control.pointParse(h,a(this).attr("D_key"),[""]),b.control.pointParse(h,a(this).attr("D_key"))[a(this).attr("D_num")]=a(this).val()}),a("#scroller [D_type='number']").each(function(){var c=this;a(c).find(".numberSub").unbind("tap").bind("tap",function(){b.control.pointParse(h,a(c).attr("D_key"))&&b.control.pointParse(h,a(c).attr("D_key"))>0?b.control.pointParse(h,a(c).attr("D_key"),b.control.pointParse(h,a(c).attr("D_key"))-1):b.control.pointParse(h,a(c).attr("D_key"),0),a(c).find("input").val(b.control.pointParse(h,a(c).attr("D_key"))),d()}),a(c).find(".numberAdd").unbind("tap").bind("tap",function(){b.control.pointParse(h,a(c).attr("D_key"))||b.control.pointParse(h,a(c).attr("D_key"),Number(a(c).find("input").val())),b.control.pointParse(h,a(c).attr("D_key"),b.control.pointParse(h,a(c).attr("D_key"))+1),a(c).find("input").val(b.control.pointParse(h,a(c).attr("D_key"))),d()}),a(c).find("input").unbind("change").bind("change",function(){b.control.pointParse(h,a(c).attr("D_key"),Number(a(c).find("input").val())),d()})}),a("#scroller [D_type='checkBox']").unbind("tap").bind("tap",function(){var c=this;b.control.pointParse(h,a(c).attr("D_key"))?(b.control.pointParse(h,a(c).attr("D_key"),!1),a(c).removeClass("hl")):(b.control.pointParse(h,a(c).attr("D_key"),!0),a(c).addClass("hl"))}),a("#scroller [D_type='toggle']").each(function(){var c=this;a(c).unbind("tap").bind("tap",function(){b.control.pointParse(h,a(this).attr("D_key"))?(b.control.pointParse(h,a(this).attr("D_key"),!1),a(this).find(".fa").removeClass("hl"),a(this).parents(".list").find(".inputList").hide(),a(this).parents(".list").find(".head").removeClass("bb")):(b.control.pointParse(h,a(this).attr("D_key"),!0),a(this).find(".fa").addClass("hl"),a(this).parents(".list").find(".inputList").show(),a(this).parents(".list").find(".head").addClass("bb")),myScroll.refresh()})}),a("#scroller .product_input .button").unbind("tap").bind("tap",function(){if(!h.date.b)return alert("请先选择团期"),!1;if(!h.linkMan.name||!h.linkMan.tel||!h.linkMan.email)return alert("请完整填写联系人信息"),!1;if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(h.linkMan.tel))return alert("联系人手机格式有误"),!1;if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(h.linkMan.email))return alert("联系人邮箱格式有误"),!1;if(h.invoice.on&&(!h.invoice.title||!h.invoice.place||!h.invoice.phone||!h.invoice.name))return alert("如需发票，请完整填写相关信息"),!1;if(h.invoice.on&&!/^1[3|4|5|8][0-9]\d{4,8}$/.test(h.invoice.phone))return alert("发票手机格式有误"),!1;if(h.contract.on&&(!h.contract.name||!h.contract.phone||!h.contract.place))return alert("如需邮寄合同，请完整填写相关信息"),!1;if(h.contract.on&&!/^1[3|4|5|8][0-9]\d{4,8}$/.test(h.contract.phone))return alert("邮寄合同手机格式有误"),!1;if(!h.agree)return alert("必须接受合同条款才能报团"),!1;var d=0,f=1;h.single||(d=h.man+h.child+h.oldman+h.oldman2);var i={a:c.type,b:c.id,c:h.date.b,j:c.state,d1:h.man,d3:h.child,d5:h.child2,d7:h.oldman,d8:h.oldman2,d9:h.man+h.child+h.oldman+h.oldman2},j={d:h.invoice.on?"1":"0",f:h.contract.on?"1":"0",g:h.agree.on?"1":"0",h:h.dsc,toursParam:[],contactParam:{b:h.linkMan.name,c:h.linkMan.tel,d:h.linkMan.email},addressParam:[],j:g[c.type]};h.invoice.on&&(j.invoiceParam={b:h.invoice.title},j.addressParam.push({b:h.invoice.name,d:h.invoice.place,f:h.invoice.phone})),h.contract.on&&j.addressParam.push({b:h.contract.name,d:h.contract.place,f:h.contract.phone}),a.each(h.traveler,function(a,b){return b.a?void j.toursParam.push(b):(alert("请完成出游人信息"),f=0,!1)}),f&&b.api.run("deal_add","at="+e+"&goParam="+JSON.stringify(i)+"&goiParam="+JSON.stringify(j),function(a){window.location.hash="dealSuccess/"+a.go.x+"/"+a.go.m},function(a){alert(JSON.stringify(a))})}),a("#scroller .title_input_list").css({"border-top":"1px solid #dcdcdc"});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}var f=["","","n","o","p","q"],g={12:"gtcf",13:"gtmd"},h={state:c.state,date:{c:"请选择团期",g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0},traveler:[],man:1,child:0,child2:0,oldman:0,oldman2:0,single:!0,linkMan:{name:"",tel:"",email:""},invoice:{on:!1,title:"",place:"",name:"",phone:""},contract:{on:!1,place:"",name:"",phone:""},agree:!1,dsc:""};b.cache("pruduct_input_"+c.id)&&(h=b.cache("pruduct_input_"+c.id)),console.log(h);var i=_.template(c.tem[0])({left:"",center:"填写订单信息"});a("#head").html(i),a("#head .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),b.api.at(e)}})}($,app,config);