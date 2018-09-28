$(function() {
    var result = new Vue({
        el: '#jpyy_detail',
        data: {
        	tempimg:"",
        	detail:{}
        },
        filters:{
        },
        methods: {
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
                    	}
                        console.log("xxx",res);
                    }
                })
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
            }
        },
        mounted: function() {
            var _this = this;
            var _s = Math.round(Math.random()*5+1);
            this.tempimg = '../../Public/Common/img/school/random'+_s+'.jpg';
		    $(".cover_banner_part").backgroundBlur({
			    imageURL : '../../Public/Common/img/school/random'+_s+'.jpg',
			    blurAmount : 10,
			    duration: 1000,
			    endOpacity : 1
			});
			// this.getdata(this.getQueryString('id'));
        }
    });
})