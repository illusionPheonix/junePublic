<?php
	include 'connect.php';
	include 'cross.php';

	// 写sql
	$sql = 'select * from borrowinfo order by id desc';
	// 执行
	$data = mysqli_query($conn,$sql);
	// 新建数组
	$arr=[];
	// 获取所有数据
	while($row=mysqli_fetch_assoc($data)){
		array_push($arr, $row);
	}
	echo json_encode($arr);


?>