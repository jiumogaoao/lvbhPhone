!function(a,b,c){b.control.set({name:"dealFlow",par:"type/id/state",tem:["top_second","deal_flow","bottom_button"],fn:function(c){function d(d){var f=_.template(c.tem[2])({text:"立即预定",id:"payButton"});a("#foot").html(f),a("#foot").show(),a("#scroller").html(c.tem[1]),a("#payButton").unbind("tap").bind("tap",function(){b.api.run("user_get","at="+d,function(a){window.location.hash="productInput/"+c.type+"/"+c.id+"/"+e.state},function(a){b.pop.on("alert",{text:"请先登录"}),window.location.hash="login/productDetail$"+c.type+"$"+c.id+"$"+e.state})});setTimeout(function(){myScroll.refresh()},200);a("img").load(function(){myScroll.refresh()})}var e={traveler:[""],man:1,child:0,child2:0,oldman:0,oldman2:0,single:!0,linkMan:{name:"",tel:"",email:""},invoice:{on:!1,title:"",place:"",name:"",phone:""},contract:{on:!1,place:"",name:"",phone:""},agree:!1};b.cache("pruduct_input_"+c.id)&&(e=b.cache("pruduct_input_"+c.id));var f=_.template(c.tem[0])({left:"",center:"预定流程"});a("#head").html(f),a("#head .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),b.api.at(d)}})}($,app,config);