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
    var config = {
        reset: true,
        delay: 'always',
        mobile: true,
    }
    window.sr = new scrollReveal(config);

    $(".xy_studying").xiaoyingForm({
        parameter: [{
            errorMes: "姓名格式不正确",
            id: "XY_a01",
            rename: "姓名",
            reg: "required",
            placeholder: "请输入您的姓名"
        },
        {
            errorMes: "电话格式不正确",
            id: "XY_a02",
            rename: "电话",
            reg: "required",
            placeholder: "请输入您的手机号"
        },
        {
            errorMes: "验证码格式不正确",
            id: "XY_c02",
            reg: "required"
        }],
        sendMes: "#sendMes",
        submitBtn: ".xy_submit",
        beforeSendData: function(_data, cb) {
            if (!utilystudying.validatefield()) {
                return false
            }else{
                var _str = '日语能力:'+$("#japaneseAbility .active").text()+"。";
                _str += '英语能力:'+$("#englishAbility .active").text()+"。";
                _str += '当前学校:'+$("#currentSchool .active").text()+"。";
                _str += 'GPA:'+$("#gpa .active").text()+"。";
                _str += '在读年级:'+$("#grade option:selected").val()+"。";
                _str += '当前专业:'+$("#currentMajor option:selected").val()+"。";
                _str += '目标专业:'+$("#targetMajor option:selected").val()+"。";
                _data["XY_b21"] = '该客户填写了新官网的留学申请表单。   具体信息如下'+_str
                cb(_data);
            }
        },
        beforeLoadField: function(res) {
            return res;
        },
        afterLoadField: function() {
        },
        validatorError: function(mes, node) {
            alert(mes);
        },
        submitSuccess: function() {
            alert("申请成功！请等到老师与您联系");
        },
        submitError: function() {}
    });
});