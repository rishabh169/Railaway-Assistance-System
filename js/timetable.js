function timetable()
{
  var train_no = document.getElementById("id_train_no").value;
  
  if(train_no=="" || train_no.length!=5){
    alert("Please enter a valid train No!");
    window.location.href("timetable.php");
  }

  var api = 'https://api.railwayapi.com/v2/route/train/'+train_no + '/apikey/13yc7tk1t1/';


  var req = new XMLHttpRequest();
  
  document.getElementById("h").innerHTML="TRAIN RUNNING ON DAYS";
  document.getElementById("d1").innerHTML="MONDAY";
  document.getElementById("d2").innerHTML="TUESDAY";
  document.getElementById("d3").innerHTML="WEDNESDAY";
  document.getElementById("d4").innerHTML="THURSDAY";
  document.getElementById("d5").innerHTML="FRIDAY";
  document.getElementById("d6").innerHTML="SATURDAY";
  document.getElementById("d7").innerHTML="SUNDAY";
  req.onreadystatechange =function(){
    if(req.readyState== 4 && req.status== 200)
    {
      var myObj = JSON.parse(this.responseText);
      
      var routes = '';

        routes = routes + "Train Name :   " + myObj.train.name +" <br br>";
        
      
      document.getElementById("loaddata1").innerHTML =  routes;

      var table = document.getElementById("myTable");
      var row = table.insertRow(2);

      for(var i =0; i < 7;i++){
        row.insertCell(i).innerHTML = myObj.train.days[i].runs;
      }


    }

  }

  req.open('GET',api, true);
  req.send();



}