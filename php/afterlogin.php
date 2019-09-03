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
  <title>Railway Assitance</title>
  <link rel="stylesheet" type="text/css" href="../css/afterlog.css">
  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

<meta name="viewport" content="width=device-width, initial-scale=1">

<meta charset="utf-8">

</head>
<body>

  <div class="bgimg container-fluid">

    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      
      <div class="container">

        <a href="afterlogin.php" class="navbar-brand text-light font-weight-bold">RAILWAY ASSISTANCE</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target= "#collapsenavbar">
          
        </button>

         <div class="collapse navbar-collapse text-center" id="collapsenavbar">

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="afterlogin.php" class="nav-link"> HOME </a>
            </li>

            <li class="nav-item">
              <a href="contactus.php" class="nav-link"> CONTACT US </a>
            </li>
            <li class="nav-item">
              <a href="logout.php" class="nav-link"> logout </a>
            </li>

            
          </ul>  
           
         </div>

        
      </div>

    </nav>

    <div class="container trainsearch">
      <h1 class="text-center font-weight-bold text-dark ">Welcome <?php echo $_SESSION['username']; ?> our to RAILWAY ASSISTANCE</h1>


          <div class="container-fluid trainform">
          <form class="form-inline" >
             <label for="email"></label>
            <input type="email" class="form-control" id="email" placeholder="Enter source stn code"  name="email">
             <label for="email"></label>
           <input type="email" class="form-control" id="email" placeholder="Enter source stn code" name="email">
             <label for="email"></label>
            <input type="date" class="form-control" id="email" placeholder="Enter date (dd/mm/yyyy)" name="email">
  

    
            <button type="submit" class="btn btn-primary" id = "mainsubmit">Searh Trains</button>
          </form>
        </div>



    </div>
</div>


<div class="parallex1 text-center text-dark ">
      <h1>Welcome to Confirmo.</h1>
      <p>Book Your ticket easily</p>
</div>









</body>
</html>