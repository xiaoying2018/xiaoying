$(function() {


    $(".fixedLeft").click(function(){
        $(".fixedLeft").addClass("click");
        $(".b_formPart").addClass("show");
        $(".b_formPart").removeClass("old");
    });

    $(".closeb").click(function(){
        $(".fixedLeft").removeClass("click");
        $(".b_formPart").removeClass("show");
        if (!$("html").hasClass("ltie10")) {
            $(".b_formPart").addClass("old");
        }
    });

    var app = new Vue({
        el: '.popular_school',
        data: {
            schoolData: [{

                    "imgUrl": "1028",
                    "type": "hot",
                    "name": "千驮谷日本语学校",
                    "guimo": "739",
                    "chinese": "456",
                    "year": "1970",
                    "location": "东京都",
                    "hot": "98",
                    "url": "http"
                },
                {
                    "imgUrl": "1039",
                    "type": "hot",
                    "name": "富士国际语学院",
                    "guimo": "960",
                    "chinese": "788",
                    "year": "1989",
                    "location": "东京都",
                    "hot": "94",
                    "url": "http"
                },
                {
                    "imgUrl": "1046",
                    "type": "hot",
                    "name": "早稻田EDU日本语学校(东京校)",
                    "guimo": "445",
                    "chinese": "278",
                    "year": "1994",
                    "location": "东京都",
                    "hot": "98",
                    "url": "http"
                },
                {
                    "imgUrl": "1047",
                    "type": "hot",
                    "name": "修曼日本语学校东京校",
                    "guimo": "561",
                    "chinese": "197",
                    "year": "1991",
                    "location": "东京都",
                    "hot": "97",
                    "url": "http"
                },
                {
                    "imgUrl": "1066",
                    "type": "hot",
                    "name": "MANABI外语学院 东京校",
                    "guimo": "271",
                    "chinese": "65",
                    "year": "1994",
                    "location": "东京都",
                    "hot": "96",
                    "url": "http"
                },
                {
                    "imgUrl": "1097",
                    "type": "hot",
                    "name": "ISI外语学院",
                    "guimo": "763",
                    "chinese": "793",
                    "year": "1984",
                    "location": "东京都",
                    "hot": "97",
                    "url": "http"
                },
                {
                    "imgUrl": "1130",
                    "type": "hot",
                    "name": "京都YMCA国際福祉専門学校日本語科",
                    "guimo": "160",
                    "chinese": "245",
                    "year": "1990",
                    "location": "东京都",
                    "hot": "93",
                    "url": "http"
                },
                {
                    "imgUrl": "1028",
                    "type": "hot",
                    "name": "UNITAS尤尼塔斯日本语学校(帝京大学集团)东京校",
                    "guimo": "600",
                    "chinese": "217",
                    "year": "1970",
                    "location": "东京都",
                    "hot": "98",
                    "url": "http"
                },
                {
                    "imgUrl": "1028",
                    "type": "dongjingdu",
                    "name": "UNITAS尤尼塔斯日本语学校(帝京大学集团)东京校",
                    "guimo": "600",
                    "chinese": "217",
                    "year": "1970",
                    "location": "东京都",
                    "hot": "98",
                    "url": "http"
                },
                {
                    "imgUrl": "1030",
                    "type": "dongjingdu",
                    "name": "美都里慕(Midream)日本语学校",
                    "guimo": "408",
                    "chinese": "354",
                    "year": "1985",
                    "location": "东京都",
                    "hot": "97",
                    "url": "http"
                },
                {
                    "imgUrl": "1039",
                    "type": "dongjingdu",
                    "name": "富士国际语学院",
                    "guimo": "960",
                    "chinese": "788",
                    "year": "1989",
                    "location": "东京都",
                    "hot": "94",
                    "url": "http"
                },
                {
                    "imgUrl": "1097",
                    "type": "dongjingdu",
                    "name": "ISI外语学院",
                    "guimo": "763",
                    "chinese": "493",
                    "year": "1984",
                    "location": "东京都",
                    "hot": "97",
                    "url": "http"
                },
                {
                    "imgUrl": "1046",
                    "type": "dongjingdu",
                    "name": "早稻田EDU日本语学校(东京校)",
                    "guimo": "445",
                    "chinese": "278",
                    "year": "1994",
                    "location": "东京都",
                    "hot": "98",
                    "url": "http"
                },
                {
                    "imgUrl": "1066",
                    "type": "dongjingdu",
                    "name": "MANABI外语学院 东京校",
                    "guimo": "271",
                    "chinese": "165",
                    "year": "1994",
                    "location": "东京都",
                    "hot": "96",
                    "url": "http"
                },
                {
                    "imgUrl": "1003",
                    "type": "dongjingdu",
                    "name": "YMCA东京日本语学校",
                    "guimo": "160",
                    "chinese": "25",
                    "year": "1990",
                    "location": "东京都",
                    "hot": "97",
                    "url": "http"
                },
                {
                    "imgUrl": "1021",
                    "type": "dongjingdu",
                    "name": "千驮谷日本语学校",
                    "guimo": "739",
                    "chinese": "456",
                    "year": "1975",
                    "location": "东京都",
                    "hot": "97",
                    "url": "http"
                },
                {
                    "imgUrl": "1236",
                    "type": "dabanfu",
                    "name": "大阪YMCA国际专门学校",
                    "guimo": "223",
                    "chinese": "115",
                    "year": "1990",
                    "location": "大阪府",
                    "hot": "96",
                    "url": "http"
                },
                {
                    "imgUrl": "1237",
                    "type": "dabanfu",
                    "name": "J国際学院",
                    "guimo": "305",
                    "chinese": "78",
                    "year": "2004",
                    "location": "大阪府",
                    "hot": "91",
                    "url": "http"
                },
                {
                    "imgUrl": "1485",
                    "type": "dabanfu",
                    "name": "关西国际学院",
                    "guimo": "940",
                    "chinese": "454",
                    "year": "1991",
                    "location": "大阪府",
                    "hot": "96",
                    "url": "http"
                },
                {
                    "imgUrl": "1340",
                    "type": "dabanfu",
                    "name": "ARC日本语学校 大阪校",
                    "guimo": "993",
                    "chinese": "790",
                    "year": "1983",
                    "location": "大阪府",
                    "hot": "98",
                    "url": "http"
                },
                {
                    "imgUrl": "1352",
                    "type": "dabanfu",
                    "name": "ECC国际外语专门学校日本语科",
                    "guimo": "500",
                    "chinese": "86",
                    "year": "1948",
                    "location": "大阪府",
                    "hot": "91",
                    "url": "http"
                },
                {
                    "imgUrl": "1372",
                    "type": "dabanfu",
                    "name": "MERIC日本语学校",
                    "guimo": "1080",
                    "chinese": "430",
                    "year": "1987",
                    "location": "大阪府",
                    "hot": "98",
                    "url": "http"
                },
                {
                    "imgUrl": "1256",
                    "type": "dabanfu",
                    "name": "国際日語教育学院",
                    "guimo": "",
                    "chinese": "",
                    "year": "2005",
                    "location": "大阪府",
                    "hot": "91",
                    "url": "http"
                },
                {
                    "imgUrl": "1258",
                    "type": "dabanfu",
                    "name": "大阪日本語アカデミー",
                    "guimo": "120",
                    "chinese": "25",
                    "year": "2012",
                    "location": "大阪府",
                    "hot": "94",
                    "url": "http"
                },
                {
                    "imgUrl": "1133",
                    "type": "jingdufu",
                    "name": "JCL外语学院",
                    "guimo": "516",
                    "chinese": "436",
                    "year": "2003",
                    "location": "京都府",
                    "hot": "97",
                    "url": "http"
                },
                {
                    "imgUrl": "1529",
                    "type": "jingdufu",
                    "name": "关西语言学院",
                    "guimo": "756",
                    "chinese": "650",
                    "year": "1991",
                    "location": "京都府",
                    "hot": "92",
                    "url": "http"
                },
                {
                    "imgUrl": "1129",
                    "type": "jingdufu",
                    "name": "京都文化日本語学校",
                    "guimo": "",
                    "chinese": "",
                    "year": "",
                    "location": "京都府",
                    "hot": "94",
                    "url": "http"
                },
                {
                    "imgUrl": "1130",
                    "type": "jingdufu",
                    "name": "京都YMCA国際福祉専門学校日本語科",
                    "guimo": "120",
                    "chinese": "73",
                    "year": "1889",
                    "location": "京都府",
                    "hot": "91",
                    "url": "http"
                },
                {
                    "imgUrl": "1132",
                    "type": "jingdufu",
                    "name": "京都民際日本語学校",
                    "guimo": "",
                    "chinese": "",
                    "year": "",
                    "location": "京都府",
                    "hot": "94",
                    "url": "http"
                },
                {
                    "imgUrl": "1134",
                    "type": "jingdufu",
                    "name": "京都励学国際学院",
                    "guimo": "",
                    "chinese": "",
                    "year": "2006",
                    "location": "京都府",
                    "hot": "91",
                    "url": "http"
                },
                {
                    "imgUrl": "1127",
                    "type": "jingdufu",
                    "name": "華聯学院京都校",
                    "guimo": "",
                    "chinese": "",
                    "year": "2014",
                    "location": "京都府",
                    "hot": "93",
                    "url": "http"
                },
                {
                    "imgUrl": "1128",
                    "type": "jingdufu",
                    "name": "公益財団法人京都日本語教育センター京都日本語学校",
                    "guimo": "72",
                    "chinese": "12",
                    "year": "1990",
                    "location": "京都府",
                    "hot": "93",
                    "url": "http"
                },
                {
                    "imgUrl": "1274",
                    "type": "bingkuxian",
                    "name": "神戸YMCA学院専門学校 日本語学科",
                    "guimo": "240",
                    "chinese": "",
                    "year": "1886",
                    "location": "兵库县",
                    "hot": "95",
                    "url": "http"
                },
                {
                    "imgUrl": "1421",
                    "type": "bingkuxian",
                    "name": "大阪教育学院",
                    "guimo": "198",
                    "chinese": "88",
                    "year": "",
                    "location": "兵库县",
                    "hot": "93",
                    "url": "http"
                },
                {
                    "imgUrl": "1270",
                    "type": "bingkuxian",
                    "name": "KIJ语学院",
                    "guimo": "",
                    "chinese": "",
                    "year": "2009",
                    "location": "兵库县",
                    "hot": "95",
                    "url": "http"
                },
                {
                    "imgUrl": "1273",
                    "type": "bingkuxian",
                    "name": "国際語学学院",
                    "guimo": "370",
                    "chinese": "32",
                    "year": "1990",
                    "location": "兵库县",
                    "hot": "93",
                    "url": "http"
                },
                {
                    "imgUrl": "1272",
                    "type": "bingkuxian",
                    "name": "神戸外語教育学院",
                    "guimo": "",
                    "chinese": "",
                    "year": "",
                    "location": "兵库县",
                    "hot": "98",
                    "url": "http"
                },
                {
                    "imgUrl": "1276",
                    "type": "bingkuxian",
                    "name": "コミュニカ学院",
                    "guimo": "",
                    "chinese": "",
                    "year": "",
                    "location": "兵库县",
                    "hot": "92",
                    "url": "http"
                },
                {
                    "imgUrl": "1269",
                    "type": "bingkuxian",
                    "name": "秀明神戸国際学院",
                    "guimo": "",
                    "chinese": "",
                    "year": "",
                    "location": "兵库县",
                    "hot": "98",
                    "url": "http"
                },
                {
                    "imgUrl": "1279",
                    "type": "bingkuxian",
                    "name": "神戸日本語学院",
                    "guimo": "",
                    "chinese": "",
                    "year": "",
                    "location": "兵库县",
                    "hot": "94",
                    "url": "http"
                },
                {
                    "imgUrl": "1303",
                    "type": "fugang",
                    "name": "北九州YMCA语言学校",
                    "guimo": "170",
                    "chinese": "16",
                    "year": "1990",
                    "location": "福冈县",
                    "hot": "92",
                    "url": "http"
                },
                {
                    "imgUrl": "1497",
                    "type": "fugang",
                    "name": "国际交流友会外国语学院",
                    "guimo": "422",
                    "chinese": "50",
                    "year": "2001",
                    "location": "福冈县",
                    "hot": "93",
                    "url": "http"
                },
                {
                    "imgUrl": "1556",
                    "type": "fugang",
                    "name": "九州日语学院",
                    "guimo": "223",
                    "chinese": "51",
                    "year": "",
                    "location": "福冈县",
                    "hot": "97",
                    "url": "http"
                },
                {
                    "imgUrl": "1309",
                    "type": "fugang",
                    "name": "富士インターナショナルアカデミー",
                    "guimo": "960",
                    "chinese": "788",
                    "year": "1989",
                    "location": "福冈县",
                    "hot": "92",
                    "url": "http"
                },
                {
                    "imgUrl": "1312",
                    "type": "fugang",
                    "name": "福冈YMCA日本语学校",
                    "guimo": "150",
                    "chinese": "5",
                    "year": "",
                    "location": "福冈县",
                    "hot": "97",
                    "url": "http"
                },
                {
                    "imgUrl": "1305",
                    "type": "fugang",
                    "name": "福岡外語専門学校",
                    "guimo": "",
                    "chinese": "",
                    "year": "1984",
                    "location": "福冈县",
                    "hot": "93",
                    "url": "http"
                },
                {
                    "imgUrl": "1306",
                    "type": "fugang",
                    "name": "九州国際教育学院",
                    "guimo": "",
                    "chinese": "",
                    "year": "",
                    "location": "福冈县",
                    "hot": "97",
                    "url": "http"
                },
                {
                    "imgUrl": "1307",
                    "type": "fugang",
                    "name": "福岡日本語学校",
                    "guimo": "230",
                    "chinese": "126",
                    "year": "",
                    "location": "福冈县",
                    "hot": "92",
                    "url": "http"
                },
                {
                    "imgUrl": "1159",
                    "type": "qiyu",
                    "name": "東京アジア学友会",
                    "guimo": "145",
                    "chinese": "121",
                    "year": "1990",
                    "location": "埼玉县",
                    "hot": "92",
                    "url": "http"
                },
                {
                    "imgUrl": "1457",
                    "type": "qiyu",
                    "name": "东亚国际外语学院",
                    "guimo": "100",
                    "chinese": "58",
                    "year": "2002",
                    "location": "埼玉县",
                    "hot": "91",
                    "url": "http"
                },
                {
                    "imgUrl": "1149",
                    "type": "qiyu",
                    "name": "宇都宮日本語学院",
                    "guimo": "",
                    "chinese": "",
                    "year": "2004",
                    "location": "埼玉县",
                    "hot": "95",
                    "url": "http"
                },
                {
                    "imgUrl": "1154",
                    "type": "qiyu",
                    "name": "埼玉日本語学校",
                    "guimo": "218",
                    "chinese": "",
                    "year": "",
                    "location": "埼玉县",
                    "hot": "95",
                    "url": "http"
                },
                {
                    "imgUrl": "1156",
                    "type": "qiyu",
                    "name": "浦和国際教育センター",
                    "guimo": "350",
                    "chinese": "",
                    "year": "",
                    "location": "埼玉县",
                    "hot": "96",
                    "url": "http"
                },
                {
                    "imgUrl": "1158",
                    "type": "qiyu",
                    "name": "埼玉国際学園",
                    "guimo": "",
                    "chinese": "",
                    "year": "",
                    "location": "埼玉县",
                    "hot": "98",
                    "url": "http"
                },
                {
                    "imgUrl": "1161",
                    "type": "qiyu",
                    "name": "平成国際教育学院",
                    "guimo": "",
                    "chinese": "",
                    "year": "1976",
                    "location": "埼玉县",
                    "hot": "92",
                    "url": "http"
                },
                {
                    "imgUrl": "1442",
                    "type": "qiyu",
                    "name": "东京国际学园外语专门学校",
                    "guimo": "150",
                    "chinese": "5",
                    "year": "",
                    "location": "埼玉县",
                    "hot": "94",
                    "url": "http"
                },
                {
                    "imgUrl": "1182",
                    "type": "shennaichuan",
                    "name": "飛鳥学院",
                    "guimo": "450",
                    "chinese": "200",
                    "year": "1986",
                    "location": "神奈川县",
                    "hot": "97",
                    "url": "http"
                },
                {
                    "imgUrl": "1183",
                    "type": "shennaichuan",
                    "name": "横浜YMCA学院専門学校 日本语学科",
                    "guimo": "166",
                    "chinese": "19",
                    "year": "1990",
                    "location": "神奈川县",
                    "hot": "92",
                    "url": "http"
                },
                {
                    "imgUrl": "1186",
                    "type": "shennaichuan",
                    "name": "早稲田EDU日本語学校横浜校",
                    "guimo": "445",
                    "chinese": "278",
                    "year": "1994",
                    "location": "神奈川县",
                    "hot": "95",
                    "url": "http"
                },
                {
                    "imgUrl": "1189",
                    "type": "shennaichuan",
                    "name": "YMCA健康福祉専門学校",
                    "guimo": "203",
                    "chinese": "80",
                    "year": "1990",
                    "location": "神奈川县",
                    "hot": "96",
                    "url": "http"
                },
                {
                    "imgUrl": "2155",
                    "type": "shennaichuan",
                    "name": "帝京大学日本语别科",
                    "guimo": "",
                    "chinese": "",
                    "year": "",
                    "location": "神奈川县",
                    "hot": "95",
                    "url": "http"
                },
                {
                    "imgUrl": "1176",
                    "type": "shennaichuan",
                    "name": "横浜国際日本語学校",
                    "guimo": "516",
                    "chinese": "",
                    "year": "",
                    "location": "神奈川县",
                    "hot": "91",
                    "url": "http"
                },
                {
                    "imgUrl": "1180",
                    "type": "shennaichuan",
                    "name": "アジア国際語学センター",
                    "guimo": "585",
                    "chinese": "",
                    "year": "",
                    "location": "神奈川县",
                    "hot": "96",
                    "url": "http"
                },
                {
                    "imgUrl": "1184",
                    "type": "shennaichuan",
                    "name": "横浜国際語学院",
                    "guimo": "580",
                    "chinese": "",
                    "year": "",
                    "location": "神奈川县",
                    "hot": "94",
                    "url": "http"
                }
            ],
            teacherData:[
                {
                    "name":"崔峰云",
                    "des":"崔老师是一位真正的背景很牛的大神，一路开挂上了东大的建筑学专业，全日本最牛建筑学之一，对建筑发自内心的热爱让崔老师的课程充满激情。",
                    "num":"181"
                }
            ]
        }
    });
    
    var stars_app = new Vue({
        el: '.stars',
        data: {
            teacherData:[
                {
                    "name":"远山智久博士",
                    "title":"经济学博士",
                    "des":"日本经济经营私塾第一人，著有【弱点克服】系列等多部日本院生考试辅导圣经级教材，被誉为经济学之神。",
                    "num":"220",
                    "imgUrl":"t1"
                },{
                    "name":"王文博士",
                    "title":"商学博士",
                    "des":"东京最受欢迎的经营学老师之一，具备多年教学经验，知识体系十分完善，真正把经营学讲的透彻其实很难，但是王文老师做到了。",
                    "num":"180",
                    "imgUrl":"t2"
                },{
                    "name":"刘铭",
                    "title":"农学修士",
                    "des":"刘老师上课很有感觉，就是那种站在讲台上把控一切的感觉，这源于老师的实力和丰富经验, 才会自然形成的气场",
                    "num":"172",
                    "imgUrl":"t3"
                },{
                    "name":"崔峰云",
                    "title":"建筑学修士",
                    "des":"崔老师是一位真正的背景很牛的大神，一路开挂上了东大的建筑学专业，全日本最牛建筑学之一，对建筑发自内心的热爱让崔老师的课程充满激情。",
                    "num":"181",
                    "imgUrl":"t4"
                },
                {
                    "name":"陈远英",
                    "title":"总校校长 东京大学硕士",
                    "des":"6年一线教学与咨询经验，东京第一代华人私塾课程主讲。学员案例丰富特别是TOP5顶级日语大学学员数量极多。擅长面试,留考文综数学,大学院经济金融商科, 研究计划书辅导",
                    "num":"278",
                    "imgUrl":"t5"                    
                },{
                    "name":"远山智久博士",
                    "title":"经济学博士",
                    "des":"日本经济经营私塾第一人，著有【弱点克服】系列等多部日本院生考试辅导圣经级教材，被誉为经济学之神。",
                    "num":"220",
                    "imgUrl":"t1"
                },{
                    "name":"王文博士",
                    "title":"商学博士",
                    "des":"东京最受欢迎的经营学老师之一，具备多年教学经验，知识体系十分完善，真正把经营学讲的透彻其实很难，但是王文老师做到了。",
                    "num":"180",
                    "imgUrl":"t2"
                }
            ]
        }
    });

    var shouquan_app = new Vue({
        el: '.shouquan',
        data: {
            shouquanData:[
                {
                    "name":"早稻田EDU学校",
                    "imgUrl":"jz1"
                },{
                    "name":"千驮谷日本语学校",
                    "imgUrl":"jz2"
                },{
                    "name":"ARC日本语学校",
                    "imgUrl":"jz3"
                },{
                    "name":"MANABI学校",
                    "imgUrl":"jz4"
                },{
                    "name":"KCP日本语学校",
                    "imgUrl":"jz5"
                },{
                    "name":"京东国际文化学院",
                    "imgUrl":"jz6"
                },{
                    "name":"早稻田EDU学校",
                    "imgUrl":"jz1"
                },{
                    "name":"千驮谷日本语学校",
                    "imgUrl":"jz2"
                }
            ]
        }
    });

    var activity_app = new Vue({
        el: '.activeity',
        data: {
            actData:[
                {
                    "href":"https://static.meiqia.com/dist/standalone.html?eid=14353",
                    "imgUrl":"at1",
                    "time":"2016年03月01日",
                    "num":"4973"
                },{
                    "href":"http://www.xiao-ying.net/pinggu/",
                    "imgUrl":"at2",
                    "time":"2016年02月12日",
                    "num":"18973"
                },{
                    "href":"http://www.xiao-ying.net/newzh/",
                    "imgUrl":"at3",
                    "time":"2017年06月12日",
                    "num":"3967"
                },{
                    "href":"http://www.xiao-ying.net/yuyanms/",
                    "imgUrl":"at4",
                    "time":"2017年02月12日",
                    "num":"968"
                },{
                    "href":"http://www.xiao-ying.net/yuyanzl/",
                    "imgUrl":"at5",
                    "time":"2017年05月08日",
                    "num":"672"
                }
            ]
        }  
    });

    var containerEl = document.querySelector('.popular_school');
    var mixer = mixitup(containerEl, {
        "animation": {
        "duration": 599,
        "nudge": true,
        "reverseOut": true,
        "effects": "fade scale(0.38) translateZ(-100px) stagger(30ms)"
    },
        load: {
            filter: '.hot'
        },
        controls: {
            live: true,
            toggleLogic: 'and'
        }
    });

    $("select").niceSelect();


    var tl = new TimelineLite,
        mySplitText = new SplitText(".moveFont", { type: "words,chars" }),
        chars = mySplitText.chars;

    TweenLite.set("#quote", { perspective: 600 });

    tl.staggerFrom(chars, 0.8, { opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: Back.easeOut }, 0.03, "+=0");

    $(".activity-info").flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 200,
        itemMargin: 30,
        slideshowSpeed:3000,
        directionNav: true,
        controlNav: false
    });

    $(".banner").flexslider({
        "animation": "slide",
        "directionNav": false
    });

    $('.activeity').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 240,
        itemMargin: 30,
        animationLoop: true,
        slideshowSpeed:3000,
        controlNav: false
    });

    $(".listLi").flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 155,
        itemMargin: 24,
        slideshowSpeed:3000,
        directionNav: true,
        controlNav: false
    });

    $(".imgul .acrionDc").mouseenter(function() {
        var tl;
        $(".showDv").fadeOut();
        if (typeof(tl) == "object") {
            tl.clear().time(0);
            tl.remove();
        }
        $(".imgul .imgli").removeClass("hover");
        $(this).parent().addClass("hover");

        var $el = $(this).parent().find(".listul");
        tl = new TimelineLite();
        $(this).parent().find(".showDv").fadeIn();

        var _num = $el.children().length;
        tl.fromTo($el.children().eq(_num-1), 0.4, {
            height: "0%",
            opacity: 0
        }, {
            height: "100%",
            opacity: 1,
            ease: Power2.easeIn
        });

        //开始每一项动画
        for(var i = 0; i < _num-1; i++){
            tl.fromTo($el.children().eq(i), 0.2, {
                y: "-10px",
                opacity: 0
            }, {
                y: "0",
                opacity: 1,
                ease: Power2.easeIn
            });
        }
    });

    $(".showDv .listul .itemli span").mouseenter(function() {
        $(".showDv .listul .itemli").removeClass("active disabled");
        if ($(this).parent().find(".content").length == 0) {
            $(this).parent().addClass("disabled");
            return false;
        }
        $(this).parent().addClass("active");


        var $quote = $(this).parent().find(".content p"),
            mySplitText = new SplitText($quote, {type:"words"}),
            splitTextTimeline = new TimelineLite();mySplitText.split({type:"words"}) 
          $(mySplitText.words).each(function(index,el){
            splitTextTimeline.from($(el), 0.7, {opacity:0, force3D:true}, index * 0.01);
            splitTextTimeline.from($(el), 0.7, {scale:index % 2 == 0  ? 0 : 2, ease:Back.easeOut}, index * 0.01); 
          });
    });

    //弹出层
    $(".showHide").click(function(){
        var _flag = $(this).data("flag");
        $(".sweet-overlay ,#"+_flag).addClass("active");
    });
    $(".close").click(function(){
        $(".sweet-overlay,.sweet-alert").removeClass("active");
    });
    $(".btn").click(function(){
        validateForm($(this));
    });

    var tel_reg = /^1\d{10}$/; 
    //提交报名表数据
    function validateForm(el) {
        var _btn = el.children();
        setDisBtn(_btn);
        var _form = el.parent();
        if (_form.find(".name").val() == "") {
            setInitBtn(_btn);
            alert('姓名不正确');
            return false;
        }
        else if (!tel_reg.test(_form.find(".tel").val()) || _form.find(".tel").val() == "") {
            setInitBtn(_btn);
            alert('电话格式不正确');
            return false;
        }
        else if (_form.find(".qq").val() == "") {
            setInitBtn(_btn);
            alert('微信格式不正确');
            return false;
        }
        else if (_form.find(".nl").val() == "0") {
            setInitBtn(_btn);
            alert('请选择日语能力等级。');
            return false;
        }
        else if (_form.find(".year").val() == "0") {
            setInitBtn(_btn);
            alert('请选择留学时间。');
            return false;
        }
        else if (_form.find(".xl").val() == "0") {
            setInitBtn(_btn);
            alert('请选择学历。');
            return false;
        }
        else if (_form.find(".area").val() == "") {
            setInitBtn(_btn);
            alert('请输入所在城市。');
            return false;
        }else{
            sendData(_form,_btn);
        }
    }
    function setDisBtn(btn){
        $(btn).addClass("disabled").attr("disabled","disabled");
    }
    function setInitBtn(btn){
        $(btn).removeClass("disabled").removeAttr("disabled");
    }
    function sendData(_form,_btn){
        $.ajax({
            headers: {
                'X-CSRF-Token': "tmlannVmPKCZAKCPlmeYp_ZRR3oxq3FXpckFSGPJz50",
            },
            url: "http://www.xiao-ying.net/ajaxindex",
            type: "post",
            dataType: "json",
            data: {
                name: _form.find(".name").val(),
                tel: _form.find(".tel").val(),
                qq: _form.find(".qq").val(),
                nl: _form.find(".nl").val(),
                year: _form.find(".year").val(),
                xl: _form.find(".xl").val(),
                area: _form.find(".area").val(),
                from: location.href
            },
            success: function(data) {
                if(data.status == true) {
                    alert('申请成功！请等到老师与您联系');
                    _btn.html('提交成功！'); 
                } else {
                    setInitBtn(_btn);
                    alert(data.remark);
                }
            },
            error:function(){
                alert('您当前网络不稳定，请稍后再试。');
            }
        });
    }
    

    Carousel.init($("#carousel"));
    $("#carousel").init();

});