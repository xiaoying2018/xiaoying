// const router = new VueRouter({
//   routes 
// })


var app = new Vue({
	el: '#zixun',
	filters:{
		filterdes(_val){
			return utily.escapeStringHTML(_val);
		}
	},
	data () {
		return {
			nav: 'news',
			newsNav: [],
			newsSecNav: [],
			newsList: [],
			request: {
				page: 1,
				limit: 10,
				cateidSecNav: '',
				cateid: ''
			},
			newsTotal: 0 //资讯总数,
			
			
		}
	},
	// router,
	methods: {
		getNewsNavData () {
			var _this = this;

			$.ajax({
				url: "http://manage.xiaoying.net/article/catesearch",
				type:"GET",
				success: function(res) {
					_this.newsNav = res;
					_this.$nextTick(function () {
						if (localStorage.cateid) {
							$('.newsNavUl li').each(function () {
								if($(this).data('cateid') == localStorage.cateid) {
									$(this).addClass('active').siblings().removeClass('active');
								}
							})
							_this.request.cateidSecNav = localStorage.cateid;
							_this.getSecNavData();
						} else if (localStorage.cateid == '') {
							$('.newsNavUl li').eq(0).addClass('active').siblings().removeClass('active');
							$('.secNavList li').eq(0).addClass('active').siblings().removeClass('active');
						}
					})
				}
			})
		},
		getSecNavData () {
			var _this = this;
			$.ajax({
				url: "http://manage.xiaoying.net/article/catesearch?cateid="+ _this.request.cateidSecNav,
				type:"GET",
				success: function(res) {
					_this.newsSecNav= res;
					_this.$nextTick(function () {
						if (localStorage.cateidSec) {
							$('.secNavList li').each(function () {
								if($(this).data('cateid') == localStorage.cateidSec) {
									$(this).addClass('active').siblings().removeClass('active');
								}
							})
							_this.request.cateid = localStorage.cateidSec;

						} else if(localStorage.cateidSec == '') {
							$('.secNavList li').eq(0).addClass('active').siblings().removeClass('active');
							_this.request.cateid = localStorage.cateid;
						}
						_this.getNewListData();
					})
				}
			})
		},
		getNewListData () {
			var _this = this;
			$.ajax({
				url: "http://manage.xiaoying.net/article/contentssearch?page="+_this.request.page + "&limit=" +_this.request.limit+"&cateid="+ _this.request.cateid,
				type:"GET",
				success: function(res) {
					var array = res.data;
					// 'http://www.xiao-ying.net'+item.thumb
					for (var i = 0; i < array.length; i++) {
						if(array[i].thumb.indexOf('public://') > -1) {
							array[i].thumb = array[i].thumb.replace('public://','http://www.xiao-ying.net/files/');
						}
						else if(array[i].thumb.indexOf('/blog') > -1) {
							array[i].thumb = array[i].thumb.replace('/blog','http://www.xiao-ying.net/files/blog');
						}
						else if(array[i].thumb == '') {
							array[i].thumb = '/Public/Zixun/img/img.jpg'
						}
						else {
							array[i].thumb = 'http://manage.xiaoying.net'+ array[i].thumb;
						}
						array[i].publishedtime = _this.timestampToTime(array[i].publishedtime);
					}
					_this.newsList = array;

					_this.newsTotal= res.count;
					_this.pageCount =  _this.newsTotal%_this.request.limit?(parseInt(_this.newsTotal/_this.request.limit) + 1 ):parseInt(_this.newsTotal/_this.request.limit);

					$('.pageBox').pagination({
						pageCount: _this.pageCount,
						showData: _this.request.limit,
						current:  _this.request.page,
						homePage: '首页',
						endPage: '末页',
						isHide: true,
						count: 2,
						activeCls: 'active',
						coping: true,
						callback: function (api) {
							var getCurrent = api.getCurrent();
							var total = api.getPageCount();
							if (getCurrent>=1 && getCurrent <= total) {
								localStorage.page = api.getCurrent();
								_this.request.page = localStorage.page;
								_this.getNewListData();
							}
						}
					});
				}
			})
		},
		getHotListData(_t){
			var _this = this;
			var _tags = _t;
			$.ajax({
				url: "http://manage.xiaoying.net/article/getarticlebytags",
				type:"GET",
				data:{
					tags:_tags
				},
				success: function(res) {
					var array = res.data;
					// 'http://www.xiao-ying.net'+item.thumb
					for (var i = 0; i < array.length; i++) {
						if(array[i].thumb.indexOf('public://') > -1) {
							array[i].thumb = array[i].thumb.replace('public://','http://www.xiao-ying.net/files/');
						}else if(array[i].thumb == '') {
							array[i].thumb = '/Public/Zixun/img/img.jpg'
						} else {
							array[i].thumb = 'http://manage.xiaoying.net'+ array[i].thumb;
						}
						array[i].publishedtime = _this.timestampToTime(array[i].publishedtime);
					}
					_this.newsList = array;

					_this.newsTotal= res.count;
					_this.pageCount =  _this.newsTotal%_this.request.limit?(parseInt(_this.newsTotal/_this.request.limit) + 1 ):parseInt(_this.newsTotal/_this.request.limit);

					$('.pageBox').pagination({
						pageCount: _this.pageCount,
						showData: _this.request.limit,
						current:  _this.request.page,
						homePage: '首页',
						endPage: '末页',
						isHide: true,
						count: 2,
						activeCls: 'active',
						coping: true,
						callback: function (api) {
							var getCurrent = api.getCurrent();
							var total = api.getPageCount();
							if (getCurrent>=1 && getCurrent <= total) {
								localStorage.page = api.getCurrent();
								_this.request.page = localStorage.page;
								_this.getNewListData();
							}
						}
					});
				}
			})
		},
		tabNewsNav (event) {
			var _this= this;
			var el =  event.currentTarget;

			$(el).addClass('active').siblings().removeClass('active');
			_this.request.page = 1;
			localStorage.page = 1;
			if ($(el).data('cateid') != 'newsNavAll') {
				_this.request.cateidSecNav = $(el).data('cateid');

				_this.request.cateid = $(el).data('cateid');
				$('.secNavList li').eq(0).addClass('active').siblings().removeClass('active');

				localStorage.cateidSec = '';
				localStorage.cateid = $(el).data('cateid');

				_this.getSecNavData();


			} else {
				
				_this.request.cateid = '';
				localStorage.cateid = '';
				_this.newsSecNav = '';
				_this.getNewListData();
			}
			
		},
		tabsecNav(event) {
			var _this= this;
			var el =  event.currentTarget;
			$(el).addClass('active').siblings().removeClass('active');
			_this.request.page = 1;
			localStorage.page = 1;
			if($(el).data('cateid') != 'secNavAll') {
				_this.request.cateid = $(el).data('cateid');
				localStorage.cateidSec = $(el).data('cateid');
				_this.getNewListData();
			} else {
				//点击全部
				_this.request.cateid = localStorage.cateid;
				localStorage.cateidSec = '';
				_this.getNewListData();
			}

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
	    getQueryString(name) {
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		    var r = window.location.search.substr(1).match(reg);
		    if (r != null) return unescape(r[2]); return null;
	  	}
	},
	mounted () {
		var _this = this;
		//初始化一级分类
		if (_this.getQueryString('hot') == null) {
			_this.request.page = localStorage.page?localStorage.page:1
			_this.getNewsNavData();
			// 初始化课程列表
			_this.getNewListData();
		}else{
			_this.getHotListData(_this.getQueryString('hot'));
		}


		
	},
	beforeRouteLeave (to, from, next) {
	    // 导航离开该组件的对应路由时调用
	    // 可以访问组件实例 `this`
	    localStorage.cateid = '';
	    localStorage.cateidSec = '';
	    localStorage.page = '';
	    next();
	}
})
