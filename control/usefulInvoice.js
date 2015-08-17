// JavaScript Document
;(function($,obj,config){
	obj.control.set({
		name:"usefulInvoice",
		par:"type/id",
		tem:["top_second","single_line_list","single_button"],
		fn:function(data){

			var head=_.template(data.tem[0])({
				left:"",
				center:"预定流程"
				});
			$("#head").html(head);
			$("#head .leftButton").unbind("click").bind("click",function(){
				window.history.go(-1);
				});
			var button=_.template(data.tem[2])({text:'<span class="fa fa-add2" style="position: relative;top: .05rem;"></span> 添加常用发票抬头',id:"payButton"});
			$("#scroller").html(data.tem[1]+button);
			var delay=setTimeout(function(){
				myScroll.refresh();
				},200);
				
			}
		});
	})($,app,config);