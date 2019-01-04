<?php


/**
 * 导出excel
 *@param $data     要导出的数据，是一个二维数组
 *@param $title    导出excel表格里的标题，是一个数组
 *@param $filename 下载的文件名
 *@examlpe
 */



$title = array('客户电话','客户电话','客户公司','联系时间','省','市');
$coon = mysqli_connect("sql.v172.vhostgo.com", "yousouyun","cptefzmb");
mysqli_select_db($coon, "yousouyun");
mysqli_set_charset($coon, "utf8");
$array = array();
$sql = "select customer_name,phone,company_name,create_time,province,city from yake_customer_info";
$r = mysqli_query($coon, $sql);
while ($obj = mysqli_fetch_object($r)) {
    $array[] = $obj;
}

mysqli_close($coon);

excel($array,$title,'客户资料');
function excel($data=array(),$title=array(),$filename='report'){
    header("Content-type:application/octet-stream");
    header("Accept-Ranges:bytes");
    header("Content-type:application/vnd.ms-excel");
    header("Content-Disposition:attachment;filename=".$filename.".xls");
    header("Pragma: no-cache");
    header("Expires: 0");
    $re="<table border='1'><thead>";
    if (!empty($title)){  //先循环出标题放入html的table表里
        $re.="<tr>";
        foreach ($title as $k => $v) {
            $re.="<th style='background-color:rgb(189,215,238);'>".iconv("UTF-8", "GBK//IGNORE",$v)."</th>";
        }
    }
    $re.="</tr></thead><tbody>";
    if (!empty($data)){  //循环出数据放入html的table表里
        foreach($data as $key=>$val){
            $re.="<tr>";
            foreach ($val as $ck => $cv) {
                $re.="<td>".iconv("UTF-8", "GBK//IGNORE", $cv)."</td>";
            }
            $re.="</tr>";
        }
        $re.="</tbody></table>";
    }
    echo $re;
}

?>