function spottrain()
{
  var stncode= document.getElementById("stncode").value;
  var hours = document.getElementById("hours").value;

  var api = 'https://api.railwayapi.com/v2/arrivals/station/'+ stncode + '/hours/' + hours + '/apikey/13yc7tk1t1/';


  var req = new XMLHttpRequest();
  document.getElementById("h").innerHTML="Trains Arriving and Departing in the next "+hours+" hours";
  document.getElementById("d1").innerHTML="<strong>Train Name</strong>";
  document.getElementById("d2").innerHTML="<strong>Train Number</strong>";
  document.getElementById("d3").innerHTML="<strong>Scehdule Arrival</strong>";
  document.getElementById("d4").innerHTML="<strong>Scehdule Departure</strong>";
  document.getElementById("d5").innerHTML="<strong>Actual Arrival</strong>";
  document.getElementById("d6").innerHTML="<strong>Actual Departure</strong>";
  document.getElementById("d7").innerHTML="<strong>Delayed Arrival</strong>";
  document.getElementById("d8").innerHTML="<strong>Delayed Departure</strong>";


  req.onreadystatechange =function(){
    if(req.readyState== 4 && req.status== 200)
    {
      var myObj = JSON.parse(this.responseText);

      var routes = '';
      var table = document.getElementById("myTable");
      var k= 2;
      for(i in myObj.trains){
        var row = table.insertRow(k++);
        row.insertCell(0).innerHTML=myObj.trains[i].name;
        row.insertCell(1).innerHTML=myObj.trains[i].number;
        row.insertCell(2).innerHTML=myObj.trains[i].scharr;
        row.insertCell(3).innerHTML=myObj.trains[i].schdep;
        row.insertCell(4).innerHTML=myObj.trains[i].actarr;
        row.insertCell(5).innerHTML=myObj.trains[i].actdep;
        row.insertCell(6).innerHTML=myObj.trains[i].delayarr;
        row.insertCell(7).innerHTML=myObj.trains[i].delaydep;
        
        
        console.log(myObj.trains[i].name);
        console.log(myObj.trains[i].actdep);
        console.log(myObj.trains[i].scharr);
        console.log(myObj.trains[i].number);
        console.log(myObj.trains[i].delayarr);
        console.log(myObj.trains[i].actarr);
        console.log(myObj.trains[i].delaydep);
        console.log(myObj.trains[i].schdep);

      }


    }

  }

  req.open('GET',api, true);
  req.send();



}