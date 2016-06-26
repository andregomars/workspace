<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
</head>
<body>
<div class="container">

<div class="row">
    <h1>Welcome <u><?php echo $_COOKIE['uid']; ?></u> !</h1>
</div>
<div>
  <a href="about.aspx" class="btn btn-primary btn-lg" role="button">Learn More</a>
  <a href="login.php" class="btn btn-lg" role="button">Log out</a>
</div>
</div>

</body>
</html>
