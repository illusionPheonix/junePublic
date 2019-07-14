<?php
	include 'connect.php';
	
    // 获取参数
	$realname=$_POST['realname'];
	$sex=$_POST['sex'];
	$idtype=$_POST['idtype'];
	$idnum=$_POST['idnum'];
	$birthdate=$_POST['birthdate'];
	$address=$_POST['address'];

	// 获取id
	$id=$_SESSION['id'];
	// 写sql
	$sql="UPDATE userinfo SET realname='$realname',sex='$sex',idnum='$idnum',idtype='$idtype',birthdate='$birthdate',address='$address' WHERE id=$id";
	// 执行sql
	$data = mysqli_query($conn,$sql);
	// 判断结果
	if($data){
		header('location:http://127.0.0.1:3000/#/personal');
	}else{
		header('location:http://127.0.0.1:3000/#/personal/realAuth');
	
	}

?>
