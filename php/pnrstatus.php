<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>
    PNR Status
  </title>
<link rel="stylesheet" type="text/css" href="../css/pnrstatus.css">
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
  
  <div class="container bg-primary live_main">
    <h1 style="font-size:60px;"  class="text-light">PNR STATUS</h1>
    <p id="loaddata1"></p>
      <div class="form-inline">
          
          <input type="text" class="form-control" id="pnr" placeholder="Enter PNR Number" name="trainNo" autocomplete="off">

          
    <button type="button" class="btn btn-dark" id = "btnclk" onclick="spottrain()">Show Details</button>
  </div>
</div>




<div class="container pnr_main  ">

<div  >
<h5 id="chart_status" style="background-color: #FEAF9B;padding:15px ; padding-right: 15px;"  class="responsive-fluid" ></h5>

<h2 id="details"></h2>
  </div>


<div class="container">
   <table class=" table table-hover table-responsive" id="myTable">
    <tbody class="text-center table-light ">
       <tr>
        <td id="d1"></td>
        <td id="d2"></td>
        <td id="d3"></td>
      </tr>
    </tbody>
  </table>
</div>


<div class="container">


<h2 id="pnr_details"></h2>
   <table class=" table table-hover table-responsive" id="myTable2">
    <tbody class="text-center table-light ">
       <tr>
        <td id="d4"></td>
        <td id="d5"></td>
        <td id="d6"></td>
        <td id="d7"></td>
        <td id="d8"></td>
        <td id="d9"></td>
      </tr>
    </tbody>
  </table>
</div>
</div>

<script src="../js/pnrstatus.js" "></script>

</body>
</html>