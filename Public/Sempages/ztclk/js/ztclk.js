$(function () {

	window.scrollReveal = new scrollReveal({ reset: true, move: '50px'});
	var onOff = true;
	


	function showBottom() {
		$(".fixedLeft").addClass("click");
		$(".b_formPart").addClass("show");
		$(".b_formPart").removeClass("old");

	}
	function closeBottom() {
		$(".fixedLeft").removeClass("click");
		$(".b_formPart").addClass("old");
	}

	$(".fixedLeft").click(function() {
		showBottom();
	});
	$(".closeb").click(function() {
		$(this).addClass("done");
		closeBottom();
		onOff = false;
	});
	var mySwiper = new Swiper('.swiper-container',{
		// autoplay : 5000,
		pagination : '.swiper-pagination',
		paginationClickable :true,

		slidesPerView: 4,
        // centeredSlides: true,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
        loop: true,
        spaceBetween: 30
	})

	if (window.location.href.indexOf("eggelite") > 0) {
        $("#beianxinxi").html("粤ICP备17035939号 版权所有：深圳远英出国服务有限公司");
    }else{
        $("#beianxinxi").text("苏ICP备17069390号 版权所有：苏州小莺教育科技有限公司");
    }

    var moz = /Gecko\//i.test(navigator.userAgent);
	var $body = moz?$('html'):$('body,html');

	$('.navList li').click(function () {
		var $id = $(this).data('id');
		$('body>div[data-id]').each(function () {
			if($(this).data('id') == $id) {
				$body.animate({
					scrollTop: $(this).offset().top - 100
				},400);
			}
		})
	})
	var scrollTop1 = $(window).scrollTop()+ $('.bannerPart').outerHeight();
	$('body>div[data-id]').each(function () {

		if(scrollTop1>= $(this).offset().top) {
			$('.navList li[data-id="'+$(this).data('id')+'"]').addClass('active').siblings().removeClass('active');
		}
	})

	if ($(window).scrollTop() > 0&&onOff == true) {
		showBottom();

	} else {
		closeBottom();
	}
	$(window).scroll(function () {

		var scrollTop_start = $(window).scrollTop();
		var scrollTop = $(window).scrollTop()+ $('.bannerPart').outerHeight();
		if (scrollTop_start> 0&&onOff == true) {
			showBottom();

		} else {
			closeBottom();
		}

		$('body>div[data-id]').each(function () {

			if(scrollTop>= $(this).offset().top) {
				$('.navList li[data-id="'+$(this).data('id')+'"]').addClass('active').siblings().removeClass('active');
			}
		})
	})
	$('.attendBtn').click(function () {
		$body.animate({
			scrollTop: $('.formPart').offset().top - 240
		},400);
	})
	$(".xy_form_a").xiaoyingForm({
            parameter: [
                {errorMes:"姓名格式不正确",id:"XY_a01",rename:"姓名",reg:"required"},
                {errorMes:"电话格式不正确",id:"XY_a02",rename:"电话",reg:"required"},
                { errorMes: "QQ/微信格式不正确", id: "XY_b11", rename: "QQ/微信", reg: "required", placeholder: "QQ/微信" },
                // {errorMes:"请选择所在城市",id:"XY_b13",rename:"所在城市",reg:"required"},
                // {errorMes:"请选择目标专业",id:"XY_b10",rename:"目标专业",reg:"required"},
                // {errorMes:"请选择计划留学时间",id:"XY_b09",rename:"计划留学时间",reg:"required"},
            ],
            submitBtn: ".submita",
            beforeSendData: function(_data,cb) {
                cb(_data);
            },
            beforeLoadField:function(res){
                for(var i = 0; i < res.length;i++){
                    if (res[i].FLAG == "XY_b10") {
                        res[i]._v = "required|max:30";
                        res[i].type = 2;
                    }
                }
                return res;
            },
            afterLoadField: function() {
            },
            validatorError:function(mes,node){
                alert(mes);
            },
            submitSuccess:function(){
                alert("申请成功！请等到老师与您联系");
            },
            submitError:function(){}
        });
	$(".xy_form_b").xiaoyingForm({
            parameter: [
                {errorMes:"姓名格式不正确",id:"XY_a01",rename:"姓名",reg:"required"},
                {errorMes:"电话格式不正确",id:"XY_a02",rename:"电话",reg:"required"},
                { errorMes: "QQ/微信格式不正确", id: "XY_b11", rename: "QQ/微信", reg: "required", placeholder: "QQ/微信" },
                // {errorMes:"请选择所在城市",id:"XY_b13",rename:"所在城市",reg:"required"},
                // {errorMes:"请选择目标专业",id:"XY_b10",rename:"目标专业",reg:"required"},
                // {errorMes:"请选择计划留学时间",id:"XY_b09",rename:"计划留学时间",reg:"required"},
            ],
            submitBtn: ".submitb",
            beforeSendData: function(_data,cb) {
                cb(_data);
            },
            beforeLoadField:function(res){
                for(var i = 0; i < res.length;i++){
                    if (res[i].FLAG == "XY_b10") {
                        res[i]._v = "required|max:30";
                        res[i].type = 2;
                    }
                }
                return res;
            },
            afterLoadField: function() {
            },
            validatorError:function(mes,node){
                alert(mes);
            },
            submitSuccess:function(){
                alert("申请成功！请等到老师与您联系");
            },
            submitError:function(){}
        });


})