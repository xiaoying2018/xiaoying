$(function() {   
   

    $(".caseslides").flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 240,
        itemMargin: 25,
        slideshowSpeed:3000,
        directionNav: true,
        controlNav: false
    });

    //获取学校数据
    var school_vm = new Vue({
        el: '.hotschool',
        data: {
            schooldata:[]
        },
        methods:{
            getschoolData:function(){
                var _this = this;

                var settings = {
                  "async": true,
                  "crossDomain": true,
                  "url": "http://www.xiao-ying.net/sem_search?r=school&m=4",
                  "method": "GET"
                }
                $.ajax(settings).done(function (response) {
                    if(response.code == 200 && response.status){
                        _this.schooldata = response.data;
                        window.setTimeout(function(){
                             $(".hotschool .flexslider").flexslider({
                                animation: "slide",
                                slideshow:true,
                                slideshowSpeed:3000,
                                directionNav: true,
                                itemWidth: 350,
                                // itemMargin: 55,
                                controlNav: false
                            });
                         },400);
                    }
                });
            },
        },
        created: function () {
            this.getschoolData();
        }
    });

    //获取专业数据
    var al_vm = new Vue({
        el: '.analysis',
        data: {
            majorData:[]
        },
        methods:{
            getMajor:function(schoolId){
                var _this = this;

                var settings = {
                  "async": true,
                  "crossDomain": true,
                  "url": "http://www.xiao-ying.net/sem_search?r=program&m=4",
                  "method": "GET"
                }
                $.ajax(settings).done(function (response) {
                    if(response.code == 200 && response.status){
                        var _r = "/files/sempages/liuxuesheng/images/";
                        for(var i = 0; i < response.data.length; i++){
                            var s = response.data[i];
                            if (s.name == '商科') {
                                s.className = "a active";
                                s.img = _r+"sk.jpg";
                            }
                            else if (s.name == '理工科') {
                                s.className = "b";
                                s.img = _r+"lgk.jpg";
                            }
                            else if (s.name == '文科') {
                                s.className = "c";
                                s.img = _r+"wk.jpg";
                            }
                            else if (s.name == '医药科') {
                                s.className = "d";
                                s.img = _r+"yyk.jpg";
                            }
                        }
                        _this.majorData = response.data;


                    }
                });
            },
        },
        created: function () {
            this.getMajor();
        }
    });

    //案例表格数据
    var ss_vm = new Vue({
        el: '.tableDv',
        data: {
            caseTable:[]
        },
        methods:{
            getcase:function(schoolId){
                var _this = this;

                var settings = {
                  "async": true,
                  "crossDomain": true,
                  "url": "http://www.xiao-ying.net/sem_search?r=case",
                  "method": "GET"
                }
                $.ajax(settings).done(function (response) {
                    if(response.code == 200 && response.status){
                        for(var i = 0; i < response.data.length; i++){
                            if (response.data[i].name) {
                                response.data[i].name = response.data[i].name.substring(0,1) + "同学";
                            }else{
                                response.data[i].name = "刘同学";
                            }
                            if (response.data[i].xueli) {
                                switch( response.data[i].xueli )
                                {
                                    case '13':
                                        var cate = 'SGU';
                                        break;
                                    case '14':
                                        var cate = '修士';
                                        break;
                                    case '15':
                                        var cate = '预科';
                                        break;
                                    case '18':
                                        var cate = '本科';
                                        break;
                                    case '82':
                                        var cate = '高中专门';
                                        break;
                                    case '85':
                                        var cate = '语言';
                                        break;
                                    default:
                                        var cate = '修士'; // 空值默认为修士
                                }
                                response.data[i].xueli = cate;
                            }
                        }
                        _this.caseTable = response.data;
                        window.setTimeout(function(){
                            $(".tableDv tbody").mCustomScrollbar({ theme: "inset-dark" });
                        },300);
                    }
                });
            },
        },
        created: function () {
            this.getcase();
        }
    });



    //顾问团队信息维护
    var ss_vm = new Vue({
        el: '.teacherFlex',
        data: {
            teamData:[
                {
                    "teamName":"金牌文科1组",
                    "imgSrc":"wenke1",
                    "teamDes":"金牌经管MBA/MOT组",
                    "teamLeader":"李老师，MBA讲师。",
                    "major":"经济/金融/经营/MBA/MOT技术经营。",
                    "member":"东京大学经济学/东京大学金融学/经营学/一桥大学经济学/一桥大学商学/庆应义塾经济学/庆应义塾商学/早稻田大学经济学/商学/京都大学经济学/经营学/北海道大学经济学/明治大学经济经营学/立命馆大学经济经营学"
                },{
                    "teamName":"文科2组",
                    "imgSrc":"wenke2",
                    "teamDes":"法政国际关系",
                    "teamLeader":"陈器，一桥大学修士, 3年教学/申请经验。",
                    "major":"法学/政治学/公共管理/国际关系。",
                    "member":"东京大学法学/公共政策/一桥大学/北海道大学法学"
                },{
                    "teamName":"文科3组",
                    "imgSrc":"wenke3",
                    "teamDes":"社科人文传媒地域",
                    "teamLeader":"庄文妍，一桥大学社会学修士，申请案例丰富。",
                    "major":"社会学/社会福祉/传媒/地域研究。",
                    "member":"东京大学社会情报学/一桥大学社会学/早稻田大学社会学/御茶水女子大学社会学/京都大学社会学/筑波大学社会学/庆应义塾社会学"
                },{
                    "teamName":"文科4组",
                    "imgSrc":"wenke4",
                    "teamDes":"日本语教育/日文文学/翻译",
                    "teamLeader":"冉露芸，一桥大学日本语教育博士，申请/辅导案例丰富，5年从业经验。",
                    "major":"日本语教育/教育/日文文学/日语翻译。",
                    "member":"东京大学教育学修士/北海道大学教育学修士/一桥大学日本语教育博士/早稻田大学日本语教育修士/大分大学教育学"
                },{
                    "teamName":"理工1组",
                    "imgSrc":"ligong1",
                    "teamDes":"机械工学/电子电气 /计算机情报理工",
                    "teamLeader":"唐渊，东京大学机械工学修士/东京大学计算机修士。",
                    "major":"机械工学/电子电器/系统设计/计算机/情报理工/创新工程。",
                    "member":"东京大学工学修士/京都大学机械工程修士"
                },{
                    "teamName":"理工3组",
                    "imgSrc":"ligong3",
                    "teamDes":"社科人文传媒地域",
                    "teamLeader":"崔峰云，东京大学建筑修士。",
                    "major":"建筑/土木工程/环境工程/园林设计/城市规划/农学。",
                    "member":"东京大学建筑学硕士/博士"
                },{
                    "teamName":"理工特别组",
                    "imgSrc":"ligongt",
                    "teamDes":"",
                    "teamLeader":"Judy Siew，东京工业大学生物学博士。",
                    "major":"医学药学/齿科/融合学科/系统创成/新领域研究。",
                    "member":"东京大学农学博士/筑波大学环境修士/庆应义塾大学环境修士/千叶大学园林修士"
                },
                // {
                //     "teamName":"SGU英语项目组",
                //     "imgSrc":"sgu",
                //     "teamDes":"",
                //     "teamLeader":"简依梦，御茶水女子大学社会学修士。",
                //     "major":"SGU文理科/学部大学院申请。",
                //     "member":"东京大学博士/东京大学修士/京都大学修士/东京工业大学修士"
                // },
                // {
                //     "teamName":"美术组",
                //     "imgSrc":"meishu",
                //     "teamDes":"",
                //     "teamLeader":"张伊雯，多摩美术大学视觉传达修士，行业经验5年。",
                //     "major":"视觉传达/染织纺织/环境设计/建筑设计/工艺工业/映像设计/油画/摄影。",
                //     "member":"东京艺术大学修士/多摩美术大学修士/武藏野美术大学修士/东京工艺大学修士"
                // }
            ]
        },
        mounted: function () {

            $(".teacherFlex").flexslider({
                animation: "slide",
                slideshowSpeed:3000,
                directionNav: true,
                pauseOnHover: true,
                controlNav: true,
                after:function(){

                }
            });
            $(".teacherUl .desPart").mCustomScrollbar({ theme: "inset-2-light" });
            var _lii = 30*$(".stars .flex-control-nav li").length;
            $(".stars .flex-control-nav").width(_lii)
            $(".stars .flex-control-nav").css("margin-left","-"+_lii/2 - 150+"px");
        }
    });


    $(document).on('click', '.chooseHeader .item', function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".chooseul .chooseitem").click(function(){
        console.log($(this).index()+1);
        $(".lineDv").removeClass("step1 step2 step3");
        $(".lineDv").addClass("step"+parseInt($(this).index()+1));
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".addService .s_heade li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var _flag = $(this).data("action");
        $(".tabcontent .list").hide();
        $(".tabcontent .list."+_flag).fadeIn();
         
    });

});