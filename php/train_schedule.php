<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>
    Train Schedule
  </title>
  <link rel="stylesheet" type="text/css" href="../css/train_schedule.css">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>


</head>

<body>
  <div>
        <nav class=" container navbar navbar-expand-sm bg-dark navbar-dark fixed-top ">
      
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



  <div class="container bg-primary text-light live_main ">
    <h1 style="font-size: 50px;" >Schedule Trains</h1>
          <form class="form-inline">

            <input type="text" class="form-control" id="id_train_no" placeholder="Enter Train Number" name="trainNo" autocomplete="off">

    <button type="button" class="btn btn-secondary" id = "btnclk" onclick="schedule()">See Schedule</button>
    
  </form>

</div>

<div class="container font-weight-bold ">
    <h4 id="loaddata1"></h4>
      
  <h4 id="Train_name"></h4>
  
</div >

<div class="container ">
  <table class="table table-hover table-secondary" id="myTable">
    <thead>
      <tr>
        <th id="h1"></th>
        <th id="h2"></th>
        <th id="h3"></th>
        <th id="h4"></th>
        <th id="h5"></th>
        <th id="h6"></th>
        <th id="h7"></th>
        <th id="h8"></th>
        
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
</div>
<script src="../js/train_schedule.js" "></script>

</body>
</html>
