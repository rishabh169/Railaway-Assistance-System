<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="../css/signup.css">

	<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

</head>


<body>

	<div class="fulldiv container-fluid">

		<h1 class="text-dark text-center" style="font-size: 100px;">Sign In</h1>

		<div class="  signupdiv  m-auto ">

			<form onsubmit="return validation()" action="valid1.php" method="post"  class=" container bg-light-grey "> 
				<div class=" form-group  ">
					<label class="text-light font-weight-bold " style="font-size: 20px;">User Name: </label>
					<input type="text" name="user" class="form-control  text-gray-dark" id= "user" > 
					<span id="userspan" class="text-danger font-weight-bold"></span>
				</div>
				
				<div class="form-group">
					<label class="text-light font-weight-bold" style="font-size: 20px;">Password</label>
					<input type="Password" name="pass" class="form-control text-gray-dark" id= "pass"> 
					<span id="passspan" class="text-danger font-weight-bold"></span>
				</div>
				
				
				

				<input type="submit" name= "submit" value="submit" class="btn btn-primary ">
 
			</form>
		</div>
	</div>

<script src="../js/signin1.js" type="text/javascript" ></script>
</body>
</html>