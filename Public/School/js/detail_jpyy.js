$(function() {
    var result = new Vue({
        el: '#jpyy_detail',
        data: {
            request:{
                type:"",
                cate:"",
                name:"",
                id:"",
                page:1,
                limit:15
            },
            newsList: [],
        	tempimg:"",
        	detail:{}
        },
        filters:{
        },
        methods: {
            //获取咨询
            getNewListData:function () {
                var _this = this;
                $.ajax({
                   url:"http://manage.xiaoying.net/article/contentssearch",
                    data:{limit:5},
                    type:"get",
                    success: function(res) {
                        var array = res.data;
                        // 'http://www.xiao-ying.net'+item.picture
                        for (var i = 0; i < array.length; i++) {
                            if(array[i].picture.indexOf('http') > -1) {
                                array[i].picture = array[i].picture;
                            }else if(array[i].picture == '') {
                                array[i].picture = '/Public/Zixun/img/img.jpg'
                            } else {
                                array[i].picture = 'http://www.xiao-ying.net'+ array[i].picture;
                            }
                            array[i].publishedtime = _this.timestampToTime(array[i].publishedtime);
                        }
                        _this.newsList = array;
                    }
                })
            },
            change: function(key,val){
                this.request[key] = val;
                this.getzhuanye();
            },
            getdata: function(_id){
                var _this = this;
                $.ajax({
                    url:"http://manage.xiaoying.net/getschooldetail",
                    type:"get",
                    data: {id:_id},
                    success:function(res){
                    	if (res.status) {
                            _this.detail = res.data;

                            if (_this.detail.academic_info) {
                                _this.detail.academic_info = utily.escapeStringHTML(res.data.academic_info)
                            }
                            if (_this.detail.zige) {
                                _this.detail.zige = utily.escapeStringHTML(res.data.zige)
                            }
                            if (_this.detail.apply_method) {
                                _this.detail.apply_method = utily.escapeStringHTML(res.data.apply_method)
                            }
                            
                            if (_this.detail.request_en) {
                                _this.detail.request_en = utily.escapeStringHTML(res.data.request_en)
                            }
                            if (_this.detail.request_lang) {
                                _this.detail.request_lang = utily.escapeStringHTML(res.data.request_lang)
                            }
                            if (_this.detail.request_doclist) {
                                _this.detail.request_doclist = utily.escapeStringHTML(res.data.request_doclist)
                            }
                            if (_this.detail.description) {
                                _this.detail.description = utily.escapeStringHTML(res.data.description)
                            }
                            if (_this.detail.schoolhistory) {
                                _this.detail.schoolhistory = utily.escapeStringHTML(res.data.schoolhistory)
                            }
                            if (_this.detail.schoolspecial) {
                                _this.detail.schoolspecial = utily.escapeStringHTML(res.data.schoolspecial)
                            }
                            if (_this.detail.schoolmanage) {
                                _this.detail.schoolmanage = utily.escapeStringHTML(res.data.schoolmanage)
                            }
                            if (_this.detail.schoolgoods) {
                                _this.detail.schoolgoods = utily.escapeStringHTML(res.data.schoolgoods)
                            }

                            if (_this.detail.longitude && _this.detail.latitude) {
                                _this.detail.longitude = parseFloat(_this.detail.longitude);
                                _this.detail.latitude = parseFloat(_this.detail.latitude);
                                _this.initmap();
                            }
                    	}
                    }
                })
            },
            initmap:function(){
                var _this = this;
                var _point = [_this.detail.longitude,_this.detail.latitude];
                $("#baiduMap").show();
                // 百度地图API功能
                var map = new BMap.Map("baiduMap", {});
                map.enableScrollWheelZoom(true);
                var point = new BMap.Point(_point[0], _point[1]);
                map.centerAndZoom(point, 50);
                
                //创建logo
                var pt = new BMap.Point(_point[0], _point[1]);
                var myIcon = new BMap.Icon("../../Public/Common/mappoint.png", new BMap.Size(95, 36));
                var marker2 = new BMap.Marker(pt, { icon: myIcon }); // 创建标注
                map.addOverlay(marker2);
            },
            getQueryString: function(name, needdecoed) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var lh = window.location.search;
                if (needdecoed) {
                    lh = decodeURI(window.location.search)
                }
                var r = lh.substr(1).match(reg);
                if (r != null) return unescape(r[2]);
                return null;
            },
            timestampToTime:function(timestamp) {
                var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                var D = date.getDate() + ' ';
                var h = date.getHours() + ':';
                var m = date.getMinutes() + ':';
                var s = date.getSeconds();
                return Y+M+D;
                // return Y+M+D+h+m+s;
            }
        },
        mounted: function() {
            var _this = this;
            var _s = Math.round(Math.random()*5+1);
            this.tempimg = '../../Public/Common/img/school/random'+_s+'.jpg';
		    $(".cover_banner_part").backgroundBlur({
			    imageURL : '../../Public/Common/img/school/random'+_s+'.jpg',
			    blurAmount : 50,
			    duration: 1000,
			    endOpacity : 1
			});
			this.getdata(this.getQueryString('id'));
            this.request.id = this.getQueryString('id');
            this.getNewListData();

            $(document).on('click', '.choose .item', function() {
                $(this).addClass("active").siblings().removeClass("active");
            })

            $(document).on('click', '.chooseul .item_li', function() {
                $(this).addClass("active").siblings().removeClass("active");
                var _flag = $(this).attr("data-flag");
                $("body, html").animate({
                    scrollTop: $("#"+_flag).offset().top - 155
                }, 600)
            })

            $(window).scroll(function() {

            })
            fixDiv($(".chooseul"), "fixed_pc", 450);

            function fixDiv(t, e, o) {
                var n = 0;
                $(window).scroll(function() {
                    n = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : document.body.scrollTop,
                    n >= o ? t.addClass(e) : o > n && t.removeClass(e)
                })
            }
        }
    });
})