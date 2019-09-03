<?php
$conn = mysqli_connect('localhost','root','root','railassistance');
if(!$conn)
{
	echo "error connecting to database";
}
if(isset($_POST['Submit']))
{
$otp2 = $_POST['otp'];
$qry1 = "select num from otp where num='$otp2'";
$result=mysqli_query($conn,$qry1);
$fotp = mysqli_fetch_row($result);
if(in_array($otp2,$fotp)){
		
		mysqli_query($conn,'delete from otp');
		echo '<script type="text/javascript"> alert("Thank you for registration. Login to your account now."); window.location.href = "signin.php";</script>';
	}
	else{
		mysqli_query($conn,' delete from user order by id desc limit 1;');
		echo '<script type="text/javascript"> alert("Wrong OTP entered! Can not register!"); window.location.href = "confirm_OTP.php";</script>';
	}
}
?>