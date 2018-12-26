<?php

$artId = $_POST["artId"];
$coon = mysqli_connect("sql.v172.vhostgo.com", "yousouyun","cptefzmb");
mysqli_select_db($coon, "yousouyun");
mysqli_set_charset($coon, "utf8");
$sql= "delete from yake_art_info where art_id = '$artId'";
$r = mysqli_query($coon, $sql);
if($r){
    $res = array('code' => 1, 'description' => '删除成功');
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
}else{
    $res = array('code' => 0, 'description' => "操作失败");
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
}


?>