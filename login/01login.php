<?php
//创建返回的对象信息

class returnObj{
    public $status;
    public $msg;

}

//接收数据
    $uName = $_POST["uName"];
    $pwd = $_POST["pwd"];

    //创建实例对象

    $obj = new returnObj();

    if($uName=="admin"&&$pwd=="888"){
        //设置返回的信息
        $obj->status = "1";
        $obj->msg = "登录成功";
    }else{
        $obj->status = "0";
        $obj->msg = "登录失败";
    }

    //返回
    echo json_encode($obj);



?>