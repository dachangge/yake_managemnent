<?php

//分页的函数
function news($pageNum = 1, $pageSize = 10 , $artType , $keyWords)
{
    $array = array();
    $coon = mysqli_connect("sql.v172.vhostgo.com", "yousouyun","cptefzmb");
    mysqli_select_db($coon, "yousouyun");
    mysqli_set_charset($coon, "utf8");
    // limit为约束显示多少条信息，后面有两个参数，第一个为从第几个开始，第二个为长度
    $rs = "select art_id,art_title,art_desc,art_type,create_time,update_time from yake_art_info ORDER BY create_time desc limit " . (($pageNum - 1) * $pageSize) . "," . $pageSize;
    if($artType && $keyWords){
        $rs = "select art_id,art_title,art_desc,art_type,create_time,update_time from yake_art_info where art_title like '%".$keyWords."%' and art_type = '$artType' ORDER BY create_time  desc limit " . (($pageNum - 1) * $pageSize) . "," . $pageSize;
    }else if($artType){
        $rs = "select art_id,art_title,art_desc,art_type,create_time,update_time from yake_art_info where art_type = '$artType' ORDER BY create_time  desc limit " . (($pageNum - 1) * $pageSize) . "," . $pageSize;
    }else if($keyWords){
        $rs = "select art_id,art_title,art_desc,art_type,create_time,update_time from yake_art_info where art_title like '%".$keyWords."%' ORDER BY create_time  desc limit " . (($pageNum - 1) * $pageSize) . "," . $pageSize;
    }
    $r = mysqli_query($coon, $rs);
    while ($obj = mysqli_fetch_object($r)) {
        $array[] = $obj;
    }
    mysqli_close($coon);
    return $array;
}

//显示总页数的函数
function allNews($artType, $keyWords)
{

    $coon = mysqli_connect("sql.v172.vhostgo.com", "yousouyun","cptefzmb");
    mysqli_select_db($coon, "yousouyun");
    mysqli_set_charset($coon, "utf8");
    $rs = "select count(*) num from yake_art_info"; //可以显示出总页数
    if($artType && $keyWords){
        $rs = "select count(*) num from yake_art_info where art_title like '%".$keyWords."%' and art_type = '$artType'";
    }else if($artType){
        $rs = "select count(*) num from yake_art_info where art_type = '$artType'";
    }else if($keyWords){
        $rs = "select count(*) num from yake_art_info where art_title like '%".$keyWords."%' ";
    }
    $r = mysqli_query($coon, $rs);
    $obj = mysqli_fetch_object($r);
    mysqli_close($coon);
    return $obj->num;
}

$pageNum = $_POST["pageNum"];
$pageSize = $_POST["pageSize"];
$keyWords = $_POST["keyWords"];
$artType = $_POST["artType"];
$allNum = allNews($artType, $keyWords);
$array = news($pageNum,$pageSize, $artType, $keyWords);
$res = array('code' => 1, 'result' => array('count'=> $allNum,'list' => $array));
echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>