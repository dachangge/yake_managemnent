<?php


$passWord = $_POST['passWord'];
$loginName = $_POST['loginName'];

$coon = mysqli_connect("sql.v172.vhostgo.com", "yousouyun","cptefzmb");
mysqli_select_db($coon, "yousouyun");
mysqli_set_charset($coon, "utf8");
$sql = "select * from yake_user_info where pass_word = '$passWord' and login_name = '${loginName}'";
$r = mysqli_query($coon, $sql);
if ($r && $r->num_rows > 0) {
    $res = array('code' => 1, 'description' => "登陆成功");
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
}else{
    $res = array('code' => 0, 'description' => "账号或密码错误");
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
}

?>