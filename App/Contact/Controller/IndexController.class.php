<?php
namespace Contact\Controller;

use Home\Model\CourseBespeakModel;
use Think\Controller;

class IndexController extends Controller
{
    public function index()
    {
        $this->display();
    }
}