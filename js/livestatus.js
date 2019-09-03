function spottrain()
{
	var train_no = document.getElementById("id_train_no").value;
	var c_date = document.getElementById("t_date").value;
	if(train_no=="" || train_no.length!=5){
		alert("Please enter a valid Train No.");
		window.location.href("../php/livestatus.php");
	}
	if(c_date==""){
		alert("Date can't be empty.");
		window.location.href("../php/livestatus.php");
	}
	var reversed_date = c_date.split('-').reverse().join('-');
	var myTable = document.getElementById("myTable");

	var train_name = document.getElementById("Train_name");
	var current_potision = document.getElementById("Current_potision")
	var current_station = document.getElementById("Current_station")

	document.getElementById("c1").innerHTML="Station Name";
	document.getElementById("c2").innerHTML="Code";
	document.getElementById("c3").innerHTML="Sch Arrival";
	document.getElementById("c4").innerHTML="Sch Arrival Date";
	document.getElementById("c5").innerHTML="Sheduled Departure";
	document.getElementById("c6").innerHTML="Actual Arrival";
	document.getElementById("c7").innerHTML="Actual Arrival Date";
	document.getElementById("c8").innerHTML="Actual Departure";
	document.getElementById("c9").innerHTML="Arrived";
	document.getElementById("c10").innerHTML="Departed";
	document.getElementById("c11").innerHTML="Status";
	document.getElementById("c12").innerHTML="Late <br> (mins)";
	document.getElementById("c13").innerHTML="Distance";

	var api = 'https://api.railwayapi.com/v2/live/train/' + train_no + '/date/' + reversed_date + '/apikey/13yc7tk1t1/';

	$.getJSON(api,function(data)
	{
		var actual_arrival,actual_arrival_date,actual_train_departure,distance,arrived,departed,late,sch_arrival,sch_arrival_date,sch_departure_date,station_name,status,station_code;
		var length = data.route.length;
		var current_train_station = data.current_station.name;
		var potision = data.position;
		var current_train_name = data.train.name;

		train_name.innerHTML= "Train name:    "+current_train_name;
		current_potision.innerHTML="Position:    "+potision;
		current_station.innerHTML= "Current Station:    "+current_train_station;

		for(var i=0;i<length;i++)
		{
			actual_arrival=data.route[i].actarr;
			actual_arrival_date = data.route[i].actarr_date;
			actual_train_departure = data.route[i].actdep;
			distance = data.route[i].distance;
			arrived   =data.route[i].has_arrived;
			departed = data.route[i].has_departed;
			late = data.route[i].latemin;
			sch_arrival =data.route[i].scharr;
			sch_arrival_date = data.route[i].scharr_date;
			sch_departure = data.route[i].schdep;
			station_name = data.route[i].station.name;
			status = data.route[i].status;
			station_code = data.route[i].station.code;
			

			var row = myTable.insertRow(i+1);
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
      		var cell11 = row.insertCell(10);
      		var cell12 = row.insertCell(11);
			var cell13 = row.insertCell(12);

			cell1.innerHTML= station_name;
			cell2.innerHTML=station_code;
			cell3.innerHTML=sch_arrival;

			cell4.innerHTML= sch_arrival_date;
			cell5.innerHTML=sch_departure;

			cell6.innerHTML=actual_arrival;


			cell7.innerHTML=actual_arrival_date;
			cell8.innerHTML= actual_train_departure;
			cell9.innerHTML=arrived;




			cell10.innerHTML=departed;
			cell11.innerHTML= status;
			cell12.innerHTML=late;
			cell13.innerHTML = distance;



			$("tr:contains('true')").css({'background-color':'#C5F2C1'});
			$("tr:contains('false')").css({'background-color':'#FDC6B9'});
		}
	});
}
