var app = new Vue({
	el: '#zixundetail',
	data () {
		return {
			nav: 'news',
			newsNav: [],
			newsDetailInfo: {},
			vote: 0, //点赞数
			reads: 0 //阅读量
			
			
		}
	},
	
	methods: {
		getNewsNavData () {
			var _this = this;
			console.log('localStorage.cateid',localStorage.cateid,localStorage.cateidSec);

			$.ajax({
				url: "http://manage.xiaoying.net/article/catesearch",
				type:"GET",
				success: function(res) {
					_this.newsNav = res;
				}
			})
		},
		clickNewsNav(event) {
			var _this= this;
			var el =  event.currentTarget;
			if ($(el).data('cateid') != 'newsNavAll') {
				localStorage.cateid = $(el).data('cateid');
			} else {
				localStorage.cateid = '';
			}
			localStorage.cateidSec = '';
		},
		
		getData() {
			var _this = this;
			var id = _this.getQueryString('id');
			console.log(id)
			$.ajax({
				url:"http://manage.xiaoying.net/article/detailsearch?id=" + id,
				type:"GET",
				success: function (res) {
					if (res.status) {
						var obj = res.data;
						obj.source = obj.source?obj.source:'网络';
						obj.publishedtime = _this.timestampToTime(obj.publishedtime);
						obj.body = utily.escapeStringHTML(obj.body)
						_this.newsDetailInfo = obj;
						_this.vote = obj.upsnum;
						_this.reads = obj.hits;
						_this.$nextTick(function(){
							$(".detailsContPart img").each(function(){
								if ($(this).attr("src").indexOf('ueditor/php/upload/image') > -1) {
									$(this).attr("src","http://manage.xiaoying.net/"+$(this).attr("src"));
								}
							})
						})
					}
				}
			})
		},
		timestampToTime (timestamp) {
	        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	        var Y = date.getFullYear() + '-';
	        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	        var D = date.getDate() + ' ';
	        var h = date.getHours() + ':';
	        var m = date.getMinutes() + ':';
	        var s = date.getSeconds();
	        return Y+M+D;
	        // return Y+M+D+h+m+s;
	    },
	    clickThumb () {
	    	var _this = this;
			var id = _this.getQueryString('id');
	    	$.ajax({
				url:"http://manage.xiaoying.net/vote?id=" + id,
				type:"GET",
				success: function (res) {
					if (res.status) {
						_this.vote++
					}else {
						console.log(res.msg);
					}
				},
				error: function (res) {
					console.log(res.msg);
				}
			})
	    },
	    setReads() {
	    	var _this = this;
			var id = _this.getQueryString('id');
			$.ajax({
				url:"http://manage.xiaoying.net/reads",
				type:"POST",
				data: {
					id: id
				},
				dataType: 'json',
				success: function (res) {
					if (res.status) {
						_this.reads++
					}else {
						console.log(res.msg);
					}
				},
				error: function (res) {
					console.log(res.msg);
				}
			})
	    },
	    getQueryString (name, needdecoed) {
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		    var lh = window.location.search;
		    if (needdecoed) {
		        lh = decodeURI(window.location.search)
		    }
		    var r = lh.substr(1).match(reg);
		    if (r != null) return unescape(r[2]);
		    return "";
		}
	},
	mounted () {
		var _this = this;
		_this.getNewsNavData();
		_this.getData();

		// _this.setReads();

		//热门活动轮播初始化
		var mySwiper = new Swiper('.swiper-container',{
            // pagination: '.pagination',
            loop:true,
            autoplay: 5000,
            autoplayDisableOnInteraction: false,
            grabCursor: true,
            paginationClickable: true
        })
		$('.arrow-left').on('click', function(e){
			e.preventDefault()
			mySwiper.swipePrev()
		});
		$('.arrow-right').on('click', function(e){
			e.preventDefault()
			mySwiper.swipeNext()
		});
		
	}
})