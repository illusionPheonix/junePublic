
<?php

		include 'connect.php';
		// 获取前端参数
		$username = $_POST['username'];
		$pwd = $_POST['pwd'];
		$phone = $_POST['phone'];
		// 获取时间
		// 设置时区
		date_default_timezone_set('Asia/Shanghai');
		$regtime=date("Y-m-d H:i:s");
		$sql="insert into userinfo(username,pwd,phone,regtime) values('$username','$pwd','$phone','$regtime')";
		// 执行sql
		$data = mysqli_query($conn,$sql);
		// 判断结果
		if($data){
			// 注册成功
			header('location:http://127.0.0.1:3000/login.html');
		}else{
			// 登录失败
			header('location:http://127.0.0.1:3000/register.html?iserror=error');
		}


?>