$(function() {
    $(".xy_form").xiaoyingForm({
        parameter: [{
            errorMes: "姓名格式不正确",
            id: "XY_a01",
            rename: "姓名",
            reg: "required",
            placeholder: "请输入您的姓名"
        },
        {
            errorMes: "电话格式不正确",
            id: "XY_a02",
            rename: "电话",
            reg: "required",
            placeholder: "请输入您的手机号"
        },
        {
            errorMes: "微信格式不正确",
            id:"XY_b11",
            rename: "微信",
            reg: "required",
            placeholder: "请输入您的微信"
        },{
            errorMes: "学历格式不正确",
            id:"XY_b19",
            rename: "学历",
            reg: "required",
            placeholder: "请输入您的学历"
        }],
        submitBtn: ".xy_submit",
        beforeSendData: function(_data, cb) {
            cb(_data);
        },
        beforeLoadField: function(res) {
            return res;
        },
        afterLoadField: function() {
        },
        validatorError: function(mes, node) {
            alert(mes);
        },
        submitSuccess: function() {
            alert("申请成功！请等到老师与您联系");
        },
        submitError: function() {}
    });

   var jsowl =  $('.jsowl').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        center:true,
        dots:false
    })
  
   var _index = $(".jsowl .active.center").find(".slideitem").attr("data-id");
   $(".teainfo .name").text("今野健太")
        // $(".teainfo .mainjob").text("大学院主任教师")
        $(".teainfo .school").text("东京艺术⼤学雕塑专业")
        $(".teainfo .desc").text("2004年东京艺术⼤学美术学部雕塑科 毕业。2006年东京艺术⼤学美术研究科修⼠课程雕塑专攻 修了。2009年东京艺术⼤学美术研究科美术专攻博⼠后期课程雕塑研究领域 修了(取得博⼠学位)。2013年-2018年东京艺术⼤学美术学部 讲师。从以幼⼉为对象的艺术启蒙教育到⼤学院博⼠后期课程在读学⽣为对象的⾼度专业技术指导。我活⽤⾃⼰的专业艺术知识对范围⼴阔的对象进⾏艺术本质教育。")

   
    jsowl.on('dragged.owl.carousel',function (event) {
      var _index = $(".jsowl .active.center").find(".slideitem").attr("data-id");
        // console.log("xxx1",_index);
        changed(_index)

    })
    function changed(index) {
        var _index = index;
        // console.log("xxx",_index);
        // console.log("xxx",event);
       if (_index == 1) {
        $(".teainfo .name").text("今野健太")
        // $(".teainfo .mainjob").text("大学院主任教师")
        $(".teainfo .school").text("东京艺术⼤学雕塑专业")
        $(".teainfo .desc").text("2004年东京艺术⼤学美术学部雕塑科 毕业。2006年东京艺术⼤学美术研究科修⼠课程雕塑专攻 修了。2009年东京艺术⼤学美术研究科美术专攻博⼠后期课程雕塑研究领域 修了(取得博⼠学位)。2013年-2018年东京艺术⼤学美术学部 讲师。从以幼⼉为对象的艺术启蒙教育到⼤学院博⼠后期课程在读学⽣为对象的⾼度专业技术指导。我活⽤⾃⼰的专业艺术知识对范围⼴阔的对象进⾏艺术本质教育。")
       }
       else if (_index == 2) {
        $(".teainfo .name").text("李赵雪")
        // $(".teainfo .mainjob").text("学部编入主任教师")
        $(".teainfo .school").text("东京艺术⼤学美术研究科⽇本·东洋美术史研究室博⼠")
        $(".teainfo .desc").text("2009年中央美术学院人文学院美术史专业 毕业。 2013年京都市立艺术大学美术研究科艺术学专业修士課程 修了。 2015年进入东京艺术大学美术研究科日本·东洋美术史研究室博士后期课程学习。 主攻中国与日本的近现代美术史、美术史学史。 本科论文获中央美术学院优秀论文奖，研究生论文获得京都市长奖。 博士在学期间论文发表于日本重要学术期刊，并受国内重点大学邀请回国讲学。 对美术史研究具有极高热情，并希望将其分享给更多同侪，共同钻研美术史中的诸问题。")
       }
       else if (_index == 3) {
        $(".teainfo .name").text("関根菲⾹⾥")
        // $(".teainfo .mainjob").text("工业方向讲师")
        $(".teainfo .school").text("东京艺术⼤学美术设计科")
        $(".teainfo .desc").text("2014年东京艺术大学美术学部设计科 毕业。2016年东京艺术大学美术研究科设计专攻修士课程 修了。现在、东京艺术大学美术研究科先端艺术表现专攻博士后期课程 在读。从2010年-2016年的六年间以讲师身份在日本最大的美术大学进学预备校每年指导学生200名左右。指导学生多有合格东京艺术大学，武藏野美术大学，多摩美术大学等知名美大。 2016年开始进入以留学生为对象的美术预备校工作，指导的留学生多有合格东京艺术大学，武藏野美术大学，多摩美术大学、女子美术大学等学校的大学院或者学部。 我在重视构筑作品概念和研究计划书结构的同时，还会给你们作品制作上的深层建议。作品集、面试及演讲发表的指导是当然不用说的，对于在美术大学专业考试中出现的小论文也会进行精确辅导。")
       }
       else if (_index == 4) {
        $(".teainfo .name").text("向井氷奈之")
        // $(".teainfo .mainjob").text("摄影方向讲师")
        $(".teainfo .school").text("东京艺术⼤学美术研究科设计专攻博⼠后期")
        $(".teainfo .desc").text("2014年 早稻田大学创造理工学部建筑系本科 毕业。2017年 东京艺术大学美术研究科设计专攻修士课程 修了。目前、东京艺术大学美术研究科设计专攻博士后期 在读。本科三年级时，在日本最大级建筑学生竞赛建筑新人战2012中，入围美术馆设计前八强。之后，将兴趣从制作建筑的立场向记录与表达的立场转移。从入学大学院至今正在研究记述日本生活风景的方式。加之2015-2017年间，她探访日本的各处离岛，通过与当地住民的相处，对于“生活与创作”有了广泛多样的理解。以此为契机，从2017年起进入设计公司，参与区立博物馆的周末事业，为将日本自古以来的生活文化传播给更多样的群体企划与运营了许多相关讲座。")
       }
       else if (_index == 5) {
        $(".teainfo .name").text("李品誼")
        // $(".teainfo .mainjob").text("学部入试主任教师")
        $(".teainfo .school").text("东京艺术⼤学美术研究科⽂化财保存专攻保存修复雕刻研究室修⼠课程")
        $(".teainfo .desc").text("出生于台湾台南 2012年台湾艺术大学古迹艺术修复学系 毕业。2015年东京艺术大学美术研究科文化财保存专攻保存修复雕刻研究室修士课程 修了。修了后在同一个研究室担任两年半的技术职员和半年的教育研究助手，参与多项文物修复研究案，于2018年进到博士后期课程，现在正在进行有关雕刻文物的研究。期间也与其他文化财不同领域的研究室联系合作，除了累积文物修复经验的实绩，也接触许多各个分野的专业知识，对于有兴趣报考文化财保存学专攻的学生能提出更适切的建议。")
       }
       else if (_index == 6) {
        $(".teainfo .name").text("椎野倫奈")
        // $(".teainfo .mainjob").text("東京藝術⼤学美術学部絵画科⽇本画")
        $(".teainfo .school").text("東京藝術⼤学美術学部絵画科⽇本画")
        $(".teainfo .desc").text("2016年東京藝術大学美術学部絵画科日本画 毕业。2018年東京藝術大学美術研究科絵画専攻日本画第1研究室修士课程 修了。現在、同大学大学院博士后期课程 在读。2016年取得教师资格证，2018年取得策展人资格证。大学一年级时在知名当代艺术家的工作室担任作画助手，另外还有动画制作经验。现在所属研究室与中国的美术大学有学术交流，关于中国与日本的绘画可能性也在进行研究。从美术基础的素描、色彩、传统日本画技法到当代艺术，动画等很大的范围，结合自己过去的研究学习经验，尊重学生个性进行指导。")
       }
       else if (_index == 7) {
        $(".teainfo .name").text("居原⽥遥")
        // $(".teainfo .mainjob").text("东京艺术⼤学修⼠课程")
        $(".teainfo .school").text("东京艺术⼤学修⼠课程")
        $(".teainfo .desc").text("东京艺术大学修士课程 修了。 以冲绳乃至亚洲的艺术运动以及另类艺术作为关注的主题，开展一系列企划或展览会。 現在、东京艺术大学国際支援課（Global Support Center）的特任助手。")
       }
       else if (_index == 8) {
        $(".teainfo .name").text("李⼩江")
        // $(".teainfo .mainjob").text("东京艺术⼤学美术研究科雕塑专攻修⼠課程")
        $(".teainfo .school").text("东京艺术⼤学美术研究科雕塑专攻修⼠課程")
        $(".teainfo .desc").text("2014年10月赴日留学。2018年3月东京艺术大学美术研究科雕塑专攻修士課程 修了。作品先后在东京都美术馆、银座aachisuto space、台北赤粒艺术等艺术机构进行过展览。在艺大就读期间首次外国留学生获得了东京艺术大学雕刻栋玄关美术馆举办的摄影大奖。 2016年开始在东京知名留学生美术辅导预备校以讲师身份进行学部素描和大学院入学考试辅导。指导学生合格院校有东京学艺大学，武藏野美术大学，多摩美术大学，女子美术大学等学校的大学院或者学部。 以同为美术留学生的身份，作为大家的前辈，把自己亲身经历过的日本美术大学考试经验以及在大学研究学习中体验到的日本当代艺术资讯分享给大家。")
       }
       else if (_index == 9) {
        $(".teainfo .name").text("島⽥真悠⼦")
        $(".teainfo .school").text("东京艺术⼤学美术研究科绘画专攻油画")
        $(".teainfo .desc").text("2012年东京艺术大学美术学部绘画科油画 毕业。2015年东京艺术大学美术研究科绘画专攻油画第四研究室修士课程 修了。DAAD（德国学术研究会）研究员的身份留学德国斯图加特国立造型艺术学院两年。回日本之后从事美术教育工作的同时以日本为主要据点，作为艺术家，全力的进行艺术创作活动。我从学部1年级开始到现在为止都从事着美术教育相关工作，在日本有名的美术大学进学预备校有5年的讲师工作经验，主要指导素描和油画方向。另外还有以留学生为对象的美术专门学校的1年指导工作经验。我将进行从美大入学考试的基础素描至油画，色彩等专业绘画形式的指导。以及通过自己对当代艺术中不同形式的纯粹艺术创作过程的理解，指导学生作为艺术家所需要的基本能力。")
       }
       else if (_index == 10) {
        $(".teainfo .name").text("森志帆")
        $(".teainfo .school").text("东京艺术⼤学美术研究科设计专攻")
        $(".teainfo .desc").text("2014年东京艺术大学美术学部设计科 毕业。2016年东京艺术大学美术研究科设计专攻修士课程 修了。大学期间以讲师身份在东京某知名美术预备校工作四年。从2014年起以助手的身份加入东京某有名的设计事务所。2018年开始以独立设计师身份参加工作。在耐心仔细的了解学生作品方向的同时帮助学生构筑作品概念，并且缜密的指导学生研究计划书的构成。另外对作品制作，作品集，面试，演讲与发表也会进行认真的辅导。")
       }
       else if (_index == 11) {
        $(".teainfo .name").text("河上真理")
        $(".teainfo .school").text("东京艺术⼤学美术研究科设计专攻修⼠课程")
        $(".teainfo .desc").text("2013年武藏野美术大学基础设计系深泽直人研究室 毕业。2016年3月东京艺术大学美术研究科设计专攻修士课程 修了。在校期间开始以自由设计师的身份开始活动。以平面设计为中心，参加商业的品牌设计或企划。个人方面，也作为调香师参与香水的制作。2017年6月，成立tunneldesign株式公司。2018年出展当年度米兰的Salone Satellite 展")
       }
       else if (_index == 12) {
        $(".teainfo .name").text("津⽥恭⼦")
        $(".teainfo .school").text("东京艺术⼤学美术研究科设计专攻視覚•伝達研究室修⼠课程")
        $(".teainfo .desc").text("2014年东京艺术大学美术学部设计科 毕业。2016年东京艺术大学美术研究科设计专攻視覚•伝達研究室修士课程 修了。现在，活用自己对平面设计的感觉。创立了“KYOKO STUDA”品牌的珠宝饰品、现代陶艺。同时，也作为插画师、品牌设计企划师活跃着。")
       }
       else if (_index == 13) {
        $(".teainfo .name").text("円賀彩未")
        $(".teainfo .school").text("东京艺术⼤学美术研究科设计专攻修⼠课程")
        $(".teainfo .desc").text("2014年 东京艺术大学美术学部设计系本科 毕业。2017年 东京艺术大学美术研究科设计专攻修士课程 修了。在校期间在产品设计研究室所属期间，也涉足平面设计和空间设计，艺术创造的涉猎广泛。2016年 入围 LEXUS DESIGN AWARD 2016。2016年 在米兰设计周进行作品发表与展示。2017年 东京艺术大学毕业作品展 获设计赏。在其他大学担任过助教，也有过指导设计的经验。")
       }
       else if (_index == 14) {
        $(".teainfo .name").text("见⾥朝希")
        $(".teainfo .school").text("东京艺术⼤学映像研究科动画专攻修⼠課程")
        $(".teainfo .desc").text("2016年 武藏野美术大学造型学部视觉传达设计系本科 毕业。2018年 东京艺术大学映像研究科动画专攻修士課程 修了。作为毕业作品的短篇动画在国内外的电影节上获奖15奖之多，现在作为自由设计师积极地活跃中。作为讲师参加了文化厅主办的缅甸动画交流会。在「NHK高校讲座·美术1 动画~动态的表现~」中作为教师出演。")
       }
       else if (_index == 15) {
        $(".teainfo .name").text("最上綾")
        $(".teainfo .school").text("東京藝術⼤学美術⼤学院美術研究科")
        $(".teainfo .desc").text("2017年東京藝術大学美術学部设计科 毕业。现在、東京藝術大学美術大学院美術研究科设计専攻企画・理論研究室在籍。 从大学本科时期开始，以书籍设计、包装设计为研究制作中心。现在主要从设计视点来研究分析“对口相声”的构造、并将其制作成可视化的作品。")
       }
       else if (_index == 16) {
        $(".teainfo .name").text("LILY SHU")
        $(".teainfo .school").text("东京艺术⼤学⼤学院国际艺术创造研究科修⼠課程")
        $(".teainfo .desc").text("出生于中国。埼玉大学芸術論専攻美学分野毕业、英国肯特大学取得硕士学位。现在、东京艺术大学大学院国际艺术创造研究科修士課程 在读。我的创作主题一直围绕时间与记忆，以及意识形态的变化而展开，并同时策划探讨个体与环境之间的相关关系的项目。第33届日本东川町国际摄影节作品集公开审查冠军。第7届Tokyo Frontline Photo Award 评委奖。第18届摄影1-Wall 提名奖。")
       }
       else if (_index == 17) {
        $(".teainfo .name").text("千 ⼀")
        $(".teainfo .school").text("东京艺术⼤学美术研究科先端艺术表现专攻修⼠課程")
        $(".teainfo .desc").text("中出生于中国。2017年伦敦艺术大学LCC设计科Illustration&Visual Media本科 毕业。现在、东京艺术大学美术研究科先端艺术表现专攻修士課程 在读。 在英国的四年，通过在平面设计，写真，装置，映像和舞台剧等各种表现形式的探索，确定了自己的方向。毕业后来到日本深造。现在的研究方向是舞台剧中故事性的创作，主要的活动内容是编剧导演和舞台美术。中日英三语以及接受三国的多样文化下锻炼出的多面立体化的经验和意识为基础活动中。基本上是以自己的经验为基础，与学生能在同样的角度看待问题，提供建议。")
       }
    }
    jsowl.on('dragged.owl.carousel',function (event) {
      var _index = $(".jsowl .active.center").find(".slideitem").attr("data-id");
        // console.log("xxx1",_index);
        changed(_index)

    })
    $('.model-prev').click(function () {
      jsowl.trigger('prev.owl.carousel');
      var _index = $(".jsowl .active.center").find(".slideitem").attr("data-id");
        // console.log("xxx1",_index);
        changed(_index)
    })
    $('.model-next').click(function () {
      jsowl.trigger('next.owl.carousel');
      var _index = $(".jsowl .active.center").find(".slideitem").attr("data-id");
        // console.log("xxx1",_index);
        changed(_index)
    })
    $('.luqu').owlCarousel({
        items:3,
        loop:true,
        margin:10,
        nav:false,
        dots:true
    })
    var jiyu = $('.jiyu').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        center:true,
        dots:false
    })
    // jiyu.on('changed.owl.carousel', function(event) {
      
    //    console.log("xxx",event.item.index);
    //    if (event.item.index == 4) {
    //     $(".jydesc").html("真诚，努力，自信。在车站的书店里寻找中介喜欢的点是我进美大常做的事。带着相机与速写本，在代官山蜂窝冰激淋里画着插画，想象着有一天可以成为空间设计师是最难忘的回忆。无论何时都要对世界充满好奇，无论何时多要相信自己。画品亦人品，学画先学做人。")
    //    }
    //    else if (event.item.index == 5) {
    //     $(".jydesc").html("考上心仪的学校，是幸运而欣喜的事情，但是也更加发现要多练日语，从听不懂到听得懂说不出的这个过程说长不长说短不短但是要有规划的去循序渐进。备考的时候千万不要觉得考学时间很多很充裕，拖拖拉拉的结果会让你在升入大学时进入手忙脚乱的揪心中！有课题有任务要及时完成，因为你也会因此而成长进步！请坚持到最后！")
    //    }
    //    else if (event.item.index == 6) {
    //     $(".jydesc").html("来日本这几年，考学的那段日子是我成长最为飞速的时候。作为留学生参加考试，除了实技之外日语也是重中之重。所以在画画的同时练习日语也是必不可少的一项工作。一口流利的日语势必在面试时加分不少。考学路上，必是苦大于乐的，但是一定要坚信“有志者，事竟成！”")
    //    }
    //    else if (event.item.index == 7) {
    //     $(".jydesc").html("因为对电影的热爱，使我在日本从大学院一路读到博士，在东京学习生活几年后又到京都继续求学。几年在日的生活使我感受颇多，考学不是开始，成功不是目的，真正的学习和历练从踏入校门的那一刻开始。很多同学急于考学，其实认真准备考学的过程同样是一次人生的成长和锻炼，享受当下。")
    //    }
    //    else if (event.item.index == 8) {
    //     $(".jydesc").html("顺利考入武藏野美术大学大学院绝对离不开作品及研究计划的认真准备。进入大学后，感受最明显的就是日语的重要性，所以在备考期间也不能将日语松懈。大学里的课业并不轻松，再加上日语授课，还是要保持着备考的这股认真劲儿努力学习。一定要自信，相信自己能走得更远。")
    //    }

    //    else {
    //     $(".jydesc").html("在国内，对于现代设计很多人会常说，细节决定成败。以严谨著称的日本，很多细节设计则更加被重视了。所以在准备自己的作品集的时候，需要更加的用心，尽其所能的把自己的能力，态度，哪怕是决心都展现出来，那么所有人自然而然所都会被你所吸引，考入自己心怡的学校也将会事半功倍。")
    //    }

    // })
    function changed1(_index) {
       if (_index == 2) {
        $(".jydesc").html("真诚，努力，自信。在车站的书店里寻找中介喜欢的点是我进美大常做的事。带着相机与速写本，在代官山蜂窝冰激淋里画着插画，想象着有一天可以成为空间设计师是最难忘的回忆。无论何时都要对世界充满好奇，无论何时多要相信自己。画品亦人品，学画先学做人。")
       }
       else if (_index == 3) {
        $(".jydesc").html("考上心仪的学校，是幸运而欣喜的事情，但是也更加发现要多练日语，从听不懂到听得懂说不出的这个过程说长不长说短不短但是要有规划的去循序渐进。备考的时候千万不要觉得考学时间很多很充裕，拖拖拉拉的结果会让你在升入大学时进入手忙脚乱的揪心中！有课题有任务要及时完成，因为你也会因此而成长进步！请坚持到最后！")
       }
       else if (_index == 4) {
        $(".jydesc").html("来日本这几年，考学的那段日子是我成长最为飞速的时候。作为留学生参加考试，除了实技之外日语也是重中之重。所以在画画的同时练习日语也是必不可少的一项工作。一口流利的日语势必在面试时加分不少。考学路上，必是苦大于乐的，但是一定要坚信“有志者，事竟成！”")
       }
       else if (_index == 5) {
        $(".jydesc").html("因为对电影的热爱，使我在日本从大学院一路读到博士，在东京学习生活几年后又到京都继续求学。几年在日的生活使我感受颇多，考学不是开始，成功不是目的，真正的学习和历练从踏入校门的那一刻开始。很多同学急于考学，其实认真准备考学的过程同样是一次人生的成长和锻炼，享受当下。")
       }
       else if (_index == 6) {
        $(".jydesc").html("顺利考入武藏野美术大学大学院绝对离不开作品及研究计划的认真准备。进入大学后，感受最明显的就是日语的重要性，所以在备考期间也不能将日语松懈。大学里的课业并不轻松，再加上日语授课，还是要保持着备考的这股认真劲儿努力学习。一定要自信，相信自己能走得更远。")
       }
       else if (_index == 1) {
        $(".jydesc").html("考上心仪的学校是幸运也是开心的事情，也发现要多练日语，从听不懂到听得懂。")
       }
       

    }
    jiyu.on('dragged.owl.carousel',function (event) {
      var _index = $(".jiyu .active.center").find(".slideitem").attr("data-id");
      changed1(_index);
    })
    $('.model-prev1').click(function () {
      jiyu.trigger('prev.owl.carousel');
      var _index = $(".jiyu .active.center").find(".slideitem").attr("data-id");
        // console.log("xxx1",_index);
        changed1(_index);
    })
    $('.model-next1').click(function () {
      jiyu.trigger('next.owl.carousel');
      var _index = $(".jiyu .active.center").find(".slideitem").attr("data-id");
        // console.log("xxx1",_index);
        changed1(_index);
    })
    $(".menuBtn").click(function () {
      if(!$('.menuDv').is(':visible')) {
        $('.menuDv').fadeIn();
      } else {
        $('.menuDv').fadeOut();
      }
    })
    $('.menuDv .wrap').click(function () {
      $('.menuDv').fadeOut();
    })
    var moz = /Gecko\//i.test(navigator.userAgent);
    var $body = moz?$('html'):$('body,html');
    $('.menuUL li').click(function () {
      $('.menuDv').fadeOut();
      var $id = $(this).data('id');
      $('body>div').each(function () {
        if($(this).data('id') == $id) {

          $body.animate({
            scrollTop: $(this).offset().top - $('.logoPart').outerHeight()
          },400);
        }
      })
    })
    $(".applyBtn").click(function () {
      $body.animate({
        scrollTop: $(".formpart").offset().top
      },400);
    })
});