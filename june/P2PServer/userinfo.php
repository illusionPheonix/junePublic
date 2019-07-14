<?php
	include 'connect.php';
	include 'cross.php';

	// 获取id
	$id=$_SESSION['id'];
	// 写sql
	$sql="select username,realname,idnum,phone from userinfo where id='$id'";
	// 查询
	$data = mysqli_query($conn,$sql);
	// 获取数据
	$row=mysqli_fetch_assoc($data);
	// 判断是否为空
	if($row){
		echo json_encode($row);
	}
?>