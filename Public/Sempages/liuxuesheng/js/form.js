var tel_reg = /^1[34578][0-9]{9}$/,
name_reg = /^[\u4E00-\u9FA5\uF900-\uFA2D]{8}$/,
qq_reg = /^[1-9][0-9]{10}$/,
wx_reg = /^[a-zA-Z][_a-zA-Z0-9]{5,19}$/,
year_reg = /^[1-5]$/,
area_reg = /^[\u4E00-\u9FA5\uF900-\uFA2D]{10}$/;

var clickflag = true;

function validateForm(ele) {
	if (ele.find(".input_name").val() == "") {
		showErr("姓名格式不正确！");
		return false;
	} else if (!tel_reg.test(ele.find(".telInput").val())) {
		showErr("电话格式不正确！");
		return false;
	} else if (ele.find(".input_xueli").val() == "") {
		showErr("请选择您的最高学历！");
		return false;
	} else if (ele.find(".input_nl").val() == "") {
		showErr("请选择您的日语成绩！");
		return false;
	} else if (ele.find(".qq_input").val() == "") {
		showErr("城市不能为空！");
		return false;
	} else {
		$.ajax({
			headers: {
				'X-CSRF-Token': $('meta[name="csrf-token"]')[0].content,
			},
			url: "/ajaxindex",
			type: "post",
			dataType: "json",
			data: {
				name: ele.find(".input_name").val(),
				tel: ele.find(".telInput").val(),
				xl: ele.find(".input_xueli").val(),
				nl: ele.find(".input_nl").val(),
				qq: ele.find(".qq_input").val(),
				from: location.href,
			},
			success: function(data) {
				if (data.status == true) {
					alert('申请成功！请等到老师与您联系');
					showSuccess();
					setDisabled($(".b_formPart .btn"));
					clickflag = false;
				} else {
					alert(data.remark);
					resetBtn($(".b_formPart .btn"));
					resetBtn($(".formPart .buttonDv"));
					clickflag = true;
				}
			},
			error: function() {
				alert('您当前网络不稳定，请稍后再试。');
				resetBtn($(".b_formPart .btn"));
				resetBtn($(".formPart .buttonDv"));
				clickflag = true;
			}
		});
	}
}


//计算页面滚动位置
function getScrollTop() {
	var scrollTop = 0;
	if (document.documentElement && document.documentElement.scrollTop) {
		scrollTop = document.documentElement.scrollTop;
	} else if (document.body) {
		scrollTop = document.body.scrollTop;
	}
	return scrollTop;
}

function showBottom() {
	$(".fixedLeft").addClass("click");
	$(".b_formPart").addClass("show");
	$(".b_formPart").removeClass("old");
}

function closeBottom() {
	$(".fixedLeft").removeClass("click");
	$(".b_formPart").addClass("old");
    // if (!$("html").hasClass("ltie10")) {
    //     $(".b_formPart").addClass("old");
    // }
}


//右侧表单提交成功方法
function showSuccess() {
	var _p = $(".formPart");
	_p.find(".successPart").fadeIn();
	setDisabled($(".formPart .buttonDv"));
}

//提交成功后禁用按钮
function setDisabled(_btn) {
	_btn.addClass("disabled");
	_btn.children().text("成功提交");
}

function resetBtn(_btn) {
	_btn.removeClass("disabled");
	_btn.children().text("立即报名");
}

function showErr(mes) {
	alert(mes);
	clickflag = true;
}

$(function() {


	$(".tb").click(function() {
		if ($(".formM").length != 0) {
			$("body, html").animate({
				scrollTop: $(".formM").offset().top
			}, 600);
		}
		else{
			showBottom();
		}
	});

	$(".fixedLeft").click(function() {
		showBottom();
	});

	$(".closeb").click(function() {
		$(this).addClass("done");
		closeBottom();
	});



	$(".top").click(function() {
		$("body, html").animate({
			scrollTop: 0
		}, 600);
	});




	// $(".buttonDv").click(function() {
	// 	if (clickflag) {
	// 		clickflag = false;
	// 		validateForm($(this).parent());
	// 	}
	// });

    //底部表单按钮
    // $(".b_formPart .btn").click(function() {
    // 	if (clickflag) {
    // 		clickflag = false;
    // 		validateForm($(this).parent());
    // 	}
    // });


    document.onscroll = function() {
    	if (getScrollTop() <= 200) {
    		closeBottom();
    		$(".headers").removeClass("active");
    	} else {
    		$(".headers").addClass("active");
    		if (!$(".closeb").hasClass("done")) {
    			showBottom();
    		}
    	}
    }

    $(".xy_form_a").xiaoyingForm({
	    parameter: [
	        { errorMes: "姓名格式不正确", id: "XY_a01", rename: "您的姓名:", reg: "required", placeholder: "姓名" },
	        { errorMes: "电话格式不正确", id: "XY_a02", rename: "联系电话:", reg: "required", placeholder: "手机" },
	        { errorMes: "请选择目前学历状态", id: "XY_b19", rename: "目前学历:", reg: "required",placeholder:"目前学历状态" },
	        { errorMes: "请选择目前日语水平", id: "XY_b12", rename: "日语水平:", reg: "required",placeholder:"请选择目前日语水平" },
	        { errorMes: "请输入QQ或微信", id: "XY_b11", rename: "QQ/微信:", reg: "required" },
	        { errorMes: "请选择出国年份", id: "XY_b09", rename: "出国年份:", reg: "required" },
	    ],
	    submitBtn: ".xy_submit_a",
	    beforeSendData: function(_data,cb) {
	        cb(_data);
	    },
	    beforeLoadField: function(res) {
	        return res;
	    },
	    afterLoadField: function() {
			$(".xy_form_a .nice_select").niceSelect();
		},
	    validatorError: function(mes, node) {
	        console.log("xxx", mes, node);
	        alert(mes);
	    },
	    submitSuccess: function() {
	        alert("申请成功！请等到老师与您联系");
	    },
	    submitError: function() {}
    });

    $(".xy_form_b").xiaoyingForm({
	    parameter: [
	        { errorMes: "姓名格式不正确", id: "XY_a01", rename: "您的姓名", reg: "required", placeholder: "姓名" },
	        { errorMes: "电话格式不正确", id: "XY_a02", rename: "联系电话", reg: "required", placeholder: "手机" },
	        { errorMes: "请选择目前学历状态", id: "XY_b19", rename: "目前学历", reg: "required",placeholder:"目前学历状态" },
	        { errorMes: "请选择目前日语水平", id: "XY_b12", rename: "日语水平", reg: "required",placeholder:"请选择目前日语水平" },
	        { errorMes: "请输入QQ或微信", id: "XY_b11", rename: "QQ/微信", reg: "required" },
	    ],
	    submitBtn: ".xy_submit_b",
	    beforeSendData: function(_data,cb) {
	        cb(_data);
	    },
	    beforeLoadField: function(res) {
	        return res;
	    },
	    afterLoadField: function() {
	    	showBottom();
	    	var _s = $(".sbtnb");
    	 	$(".sbtnb").remove();
	    	$(".xy_form_b").append(_s);
			$(".xy_form_b .nice_select").niceSelect();
			$(".xy_form_b .list").each(function(){
                var _h = $(this).height()+10;
                $(this).css("top","-"+_h+"px")
            });
            closeBottom();
		},
	    validatorError: function(mes, node) {
	        console.log("xxx", mes, node);
	        alert(mes);
	    },
	    submitSuccess: function() {
	        alert("申请成功！请等到老师与您联系");
	    },
	    submitError: function() {}
    });
});