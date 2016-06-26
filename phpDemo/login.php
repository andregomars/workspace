<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
</head>
<body>

<?php 
if (isset($_COOKIE['uid'])) {
	setcookie('uid','');
}
?>

<div class="container">
<div class="row">
	<div class="col-md-12"><h1>Member Login</h1></div>
</div>
<form name="myform" class="form-inline" action="auth.php" method="POST">
  <div class="form-group">
    <label class="sr-only" for="name">Name</label>
    <input type="text" class="form-control" id="uid" name="uid" placeholder="Name">
  </div>
  <div class="form-group">
    <label class="sr-only" for="password">Password</label>
    <input type="password" class="form-control" id="pwd" name="pwd" placeholder="Password">
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Remember me
    </label>
  </div>
  <input type="submit" class="btn btn-default" value="Log in"></input>
</form>
</div>

</body>
</html>
