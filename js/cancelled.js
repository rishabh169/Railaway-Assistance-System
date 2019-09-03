function spottrain()
{
  var c_date = document.getElementById("t_date").value;
  if(c_date==""){
    alert("Please enter date.");
    window.location.href("../php/cancelled.php");
   
  }
  var reversed_date = c_date.split('-').reverse().join('-');
  var api = 'https://api.railwayapi.com/v2/cancelled/date/' + reversed_date + '/apikey/13yc7tk1t1/';

  var my_table = document.getElementById("myTable");

  var req = new XMLHttpRequest();

  document.getElementById("th1").innerHTML="Cancelled Trains";
  document.getElementById("d1").innerHTML="<strong>Train Name</strong>";
  document.getElementById("d2").innerHTML="<strong>Train Number</strong>";
  document.getElementById("d3").innerHTML="<strong>Class</strong>";


  req.onreadystatechange =function(){
    if(req.readyState== 4 && req.status== 200)
    { 
      var myObj = JSON.parse(this.responseText);
      var k = 2 ;
      for(i in myObj.trains){
        var train_name = myObj.trains[i].name;
        var train_num =myObj.trains[i].number;
        var train_class =myObj.trains[i].type;

        var row = my_table.insertRow(k++);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = train_name;
        cell2.innerHTML = train_num;
        cell3.innerHTML = train_class;

      }




    }

  }



  req.open('GET',api, true);
  req.send();



}