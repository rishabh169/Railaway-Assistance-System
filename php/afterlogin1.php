<?php

session_start();
if(!isset($_SESSION['username']))
{
  header('location:signin.php');
}

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="../css/main.css">

	<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

<link href="https://fonts.googleapis.com/css?family=Sedgwick+Ave+Display" rel="stylesheet">

</head>


<body >
	<div >
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top ">
      
      <div class="container">

        <a href="afterlogin1.php" class="navbar-brand text-light font-weight-bold ">Confirmo.</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target= "#collapsenavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

         <div class="collapse navbar-collapse text-center" id="collapsenavbar">

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="afterlogin1.php" class="nav-link"> HOME </a>
            </li>

            <li class="nav-item">
              <a href="contactus.php" class="nav-link"> CONTACT US </a>
            </li>
            <li class="nav-item">
              <a href="logout.php" class="nav-link"> LogOut </a>
            </li>


            
          </ul>  
           
         </div>

        
      </div>

    </nav>
		<div class="parallex1 text-center text-dark ">
			<h1>Welcome <?php echo $_SESSION['username']; ?> to Confirmo.</h1>
			<p>Book Your ticket easily</p>
		</div>

		<!-- <h1 id="main_head">You can easily find train live status</h1> -->

		<div class="parallex2 text-light text-center">
			<h1>Track train on single click.</h1>
			<a href="livestatus.php" class="btn btn-primary" id = "mainsubmit" style="padding: 10px; padding: 10px 30px;margin-top: 40px;">Track Your Train</a>
		</div>

		<div class="parallex3 text-center text-white">
			<h1>PNR Status</h1>
			<p>Get live ticket</p>
			<a href="pnrstatus.php" class="btn btn-primary" id = "mainsubmit" style="padding: 10px; padding: 10px 30px;margin-top: 40px;">Get Status</a>
		</div>


		<div class="parallex3 text-center text-white">
			<h1>Seat Availablitly</h1>
			<p>GET LIVE AVAILABILITY</p>
			<a href="tracktrain.php" class="btn btn-primary" id = "mainsubmit" style="padding: 10px; padding: 10px 30px;margin-top: 40px;">Get Seat</a>
		</div>

<div class="parallex3 text-center text-white">
			<h1>Train Information</h1>
			<p>Schedule and Coach Position</p>
			<a href="train_info.php" class="btn btn-primary" id = "mainsubmit" style="padding: 10px; padding: 10px 30px;margin-top: 40px;">Get Information</a>
		</div>

		<div class="parallex3 text-center text-white">
			<h1>Know Your Upcoming Trains </h1>
			<p>Now you can easily know your upcoming trains on your stations</p>
			<a href="arrivals.php" class="btn btn-primary" id = "mainsubmit" style="padding: 10px; padding: 10px 30px;margin-top: 40px;">Get Trains</a>
		</div>

		<div class="parallex3 text-center text-white">
			<h1>Cancelled Trains </h1>
			<p>Check canelled train before going</p>
			<a href="cancelled.php" class="btn btn-primary" id = "mainsubmit" style="padding: 10px; padding: 10px 30px;margin-top: 40px;">Get Trains</a>
		</div>

		<div class="parallex3 text-center text-white">
			<h1>Rescheduled Trains </h1>
			<p>Check your train before going</p>
			<a href="rescheduled.php" class="btn btn-primary" id = "mainsubmit" style="padding: 10px; padding: 10px 30px;margin-top: 40px;">Get Trains</a>
		</div>

		<div class="parallex3 text-center text-white">
			<h1> Fare Enquiry </h1>
			<p>Check Your fare easily</p>
			<a href="fare.php" class="btn btn-primary" id = "mainsubmit" style="padding: 10px; padding: 10px 30px;margin-top: 40px;">Find Fare</a>
		</div>


			<div class="parallex3 text-center text-white">
			<h1>No More Waiting Ticket</h1>
			<p>Our algorithm make your ticket CONFIRM</p>
		</div>

		<div class="parallex2 text-light text-center">
			<h1>Welcome to your own rail Assistance</h1>
		</div>
		
	</div>


</body>
</html>