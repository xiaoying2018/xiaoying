$(function(){
	
	var result = new Vue({
        el: '#studying',
        data: {
        }
    });
    var config = {
        reset: true,
        delay: 'always',
        mobile: true,
    }
    window.sr = new scrollReveal(config);

    $(".resultDv li").click(function(){
        var _flag = $(this).attr("data-flag");
        $(".mm_content#"+_flag).addClass("active").siblings().removeClass("active");
    })
})