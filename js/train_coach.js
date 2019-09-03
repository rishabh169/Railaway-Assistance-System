function coach()
{
  var train_no = document.getElementById("id_train_no").value;
  if(train_no=="" || train_no.length!=5){
    alert("Please enter a valid Train No!");
    window.location.href("train_coach.php");
  }
  
  var api = 'https://api.railwayapi.com/v2/route/train/'+train_no + '/apikey/13yc7tk1t1/';

  var req = new XMLHttpRequest();
  
  document.getElementById("h").innerHTML="Availability Of Coaches";

  

  req.onreadystatechange =function(){
    if(req.readyState== 4 && req.status== 200)
    {
      var myObj = JSON.parse(this.responseText);
          
      var routes = '';

      routes = routes + "Train Name  : " + myObj.train.name +" <br br>";
        
      
      document.getElementById("loaddata1").innerHTML =  routes;

      var table = document.getElementById("myTable");


      var row1 = table.insertRow(1);
      var row2 = table.insertRow(2);
      var row3 = table.insertRow(3);


      for(var j =0; j < 8;j++){
        row1.insertCell(j).innerHTML = myObj.train.classes[j].code;
   
      }

      for(var k =0; k < 8;k++){
        
        row2.insertCell(k).innerHTML = myObj.train.classes[k].name ;
         
      }

      for(var i =0; i < 8 ;i++){
        
        row3.insertCell(i).innerHTML = myObj.train.classes[i].available ; 
      }


    }

  }

  req.open('GET',api, true);
  req.send();



}