function validation()
{
	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	var conpass = document.getElementById('conpass').value;
	var mobile = document.getElementById('mobile').value;
	var email = document.getElementById('email').value;


	if(user=="")
	{
		document.getElementById("userspan").innerHTML = "*** Please fill the username field ***";
		return false;
	}
	 if(user.length <=2 || user.length>20)
	{
		document.getElementById("userspan").innerHTML = "*** length must be between 3 and 20 ***";
		return false;
	}
	  if(!isNaN(user))
	 {

		document.getElementById("userspan").innerHTML = "*** only character are allowed ***";
		return false;
	 }




	 if(pass=="")
	{
		document.getElementById("passspan").innerHTML = "*** Please fill the Password field ***";
		return false;
	}
	 if(pass.length <=5 || pass.length>20)
	{
		document.getElementById("passspan").innerHTML = "*** Password must be between 6 and 20 ***";
		return false;
	}







	 if(conpass=="")
	{
		document.getElementById("conspan").innerHTML = "*** Please enter the above password again ***";
		return false;
	}
	 if(pass!=conpass){
		document.getElementById("conspan").innerHTML = "*** password must be same ***";
		return false;
	}






	 if(mobile=="")
	{
		document.getElementById("mobilespan").innerHTML = "*** Please fill the Mobile Number ***";
		return false;
	}
	 if(isNaN(mobile))
	{
		document.getElementById("mobilespan").innerHTML = "*** No character allowed ***";
		return false;
	}
	 if(mobile.length!=10)
	{
		document.getElementById("mobilespan").innerHTML = "*** Mobile number must be 10 digits ***";
		return false;
	}

	




}