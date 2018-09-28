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

        // 院校库
        'school' => 'School/Index/index',     // 院校库


        /* Mobile */
        'm' => 'Mobile/Index/index', // 手机主页

    ],
];