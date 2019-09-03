<?php
session_start();


$con = mysqli_connect('localhost','root','root','railassistance');
if ($con) {
	# code...
	echo "connection succesful";
}
else{
	echo "no connection";
}

mysqli_select_db($con,'railassistance');

$name = $_POST['user'];
$pass = $_POST['pass'];

$q =" select * from signup where userid = '$name' && password ='$pass' ";

$result = mysqli_query($con,$q);

$num = 	mysqli_num_rows($result);

if($num==1){
	$_SESSION['username'] = $name;
	header('location:afterlogin1.php');
}
else
{
	header('location:signin.php');
}

?>
