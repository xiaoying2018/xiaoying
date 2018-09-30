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
            caseTable:[
                {"index":"1","moshi":"修士直考","name":"张同学","school":"东京大学","marjor":"工学系研究科"},
                {"index":"2","moshi":"修士直考","name":"张同学","school":"东京大学","marjor":"公共政策大学院"},
                {"index":"3","moshi":"修士直考","name":"包同学","school":"东京大学","marjor":"经济学研究科"},
                {"index":"4","moshi":"修士直考","name":"王同学","school":"东京大学","marjor":"公共政策大学院"},
                {"index":"5","moshi":"修士直考","name":"朱同学","school":"东京大学","marjor":"经济学研究科"},
                {"index":"6","moshi":"修士直考","name":"卢同学","school":"东京大学","marjor":"情报学系研究科"},
                {"index":"7","moshi":"修士直考","name":"钱同学","school":"京都大学","marjor":"MBA"},
                {"index":"8","moshi":"修士直考","name":"赵同学","school":"京都大学","marjor":"MBA"},
                {"index":"9","moshi":"修士直考","name":"王同学","school":"一桥大学","marjor":"经济学研究科"},
                {"index":"10","moshi":"修士直考","name":"王同学","school":"一桥大学","marjor":"经济学研究科"},
                {"index":"11","moshi":"修士直考","name":"包同学","school":"一桥大学","marjor":"商学研究科"},
                {"index":"12","moshi":"修士直考","name":"葛同学","school":"一桥大学","marjor":"经济学研究科"},
                {"index":"13","moshi":"修士直考","name":"陈同学","school":"东京工业大学","marjor":"工学院机械系"},
                {"index":"14","moshi":"修士直考","name":"邱同学","school":"北海道大学","marjor":"经济学研究科"},
                {"index":"15","moshi":"修士直考","name":"刘同学","school":"东北大学","marjor":"会计专门职大学院"},
                {"index":"16","moshi":"修士直考","name":"张文怡","school":"大阪大学","marjor":"经济学研究科"},
                {"index":"17","moshi":"修士直考","name":"王同学","school":"大阪大学","marjor":"人类科学研究科"},
                {"index":"18","moshi":"学部直考","name":"苗同学","school":"大阪大学","marjor":"理学部"},
                {"index":"19","moshi":"修士直考","name":"曹同学","school":"九州大学","marjor":"大学院艺术工学府"},
                {"index":"20","moshi":"修士直考","name":"刘同学","school":"神户大学","marjor":"经济学研究科"},
                {"index":"21","moshi":"修士直考","name":"张同学","school":"神户大学","marjor":"经营学研究科"},
                {"index":"22","moshi":"修士直考","name":"李同学","school":"千叶大学","marjor":"融合理工学府"},
                {"index":"23","moshi":"学部直考","name":"苏同学","school":"千叶大学","marjor":"法政经学部"},
                {"index":"24","moshi":"学部直考","name":"单同学","school":"埼玉大学","marjor":"工学部"},
                {"index":"25","moshi":"学部直考","name":"席同学","school":"埼玉大学","marjor":"经济学部"},
                {"index":"26","moshi":"修士直考","name":"周同学","school":"首都大学东京","marjor":"经营学研究科"},
                {"index":"27","moshi":"修士直考","name":"梁同学","school":"首都大学东京","marjor":"人文科学研究科"},
                {"index":"28","moshi":"修士直考","name":"马同学","school":"横滨国立大学","marjor":"环境情报学府"},
                {"index":"29","moshi":"学部直考","name":"陈同学","school":"东京外国语大学","marjor":"言语文化学部"},
                {"index":"30","moshi":"修士直考","name":"李同学","school":"早稻田大学","marjor":"经济学研究科"},
                {"index":"31","moshi":"修士直考","name":"翟同学","school":"早稻田大学","marjor":"商学研究科"},
                {"index":"32","moshi":"修士直考","name":"袁同学","school":"早稻田大学","marjor":"商学研究科"},
                {"index":"33","moshi":"学部直考","name":"王同学","school":"早稻田大学","marjor":"基干理工学部"},
                {"index":"34","moshi":"修士直考","name":"褚同学","school":"早稻田大学","marjor":"社会科学研究科"},
                {"index":"35","moshi":"学部直考","name":"何同学","school":"早稻田大学","marjor":"文学部"},
                {"index":"36","moshi":"学部直考","name":"罗同学","school":"早稻田大学","marjor":"文学部"},
                {"index":"37","moshi":"修士直考","name":"王同学","school":"早稻田大学","marjor":"商学研究科"},
                {"index":"38","moshi":"修士直考","name":"张同学","school":"庆应大学","marjor":"经济学研究科"},
                {"index":"39","moshi":"修士直考","name":"范同学","school":"庆应大学","marjor":"法学研究科LLM项目"},
                {"index":"40","moshi":"修士直考","name":"张同学","school":"庆应大学","marjor":"经济学研究科"},
                {"index":"41","moshi":"修士直考","name":"吕同学","school":"上智大学","marjor":"经济学研究科"},
                {"index":"42","moshi":"修士直考","name":"吴同学","school":"青山学院大学","marjor":"经济学研究科"},
                {"index":"43","moshi":"修士直考","name":"陈同学","school":"青山学院大学","marjor":"社会情报研究科"},
                {"index":"44","moshi":"修士直考","name":"李同学","school":"明治大学","marjor":"MBA大学院"},
                {"index":"45","moshi":"修士直考","name":"张同学","school":"明治大学","marjor":"商学研究科"},
                {"index":"46","moshi":"学部直考","name":"赵同学","school":"明治大学","marjor":"商学部"},
                {"index":"47","moshi":"修士直考","name":"卢同学","school":"明治大学","marjor":"经济学研究科"},
                {"index":"48","moshi":"修士直考","name":"童同学","school":"明治大学","marjor":"理工研究科"},
                {"index":"49","moshi":"修士直考","name":"张同学","school":"东京理科大学","marjor":"工学研究科"},
                {"index":"50","moshi":"学部直考","name":"蒋同学","school":"东京理科大学","marjor":"理工学部"},
                {"index":"51","moshi":"修士直考","name":"徐同学","school":"东京理科大学","marjor":"工学研究科"},
                {"index":"52","moshi":"学部直考","name":"陈同学","school":"立教大学","marjor":"文学部"},
                {"index":"53","moshi":"修士直考","name":"吴同学","school":"关西大学","marjor":"社会学研究科"},
                {"index":"54","moshi":"修士直考","name":"刘同学","school":"法政大学","marjor":"MBA大学院"},
                {"index":"55","moshi":"修士直考","name":"张同学","school":"法政大学","marjor":"法学研究科"},
                {"index":"56","moshi":"修士直考","name":"杨同学","school":"关西学院大学","marjor":"社会学研究科"},
                {"index":"57","moshi":"修士直考","name":"李同学","school":"同志社大学","marjor":"社会学研究科"},
                {"index":"58","moshi":"修士直考","name":"林同学","school":"立命馆大学","marjor":"社会学研究科"},
                {"index":"59","moshi":"修士直考","name":"吴同学","school":"名古屋外国语大学","marjor":"グローバル共生コース"},
                {"index":"60","moshi":"学部直考","name":"陈同学","school":"九州工业大学","marjor":"工学部"},
                {"index":"61","moshi":"修士直考","name":"张同学","school":"东京电机大学","marjor":"情报系统学科"},
                {"index":"62","moshi":"修士直考","name":"卢同学","school":"日本大学","marjor":"艺术研究科"},
                {"index":"63","moshi":"修士直考","name":"高同学","school":"日本大学","marjor":"艺术学研究科"},
                {"index":"64","moshi":"学部直考","name":"周同学","school":"拓殖大学","marjor":"经营学部"},
                {"index":"65","moshi":"学部直考","name":"窦同学","school":"杉野服饰大学","marjor":"服饰学部"},
                {"index":"66","moshi":"修士直考","name":"唐同学","school":"国士馆大学","marjor":"21世纪亚细亚学科"},
                {"index":"67","moshi":"学部直考","name":"罗同学","school":"帝京大学","marjor":"经济学部"},
                {"index":"68","moshi":"修士直考","name":"马同学","school":"帝京大学","marjor":"经济学研究科"},
                {"index":"69","moshi":"修士直考","name":"尹同学","school":"エスモードジャボン","marjor":"ファションクリエイティブ学部"},
                {"index":"70","moshi":"修士直考","name":"杨同学","school":"东京艺术大学","marjor":"动画专业"},
                {"index":"71","moshi":"修士直考","name":"王同学","school":"多摩美术大学","marjor":"美术研究科"},
                {"index":"72","moshi":"修士直考","name":"许同学","school":"多摩美术大学","marjor":"美术研究科"},
                {"index":"73","moshi":"学部直考","name":"张同学","school":"多摩美术大学","marjor":"美术学部"},
                {"index":"74","moshi":"修士直考","name":"单同学","school":"多摩美术大学","marjor":"大学院美术研究科"},
                {"index":"75","moshi":"学部直考","name":"张同学","school":"武藏野美术大学","marjor":"造型学部"},
                {"index":"76","moshi":"修士直考","name":"陈同学","school":"武藏野美术大学","marjor":"造型研究科"},
                {"index":"77","moshi":"学部直考","name":"李同学","school":"武藏野美术大学","marjor":"造型学部"},
                {"index":"78","moshi":"修士直考","name":"张同学","school":"金泽美术大学","marjor":"美术工艺研究科"},
                {"index":"79","moshi":"学部直考","name":"金同学","school":"横滨美术大学","marjor":"美术学部"},
                {"index":"80","moshi":"学部直考","name":"窦同学","school":"宝冢大学","marjor":"东京メディア艺术学部"},
                {"index":"81","moshi":"学部直考","name":"瞿同学","school":"宝冢大学","marjor":"东京メディア艺术学部"},
                {"index":"82","moshi":"修士直考","name":"王同学","school":"东京大学","marjor":"公共政策大学院"},
                {"index":"83","moshi":"修士直考","name":"王同学","school":"庆应义塾","marjor":"商学系研究科"},
                {"index":"84","moshi":"修士直考","name":"包同学","school":"东京大学","marjor":"经济学研究科"},
                {"index":"85","moshi":"修士直考","name":"包同学","school":"东京大学","marjor":"公共政策大学院"},
                {"index":"86","moshi":"修士直考","name":"包同学","school":"庆应义塾","marjor":"经济学研究科"},
                {"index":"87","moshi":"修士直考","name":"包同学","school":"一桥大学","marjor":"经济学研究科"},
                {"index":"88","moshi":"修士直考","name":"包同学","school":"京都大学","marjor":"经济学研究科"},
                {"index":"89","moshi":"修士直考","name":"崔同学","school":"东京大学","marjor":"公共政策大学院"},
                {"index":"90","moshi":"修士直考","name":"崔同学","school":"早稻田大学","marjor":"经济学研究科"},
                {"index":"91","moshi":"修士直考","name":"钱同学","school":"神户大学","marjor":"经济学研究科"},
                {"index":"92","moshi":"修士直考","name":"张同学","school":"东京大学","marjor":"经营学"},
                {"index":"93","moshi":"修士直考","name":"毛同学","school":"一桥大学","marjor":"商学研究科"},
                {"index":"94","moshi":"修士直考","name":"欧同学","school":"东京大学","marjor":"人文社会研究科"},
                {"index":"95","moshi":"修士直考","name":"周同学","school":"一桥大学","marjor":"社会学研究科"},
                {"index":"96","moshi":"修士直考","name":"王同学","school":"大阪大学","marjor":"国际公共政策"},
                {"index":"97","moshi":"修士直考","name":"彭同学","school":"御茶水女子大学","marjor":"性别社会学"},
                {"index":"98","moshi":"修士直考","name":"桂同学","school":"早稻田大学","marjor":"社会科学研究科"},
                {"index":"99","moshi":"修士直考","name":"高同学","school":"御茶水女子大学","marjor":"社会心理学"},
                {"index":"100","moshi":"修士直考","name":"孙珣","school":"上智大学","marjor":"社会福祉学"},
                {"index":"101","moshi":"修士直考","name":"赵同学","school":"上智大学","marjor":"社会福祉学"},
                {"index":"102","moshi":"修士直考","name":"侯同学","school":"上智大学","marjor":"社会福祉学"},
                {"index":"103","moshi":"修士直考","name":"胡同学","school":"立命馆大学","marjor":"应用社会学"},
                {"index":"104","moshi":"修士直考","name":"郭同学","school":"明治大学","marjor":"社会福祉学"},
                {"index":"105","moshi":"修士直考","name":"聂同学","school":"明治大学院大学","marjor":"社会学"},
                {"index":"106","moshi":"修士直考","name":"李同学","school":"东洋大学","marjor":"社会福祉学"},
                {"index":"107","moshi":"修士直考","name":"徐同学","school":"东洋大学","marjor":"社会福祉学"},
                {"index":"108","moshi":"修士直考","name":"孔同学","school":"东洋大学","marjor":"社会福祉学"},
                {"index":"109","moshi":"修士直考","name":"施同学","school":"筑波大学","marjor":"应用语言学"},
                {"index":"110","moshi":"修士直考","name":"李同学","school":"东京学艺大学","marjor":"日本语教育"},
                {"index":"111","moshi":"修士直考","name":"张同学","school":"东京外国语大学","marjor":"国际日本专业 言语应用专攻"},
                {"index":"112","moshi":"修士直考","name":"于同学","school":"御茶水女子大学","marjor":"日本语教育"},
                {"index":"113","moshi":"修士直考","name":"赵同学","school":"早稻田大学","marjor":"教育学研究科"},
                {"index":"114","moshi":"修士直考","name":"陈同学","school":"东北大学","marjor":"日本语教育"},
                {"index":"115","moshi":"修士直考","name":"魏同学","school":"东京工业大学","marjor":"机械工学"},
                {"index":"116","moshi":"修士直考","name":"胡同学","school":"东京大学","marjor":"机械工学"},
                {"index":"117","moshi":"修士直考","name":"赵同学","school":"大阪大学","marjor":"机械工学"},
                {"index":"118","moshi":"修士直考","name":"王同学","school":"京都大学","marjor":"机械工学"},
                {"index":"119","moshi":"修士直考","name":"肖同学","school":"电气通信大学","marjor":"机械工学"},
                {"index":"120","moshi":"修士直考","name":"曹同学","school":"筑波大学","marjor":"情报理工"},
                {"index":"121","moshi":"修士直考","name":"徐同学","school":"筑波大学  ","marjor":"情报理工"},
                {"index":"122","moshi":"修士直考","name":"马同学","school":"横滨国立大学","marjor":"情报理工"},
                {"index":"123","moshi":"修士直考","name":"李同学","school":"东京工业大学","marjor":"情报理工"},
                {"index":"124","moshi":"修士直考","name":"杨同学","school":"东京大学","marjor":"情报理工"},
                {"index":"125","moshi":"修士直考","name":"李同学","school":"横滨国立大学","marjor":"建筑学"},
                {"index":"126","moshi":"修士直考","name":"崔同学","school":"东京大学","marjor":"建筑学"},
                {"index":"127","moshi":"修士直考","name":"刘同学","school":"东京大学","marjor":"建筑学"},
                {"index":"128","moshi":"修士直考","name":"黄同学","school":"早稻田大学","marjor":"建筑学"},

                ]
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
                    }
                });
            },
        },
        created: function () {
            window.setTimeout(function(){
                $(".tableDv tbody").mCustomScrollbar({ theme: "inset-dark" });
            },300);
            // this.getcase();
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
                    "teamLeader":"远山智久，东京大学博士，主宰日本大学经管类申请与考试20年，著有弱点克服系列备考圣经。",
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
                },{
                    "teamName":"SGU英语项目组",
                    "imgSrc":"sgu",
                    "teamDes":"",
                    "teamLeader":"简依梦，御茶水女子大学社会学修士。",
                    "major":"SGU文理科/学部大学院申请。",
                    "member":"东京大学博士/东京大学修士/京都大学修士/东京工业大学修士"
                },{
                    "teamName":"美术组",
                    "imgSrc":"meishu",
                    "teamDes":"",
                    "teamLeader":"张伊雯，多摩美术大学视觉传达修士，行业经验5年。",
                    "major":"视觉传达/染织纺织/环境设计/建筑设计/工艺工业/映像设计/油画/摄影。",
                    "member":"东京艺术大学修士/多摩美术大学修士/武藏野美术大学修士/东京工艺大学修士"
                }
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