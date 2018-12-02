<?php

  $file = $_FILES['file'];//得到传输的数据

  //得到文件名称
  $name = $file['name'];
  $type = strtolower(substr($name,strrpos($name,'.')+1)); //得到文件类型，并且都转化成小写
  $allow_type = array('jpg','jpeg','gif','png'); //定义允许上传的类型
  //判断文件类型是否被允许上传
  if(!in_array($type, $allow_type)){
      //如果不被允许，则直接停止程序运行
      return ;
  }

  $upload_path = "../images/"; //上传文件的存放路径
  //开始移动文件到相应的文件夹
  if(move_uploaded_file($file['tmp_name'],$upload_path.$file['name'])){
      $res = array('code' => 1, 'result' => "/images/" . $file['name']);
      echo json_encode($res,JSON_UNESCAPED_UNICODE);
  }else{
       $res = array('code' => 0, 'result' => "图片提交失败");
      echo json_encode($res,JSON_UNESCAPED_UNICODE);
  }

  ?>