<%@ Page Language="C#" %>

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
</head>
<body>
<div class="container">

<div class="row">
    <h1>About <u><%=Request.Cookies["uid"].Value %></u> !</h1>
</div>
<div>
  <a href="home.php" class="btn btn-primary btn-lg" role="button">Home</a>
  <a href="login.php" class="btn btn-lg" role="button">Log out</a>
</div>
</div>

</body>
</html>
