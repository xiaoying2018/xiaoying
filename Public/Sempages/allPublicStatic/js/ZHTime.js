/**
 * @city:展会城市、
 * @year:年份、
 * @month:举办月份、
 * @day:举办日期、
 * @address:举办地点 eq:'南昌大学'
 * @type Array
 */


var ZhanHuiTimeObj = [
    {   city:'北京',      year:2018,  month:3,    day:10,     address:''},
    {   city:'南京',      year:2018,  month:3,    day:10,     address:''},
    {   city:'上海',      year:2018,  month:3,    day:11,     address:''},
    {   city:'天津',      year:2018,  month:3,    day:11,     address:''},
    {   city:'广州',      year:2018,  month:3,    day:17,     address:''},
    {   city:'深圳',      year:2018,  month:3,    day:18,     address:''},
    {   city:'合肥',      year:2018,  month:3,    day:24,     address:''},
    {   city:'太原',      year:2018,  month:3,    day:24,     address:''},
    {   city:'东京',      year:2018,  month:3,    day:24,     address:''},
    {   city:'武汉',      year:2018,  month:3,    day:25,     address:''},
    {   city:'沈阳',      year:2018,  month:3,    day:31,     address:''},
    // {   city:'其他城市',   year:2018,  month:3,    day:31,      address:''},

    {   city:'大连',      year:2018,  month:4,    day:1,      address:''},
    {   city:'杭州',      year:2018,  month:4,    day:7,      address:''},
    {   city:'宁波',      year:2018,  month:4,    day:8,      address:''},
    {   city:'西安',      year:2018,  month:4,    day:14,     address:''},
    {   city:'京都',      year:2018,  month:4,    day:14,     address:''},
    {   city:'昆明',      year:2018,  month:4,    day:14,     address:''},
    {   city:'郑州',      year:2018,  month:4,    day:15,     address:''},
    {   city:'贵阳',      year:2018,  month:4,    day:15,     address:''},
    {   city:'南通',      year:2018,  month:4,    day:21,     address:''},
    {   city:'镇江',      year:2018,  month:4,    day:22,     address:''},
    {   city:'长沙',      year:2018,  month:4,    day:28,     address:''},
    {   city:'南昌',      year:2018,  month:4,    day:29,     address:''},

    {   city:'青岛',      year:2018,  month:5,    day:5,      address:''},
    {   city:'兰州',      year:2018,  month:5,    day:5,      address:''},
    {   city:'银川',      year:2018,  month:5,    day:6,      address:''},
    {   city:'济南',      year:2018,  month:5,    day:6,      address:''},
    {   city:'佛山',      year:2018,  month:5,    day:12,     address:''},
    {   city:'重庆',      year:2018,  month:5,    day:12,     address:''},
    {   city:'成都',      year:2018,  month:5,    day:13,     address:''},
    {   city:'大阪',      year:2018,  month:5,    day:13,     address:''},
    {   city:'东莞',      year:2018,  month:5,    day:13,     address:''},
    {   city:'哈尔滨',    year:2018,  month:5,    day:19,      address:''},
    {   city:'温州',      year:2018,  month:5,    day:19,     address:''},
    {   city:'长春',      year:2018,  month:5,    day:20,     address:''},
    {   city:'台州',      year:2018,  month:5,    day:20,     address:''},

    {   city:'北京',      year:2018,  month:6,    day:3,      address:''},
    {   city:'广州',      year:2018,  month:6,    day:16,     address:''},
    {   city:'石家庄',    year:2018,  month:6,     day:16,     address:''},
    {   city:'嘉兴',      year:2018,  month:6,    day:16,     address:''},
    {   city:'深圳',      year:2018,  month:6,    day:17,     address:''},
    {   city:'上海',      year:2018,  month:6,    day:17,     address:''},
    {   city:'呼和浩特',  year:2018,  month:6,     day:17,     address:''},
    {   city:'洛阳',      year:2018,  month:6,    day:30,     address:''},

    {   city:'包头',      year:2018,  month:7,    day:1,      address:''},
    {   city:'苏州',      year:2018,  month:7,    day:7,      address:''},
    {   city:'无锡',      year:2018,  month:7,    day:8,      address:''},
    {   city:'扬州',      year:2018,  month:7,    day:21,     address:''},
    {   city:'名古屋',    year:2018,  month:7,     day:21,     address:''},
    {   city:'威海',      year:2018,  month:7,    day:22,     address:''},
    {   city:'福州',      year:2018,  month:7,    day:28,     address:''},
    {   city:'厦门',      year:2018,  month:7,    day:29,     address:''},

    {   city:'合肥',      year:2018,  month:8,    day:4,      address:''},
    {   city:'长沙',      year:2018,  month:8,    day:4,      address:''},
    {   city:'南京',      year:2018,  month:8,    day:5,      address:''},
    {   city:'泉州',      year:2018,  month:8,    day:18,     address:''},
    {   city:'上虞',      year:2018,  month:8,    day:19,     address:''},

    {   city:'重庆',      year:2018,  month:9,    day:1,      address:''},
    {   city:'沈阳',      year:2018,  month:9,    day:1,      address:''},
    {   city:'成都',      year:2018,  month:9,    day:2,      address:''},
    {   city:'大连',      year:2018,  month:9,    day:2,      address:''},
    {   city:'北京',      year:2018,  month:9,    day:8,      address:''},
    {   city:'珠海',      year:2018,  month:9,    day:8,      address:''},
    {   city:'杭州',      year:2018,  month:9,    day:8,      address:''},
    {   city:'天津',      year:2018,  month:9,    day:9,      address:''},
    {   city:'上海',      year:2018,  month:9,    day:9,      address:''},
    {   city:'南宁',      year:2018,  month:9,    day:22,     address:''},
    {   city:'海口',      year:2018,  month:9,    day:23,     address:''},

    {   city:'太原',      year:2018,  month:10,   day:7,      address:''},
    {   city:'武汉',      year:2018,  month:10,   day:13,     address:''},
    {   city:'青岛',      year:2018,  month:10,   day:13,     address:''},
    {   city:'温州',      year:2018,  month:10,   day:13,     address:''},
    {   city:'济南',      year:2018,  month:10,   day:14,     address:''},
    {   city:'长春',      year:2018,  month:10,   day:27,     address:''},
    {   city:'广州',      year:2018,  month:10,   day:20,     address:''},
    {   city:'桂林',      year:2018,  month:10,   day:20,     address:''},
    {   city:'深圳',      year:2018,  month:10,   day:21,     address:''},
    {   city:'乌鲁木齐',  year:2018,  month:10,    day:21,      address:''},
    {   city:'哈尔滨',    year:2018,  month:10,   day:27,      address:''},

    {   city:'西安',      year:2018,  month:11,   day:10,     address:''},
    {   city:'郑州',      year:2018,  month:11,   day:11,     address:''},
    {   city:'常州',      year:2018,  month:11,   day:17,     address:''},
    {   city:'上海',      year:2018,  month:11,   day:18,     address:''},

    {   city:'保定',      year:2018,  month:12,   day:2,      address:''},
    {   city:'北京',      year:2018,  month:12,   day:9,      address:''},
];


/**
 * @ 二维
 * @type {Array}
 */
var newTimeTable = [];
$.each( ZhanHuiTimeObj,function(k,item)
{
    var m = (item.month >= 10) ? item.month : '0'+item.month;
    var d = (item.day >= 10) ? item.day : '0'+item.day;
    if( !(newTimeTable[item.city] instanceof Array) )
        newTimeTable[item.city] = [];
    newTimeTable[item.city].push(item.year+'-'+m+'-'+d);
}  );
console.log(newTimeTable);