<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>
    Train Coach Details
  </title>

  <link rel="stylesheet" type="text/css" href="../css/coach.css">

  
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

<script type="text/javascript">



</script>


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
    <h1 style="font-size: 50px;">Train Coach Details</h1>
    
      <form class="form-inline">
          
          <input type="text" class="form-control" id="id_train_no" placeholder="Enter Train Number" name="trainNo" autocomplete="off">

    <button type="button" class="btn btn-secondary" id = "btnclk" onclick="coach()">Enter</button>
  </form>

</div>
  <h4 id="loaddata1" class="container font-weight-bold"></h4>
<div class="container">
   <table class=" table table-hover table-responsive-md y_n" id="myTable">
    <thead>
      <tr>
        <th class="text-center table-secondary  " colspan="8" id="h"></th>
      </tr>
     
    </thead>
    <tbody class="text-center table-light ">
       <tr>
        <td id="d1"></td>
        <td id="d2"></td>
        <td id="d3"></td>
        <td id="d4"></td>
        <td id="d5"></td>
        <td id="d6"></td>
        <td id="d7"></td>
        <td id="d8"></td>
        </tr>
    </tbody>


  </table>

  </div>


<script src="../js/train_coach.js" "></script>

</body>
</html>