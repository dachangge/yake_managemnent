<?php
/**
 * Created by IntelliJ IDEA.
 * User: Administrator
 * Date: 2018/12/25
 * Time: 10:03
 */

$art_type = $_POST['art_type'];
$art_title = $_POST['art_title'];
$art_desc = $_POST['art_desc'];
$art_pic = $_POST['art_pic'];
$art_html = $_POST['art_html'];

$coon = mysqli_connect("sql.v172.vhostgo.com", "yousouyun","cptefzmb");
mysqli_select_db($coon, "yousouyun");
mysqli_set_charset($coon, "utf8");
$sql = "insert into yake_art_info (art_type, art_title, art_desc, art_pic, art_html) values ('$art_type','$art_title','$art_desc','$art_pic','$art_html')";
$r = mysqli_query($coon, $sql);
if($r){
    $res = array('code' => 1, 'description' => "操作成功");
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
}else{
    $res = array('code' => 0, 'description' => "操作失败");
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
}
?>