function schedule()
{

	var train_no = document.getElementById("id_train_no").value;
	if(train_no=="" || train_no.length!=5){
		alert("Please enter a valid train number!");
		window.location.href("train_schedule.php");
	}
	var myTable = document.getElementById("myTable");

	var train_name = document.getElementById("Train_name");
	
	var api = 'https://api.railwayapi.com/v2/route/train/' + train_no + '/apikey/13yc7tk1t1/';
	document.getElementById("h1").innerHTML="SN.";
	document.getElementById("h2").innerHTML="Station Name";
	document.getElementById("h3").innerHTML="Code";
	document.getElementById("h4").innerHTML="Day";
	document.getElementById("h5").innerHTML="Sch arrival<br>(24 hrs)";
	document.getElementById("h6").innerHTML="Sheduled Departure<br>(24 hrs)";
	document.getElementById("h7").innerHTML="Halt<br>(mins)";
	document.getElementById("h8").innerHTML="Distance<br>(kms)";

	$.getJSON(api,function(data)
	{
		var sch_arrival,sch_departure,station_name,station_code,day,halt,distnace,no;
		var length = data.route.length;
		
		var current_train_name = data.train.name;

		train_name.innerHTML= "Train name: "+current_train_name;
		

		for(var i=0;i<length;i++)
		{
			no = data.route[i].no;
			sch_arrival =data.route[i].scharr;
			sch_departure = data.route[i].schdep;
			station_name = data.route[i].station.name;
			station_code = data.route[i].station.code;
			day=data.route[i].day;
			distance=data.route[i].distance;
			halt=data.route[i].halt;

			var row = myTable.insertRow(i+1);
      		var cell1 = row.insertCell(0);
      		var cell2 = row.insertCell(1);
      		var cell3 = row.insertCell(2);
      		var cell4 = row.insertCell(3);
      		var cell5 = row.insertCell(4);
      		var cell6 = row.insertCell(5);
      		var cell7 = row.insertCell(6);
      		var cell8 = row.insertCell(7);

      		cell1.innerHTML=no;
			cell2.innerHTML= station_name;
			cell3.innerHTML=station_code;
			cell4.innerHTML=day;
			cell5.innerHTML=sch_arrival;
			cell6.innerHTML=sch_departure;
			cell7.innerHTML=halt;
			cell8.innerHTML=distance;
		}
	});
}
