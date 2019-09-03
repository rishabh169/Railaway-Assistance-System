<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>
    Train Live Status
  </title>

  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css" href="../css/live.css">

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



  <div class="container bg-primary live_main">
    <h1 class="text-light">Live Running Status</h1>
    <p id="loaddata1"></p>
      <form class="form-inline">

          <input type="text" class="form-control" id="id_train_no" placeholder="Enter Train Number" name="trainNo" autocomplete="off">

          <input type="date" class="form-control" id="t_date" name="t_date">
    <button type="button" class="btn btn-dark" id = "btnclk" onclick="spottrain()">Spot Train</button>
  </form>

  </div>

  <div class="container font-weight-bold">
  <p id="Train_name"></p>
  <p id="Current_potision"></p>
  <p id="Current_station"></p>
  </div>

  <div responsive>
  <table class="table table-hover table-danger container " id="myTable">
    <thead>
      <tr class="table-primary" style="font-size:20px;">
        <th id="c1"></th>
        <th id="c2"></th>
        <th id="c3"></th>
        <th id="c4"></th>
        <th id="c5"></th>
        <th id="c6"></th>
        <th id="c7"></th>
        <th id="c8"></th>
        <th id="c9"></th>
        <th id="c10"></th>
        <th id="c11"></th>
        <th id="c12"></th>
        <th id="c13"></th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
</div>


<script src="../js/livestatus.js" "></script>

</body>
</html>
