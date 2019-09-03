function spottrain()
{
	var train_num = document.getElementById("train_num").value;
	var src_code = document.getElementById("src_code").value;
	var dest_code = document.getElementById("dest_code").value;
	var age = document.getElementById("age").value;
	var pref = document.getElementById("pref").value;
	var quota = document.getElementById("quota").value;
	var j_date = document.getElementById("j_date").value;
    var r_date = j_date.split('-').reverse().join('-');

    if(train_num=="" || src_code=="" || dest_code=="" || age=="" || pref==""
        || quota=="" || j_date==""){
        alert("Please fill all the fields!");
        window.location.href("../php/fare.php");
    }
    if(train_num.length!=5){
        alert("Enter a valid train no.");
        window.location.href("../php/fare.php");
    }

    document.getElementById("th1").innerHTML="<strong>Fare Enquiry</strong>";
    document.getElementById("d1").innerHTML="<strong>FROM STATION</strong>";
    document.getElementById("d2").innerHTML="<strong>STN CODE</strong>";
    document.getElementById("d3").innerHTML="<strong>TO STATION</strong>";
    document.getElementById("d4").innerHTML="<strong>STN CODE</strong>";
    document.getElementById("d5").innerHTML="<strong>TRAIN NAME</strong>";
    document.getElementById("d6").innerHTML="<strong>TRAIN NUMBER</strong>";
    document.getElementById("d7").innerHTML="<strong>CLASS</strong>";
    document.getElementById("d8").innerHTML="<strong>CLASS CODE</strong>";
    document.getElementById("d9").innerHTML="<strong>QUOTA</strong>";
    document.getElementById("d10").innerHTML="<strong>QUOTA CODE</strong>";
    document.getElementById("d11").innerHTML="<strong>FARE<br>(RS.)</strong>";
	 
	var api = 'https://api.railwayapi.com/v2/fare/train/' + train_num +'/source/'+src_code +'/dest/'+dest_code+'/age/'+ age+'/pref/'+ pref + '/quota/' +quota+ '/date/' + r_date + '/apikey/13yc7tk1t1/';

    var my_table = document.getElementById("myTable");

    var req = new XMLHttpRequest();
  

  req.onreadystatechange =function(){
    if(req.readyState== 4 && req.status== 200)
    { 
      var myObj = JSON.parse(this.responseText);
      var k=2;


        var from_station_name =myObj.from_station.name ;
        var from_station_code =myObj.from_station.code ;
        var to_station_name =myObj.to_station.name ;
        var to_station_code =myObj.to_station.code ;
        var train_name = myObj.train.name ;
        var train_number =myObj.train.number ;
        var class_name = myObj.journey_class.name ;
        var class_code =myObj.journey_class.code ;
        var quota_name = myObj.quota.name ;
        var quota_code = myObj.quota.code ;
        var fair = myObj.fare;

     



        var row = my_table.insertRow(k);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11= row.insertCell(10);
 

        cell1.innerHTML = from_station_name;
        cell2.innerHTML = from_station_code;
        cell3.innerHTML = to_station_name;
        cell4.innerHTML = to_station_code;
        cell5.innerHTML = train_name;
        cell6.innerHTML = train_number;
        cell7.innerHTML = class_name;
        cell8.innerHTML = class_code;
        cell9.innerHTML = quota_name;
        cell10.innerHTML = quota_code;
        cell11.innerHTML = fair;
       
    }

  }

  req.open('GET',api, true);
  req.send();



}