<?php
	include 'connect.php';
	include 'cross.php';
	// 获取参数
	$borrowid=$_GET['borrowid'];
	// 写sql
	$sql="select * from borrowinfo where id=$borrowid";
	// 执行sql
	$data = mysqli_query($conn,$sql);
	// 获取数据
	$row=mysqli_fetch_assoc($data);
	if($row){
		echo json_encode($row);
	}
?>