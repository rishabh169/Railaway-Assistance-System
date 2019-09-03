function spottrain()
{
  var pnr  = document.getElementById("pnr").value;
  if(pnr.length!=10 || pnr==""){
    alert("Enter a valid PNR No");
    window.location.href("../php/pnrstatus.php");
  }
  var api = 'https://api.railwayapi.com/v2/pnr-status/pnr/' + pnr + '/apikey/13yc7tk1t1/';

  var my_table = document.getElementById("myTable");

  var req = new XMLHttpRequest();
  
  req.onreadystatechange =function(){
    if(req.readyState== 4 && req.status== 200)
    { 
      var myObj = JSON.parse(this.responseText);
      var k = 2 ;
      var status =document.getElementById("chart_status");

      if(JSON.stringify(myObj.chart_prepared) === "false"){
        status.innerHTML ="<strong>Charting Status : </strong>Chart Not Prepared";
      }
      else{
        status.innerHTML = "<strong>Charting Status : </strong>Chart Prepared";
      }

    document.getElementById("details").innerHTML="<strong>Passenger Details</strong>";

    var myTable = document.getElementById("myTable");
    document.getElementById("d1").innerHTML="<strong>Passenger</strong>"; 
    document.getElementById("d2").innerHTML="<strong>Booking Status</strong>";
    document.getElementById("d3").innerHTML="<strong>Current Status</strong>";

    var k=1;
    for(i in myObj.passengers){

        var row = myTable.insertRow(k++);
        row.insertCell(0).innerHTML="Passenger "+myObj.passengers[i].no;
        row.insertCell(1).innerHTML=myObj.passengers[i].booking_status;
        row.insertCell(2).innerHTML=myObj.passengers[i].current_status;

    }


    document.getElementById("pnr_details").innerHTML="<strong>PNR Details</strong>";

    var myTable2 = document.getElementById("myTable2");
    document.getElementById("d4").innerHTML="<strong>PNR No</strong>"; 
    document.getElementById("d5").innerHTML="<strong>Train</strong>";
    document.getElementById("d6").innerHTML="<strong>From</strong>";
    document.getElementById("d7").innerHTML="<strong>To</strong>";
    document.getElementById("d8").innerHTML="<strong>On</strong>";
    document.getElementById("d9").innerHTML="<strong>Coach Class</strong>";

    var row1 = myTable2.insertRow(1);
    row1.insertCell(0).innerHTML=myObj.pnr;
    row1.insertCell(1).innerHTML=myObj.train.name+"/"+myObj.train.number;
    row1.insertCell(2).innerHTML=myObj.from_station.name+"/"+myObj.from_station.code;
    row1.insertCell(3).innerHTML=myObj.reservation_upto.name+"/"+myObj.reservation_upto.code;
    row1.insertCell(4).innerHTML=myObj.doj;
    row1.insertCell(5).innerHTML=myObj.journey_class.code;

      
    }

  }

  req.open('GET',api, true);
  req.send();



}