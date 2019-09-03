<?php
session_start();


$con = mysqli_connect('localhost','root','root','railassistance');
if ($con) {
	
	echo "connection succesful";
}
else{
	echo "no connection";
}

mysqli_select_db($con,'railassistance');

$pass = $_POST['pass'];
$email = $_POST['email'];

// $sql = "SELECT userid FROM signup WHERE email='$email' limit 1";
// $result = mysqli_query($con,$sql);
// $value = mysqli_fetch_object($result);

$q =" select * from signup where email = '$email' ";

$result = mysqli_query($con,$q);

$num = 	mysqli_num_rows($result); 
echo $num;
if($num==1){
	// $_SESSION['username'] = $value;
	// echo '<script>alert("Welcome!");</script>';
	header('location:afterlogin1.php');
}
else
{
	header('location:signin.php');
}

?>
