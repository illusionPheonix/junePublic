<?php
	include 'connect.php';
	
    // 获取参数
	$nickname=$_POST['nickname'];
	$education=$_POST['education'];
	$income=$_POST['income'];
	$contactaddress=$_POST['contactaddress'];

	// 获取id
	$id=$_SESSION['id'];
	// 写sql
	$sql="UPDATE userinfo SET nickname='$nickname',education='$education',income='$income',contactaddress='$contactaddress' WHERE id=$id";
	echo $sql;
	// 执行sql
	$data = mysqli_query($conn,$sql);
	// 判断结果
	if($data){
		header('location:http://127.0.0.1:3000/#/personal');
	}else{
		header('location:http://127.0.0.1:3000/#/personal/userinfo');
	
	}

?>
