<?php
	include 'connect.php';

	 // 获取参数
	$userid=$_SESSION['nickname'];
	$borrowmoney=$_POST['borrowmoney'];
	$interest=$_POST['interest'];
	$minbid=$_POST['minbid'];
	$days=$_POST['days'];
	$title=$_POST['title'];
	$info=$_POST['info'];
	$borrowtime=$_POST['borrowtime'];
	$repaytime=$_POST['repaytime'];

	// 写查询
	$sql = "insert into borrowinfo(userid,borrowmoney,interest,minbid,days,title,info,borrowtime,repaytime) values ('$userid','$borrowmoney','$interest','$minbid','$days','$title','$info','$borrowtime','$repaytime')";
	// 执行sql
	$data = mysqli_query($conn,$sql);
	// 判断结果
		if($data){
			// 申请成功
			header('location:http://127.0.0.1:3000/#/invest');
		}

?>