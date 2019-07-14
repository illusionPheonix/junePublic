<?php
// 引入跨域
include 'cross.php';

	if(count($_SESSION)!=0){
		echo $_SESSION['username'];
		// echo 'haha';
	}else{
		echo '';
	}
	// echo $_SESSION['username'];
?>