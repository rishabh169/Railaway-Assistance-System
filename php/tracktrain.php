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
  <link rel="stylesheet" type="text/css" href="../css/tracktrain.css">
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

  <div class="bgimg">

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

    <div class="container trainsearch">
      <h1 class="text-center font-weight-bold text-dark ">Search Trains</h1>


          <div class="container-fluid trainform">

          	<div class='autocomplete1' style='width:300px'>

            <input type="text" class="form-control" id="source_station" placeholder="Enter source stn code" onkeyup="autosuggestforsource()" autocomplete="off" name="ss">
             </div>
             <div class='autocomplete2' style='width:300px'>
           <input type="text" class="form-control" id="destination_station" placeholder="Enter dest. stn code" autocomplete="off" onkeyup="autosuggestfordestination()" name="ds">
             </div>
            <input type="date" class="form-control" id="leaving_date" placeholder="Enter date (dd/mm/yyyy)" name="d">



            <button type="submit" onclick ="gettrains()" class="btn btn-primary" id = "mainsubmit">Searh Trains</button>
        </div>



    </div>
</div>


<div id="Train_div">
  <h2 id="h2_tag_for_trains"></h2>
  <table id="myTable">
    <thead>
      <tr>
        <th id="Train_number"></th>
        <th id="Train_name"></th>
        <th id="From_station"></th>
        <th id="To_station"></th>
        <th id="Depature_time"></th>
        <th id="Arrival_time"></th>
        <th id="Total_travel_time"></th>
        <th id="Seat_availibility"></th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
</div>

<p id="Selected_train"></p>
<div class="container" id="select_class"></div>
<div id="Book_Tickets">
  <table id="show_availability">
      <tr>
        <th id="Train_Date"></th>
        <th id="Train_Status"></th>
        <th id="Ticket_Confirm_percentage"></th>
        <th id="Book_link"></th>
      </tr>
  </table>
</div>

  <div id="Alternate_Solution_div">
    <h1 id="Alternate_Solution_head"></h1>
  <table  id="Aternative_stations">
      <tr>
        <th id="Source_staion"></th>
        <th id="Intermediate_Availibility"></th>
        <th id="Intermediate_station"></th>
        <th id="Destination_availibility"></th>
        <th id="destination_station"></th>
      </tr>
  </table>
</div>

 <div id="Direct_Solution_div">
    <h1 id="Direct_Solution_head"></h1>
  <table  id="Direct_stations">
      <tr>
        <th id="Direct_Source_staion"></th>
        <th id="Direct_Destination_availibility"></th>
        <th id="Direct_destination_station"></th>
      </tr>
  </table>
</div>
  <button type="button" name="button" onclick="printvalues()">printvalues</button>
<script src="../js/tracktrain.js" type="text/javascript"></script>
</body>
</html>
