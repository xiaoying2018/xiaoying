<?php

// +----------------------------------------------------------------------
// | 路由配置 ： 规则路由、静态路由
// +----------------------------------------------------------------------

return [
    'URL_ROUTE_RULES' => [
        // Home


        // 定时任务
        'crontab/:type/[:time\d]' => 'Crontab/:1/index',
    ],


    'URL_MAP_RULES' => [

        /* PC */
        '/' => 'Home/Index/index',     // 主页

        'school' => 'School/Index/index',// 院校库

        'studyingabroad' => 'Studying/Index/index',//留学申请
        'studyingabroad/result' => 'Studying/Index/result',//留学申请 结果页

        'news' => 'Zixun/Index/index',//资讯列表
        'news/detail' => 'Zixun/Index/detail',//资讯详情

        'consultant' => 'Consultant/Index/index',//顾问认证

        'cases' => 'Cases/Index/index',// 主页 案例
        'cases/thanks' => 'Cases/Index/thanks',// 主页 案例
        'cases/admission' => 'Cases/Index/admission',// 主页 案例
        'cases/detail' => 'Cases/Index/casedetails',// 主页 案例

        'school/jpyy' => 'School/Index/jpyy',//日本语言学校
        'school/jp' => 'School/Index/jp',//日本大学
        'school/kr' => 'School/Index/kr',//韩国大学
        'school/sg' => 'School/Index/sg',//新加坡大学
        'school/jp/detail' => 'School/Index/JpDetail',//学校详情
        'advantage' => 'Advantage/Index/index',
        'onlinemall' => 'OnlineMall/Index/index',
        'api/getgoods' => 'OnlineMall/Index/getProduct',

        'aboutus' => 'AboutUs/Index/index', //关于我们
        'fee' => 'Fee/Index/index', //学费支付
























        // PC 推广页 & PC 单页面
        'yuyanms' => 'Sem/Index/yuyanms',// 语言面试
        'yuyanzl' => 'Sem/Index/yuyanzl',// 语言资料
        'yuyan' => 'Sem/Index/yuyan',// 语言
        'gaozhong' => 'Sem/Index/gaozhong',// 高中
        'xiushi' => 'Sem/Index/xiushi',// 修士
        'duyan' => 'Sem/Index/duyan',// 读研
        'eju' => 'Sem/Index/eju',// EJU
        'g30' => 'Sem/Index/g30',// G30
        'liuxuezhan' => 'Sem/Index/liuxuezhan',// 留学展
        'liuxuezhanreservation' => 'Sem/Index/liuxuezhanreservation',// 留学展报名页
        'ribenliuxue' => 'Sem/Index/ribenliuxue',// 日本留学
        'feiyong' => 'Sem/Index/feiyong',// 费用























        /* Mobile */
        'm' => 'Mobile/Index/index',// 手机主页


    ],
];