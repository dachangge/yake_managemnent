<?php

$art_id = $_POST["art_id"];
$art_type = $_POST['art_type'];
$art_title = $_POST['art_title'];
$art_desc = $_POST['art_desc'];
$art_pic = $_POST['art_pic'];
$art_html = $_POST['art_html'];

$coon = mysqli_connect("sql.v172.vhostgo.com", "yousouyun","cptefzmb");
mysqli_select_db($coon, "yousouyun");
mysqli_set_charset($coon, "utf8");
$sql= "update yake_art_info set art_type = '$art_type',art_title = '$art_title', art_desc = '$art_desc', art_pic = '$art_pic', art_html = '$art_html'where art_id = '$art_id' ";
echo $sql;
$r = mysqli_query($coon, $sql);

if(mysqli_affected_rows($r)){
    $res = array('code' => 1, 'result' => "更新成功");
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
}else{
    $res = array('code' => 0, 'description' => "操作失败");
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
}

?>