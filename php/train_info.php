<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>
    Train Information
  </title>

  <link rel="stylesheet" type="text/css" href="../css/train_info.css">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>


</head>

<body>
  
<!--   <div class="container">
    <h1 >Explore Information</h1>
    <p id="loaddata1"></p>
      
    <button type="button" class="btn btn-primary" id = "btnclk" onclick="location.href='train_schedule.php'" >Train Schedule</button>
    <button type="button" class="btn btn-primary" id = "btnclk" onclick="location.href='timetable.php'">Train Timetable</button>
    <button type="button" class="btn btn-primary" id = "btnclk" onclick="location.href='train_coach.php'" >Coach Position</button>

</div> -->










<div class="container-fluid">
    <nav class="navbar container-fluid navbar-expand-sm bg-dark navbar-dark fixed-top ">
      
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

  </div>




    <!-- <h1 id="main_head">You can easily find train live status</h1> -->
<div class="container-fluid " style="margin-top:4.5%;">
    <div class="parallex2 text-light text-center bg-primary">
      <h1>Train Schedule</h1>
      <a href="train_schedule.php" class="btn btn-secondary" id = "mainsubmit" style="padding: 10px; padding: 10px 30px;margin-top: 40px;">Get Schedule</a>
    </div>

    
     <div class="parallex2 text-light text-center bg-secondary">
      <h1>Train Time Table.</h1>
      <a href="timetable.php" class="btn btn-primary" id = "mainsubmit" style="padding: 10px; padding: 10px 30px;margin-top: 40px;">See Timetable</a>
    </div>

     <div class="parallex2 text-light text-center bg-primary">
      <h1>Coach Info </h1>
      <a href="train_coach.php" class="btn btn-secondary" id = "mainsubmit" style="padding: 10px; padding: 10px 30px;margin-top: 40px;">See Info</a>
    </div>
    
  </div>
</div>
</body>
</html>