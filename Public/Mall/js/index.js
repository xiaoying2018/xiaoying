$(function() {
    var mallindex = new Vue({
        el: '#mall',
        data: {
            paid: [],
            cases: [],
            _arr: [],
            shouquanData: [
                { "name": "日本帝京大学", "imgUrl": "jz4" },
                { "name": "日本工业大学", "imgUrl": "jz2" },
                { "name": "早稻田EDU学校", "imgUrl": "jz1" },
                { "name": "千驮谷日本语学校", "imgUrl": "jz2" },
                { "name": "ARC日本语学校", "imgUrl": "jz3" },
                { "name": "MANABI学校", "imgUrl": "jz4" },
                { "name": "KCP日本语学校", "imgUrl": "jz5" },
                { "name": "京东国际文化学院", "imgUrl": "jz6" },
                { "name": "早稻田EDU学校", "imgUrl": "jz1" },
                { "name": "千驮谷日本语学校", "imgUrl": "jz2" }
            ],
            qianyue:[],
            gongkai:[],
            liukao:[],
            xiushi:[]
        },
        filters: {
            filtertime: function(val){
                if (val) {
                    val = val.substring(0,10)
                    return val;
                }else{
                    return '2018-09-01';
                }
            },
            filtername: function(val){
                if (val) {
                    var s = val.split('@')[0];
                    return s;
                }else{
                    return '小莺出国官方教务';
                }
            },
            filterprice: function(val) {
                var s = val.split('.')[0];
                return s;
            },
            filterFace: function(val) {
                if (val != null) {
                    return val
                } else {
                    return '/Public/random/student/' + Math.floor(Math.random() * 10 + 1) + '.jpg'
                }
            }
        },
        methods: {
            getCaseData: function() {
                var _this = this;
                $.ajax({
                    type: "post",
                    data: { page: "1", rows: "10" },
                    url: "http://crm.xiaoying.net/?m=case&a=search",
                    success: function(res) {
                        if (res.status) {
                            _this.cases = res.data.list;
                            _this.$nextTick(function() {
                                var swiper = new Swiper('#swiper-case', {
                                    slidesPerView: 5,
                                    loop: true,
                                    paginationClickable: true,
                                    loopedSlides: 5,
                                    speed: 6000,
                                    autoplay: true
                                });
                            })
                        }
                    }
                })
            },
            getClassData: function() {
                var _this = this;
                $.ajax({
                    type: "post",
                    url: "/api/mall",
                    success: function(res) {
                        if (res.result) {
                            _this.qianyue = res.data.banji.baolu;
                            _this.gongkai = res.data.banji.gongkai;
                            _this.liukao = res.data.banji.liukao;
                            _this.xiushi = res.data.banji.xiushi;

                            _this.$nextTick(function(){
                                var swiper = new Swiper('.home_index_swiper_container .swiper-container', {
                                    // pagination: {
                                    //     el: '.swiper-pagination',
                                    //     clickable :true,
                                    // },
                                    loop: true,
                                    autoplay:{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    },
                                });
                                var swiperxiushi = new Swiper('.swiper-container-xiushi');
                                var swiperqianyue = new Swiper('.swiper-container-qianyue');
                                var swiperliukao = new Swiper('.swiper-container-liukao');
                                var swipergongkai = new Swiper('.swiper-container-gongkai');
                                

                                $('.js-change').on('click',function(){
                                    var index = $(this).data('num')
                                    $(this).addClass('active');
                                    $(this).siblings('.js-change').removeClass('active');
                                    if ($(this).parents('.modular').hasClass('xiushi-wapper')) {
                                        swiperxiushi.slideTo(index, 300, false)
                                    }
                                    if ($(this).parents('.modular').hasClass('qianyue-wapper')) {
                                        swiperqianyue.slideTo(index, 300, false)
                                    }
                                    if ($(this).parents('.modular').hasClass('liukao-wapper')) {
                                        swiperliukao.slideTo(index, 300, false)
                                    }
                                    if ($(this).parents('.modular').hasClass('gongkai-wapper')) {
                                        swipergongkai.slideTo(index, 300, false)
                                    }
                                })
                            })
                        }
                    }
                })
            },
            initevent: function() {


                var swiper = new Swiper('#swiper-honor', {
                    autoplayDisableOnInteraction: false,
                    paginationClickable: true,
                    slidesPerColumn: 3,
                    loopedSlides: 3,
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    loop: true,
                    speed: 3000,
                    autoplay: true
                });


                $(".xy_form_a").xiaoyingForm({
                    parameter: [
                        { errorMes: "请选择出国时间", id: "XY_b09", rename: "出国时间", reg: "required", placeholder: "出国时间" },
                        { errorMes: "请选择目前学历", id: "XY_b19", rename: "目前学历", reg: "required", placeholder: "目前学历" },
                        { errorMes: "姓名格式不正确", id: "XY_a01", rename: "姓名", reg: "required", placeholder: "姓名" },
                    ],
                    submitBtn: ".xy_submit_a",
                    beforeSendData: function(_data, cb) {
                        utily.setStore('xy_logined_href',window.location.href);
                        var _m = utily.getStore('xy_tel');
                        if (_m == "" || _m == null) {
                            var _t = {
                                'XY_a01' : _data['XY_a01'],
                                'XY_b09' : _data['XY_b09'],
                                'XY_b19' : _data['XY_b19'],
                                'XY_c01' : _data['XY_c01'],
                                'city' : $("#nationselect").val(),
                                'serviceselect' : $("#serviceselect").select2("data")[0].id
                            }
                            utily.setStore('xy_banenr_form',JSON.stringify(_t));
                            alert('请登录或注册您的账户，方便顾问老师更加及时的跟进您的信息。')
                            location.href = 'http://class.xiaoying.net/user/#/login?a=register';
                            return false
                        }else{
                            _data['XY_b20'] = $("#nationselect").select2("data")[0].text;
                            _data['XY_b21'] = '该客户选择的服务是:'+$("#serviceselect").select2("data")[0].text;
                            _data['XY_a02'] = _m;
                            cb(_data);
                        }
                    },
                    beforeLoadField: function(res) {
                        return res;
                    },
                    afterLoadField: function() {
                        $(".xy_form_a").prepend('<div class="lineDv"><select name="" id="nationselect"><option value="">意向国家</option><option value="japan" title="japan">日本</option><option value="korea" title="korea">韩国</option><option value="singapore" title="singapore">新加坡</option><option value="aus" title="aus">澳洲</option><option value="canada" title="canada">加拿大</option></select></div>')
                        $(".xy_form_a").append('<div class="lineDv full"><select name="" id="serviceselect"><option value="">请选择我们的服务</option><option value="1">在线评估预约</option><option value="2">本科学校申请</option><option value="3">硕士申请</option><option value="4">签证办理服务</option><option value="5">申请文书写作服务</option><option value="6">海外保险服务</option></select></div>')
                        $("#nationselect").select2({
                            minimumResultsForSearch: -1,
                            templateResult: formatState
                        });

                        $("#serviceselect").select2({
                            minimumResultsForSearch: -1,
                        });

                        $('[name="XY_b09"],[name="XY_b19"]').select2({
                            minimumResultsForSearch: -1,
                        });


                        function formatState(state) {
                            if (!state.title) {
                                return state.text;
                            }
                            var baseUrl = "/Public/Common/img/nation";
                            var $state = $(
                                '<span><img src="' + baseUrl + '/' + state.element.title + '.png" class="img-flag" /> ' + state.text + '</span>'
                            );
                            return $state;
                        }

                        var _temp = JSON.parse(utily.getStore('xy_banenr_form'));
                        if (_temp) {
                            $("#nationselect").val(_temp['city']).trigger("change");
                            $("[name='XY_b09']").val(_temp['XY_b09']).trigger("change");
                            $("[name='XY_b19']").val(_temp['XY_b19']).trigger("change");
                            $("#serviceselect").val(_temp['serviceselect']).trigger("change");
                            $("[name='XY_a01']").val(_temp['XY_a01']);
                        }

                    },
                    validatorError: function(mes, node) {
                        alert(mes);
                    },
                    submitSuccess: function() {
                        alert("申请成功！请等到老师与您联系");
                    },
                    submitError: function() {}
                });

                var config = {
                    reset: false,
                    delay: 'always',
                    mobile: true,
                }
                window.sr = new scrollReveal(config);
            }
        },
        mounted: function() {
            this._arr = utily.random(10, 1, 10);
            this.initevent();
            this.getCaseData();
            this.getClassData();
            $(".s_nav li").eq(0).addClass('active');
        }
    })
    // api/mall
});