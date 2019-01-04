<?php

$customer_name = $_POST['customerName'];
$company_name = $_POST['companyName'];
$province = $_POST['province'];
$city = $_POST['city'];
$phone = $_POST['phone'];

$coon = mysqli_connect("sql.v172.vhostgo.com", "yousouyun","cptefzmb");
mysqli_select_db($coon, "yousouyun");
mysqli_set_charset($coon, "utf8");
$sql = "insert into yake_customer_info (customer_name, company_name, province, city, phone) values ('$customer_name','$company_name','$province','$city','$phone')";
$r = mysqli_query($coon, $sql);
if($r){
    $res = array('code' => 1, 'description' => "操作成功");
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
}else{
    $res = array('code' => 0, 'description' => "操作失败");
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
}


?>