var utilystudying = {};
// utilystudying.code = "";
utilystudying.getField = function(cb){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://crm.xiaoying.net/index.php/api/search_form_field",
      "method": "GET"
    }

    $.ajax(settings).done(function (response) {
        if (response) {
            cb(response);
            utilystudying.$initEvent();
            $(document).trigger("initEvent");
            if (window.submitObj.afterDomReady) {
                window.submitObj.afterDomReady();
            }
        } else {
            utilystudying.$Alert(err)
        }
    });
}

/**
 * 循环赋值
 * @param  {[type]}
 * @return {[type]}
 */
utilystudying.fillHtml = function(el,data){
    var _e = $(el).closest(".itemFill").find(".chooseItem");
    if(!utilystudying.$Control(utilystudying.$Control(_e)) && data.info.length > 0){
        return false;
    }
    var _html = "";
    var _tag = _e[0];

    if (_tag.tagName == "UL") {
        $(_tag).attr("data-field",data.tag);
        for(var i = 0; i < data.info.length; i++){
            _html += "<li data-id="+data.info[i].id+" data-score="+data.info[i].score+"><span>"+data.info[i].name+"</span></li>";
        }
    }

    else if (_tag.tagName == "SELECT") {
        $(_tag).attr("data-field",data.tag);
        _html = "<option value='0'>请选择</option>";
        for(var i = 0; i < data.info.length; i++){
            _html += "<option value="+data.info[i].id+" data-score="+data.info[i].score+">"+data.info[i].name+"</option>";
        }
    }
    _e.html(_html);
}

/**
 * 转义成html
 * @param {[type]} res [description]
 */
utilystudying.Unicode2Native = function(res) {
    var code = res.match(/&#(\d+);/g),
        html = "";
    for (var i = 0; i < code.length; i++) {
        html += String.fromCharCode(code[i].replace(/[&#;]/g, ''));
    }
    return html;
}

/**
 * 获取浏览器对应参数
 * @param  {[type]} name       [description]
 * @param  {[type]} needdecoed [需要解码的参数]
 * @return {[type]}            [description]
 */
utilystudying.getQueryString = function(name, needdecoed) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var lh = window.location.search;
    if (needdecoed) {
        lh = decodeURI(window.location.search)
    }
    var r = lh.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return "";
}
/**
 * 获取浏览器指纹
 * @return {[type]} [description]
 */
utilystudying.getfingerprint = function() {
    var fingerprint = new Fingerprint().get() + "" + new Fingerprint({
        canvas: true
    }).get() + "" + new Fingerprint({
        screen_resolution: true
    }).get();
    return fingerprint;
}
/**
 * 检查是否非常规用户
 * @return {[type]} [description]
 */
utilystudying.checkIsHacker = function() {
    var num = this.getfingerprint();
    // console.log(num);
}
/**
 * 查看元素是否存在
 * @return {[type]}
 */
utilystudying.$Control = function(el) {
    return $(el).length > 0 ? true : false;
}
/**
 * 查看字段的val值
 * @param  {[type]} id             [description]
 * @param  {[type]} needTimeFormat [description]
 * @return {[type]}                [description]
 */
utilystudying.$Get = function(id, needTimeFormat) {
    if ($("#" + id).length > 0) {

        if (id == "s_province") {
            return $("#s_province option:selected").text();
        } else {
            return $("#" + id).val()
        }

    } else {
        return "";
    }
}
/**
 * 统一弹窗方法
 * @param  {[type]} msg [description]
 * @return {[type]}     [description]
 */
utilystudying.$Alert = function(msg) {
    alert(msg);
}

/**
 * 设置提交按钮不可用
 */
utilystudying.setDisabledBtn = function() {
    $("#confirmSubmit").val("已成功提交");
    $("#confirmSubmit").addClass("disabled").attr("disabled", "disabled");
}
/**
 * 初始化提交按钮
 */
utilystudying.initSubmitBtn = function() {
    $("#confirmSubmit").val("评估留学方案");
    $("#confirmSubmit").removeClass("disabled").removeAttr("disabled");
}
/**
 * 判断是否PC访问
 * @return {Boolean} [description]
 */
utilystudying.isPc = function() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
/**
 * 增加对错样式
 * @param  {[type]}  el  [description]
 * @param  {[type]}  res [description]
 * @return {Boolean}     [description]
 */
utilystudying.isCorrrect = function(el,res){
    if (res == "wrong") {
        $("body, html").animate({
            scrollTop: $(el).offset().top - 150
        }, 600);
        $(el).focus();
    }
    $(el).closest(".itemFill").removeClass("wrong correct").addClass(res);
}
/**
 * 验证表单
 * 所有必填
 * @return {[type]} [description]
 */
utilystudying.validatefield = function() {
    if (window.submitObj.beforeValidate) {
        window.submitObj.beforeValidate();
    }
    var _result = true;
    var _scroll = 0;
    var telReg = /^1\d{10}$/;
    var nameReg = /^[\u4e00-\u9fa5]+$/;
    var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var _j = {};
    if (($("#name").val()).replace(/(^\s*)|(\s*$)/g, "") == "") {
        // utilystudying.$Alert('请输入姓名！');
        utilystudying.isCorrrect("#name","wrong")
        return false;
    }else{
        utilystudying.isCorrrect("#name","correct")
    }
    if (!telReg.test($("#tel").val())) {
        // utilystudying.$Alert('请输入正确的手机号码！');
        utilystudying.isCorrrect("#tel","wrong")
        return false;
    }else{
        utilystudying.isCorrrect("#tel","correct")
    }

    if ($("#mesCode").val() == "") {
        // utilystudying.$Alert('请输入正确的手机号码！');
        utilystudying.isCorrrect("#mesCode", "wrong")
        return false;
    } else {
        utilystudying.isCorrrect("#mesCode", "correct")
    }


    $(".chooseItem").each(function(){
        var _fieldName = $(this).data("field");
        var _name = $(this).prev().text();
        if ($(this)[0].tagName == "UL") {
            if (!$(this).children().hasClass("active")) {
                // utilystudying.$Alert('请选择'+_name);
                _result = false;
                utilystudying.isCorrrect("[data-field='"+_fieldName+"']","wrong")
                return false;
            }else{
                _scroll = _scroll + $(this).find(".active").data("score");
                _j[_fieldName] = $(this).find(".active span").text();
                utilystudying.isCorrrect("[data-field='"+_fieldName+"']","correct")
            }
        }
        else if ($(this)[0].tagName == "SELECT") {
            if ($(this).val() == "0") {
                // utilystudying.$Alert('请选择'+_name);
                utilystudying.isCorrrect("[data-field='"+_fieldName+"']","wrong")
                _result = false;
                return false;
            }else{
                _scroll = _scroll + parseInt($(this).find("option:selected").data("score"));
                _j[_fieldName] = $(this).find("option:selected").text();
                utilystudying.isCorrrect("[data-field='"+_fieldName+"']","correct")
            }
        }
    })
    if (_result) {
        return true
    }else{
        return false
    }
}

/**
 * 检查验证码
 * @return {[type]} [description]
 */
utilystudying.checkMessage = function(cb) {
    var _verinput = $("#mesCode").val();
    var _this = this;
    if (_verinput == "") {
        utilystudying.isCorrrect("#mesCode", "wrong")
        return false;
    }
    // if (utilystudying.code == _verinput) {
        if (typeof cb === "function") {
            cb();
        }
    //} 
    // else {
    //     utilystudying.isCorrrect("#mesCode", "wrong")
    //     alert("请输入正确的短信验证码");
    //     return false
    // }
    // var _data = {
    //     Mobile: $("#tel").val(),
    //     VerifCode: _verinput
    // };
    // $.ajax({
    //     type: "post",
    //     url: "",
    //     data: _data,
    //     dataType: "json",
    //     jsonp: "callback",
    //     success: function(result) {
    //         if (result.Success) {
    //             if (typeof cb === "function") {
    //                 cb();
    //             }
    //         } else {
    //             // alert(result.MessageInfo);
    //             return false;
    //         }
    //     },
    //     error: function(err) {
    //         console.log(err);
    //         return false;
    //     }
    // });
}


/**
 * 确认提交
 * @return {[type]} [description]
 */
utilystudying.submit = function(_s,_baseJob) {
    _baseJob.name = $("#name").val();
    _baseJob.tel = $("#tel").val();
    _baseJob.grade_id = $("#grade").val();
    _baseJob.jn_id = $("#japaneseAbility li.active").data("id");
    _baseJob.en_id = $("#englishAbility li.active").data("id");
    _baseJob.score = _s;
    _baseJob.from = window.location.href;
    _baseJob.code = $("#mesCode").val();
    _baseJob.channel = utilystudying.getQueryString('q');

    var _job = _baseJob;

    if (window.submitObj.afterValidate()) {

        //禁用按钮并正式提交
        utilystudying.setDisabledBtn();

        window.submitObj.before(_job,function() {
            jQuery.support.cors = true;
            $.ajax({
                // headers: {
                //     'X-CSRF-Token': $('meta[name="csrf-token"]')[0].content,
                // },
                type: 'POST',
                url: "http://www.xiao-ying.net/checkformsms",
                data: _job,
                dataType: "json",
                success: function(res) {
                    if(!res.success){
                        if (res.msg.indexOf('验证') > 0) {
                            utilystudying.isCorrrect("#mesCode", "wrong")
                        }else if (res.msg.indexOf('手机') > 0){
                            utilystudying.isCorrrect("#tel", "wrong")
                        }else{
                            alert(res.msg);
                        }
                        utilystudying.initSubmitBtn();
                    }
                    else if (res.success) {
                        window.submitObj.after(res)
                    } else {
                        alert(res.msg);
                        utilystudying.initSubmitBtn();
                    }
                },
                error: function(error) {
                    // console.log(JSON.stringify(error));
                    utilystudying.initSubmitBtn();
                }
            });
        })
    }
}

/**
 * 发送短信验证码
 * @param  {[type]} _element [description]
 * @return {[type]}          [description]
 */
utilystudying.sendMessage = function(_element) {
    var _btn = $(_element);
    if (!_btn.hasClass("disabled")) {
        var _phonenum = $("#tel").val();
        if (_phonenum.length == 0) {
            utilystudying.isCorrrect("#tel", "wrong")
            return false;
        }
        setBtnDisabled();
        var _data = {
            tel: _phonenum
        };
        $.ajax({
            // headers: {
            //     'X-CSRF-Token': $('meta[name="csrf-token"]')[0].content,
            // },
            type: "post",
            url: "http://xiao-ying.net/sendformsms",
            data: _data,
            success: function(result) {
                if (result.success && result.data) {
                    alert('短信发送成功，请注意查收！')
                    // utilystudying.code = result.data.code;
                    startTimeOut();
                } else {
                    alert(result.msg);
                }
            },
            error: function(err) {
                startTimeOut();
            }
        });
    }
    var intervalId;

    function startTimeOut() {
        var num = 120;
        intervalId = window.setInterval(function() {
            num = num - 1;
            _btn.text(num + "s");
            if (num == 0) {
                setBtnabled();
            }
        }, 1000);
    }

    function setBtnabled() {
        window.clearInterval(intervalId);
        _btn.removeClass("disabled").removeAttr("disabled");
        _btn.text("发送验证码");
    }

    function setBtnDisabled() {
        _btn.addClass("disabled").attr("disabled");
        _btn.text("发送中...");
    }
}

/**
 * 页面初始化需要加载的事件
 */
utilystudying.$initEvent = function() {


}


$(function() {
    utilystudying.getField(function(content) {
        $(".itemFill").each(function(){
            var _filed = $(this).find(".ss_title.field");
            if(utilystudying.$Control(_filed)){
                var _filedName = _filed.text();
                if (typeof(_filedName,content[_filedName]) != 'undefined') {
                    utilystudying.fillHtml(_filed,content[_filedName])
                }
            }
        });
    });

    //点击发送短信验证码
    // if ($("#sendMes") && $("#sendMes").length > 0) {
    //     $(document).on('click', '#sendMes', function() {
    //         utilystudying.sendMessage($(this));
    //     });
    // }
})