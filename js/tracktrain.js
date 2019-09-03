var api_key="13yc7tk1t1";
var train_break_available_status= [];
var train_class_availability= [];
var train_break_available_statustwo= [];
var stations =[];
var start_station="";

function autosuggestforsource()
{
  var source_station = document.getElementById("source_station").value;
  var api ="https://api.railwayapi.com/v2/suggest-station/name/"+source_station+"/apikey/"+api_key+"/";
  var array1=[];
  $.getJSON(api,function(data)
  {
    var suggest_station_length = data.stations.length;
    for(var i=0;i<suggest_station_length;i++)
    {
    	array1.push(data.stations[i].name+"-"+data.stations[i].code);
    }
    autocomplete(document.getElementById("source_station"), array1);
  });
}

function autosuggestfordestination()
{
  var destination_station = document.getElementById("destination_station").value;
  var api ="https://api.railwayapi.com/v2/suggest-station/name/"+destination_station+"/apikey/"+api_key+"/";
  var array2=[];
  $.getJSON(api,function(data)
  {
    var suggest_station_length = data.stations.length;
    for(var i=0;i<suggest_station_length;i++)
    {
      array2.push(data.stations[i].name+"-"+data.stations[i].code);
    }
    autocomplete(document.getElementById("destination_station"), array2);
  });
}

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);

      for (i = 0; i < arr.length; i++) {

        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

          b = document.createElement("DIV");

          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              console.log(this.getElementsByTagName("input")[0].value.split("-"));

              inp.value = this.getElementsByTagName("input")[0].value.split("-")[1];
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}





function gettrains()
{
  var source_stn = document.getElementById("source_station").value;
  var destination_stn = document.getElementById("destination_station").value;
  var date = document.getElementById("leaving_date").value;
  var reversed_date = date.split('-').reverse().join('-');
  train_break_available_status= [];
  train_break_available_statustwo= [];
  var divtag = document.getElementById("Get_trains");
  var table = document.getElementById("myTable");
  $("#myTable").find("tr:gt(0)").remove();
  $("#Aternative_stations").find("tr:gt(0)").remove();
  $("#show_availability").find("tr:gt(0)").remove();
  var get_trains_api = 'https://api.railwayapi.com/v2/between/source/'+source_stn+'/dest/'+destination_stn+'/date/'+reversed_date+'/apikey/'+api_key+'/';


  document.getElementById("myTable").className = "table table-hover table-light";
  document.getElementById("Train_div").className = "container";
  document.getElementById("h2_tag_for_trains").innerHTML = "Trains Between Stations";
  document.getElementById("Train_number").innerHTML = "Train number";
  document.getElementById("Train_name").innerHTML = "Train name";
  document.getElementById("From_station").innerHTML = "From station";
  document.getElementById("To_station").innerHTML = "To Station";
  document.getElementById("Depature_time").innerHTML = "Departure time";
  document.getElementById("Arrival_time").innerHTML = "Arrival time";
  document.getElementById("Total_travel_time").innerHTML = "Total travel time";
  document.getElementById("Seat_availibility").innerHTML = "Seat Availibility";

  $.getJSON(get_trains_api,function(data)
  {
    var trains = data.trains.length;
    var trains_name,train_number,train_from_station,train_to_station,source_stn_code,destination_stn_code;
    var train_departure_time,dest_arrival_time,train_travel_time,train_class_available;
    $("#Aternative_stations").find("tr:gt(0)").remove();
    $("#show_availability").find("tr:gt(0)").remove();
    for(var i=0;i<trains;i++)
    {
      trains_name = data.trains[i].name;
      train_number = data.trains[i].number;
      source_stn_code = data.trains[i].from_station.code;
      train_from_station = data.trains[i].from_station.name;
      train_to_station= data.trains[i].to_station.name;
      destination_stn_code = data.trains[i].to_station.code;
      train_departure_time=data.trains[i].src_departure_time;
      dest_arrival_time= data.trains[i].dest_arrival_time;
      train_travel_time = data.trains[i].travel_time;

      train_class_available = data.trains[i].classes.length;

      var row = table.insertRow(i+1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);

  /*    var option_tag= "";
      for(var j=0;j<train_class_available;j++)
      {
        option_tag = option_tag +"<option value="+'"'+data.trains[i].classes[j].code+'"'+">"+data.trains[i].classes[j].code+"</option>";
      }*/

      cell1.innerHTML= train_number;
      cell2.innerHTML=trains_name;
      cell3.innerHTML=train_from_station;
      cell4.innerHTML= train_to_station;
      cell5.innerHTML=train_departure_time;
      cell6.innerHTML=dest_arrival_time;
      cell7.innerHTML=train_travel_time;
      cell8.innerHTML = "<button id ='Getseat' onclick='class_available("+'"'+train_number+'"'+","+'"'+source_stn_code+'"'+","+'"'+destination_stn_code+'"'+","+'"'+reversed_date+'"'+")'>Getseat</button>";
  //    cell8.innerHTML= "<select id ='train_class_option'>"+option_tag+"</select>";
    //  cell8.innerHTML= "<button id ='Getseat' onclick='availability("+'"'+train_number+'"'+","+'"'+source_stn_code+'"'+","+'"'+destination_stn_code+'"'+","+'"'+reversed_date+'"'+","+")'>Getseat</button>";
      //availability(train_number,source_stn_code,destination_stn_code,reversed_date);
    }
  });
}

function class_available(train_no,source_stn_code,destination_stn_code,reversed_date)
{
  var select_class_table = document.getElementById("select_class");
  var selected_train = document.getElementById("Selected_train");

  var api = 'https://api.railwayapi.com/v2/route/train/'+train_no+'/apikey/'+api_key+'/';
  $.getJSON(api,function(value)
  {
    var train_name = value.train.name;
    var train_number = value.train.number;

    selected_train.innerHTML = train_number+" : "+train_name
    var option_tag="";
    var train_class_length= value.train.classes.length;
    for(var i=0;i<train_class_length;i++)
    {
      var train_class_check =value.train.classes[i].available;
      if(train_class_check.includes("N"))
      {
        continue;
      }
      else {
        option_tag = option_tag +"<option value="+'"'+value.train.classes[i].code+'"'+">"+value.train.classes[i].code+"</option>";
      }
    }
    select_class_table.innerHTML = "<select id ='train_class_option'>"+option_tag+"</select> <p> </p> <p> </p> <button id ='Getavailibility' onclick='availability("+'"'+train_no+'"'+","+'"'+source_stn_code+'"'+","+'"'+destination_stn_code+'"'+","+'"'+reversed_date+'"'+","+")'>Getseat</button> <p> </p>";
  });
}

function availability(find_train_number,source,destination,date)
{
  var getting_train_class = document.getElementById("train_class_option");
  var reversed_date = date.split('-').reverse().join("");
  var train_class = getting_train_class.options[getting_train_class.selectedIndex].value;
  var available_table = document.getElementById("show_availability");
  $("#show_availability").find("tr:gt(0)").remove();
  var available_flag = false;

  var api_url = 'https://indianrailapi.com/api/v2/SeatAvailability/apikey/2bdb7ef0d2f0d34eabf963d8e1d279fb/TrainNumber/'+find_train_number+'/From/'+source+'/To/'+destination+'/Date/'+reversed_date+'/Quota/GN/Class/'+train_class;
  $. ajax ({
  //1234567890 is the pnr number. replace with  the variable.
  url:  api_url,
  method: 'GET',
  crossDomain: true,
  dataType: 'json',
  success: function(data){
  //You will need json2js for this alert.
  //result is the id of div where this response json will be displayed.
  var availability_length = data.Availability.length;
  var train_availibility_date, train_availibility_status, train_confirmity_percentage;
  train_availibility_status= data.Availability[0].Availability;

  document.getElementById("Book_Tickets").className = "container";
  document.getElementById("show_availability").className = "table table-hover table-light";
  document.getElementById("Train_Date").innerHTML = "Date";
  document.getElementById("Train_Status").innerHTML = "Status";
  document.getElementById("Ticket_Confirm_percentage").innerHTML = "Confirm Percentage";
  document.getElementById("Book_link").innerHTML = "Book";


  if(train_availibility_status.includes("RAC") || train_availibility_status.includes("AVAILABLE"))
  {
    available_flag = true;
  }
  for( var i=0;i<availability_length;i++)
  {
    train_availibility_date = data.Availability[i].JourneyDate;
    train_availibility_status = data.Availability[i].Availability;
    train_confirmity_percentage = data.Availability[i].Confirm;

    var row = available_table.insertRow(i+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML= train_availibility_date;
    cell2.innerHTML=train_availibility_status;
    cell3.innerHTML=train_confirmity_percentage;
    cell4.innerHTML="<a href='https://www.irctc.co.in/nget/train-search'>Book</a>";
  }
  console.log(available_flag);
  if(available_flag== false)
  {
    fetchtraindata(find_train_number,source,destination,date);
  }
  },
  error: function(data){
  alert('ERROR');
  }
  });


  /*var api_url = 'https://api.railwayapi.com/v2/check-seat/train/'+find_train_number+'/source/'+source+'/dest/'+destination+'/date/'+date+'/pref/'+train_class+'/quota/GN/apikey/'+api_key+'/';
  $.getJSON(api_url,function(data)
  {
    var availability_length = data.availability.length;
    var train_availibility_date, train_availibility_status;
    train_availibility_status= data.availability[0].status;
    if(train_availibility_status.includes("RAC") || train_availibility_status.includes("AVAILABLE"))
    {
      available_flag = true;
    }

    for( var i=0;i<availability_length;i++)
    {

      train_availibility_date = data.availability[i].date;
      train_availibility_status = data.availability[i].status;

      var row = available_table.insertRow(i+1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.innerHTML= train_availibility_date;
      cell2.innerHTML=train_availibility_status;
      cell3.innerHTML="<button>Book</button>";
    }
    if(available_flag== false)
    {
      fetchtraindata(find_train_number,source,destination,date);
    }
  });*/
}

function checkbreakavailibility(find_train_number,source,destination,date,breaks)
{
  var getting_train_class = document.getElementById("train_class_option");
  var train_class = getting_train_class.options[getting_train_class.selectedIndex].value;
  var reversed_date = date.split('-').reverse().join("");
  var api_url = 'https://api.railwayapi.com/v2/check-seat/train/'+find_train_number+'/source/'+source+'/dest/'+destination+'/date/'+date+'/pref/'+train_class+'/quota/GN/apikey/'+api_key+'/';
  /*var api_url = 'https://indianrailapi.com/api/v2/SeatAvailability/apikey/986d67eda92788d7dddae61b2f187fbb/TrainNumber/'+find_train_number+'/From/'+source+'/To/'+destination+'/Date/'+reversed_date+'/Quota/GN/Class/'+train_class;

  $. ajax ({
  url:  api_url,
  method: 'GET',
  crossDomain: true,
  dataType: 'json',
  success: function(data){
  //You will need json2js for this alert.
  //result is the id of div where this response json will be displayed.
  var train_status, train_confirmity_percentage;
  train_status= data.Availability[0].Availability;
  console.log("SOURCE - "+ train_status+" DESTINANTION- "+destination);
  if(breaks=="first")
  {
    train_break_available_status.push("source -"+source+" "+train_status+" "+" destination-"+destination);
  }
  else if(breaks =="second")
  {
      train_break_available_statustwo.push("source -"+source+" "+train_status+" "+" destination-"+destination);
  }
  },
  error: function(data){
  alert('ERROR');
  }
});*/

  $.getJSON(api_url,function(data)
  {
    var train_status= data.availability[0].status;
    if(breaks=="first")
    {
      if(train_status.includes('AVAILABLE-') || train_status.includes('RAC'))
      {
        train_break_available_status.push("source-"+source+"-"+train_status+"-"+"destination-"+destination);
      }
    }
    else if(breaks =="second")
    {
      if(train_status.includes('AVAILABLE') || train_status.includes('RAC'))
      {
        train_break_available_statustwo.push("source-"+source+"-"+train_status+"-"+"destination-"+destination);
      }
    }
  });
  /*const Http = new XMLHttpRequest();
  Http.open("GET", api_url);
  Http.send();
  Http.onreadystatechange=(e)=>{
  var train_status= Http.responseText;
  train_break_available_status.push(train_status);
  train_break_statioin_code.push("source -"+source+" destination-"+destination);
}*/
}

function fetchtraindata(trainno,source_station,destination_station,date)
{

  var k=0;
  //var trainno = document.getElementById("Train_no").value;
  train_break_available_statustwo= [];
  train_break_available_status= [];
  start_station = source_station;
  var api = 'https://api.railwayapi.com/v2/route/train/'+trainno+'/apikey/'+api_key+'/';
  $.getJSON(api, function(data) {
    console.log(data);
    var train_name = data.train.name
    var no_of_stations = data.route.length;
    var flag = false;
    var j=0;
    for(var i=0;i<no_of_stations;i++)
    {
      /*if(data.route[i].station.code==source_station)
      {
        if(i>0)
        {
          j = 0;
        }
        else {
          j= i;
        }
        flag = true;
      }
      if(flag == true)
      {*/
        stations[i] = data.route[i].station.code;
     /*   j++;
        k++;
      }
      if(data.route[j].station.code==destination_station)
      {
        flag = false;
      }*/
    }
    console.log(stations);
    for(var i=1;i<stations.length-1;i++)
    {
      checkbreakavailibility(trainno,stations[0],stations[i],date,"first");
      checkbreakavailibility(trainno,stations[i],destination_station,date,"second");
    }
    printvalues();
    });

}

function printvalues()
{

  var alternative_stations =document.getElementById("Aternative_stations");
  var Direct_stations =document.getElementById("Direct_stations");
  var k=1;
  var l=1;
  console.log(train_break_available_status);
  console.log(train_break_available_statustwo);

  $("#Aternative_stations").find("tr:gt(0)").remove();
  
  document.getElementById("Alternate_Solution_div").className = "container";
  document.getElementById("Aternative_stations").className = "table table-hover table-light";
  document.getElementById("Alternate_Solution_head").innerHTML = "Alternate Stations";
  document.getElementById("Source_staion").innerHTML = "Source Station";
  document.getElementById("Intermediate_Availibility").innerHTML = "Availibility to intermediate";
  document.getElementById("Intermediate_station").innerHTML = "Intermediate Station";
  document.getElementById("Destination_availibility").innerHTML = "Availibility to Destination";
  document.getElementById("destination_station").innerHTML = "Destination Station";
  $("#Aternative_stations").find("tr:gt(0)").remove();
  for(var i=0;i<train_break_available_status.length;i++)
  {
    var train_index_element = train_break_available_status[i].split("-");

    for(var j=0;j<train_break_available_statustwo.length;j++)
    {

      var train_index_element2 = train_break_available_statustwo[j].split("-");
      
      if(train_index_element[5]==train_index_element2[1])
      {
        var before_source = stations.indexOf(train_index_element[5]);
        var source_index = stations.indexOf(start_station);

        if(before_source<=source_index)
        {
          document.getElementById("Direct_Solution_div").className = "container";
          document.getElementById("Direct_stations").className = "table table-hover table-light";
          document.getElementById("Direct_Solution_head").innerHTML = "Direct Stations";
          document.getElementById("Direct_Source_staion").innerHTML = "Source Station";
          document.getElementById("Direct_Destination_availibility").innerHTML = "Availibility to Destination";
          document.getElementById("Direct_destination_station").innerHTML = "Destination Station";

          var directrow = Direct_stations.insertRow(l++);

          var cell_1 = directrow.insertCell(0);
          var cell_2 = directrow.insertCell(1);
          var cell_3 = directrow.insertCell(2);

          if(train_index_element2[2].includes("RAC"))
          {
          	cell_1.innerHTML = train_index_element[5];
         	cell_2.innerHTML = train_index_element2[2];
          	cell_3.innerHTML = train_index_element2[4];
          	
          }
          else
          {
          	cell_1.innerHTML = train_index_element[5];
         	cell_2.innerHTML = train_index_element2[2]+" "+train_index_element2[3];
          	cell_3.innerHTML = train_index_element2[5];

          }
          
        }

        var row = alternative_stations.insertRow(k++);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        if(train_index_element2[2].includes("RAC"))
         {
          	cell1.innerHTML = train_index_element[1];
        	cell2.innerHTML = train_index_element[2]+" "+train_index_element[3];
        	cell3.innerHTML = train_index_element[5];
        	cell4.innerHTML = train_index_element2[2];
        	cell5.innerHTML = train_index_element2[4];
          	
         }
         else if(train_index_element[2].includes("RAC"))
         {
          	cell1.innerHTML = train_index_element[1];
	        cell2.innerHTML = train_index_element[2];
	        cell3.innerHTML = train_index_element[4];
	        cell4.innerHTML = train_index_element2[2]+" "+train_index_element2[3];
	        cell5.innerHTML = train_index_element2[5];
	    }
	    else if(train_index_element[2].includes("RAC") && train_index_element2[2].includes("RAC") )
	    {
	    	cell1.innerHTML = train_index_element[1];
	        cell2.innerHTML = train_index_element[2];
	        cell3.innerHTML = train_index_element[4];
	        cell4.innerHTML = train_index_element2[2];
	        cell5.innerHTML = train_index_element2[4];
	    }
	    else
	    {
	    	cell1.innerHTML = train_index_element[1];
	        cell2.innerHTML = train_index_element[2]+" "+train_index_element[3];
	        cell3.innerHTML = train_index_element[5];
	        cell4.innerHTML = train_index_element2[2]+" "+train_index_element2[3];
	        cell5.innerHTML = train_index_element2[5];

	    }

        

      }
    }
  }
}