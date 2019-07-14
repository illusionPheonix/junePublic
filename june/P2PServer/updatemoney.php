<?php
	include 'connect.php';
	include 'cross.php';
	header('Content-Type: text/html;charset=utf-8'); 

	// 获取前端参数
	$investmoney=$_GET['investmoney'];
	$borrowid=$_GET['borrowid'];
	$id=$_SESSION['id'];
	// 更新用户余额
	$sql = "update userinfo set totalmoney=totalmoney-$investmoney,usablemoney=totalmoney where id=$id";
	$data = mysqli_query($conn,$sql);
	if($data){
		// 更新借款信息
		$sql = "update borrowinfo set hasmoney=hasmoney+$investmoney where id=$borrowid";
		$data = mysqli_query($conn,$sql);
		if($data){
			echo 'ok';
		}else{
			echo '10001';
		}


	}




?>