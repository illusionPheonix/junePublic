
<?php
		// 连接数据库
		include 'connect.php';
		// 获取前端参数
		$username = $_POST['username'];
		$pwd = $_POST['pwd'];
		$sql="select * from userinfo where username='$username' && pwd='$pwd'";
		// 执行sql
		$data = mysqli_query($conn,$sql);
		// 获取数据
		// $row=mysqli_num_rows($data);
		// 获取用户信息
		$row=mysqli_fetch_assoc($data);
		// 获取id值
		$id=$row['id'];
		// 获取昵称
		$nickname=$row['nickname'];
		// 设置时区
		date_default_timezone_set('Asia/Shanghai');
		$lastlogintime=date("Y-m-d H:i:s");
		// 写存放登录时间的sql
		$sql1="UPDATE userinfo SET lastlogintime='$lastlogintime' WHERE id=$id";
		// 执行sql
		$data1 = mysqli_query($conn,$sql1);
		// 判断结果
		if($row){
			// 登录成功
			// 设置session的值
			$_SESSION['username'] = $username;
			$_SESSION['id'] = $id;
			$_SESSION['nickname'] = $nickname;
			header("location:http://127.0.0.1:3000");
		}else{
			// 登录失败
			header('location:http://127.0.0.1:3000/login.html?error=error');
		}


?>