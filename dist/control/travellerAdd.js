!function(a,b,c){b.control.set({name:"travellerAdd",par:"type/id/state",tem:["top_third","traveller"],fn:function(c){var d={name:"",number:"",lastNumber:"",sendPlace:"",enLastName:"",enName:"",birthday:"",sex:"1",national:"",phone:"",cardType:1,cardName:["","身份证","护照","军官证","港澳通行证","台胞证","回乡证"]};b.cache("traveler")&&(d=b.cache("traveler"),b.cache("traveler",null,!0));var e=[function(){return!1},function(){return/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.name)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.cardType)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.number)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.phone)?/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/.test(d.number)?/^0?1[3|4|5|8][0-9]\d{8}$/.test(d.phone)?JSON.stringify({b:d.name,d:d.cardType,e:d.number,f:d.phone}):(b.pop.on("alert",{text:"手机号格式有误"}),!1):(b.pop.on("alert",{text:"身份证格式有误"}),!1):(b.pop.on("alert",{text:"只能输入汉字，字母，数字或空格"}),!1)},function(){return/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.name)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.cardType)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.number)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.phone)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.lastNumber)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.sendPlace)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.enLastName)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.enName)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.national)?/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/.test(d.number)?/^\\d{4}-\\d{2}-\\d{2}$/.test(d.lastNumber)?/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.enLastName)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.enName)?/^[A-Za-z0-9]+$/.test(d.birthday)?/^0?1[3|4|5|8][0-9]\d{8}$/.test(d.phone)?JSON.stringify({b:d.name,d:d.cardType,e:d.number,m:d.lastNumber,l:d.sendPlace,k:d.enLastName,j:d.enName,o:d.birthday,c:d.sex,n:d.national,f:d.phone}):(b.pop.on("alert",{text:"手机号格式有误"}),!1):(b.pop.on("alert",{text:"日期格式有误"}),!1):(b.pop.on("alert",{text:"英文姓名只能包含字母，且不能超过20个"}),!1):(b.pop.on("alert",{text:"有效期不能小于当天"}),!1):(b.pop.on("alert",{text:"证件号格式有误"}),!1):(b.pop.on("alert",{text:"只能输入汉字，字母，数字或空格"}),!1)},function(){return/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.name)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.cardType)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.number)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.phone)?/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/.test(d.number)?/^[A-Za-z0-9]+$/.test(d.birthday)?/^0?1[3|4|5|8][0-9]\d{8}$/.test(d.phone)?JSON.stringify({b:d.name,d:d.cardType,e:d.number,o:d.birthday,c:d.sex,f:d.phone}):(b.pop.on("alert",{text:"手机号格式有误"}),!1):(b.pop.on("alert",{text:"日期格式有误"}),!1):(b.pop.on("alert",{text:"证件号格式有误"}),!1):(b.pop.on("alert",{text:"只能输入汉字，字母，数字或空格"}),!1)},function(){return/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.name)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.cardType)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.number)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.phone)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.lastNumber)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.sendPlace)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.enLastName)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.enName)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.national)?/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/.test(d.number)?/^\\d{4}-\\d{2}-\\d{2}$/.test(d.lastNumber)?/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.enLastName)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.enName)?/^[A-Za-z0-9]+$/.test(d.birthday)?/^0?1[3|4|5|8][0-9]\d{8}$/.test(d.phone)?JSON.stringify({b:d.name,d:d.cardType,e:d.number,m:d.lastNumber,l:d.sendPlace,k:d.enLastName,j:d.enName,o:d.birthday,n:d.national,f:d.phone}):(b.pop.on("alert",{text:"手机号格式有误"}),!1):(b.pop.on("alert",{text:"日期格式有误"}),!1):(b.pop.on("alert",{text:"英文姓名只能包含字母，且不能超过20个"}),!1):(b.pop.on("alert",{text:"有效期不能小于当天"}),!1):(b.pop.on("alert",{text:"证件号格式有误"}),!1):(b.pop.on("alert",{text:"只能输入汉字，字母，数字或空格"}),!1)},function(){return/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.name)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.cardType)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.number)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.phone)?/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/.test(d.number)?/^[A-Za-z0-9]+$/.test(d.birthday)?/^0?1[3|4|5|8][0-9]\d{8}$/.test(d.phone)?JSON.stringify({b:d.name,d:d.cardType,e:d.number,o:d.birthday,c:d.sex,f:d.phone}):(b.pop.on("alert",{text:"手机号格式有误"}),!1):(b.pop.on("alert",{text:"日期格式有误"}),!1):(b.pop.on("alert",{text:"证件号格式有误"}),!1):(b.pop.on("alert",{text:"只能输入汉字，字母，数字或空格"}),!1)},function(){return/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.name)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.cardType)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.number)&&/^[\sa-zA-Z0-9\u4e00-\u9fa5]+$/.test(d.phone)?/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/.test(d.number)?/^[A-Za-z0-9]+$/.test(d.birthday)?/^0?1[3|4|5|8][0-9]\d{8}$/.test(d.phone)?JSON.stringify({b:d.name,d:d.cardType,e:d.number,o:d.birthday,f:d.phone}):(b.pop.on("alert",{text:"手机号格式有误"}),!1):(b.pop.on("alert",{text:"日期格式有误"}),!1):(b.pop.on("alert",{text:"证件号格式有误"}),!1):(b.pop.on("alert",{text:"只能输入汉字，字母，数字或空格"}),!1)}],f=_.template(c.tem[0])({left:"",center:"添加常用旅客",right:"保存"});a("#head").html(f);var g=_.template(c.tem[1])(d);a("#scroller").html(g),a("#scroller [D_type='input']").each(function(){var b=this;a(b).unbind("change").bind("change",function(){d[a(b).attr("D_key")]=a(b).val()})}),a("#scroller [D_type='radio']").each(function(){var b=this;a(b).find("[D_type='radioPoint']").unbind("click").bind("click",function(){d[a(b).attr("D_key")]=a(this).attr("D_value"),a(b).find("[D_type='radioPoint']").removeClass("hl"),a(this).addClass("hl")})}),a(".top_third .leftButton").unbind("click").bind("click",function(){window.history.go(-1)}),a(".top_third .rightButton").unbind("click").bind("click",function(){b.api.at(function(a){b.api.run("traveler_add","at="+a+"&tp=0&jparam="+e[d.cardType](),function(){c.type?window.location.hash="usefulTraveler/"+c.type+"/"+c.id+"/"+c.state:window.location.hash="usefulTraveler"},function(a){JSON.stringify(a)})})});setTimeout(function(){myScroll.refresh()},200)}})}($,app,config);