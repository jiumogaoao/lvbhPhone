!function(a,b,c){b.control.set({name:"usefulTraveler",par:"type/id/state",tem:["top_third","double_line_list","single_button"],fn:function(c){function d(d,e){a("#head .rightButton").unbind("click").bind("click",function(){f.traveler||(f.traveler=[""]),a("#scroller .hl").each(function(b){f.traveler[b]=e[a(this).parents(".point").attr("num")]}),b.cache("pruduct_input_"+c.id,f),window.location.hash="productInput/"+c.type+"/"+c.id+"/"+c.state});var g=_.template(c.tem[1])({enable:!0,list:d,dscName:"手机号"}),h=_.template(c.tem[2])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用旅客',id:"addTraveller"});a("#scroller").html(g+h),a("#scroller .fa-checkbox").unbind("tap").bind("tap",function(){a(this).data("choose")?(a(this).data("choose",!1),a(this).removeClass("hl")):a("#scroller .hl").length<f.traveler.length?(a(this).data("choose",!0),a(this).addClass("hl")):alert("可选人数已满")}),a("#scroller #addTraveller").unbind("tap").bind("tap",function(){window.location.hash="travellerAdd/"+c.type+"/"+c.id+"/"+c.state});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}function e(c){b.api.run("traveler_get","at="+c+"&tp=3",function(b){var c=[];a.each(b,function(a,b){var d=1;b.b&&b.f||(d=0),b.o&&moment(b.o,"YYYY-MM-DD").format("X")-(new Date).getTime()>0&&(d=0),b.m&&moment(b.m,"YYYY-MM-DD").format("X")-(new Date).getTime()<0&&(d=0),d&&c.push({title:b.b,dsc:b.f})}),d(c,b)},function(a){alert(JSON.stringify(a))})}var f={};b.cache("pruduct_input_"+c.id)&&(f=b.cache("pruduct_input_"+c.id));var g=_.template(c.tem[0])({left:"",center:"常用旅客",right:"确定"});a("#head").html(g),a("#head .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),b.api.at(e)}})}($,app,config);