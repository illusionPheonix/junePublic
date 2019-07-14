<?php
	include 'connect.php';
	include 'cross.php';

	// 获取前端参数
	$newrecharge = $_GET['newrecharge'];
	// 获取id
	$id=$_SESSION['id'];
	// 写sql
	$sql = "update userinfo set totalmoney=totalmoney+$newrecharge,usablemoney=totalmoney where id=$id";
	// 执行sql
	$data = mysqli_query($conn,$sql);
	if($data){
		echo 'ok';
	}else{
		echo "10001";
	}
?>