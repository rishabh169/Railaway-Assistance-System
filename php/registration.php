<?php
echo'<script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.2.4/email.min.js"></script>
<script type="text/javascript">
   (function(){
      emailjs.init("user_MerO83apTZsgN0xTQrSJJ");
   })();
</script>';

session_start();


$con = mysqli_connect('localhost','root','root','railassistance');
if ($con) {
	
	echo "connection succesful";
}
else{
	echo "no connection";
}


$name = $_POST['user'];
$pass = $_POST['pass'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];

$q =" select email from signup where email = '$email' ";

$result = mysqli_query($con,$q);

$num = 	mysqli_num_rows($result);

if($num==1){
	echo "duplicate data";
}
else
{
	echo("<script type='text/javascript'> var em = '".$email."'; </script>");
	echo("<script type='text/javascript'> var fn = '".$name."'; </script>");

	$otp1=rand(111111,999999);
	echo("<script type='text/javascript'> var a = '".$otp1."'; </script>");
	echo '<script type="text/javascript">
					emailjs.send("gmail", "template_PJ4OgDPd", {"to_email":em ,"from_name":"CONFIRMO TEAM","to_name":fn,"message_html":a});
					</script>';

	$qry = "INSERT INTO otp(num) VALUES ('$otp1')";
	mysqli_query($con,$qry);
	$qy = "insert into signup(userid,password,mobile,email) values ('$name','$pass','$mobile','$email')" ;
	mysqli_query($con,$qy); 
	echo '<script type="text/javascript"> alert("Please check your email and confirm the OTP."); window.location.href = "confirm_OTP.php";</script>';	
	
}

?>
