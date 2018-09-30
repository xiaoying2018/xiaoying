var provinces = [
        {'id':25,'pid':2,'name':'北海道地区','level':1},
        {'id':26,'pid':2,'name':'东北地区','level':1},
        {'id':27,'pid':2,'name':'中国地区','level':1},
        {'id':28,'pid':2,'name':'四国地区','level':1},
        {'id':29,'pid':2,'name':'九州地区','level':1},
        {'id':30,'pid':2,'name':'冲绳地区','level':1},
        {'id':100,'pid':2,'name':'关东地区','level':1},
        {'id':101,'pid':2,'name':'关西地区','level':1},
        {'id':102,'pid':2,'name':'中部地区','level':1},
        {'id':103,'pid':2,'name':'北陆地区','level':1},
    ],
    citys = new Array();
// 北海道地区
// citys[25] = [];
// 东北地区
citys[26] = [
    {'id':55,'pid':26,'name':'青森县','level':2},
    {'id':56,'pid':26,'name':'秋田县','level':2},
    {'id':57,'pid':26,'name':'山形县','level':2},
    {'id':58,'pid':26,'name':'岩手县','level':2},
    {'id':59,'pid':26,'name':'宫城县','level':2},
    {'id':60,'pid':26,'name':'福岛县','level':2},
];
// 中国地区
citys[27] = [
    {'id':61,'pid':27,'name':'广岛县','level':2},
    {'id':62,'pid':27,'name':'冈山县','level':2},
    {'id':63,'pid':27,'name':'山口县','level':2},
    {'id':64,'pid':27,'name':'岛根县','level':2},
    {'id':65,'pid':27,'name':'鸟取县','level':2},
];
// 四国地区
citys[28] = [
    {'id':66,'pid':28,'name':'德岛县','level':2},
    {'id':67,'pid':28,'name':'香川县','level':2},
    {'id':68,'pid':28,'name':'爱媛县','level':2},
    {'id':69,'pid':28,'name':'高知县','level':2},
];
// 九州地区
citys[29] = [
    {'id':70,'pid':29,'name':'福冈县','level':2},
    {'id':71,'pid':29,'name':'佐贺县','level':2},
    {'id':72,'pid':29,'name':'长崎县','level':2},
    {'id':73,'pid':29,'name':'熊本县','level':2},
    {'id':74,'pid':29,'name':'大分县','level':2},
    {'id':75,'pid':29,'name':'宫崎县','level':2},
    {'id':76,'pid':29,'name':'鹿儿岛','level':2},

];
// 冲绳地区
citys[30] = [
    {'id':77,'pid':30,'name':'冲绳','level':2},
];
// 关东地区
citys[100] = [
    {'id':31,'pid':100,'name':'东京都','level':2},
    {'id':32,'pid':100,'name':'神奈川','level':2},
    {'id':33,'pid':100,'name':'千叶县','level':2},
    {'id':34,'pid':100,'name':'群马县','level':2},
    {'id':35,'pid':100,'name':'栃木县','level':2},
    {'id':36,'pid':100,'name':'茨城县','level':2},
    {'id':37,'pid':100,'name':'埼玉县','level':2},
];
// 关西地区
citys[101] = [
    {'id':38,'pid':101,'name':'京都府','level':2},
    {'id':39,'pid':101,'name':'大阪府','level':2},
    {'id':40,'pid':101,'name':'兵库县','level':2},
    {'id':41,'pid':101,'name':'滋贺县','level':2},
    {'id':42,'pid':101,'name':'奈良县','level':2},
    {'id':43,'pid':101,'name':'和歌山','level':2},
];
// 中部地区
citys[102] = [
    {'id':44,'pid':102,'name':'爱知县','level':2},
    {'id':45,'pid':102,'name':'三重县','level':2},
    {'id':46,'pid':102,'name':'岐阜县','level':2},
    {'id':47,'pid':102,'name':'静冈县','level':2},
    {'id':48,'pid':102,'name':'山梨县','level':2},
    {'id':49,'pid':102,'name':'长野县','level':2},

];
// 北陆地区
citys[103] = [
    {'id':50,'pid':103,'name':'新泻县','level':2},
    {'id':51,'pid':103,'name':'石川县','level':2},
    {'id':52,'pid':103,'name':'福井县','level':2},
    {'id':53,'pid':103,'name':'富山县','level':2},
];

var lineCitys = [].concat.apply([],citys).filter(function(val){
                                        return !(!val || val === "");
                                    });

/**
 * @ 地区数据
 * @returns {[null,null,null,null,null,null,null,null,null,null]}
 */
function fetchJapanProvincesData()
{
    return provinces;
}

/**
 * @ 根据地区ID获取城市数据
 * @param cityid
 * @returns {Array}
 */
function fetchJapanCityData( cityid )
{
    return (cityid == null) ? citys : citys[cityid];
}

/**
 * @ 是否是地区ID
 * @param nowid
 * @returns {boolean}
 */
function isProvinceByNowid(currentid)
{
    if( currentid == null || !provinces[currentid] )
        return false;
    return true;
}

/**
 * @ 根据城市ID 获取地区ID
 * @param pid
 * @returns {boolean}
 */
function getProvinceidByCityid(currentid)
{
    if( !currentid || isProvinceByNowid(currentid) )
        return false;
    var pid = false;
    $.each( lineCitys, function(k,item){
        if( item.id == currentid )
            pid = item.pid;
    } );
    return pid;
}