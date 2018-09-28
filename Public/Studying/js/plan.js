$(function() {

    var vue = new Vue({
        el: "#evaluationres",
        data: {
            info: {}
        },
        methods: {
            getQueryString(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);
                if (r != null) return unescape(r[2]);
                return null;
            },
            getdetail(_id) {
                var _this = this;
                $.ajax({
                    type: 'post',
                    url: "http://crm.xiaoying.net/index.php/api/getpromote",
                    dataType: 'json',
                    data: { id: _id },
                    success: function(_res) {
                        if (_res && _res.status && _res.data) {
                            _this.info = JSON.parse(_res.data.promote);
                            _this.$nextTick(() => {
                                var _height = 0;
                                $(".schoolRecommend .list .item").each(function() {
                                    if ($(this).height() > _height) {
                                        _height = $(this).height();
                                    }
                                });
                                $(".schoolRecommend .item").height(_height);

                                $('.a_Pop').webuiPopover({
                                    width: 250,
                                    animation: 'pop',
                                });
                            });
                        }
                    },
                    error: function(e) {

                    }
                });
            }
        },
        mounted: function() {
            this.getdetail(this.getQueryString("id"));

            //设置 plan 高度
            function setBlockHeight() {
                var _h = $(".s_choose .li.active .planList").height();
                $(".tabContent.plan").height(_h + 150);
                setplanItemStyle();
            }
            //设置plan item 样式
            function setplanItemStyle() {
                var _height = 0;
                var _length = $(".s_choose .li.active .planList .item").length;
                var _s;
                if (_length % 2 == 0) {
                    _s = 2;
                } else {
                    _s = 1
                }
                $(".s_choose .li.active .planList .item").each(function(index) {
                    if ((index & 1) == 0) {
                        _height = $(this).next().height();
                        if ($(this).height() > $(this).next().height()) {
                            $(this).next().height($(this).height())
                        } else {
                            $(this).height(_height)
                        }
                    }
                    if (index + 1 > _length - _s) {
                        $(this).css("border", "none");
                    }
                })
            }


            //切换时间规划
            $(document).on('click', '.s_choose .li', function() {
                $(this).addClass("active").siblings().removeClass("active");
                $(".planList").hide();
                $(this).find(".planList").fadeIn();
                setBlockHeight();
            });

            

            $(document).on('click', '.chooseList li', function() {
                $(this).addClass("active").siblings().removeClass("active");
                $(".tabContent").removeClass("active");
                $(".tabContent." + $(this).data("tab")).addClass("active");
                if ($(this).data("tab") == "plan") {
                    $(".s_choose .li").eq(0).click();
                }
            });
        }
    });
});