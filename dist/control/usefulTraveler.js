!function(a,b,c){b.control.set({name:"usefulTraveler",par:"type/id/state",tem:["top_third","double_line_list","single_button"],fn:function(c){function d(d){a("#head .rightButton").unbind("click").bind("click",function(){h.traveler||(h.traveler=[""]),a("#scroller .hl").each(function(b){h.traveler[b]=j[a(this).parents(".point").attr("num")]}),b.cache("pruduct_input_"+c.id,h),window.location.hash="productInput/"+c.type+"/"+c.id+"/"+c.state});var e=_.template(c.tem[1])({enable:!0,list:i,dscName:"手机号"}),f=_.template(c.tem[2])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用旅客',id:"addTraveller"});a("#scroller").html(e+f),a("#scroller .fa-checkbox").unbind("tap").bind("tap",function(){a(this).data("choose")?(a(this).data("choose",!1),a(this).removeClass("hl")):a("#scroller .hl").length<h.traveler.length?(a(this).data("choose",!0),a(this).addClass("hl")):b.pop.on("alert",{text:"可选人数已满"})}),a("#scroller #addTraveller").unbind("tap").bind("tap",function(){window.location.hash="travellerAdd/"+c.type+"/"+c.id+"/"+c.state});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}function e(c){function e(e){g?c&&c():b.api.run("traveler_get","at="+e+"&a="+f,function(b){10===b.length?f++:g=!0,a.each(b,function(a,b){j.push(b),i.push({title:b.b,dsc:b.f,type:b.q,enable:"2"===b.q?!0:!1})}),d(b),c&&c()},function(a){b.pop.on("alert",{text:JSON.stringify(a)})})}b.api.at(e)}var f=1,g=!1,h={},i=[],j=[];b.cache("pruduct_input_"+c.id)&&(h=b.cache("pruduct_input_"+c.id));var k=_.template(c.tem[0])({left:"",center:"常用旅客",right:"确定"});a("#head").html(k),a("#head .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),e(),b.reflash.add("usefulTraveler",function(a){e(a)})}})}($,app,config);