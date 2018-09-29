$(function() {
    var app = new Vue({
        el: '#enrollDv',
        data: {
            date:{}
        },
        methods: {
        },
        mounted() {
            var _this = this;
            for(var i = 0; i < _s.length; i++){
                for(var j = 0; j < _s[i].item.length; j++){
                    if (getUrlParam('id') == _s[i].item[j].id) {
                        this.date = _s[i].item[j];
                    }
                }
            }
            $(".xy_form").xiaoyingForm({
                parameter: [
                    { errorMes: "姓名格式不正确", id: "XY_a01", rename: "姓名：", reg: "required", placeholder: "请输入您的姓名" },
                    { errorMes: "电话格式不正确", id: "XY_a02", rename: "手机号码：", reg: "required" , placeholder: "请输入您的手机号码"},
                    { errorMes: "请输入微信或QQ号", id: "XY_b11", rename: "微信/QQ：",reg:"required", placeholder: "请输入您的微信/QQ" },
                ],
                submitBtn: ".xy_btn",
                beforeSendData: function(_data,cb) {
                    _data["XY_b29"] = _this.date.s_name;
                    _data["XY_b30"] = _this.date.s_time;
                    cb(_data);
                },
                beforeLoadField: function(res) {
                    return res;
                },
                afterLoadField: function() {},
                validatorError: function(mes, node) {
                    alert(mes);
                },
                submitSuccess: function() {
                    alert("申请成功！请等到老师与您联系");
                },
                submitError: function() {}
                });
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