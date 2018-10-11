$(function() {
    $.extend({
        getUrlVars: function() {
            var vars = [],
                hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar: function(name) {
            return $.getUrlVars()[name];
        }
    });

    $(".close").click(function() {
        $("#showcity").hide();
    });

    $(".aside,.enrollnow").click(function() {
        $("#showcity").show();
    });


    $(".tabUl .tabLi").click(function() {
        var _flag = $(this).data("flag");
        $(".tabContent ." + _flag).addClass("active").siblings().removeClass("active");
    });

    $(".bgContent .close").click(function() {
        $(".cityTable").fadeOut().removeClass("active");
    });

    var app = new Vue({
        el: '#app',
        data: {
            date:[],
            current:{},
            activity:[]
        },
        methods: {
        },
        mounted:function() {

        	var _this = this;

        	this.date = _s;
            this.current = _s[0].item[0];

            this.activity = _activity;

            this.$nextTick(function(){

	            $(".goenroll").each(function(){
	            	$(this).attr("href",$(this).attr("href")+"&goto="+getUrlParam('goto'))
	            })

	            $(".zhanhui").flexslider({
	                animation: "slide",
	                controlNav: false,
	                animationLoop: false,
	                directionNav: false, 
	                slideshow: false,
	                sync: "#s_zhanhui1",
	                prevText: "",
	                nextText: "",
	            });

	            $('#s_zhanhui1').flexslider({
	                animation: "slide",
	                controlNav: false,
	                animationLoop: false,
	                slideshow: false,
	                itemWidth: 250,
	                asNavFor: '.zhanhui',
	                prevText: "",
	                nextText: "",
	                itemMargin:16
	          	});

	            var owl = $('.month').owlCarousel({
	                center: true,
	                items:3,
	                nav:true,
	                loop:true,
	                autoPlay:false,
	                beforeUpdate:function(index){
	                }
	            });

	            $('.itemDate').owlCarousel({
	                margin: 30,
	                items:4,
	                nav:true,
	                loop:false,
	                autoPlay:false
	            });
	            
	            owl.on('translated.owl.carousel', function(event) {
                 //    var _month = event.page.index + 1;
	                // if (_month < 7) {
	                // 	alert(_month+'月展会已结束，请查看精彩回顾...')
	                //     pw.slide(6);
	                // }
	                // else if (_month > 8) {
	                //     alert(_month+'月展会火热筹划中，展会城市由你来定！')
	                // 	window.location.href = './liuxuezhanreservation?goto='+getUrlParam('goto');
	                // }
	                // else{
	                // 	$(".itemDate").hide();
	                // 	$(".owl_"+_month).fadeIn();
	                // 	$(".owl_"+_month+" .li").eq(0).mouseenter();
	                // }
	            })

	            $(document).on('click','.month .owl-item',function(){
	            	var _m = $(this).find("li").attr("data-m");
	            	console.log("_m",_m);
	            	if (_m < 10) {
	                	alert(_m+'月展会已结束，请查看精彩回顾...')
	                    pw.slide(6);
	                }
	                // else if (_m == 9) {
	                // 	window.open('./liuxuezhanreservation?month='+_m+'&goto='+getUrlParam('goto'));
	                // }
	                else if (_m > 11) {
	                	window.open('./liuxuezhanreservation?month='+_m+'&goto='+getUrlParam('goto'));
	                }
	                else{
	                	$(".itemDate").hide();
	                	$(".owl_"+_m).fadeIn();
	                	$(".owl_"+_m+" .li").eq(0).mouseenter();
	                }
	            })

	            $(".itemDate .li").mouseenter(function(){
	            	_this.current = {}
	            	$(".itemDate .li").removeClass("active");
	            	$(this).addClass("active");
            		_this.current["s_name"] = $(this).attr("data-name")
            		_this.current["s_time"] = $(this).attr("data-time")
            		_this.current["s_address"] = $(this).attr("data-address")
	            });

	            $(".section5 .list li").each(function(){
	                $(this).height($(this).width()*0.9)
	            })


	            var pw = new pageSwitch('app', {
	                duration: 1000,
	                start: 5,
	                direction: 1,
	                loop: false,
	                ease: 'ease',
	        		transition: "flow",
	                freeze: false,
	                mouse: true,
	                mousewheel: true,
	                arrowkey: true
	            });

	            pw.slide(0);

	            window.setTimeout(function() {
	                $(".houseDv .coverBg").fadeOut();
	            }, 1200);



			    $(".aside").click(function(){
	            	pw.slide(2);
			    });
	            

	            pw.on("after", function(_s) {
	                var _s = parseInt(_s + 1);
	                $(".section" + _s).addClass("done");
	                $("#head .ul li").eq(_s-1).addClass("active").siblings().removeClass("active");

	                owl.trigger('to.owl.carousel', [9]);
	                $(".owl_10 .li").eq(0).mouseenter();

	                if (_s == 3 || _s == 1) {
	                	$("#head").addClass("white");
	                }else{
	                	$("#head").removeClass("white");
	                }

	               
	            });

	            $("#head .ul li").click(function() {
	                var _index = $(this).index();
	                pw.slide(_index);
	            })


            })

        }
    });

});

/**
 * 获取浏览器对应参数
 * @param  {[type]} name       [description]
 * @param  {[type]} needdecoed [需要解码的参数]
 * @return {[type]}            [description]
 */
function getUrlParam(name, needdecoed) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var lh = window.location.search;
    if (needdecoed) {
        lh = decodeURI(window.location.search)
    }
    var r = lh.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}