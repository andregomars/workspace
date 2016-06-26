<?php
 $name = $_POST['uid'];
// echo 'name is '.var_dump($name);
// print_r($_POST);
if($name == 'andre') {
	header("location:home.php");
	setcookie("uid",$name);
}
else {
	echo "<h1>You are denied.</h1>";
}
?>
