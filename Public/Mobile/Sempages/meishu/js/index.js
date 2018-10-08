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
    jsowl.on('changed.owl.carousel', function(event) {
        var _index = $(".jsowl .center").find(".slideitem").attr("data-id");
        console.log("xxx",_index);
       if (_index == 6) {
        $(".teainfo .name").text("张伊雯")
        $(".teainfo .mainjob").text("大学院主任教师")
        $(".teainfo .school").text("武藏野美术大学大学院")
        $(".teainfo .desc").text("大学院能否考学成功影响因素有很多，但共通点是所有考试合格的学生都进行了有系统的长期认真的准备。大学时开始接触并了解日本设计师及作品，因中国视觉传达专业教学方法及名称取自日本，后决定赴日攻读大学院。大学毕业后，当年武藏野美术大学考试合格。大学院毕业后继续从事升学考试辅导工作，根据报考院校专业不同，提供有针对性的教学规划及辅导对策。")
       }
       else if (_index == 1) {
        $(".teainfo .name").text("卢健臻")
        $(".teainfo .mainjob").text("学部编入主任教师")
        $(".teainfo .school").text("武藏野美术大学")
        $(".teainfo .desc").text("毕业后留日在Aphro公司从事IT设计工作编入考试的成功与否在于作品集与实际科目，建议学生能有更多视觉在系统的指导下进行有条理的认真备考。从高中开始接触美术并于国内有2年多从事设计工作的相关经验。因向往日本的传统工艺与2013年来日游学并参加编入考试，合格。现于日本从事IT相关工作及考试指导。针对性的教学规划及辅导对策，对作品集指导提供多方位建议，并根据不同院校专业的实际考试进行指导。")
       }
       else if (_index == 2) {
        $(".teainfo .name").text("张嘉琪")
        $(".teainfo .mainjob").text("工业方向讲师")
        $(".teainfo .school").text("武藏野美术大学")
        $(".teainfo .desc").text("相信梦想是价值的源泉，相信眼光决定未来的一切，相信成功的信念比成功本身更重要，相信人生有挫折没有失败，相信生命的质量来自决不妥协的信念。沉迷匠人精神魅力，秉持着对传统工艺的好奇，使我在国内大学毕业后，，来到日本继续攻读首饰专业。在备考期间，通过对金工专业的了解，为了更好的学习首饰专业知识与技术，是我萌发了再次回到大学校园继续深入学习的决心。通过专业系统的准备，武藏野美术大学工艺工业设计学科金工专工3年编入合格。两年系统的学习和准备下，16年大学院合格，现在在本校就读大学院生课程。")
       }
       else if (_index == 3) {
        $(".teainfo .name").text("田中 智")
        $(".teainfo .mainjob").text("摄影方向讲师")
        $(".teainfo .school").text("武藏野美术大学")
        $(".teainfo .desc").text("2016年毕业后攻读大学院  2017年德国科隆交换留学")
       }
       else if (_index == 4) {
        $(".teainfo .name").text("梦璐")
        $(".teainfo .mainjob").text("学部入试主任教师")
        $(".teainfo .school").text("毕业后在日开设了直接的艺术工坊")
        $(".teainfo .desc").text("会针对本考生的情况特点而考量教学，实践尝试新颖方法，更好的让志愿生针对志愿校的考试意图及能力做更好的渗透剖析。自小深受曾任知名美术大学教授的外公在绘画方面的启蒙熏陶，以及后来的恩师关于日本设计的介绍，因而对日本设计深深向往。逐赴日就读语言需诶奥的同时参加日本艺术备考校，对当时兢兢业业指导自己的日本教授及教师的责任感及耐心细心感到敬佩与感怀。有了想做个有责任的好老师和做个属于国人学生可以安心向学的好学校的想法。")
       }
       else if (_index == 5) {
        $(".teainfo .name").text("刘怡嘉")
        $(".teainfo .mainjob").text("映像方向讲师")
        $(".teainfo .school").text("武藏野美术大学")
        $(".teainfo .desc").text("富士电视台2015 SF7学生电影节海报设计2016年小平电影支援计划《爷爷》美术担当因为喜欢日本的摄影师和电影来到日本，喜欢小口诗子的电影和山崎的照片而选择了考取武藏野美术大学，现在继续在写真方面进行学习。经过两年的学习，深刻的认识到“自己不先做出实际的作品来 老师再好也帮不了你”。")
       }
       else if (_index == 6) {
        $(".teainfo .name").text("林星莹")
        $(".teainfo .mainjob").text("染织艺术方向讲师")
        $(".teainfo .school").text("多摩美术大学大学院染织艺术设计专业")
        $(".teainfo .desc").text("曾参加2015年（一村一品）国际设计支援合作项目虽然努力不一定会成功，但是成功一定需要不断的努力。大学时攻读服装设计专业，毕业后决定赴日深造。在考学期间，感受到了日本染织艺术设计的魅力，决定更加深入的了解服装面料特性。通过了极其系统的准备，多摩美术大学染织纺织专业大学考试合格。大学院毕业后继续从事升学考试辅导工作及个人创作活动。 老师再好也帮不了你”。")
       }
       else if (_index == 7) {
        $(".teainfo .name").text("赵瑾秀")
        $(".teainfo .mainjob").text("环境艺术方向讲师")
        $(".teainfo .school").text("多摩美术大学大学院环境艺术设计专业")
        $(".teainfo .desc").text("毕业后在日开创了自己的设计品牌《LEIA SHU》上半身献给艺术，下半身用在刀刃上。大学时就读于西安美术学院攻读展示设计专业，毕业后决定赴日继续学习深造。在留日考学期间，更加深刻的感受到了日本建筑空间的魅力，决定继续学习室内空间设计，通过系统的考学准备，成功考取了多摩美术大学环境设计专业。")
       }
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
        dots:false
    })
    jiyu.on('changed.owl.carousel', function(event) {
       console.log("xxx",event.item.index);
       if (event.item.index == 4) {
        $(".jydesc").html("真诚，努力，自信。在车站的书店里寻找中介喜欢的点是我进美大常做的事。带着相机与速写本，在代官山蜂窝冰激淋里画着插画，想象着有一天可以成为空间设计师是最难忘的回忆。无论何时都要对世界充满好奇，无论何时多要相信自己。画品亦人品，学画先学做人。")
       }
       else if (event.item.index == 5) {
        $(".jydesc").html("考上心仪的学校，是幸运而欣喜的事情，但是也更加发现要多练日语，从听不懂到听得懂说不出的这个过程说长不长说短不短但是要有规划的去循序渐进。备考的时候千万不要觉得考学时间很多很充裕，拖拖拉拉的结果会让你在升入大学时进入手忙脚乱的揪心中！有课题有任务要及时完成，因为你也会因此而成长进步！请坚持到最后！")
       }
       else if (event.item.index == 6) {
        $(".jydesc").html("来日本这几年，考学的那段日子是我成长最为飞速的时候。作为留学生参加考试，除了实技之外日语也是重中之重。所以在画画的同时练习日语也是必不可少的一项工作。一口流利的日语势必在面试时加分不少。考学路上，必是苦大于乐的，但是一定要坚信“有志者，事竟成！”")
       }
       else if (event.item.index == 7) {
        $(".jydesc").html("因为对电影的热爱，使我在日本从大学院一路读到博士，在东京学习生活几年后又到京都继续求学。几年在日的生活使我感受颇多，考学不是开始，成功不是目的，真正的学习和历练从踏入校门的那一刻开始。很多同学急于考学，其实认真准备考学的过程同样是一次人生的成长和锻炼，享受当下。")
       }
       else if (event.item.index == 8) {
        $(".jydesc").html("顺利考入武藏野美术大学大学院绝对离不开作品及研究计划的认真准备。进入大学后，感受最明显的就是日语的重要性，所以在备考期间也不能将日语松懈。大学里的课业并不轻松，再加上日语授课，还是要保持着备考的这股认真劲儿努力学习。一定要自信，相信自己能走得更远。")
       }

       else {
        $(".jydesc").html("在国内，对于现代设计很多人会常说，细节决定成败。以严谨著称的日本，很多细节设计则更加被重视了。所以在准备自己的作品集的时候，需要更加的用心，尽其所能的把自己的能力，态度，哪怕是决心都展现出来，那么所有人自然而然所都会被你所吸引，考入自己心怡的学校也将会事半功倍。")
       }

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