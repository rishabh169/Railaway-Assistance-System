function Rescheduled()
{
  var c_date = document.getElementById("t_date").value;

  if(c_date==""){
    alert("Please enter date.");
    window.location.href("../php/rescheduled.php");
   
  }
  var reversed_date = c_date.split('-').reverse().join('-');
  var api = 'https://api.railwayapi.com/v2/rescheduled/date/' + reversed_date + '/apikey/13yc7tk1t1/';

  var my_table = document.getElementById("myTable");

  var req = new XMLHttpRequest();
  
  document.getElementById("tabh").innerHTML="RESCHEDULED TRAINS";
  document.getElementById("d1").innerHTML="<strong>Train Name</strong>"
  document.getElementById("d2").innerHTML="<strong>Train Number</strong>";
  document.getElementById("d3").innerHTML="<strong>Rescheduled Time</strong>";
  document.getElementById("d4").innerHTML="<strong>Rescheduled date</strong>";
  document.getElementById("d5").innerHTML="<strong>Time Difference</strong>";
  document.getElementById("d6").innerHTML="<strong>Src Stn Code</strong>";
  document.getElementById("d7").innerHTML="<strong>Src Stn Name</strong>";
  document.getElementById("d8").innerHTML="<strong>Dest. Stn Code</strong>";
  document.getElementById("d9").innerHTML="<strong>Dest. Stn Name</strong>";

  req.onreadystatechange =function(){
    if(req.readyState== 4 && req.status== 200)
    { 
      var myObj = JSON.parse(this.responseText);
      var k = 2 ;
      for(i in myObj.trains){
        var name = myObj.trains[i].name;
        var number =myObj.trains[i].number;
        var rescheduled_time =myObj.trains[i].rescheduled_time;
        var rescheduled_date =myObj.trains[i].rescheduled_date ;
        var time_diff =myObj.trains[i].time_diff;
        var from_code =myObj.trains[i].from_station.code ;
        var from_stn =myObj.trains[i].from_station.name ;
        var to_code =myObj.trains[i].to_station.code ;
        var to_stn =myObj.trains[i].to_station.name ;



        var row = my_table.insertRow(k++);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);

        cell1.innerHTML = name;
        cell2.innerHTML = number;
        cell3.innerHTML = rescheduled_time;
        cell4.innerHTML = rescheduled_date;
        cell5.innerHTML = time_diff;
        cell6.innerHTML = from_code;
        cell7.innerHTML = from_stn;
        cell8.innerHTML = to_code;
        cell9.innerHTML = to_stn;

          

      }




    }

  }









  req.open('GET',api, true);
  req.send();



}