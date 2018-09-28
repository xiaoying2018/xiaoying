$(function() {
    window.submitObj = {
        afterDomReady: function() {

            $("#studying select").select2({
                width:"450px"
            });

            $(".chooselist li").click(function() {
                $(this).addClass("active").siblings().removeClass("active");
            });
        },
        beforeValidate: function() {
            return true;
        },
        //公共组件验证完成之后会触发该方法，返回true往下执行
        afterValidate: function() {
            $("#confirmSubmit").val("正在制定方案...");
            window.setTimeout(function(){
                window.location.href = "/studyingabroad/result?id=1"
            })
            // return true;
            return false;
        },
        //提交之前触发该方法，个性项目提交参数对象转换
        before: function(_obj, cb) {
            cb(_obj);
        },
        after: function(res) {
            // Cookies.remove('xiaoying.net_evaluation_res', { path: '' });
            // Cookies.set('xiaoying.net_evaluation_res', res, { expires: 999 });
            $("#confirmSubmit").val("正在制定方案...");
            // if (res && res.success && res.id) {
                window.location.href = "/studyingabroad/result?id="+res.id
            // }
        }
    }

    $(".itemFill input").keyup(function(){
        $(this).closest(".itemFill").removeClass("correct wrong")
    })

    $(".itemFill").click(function(){
        $(this).removeClass("correct wrong")
    })
});