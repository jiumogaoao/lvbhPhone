// JavaScript Document
;(function($,obj,config){
	obj.set({
		name:"searchPlace",
		par:"",
		tem:["top_second","search_place","tap_right"],
		fn:function(data){
			var placeList={
				now:"深圳",
				place:{
					"A":[{name:"AA",id:""}],
					"B":[{name:"BB",id:""}],
					"C":[{name:"CC",id:""}],
					"D":[{name:"DD",id:""}],
					"E":[{name:"EE",id:""}],
					"F":[{name:"FF",id:""}],
					"G":[{name:"GG",id:""}],
					"H":[{name:"HH",id:""}],
					"I":[{name:"II",id:""}],
					"J":[{name:"JJ",id:""}],
					"K":[{name:"KK",id:""}],
					"L":[{name:"LL",id:""}],
					"M":[{name:"MM",id:""}],
					"N":[{name:"NN",id:""}],
					"O":[{name:"OO",id:""}],
					"P":[{name:"PP",id:""}],
					"Q":[{name:"QQ",id:""}],
					"R":[{name:"RR",id:""}],
					"S":[{name:"SS",id:""}],
					"T":[{name:"TT",id:""}],
					"U":[{name:"UU",id:""}],
					"V":[{name:"VV",id:""}],
					"W":[{name:"WW",id:""}],
					"X":[{name:"XX",id:""}],
					"Y":[{name:"YY",id:""}],
					"Z":[{name:"ZZ",id:""}]
				}
				}
			var tag=_.template(data.tem[2])(placeList);
			$("#otherFrame").html(tag);
			$(".tap").unbind("tap").bind("tap",function(){
				myScroll.scrollToElement($(".title[index='"+$(this).html()+"']")[0])
				});
			$("#otherFrame").css({
				"position":"fixed",
				"top":"3rem",
				"right":"0rem",
				"width":"1rem",
				"background-color":"#fff",
				"z-index":"10"
				});
			$("#otherFrame").show();
			var head=_.template(data.tem[0])({left:"",center:"选择城市"});
			$("#head").html(head);
			var searchList=_.template(data.tem[1])(placeList);
			$("#scroller").html(searchList);
			$(".top_third .leftButton").unbind("tap").bind("tap",function(){
				window.history.go(-1);
				});
			$("#registButton").unbind("tap").bind("tap",function(){
				window.location.hash="index";
				});
			$(".point").unbind("tap").bind("tap",function(){
				$(".point").removeClass("hl");
				$(this).addClass("hl");
				});
			var delay=setTimeout(function(){myScroll.refresh()},200);
			}
		});
	})($,app.control,config);