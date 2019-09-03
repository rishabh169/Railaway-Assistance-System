<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>
    Train arrivals on given station
  </title>

  <link rel="stylesheet" type="text/css" href="../css/cancelled.css">

  
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


  
  <div class="container bg-primary text-light live_main">
    <h1 style="font-size: 60px;" >Cancelled trains</h1>
    <p id="loaddata1"></p>
      <form class="form-inline">
          
          <input type="date" class="form-control" id="t_date" placeholder="Enter Date" name="trainNo" autocomplete="off">

          
    <button type="button" class="btn btn-secondary" id = "btnclk" onclick="spottrain()">Spot Train</button>
  </form>

</div>


<div class="container">
   <table class=" table table-hover table-responsive-md y_n" id="myTable">
    <thead>
      <tr>
        <th class="text-center table-secondary  " colspan="3" id="th1"></th>
      </tr>
     
    </thead>
    <tbody class="text-center table-light ">
       <tr>
        <td id="d1"></td>
        <td id="d2"></td>
        <td id="d3"></td>
        
        </tr>
    </tbody>


  </table>

  </div>


<script src="../js/cancelled.js" "></script>

</body>
</html>