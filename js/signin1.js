function validation()
{
	
	var user = document.getElementById('user').value;
	
	var pass = document.getElementById('pass').value;


	
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







	





	 
	
	

	




	//  if(email=="")
	// {
	// 	document.getElementById("emailspan").innerHTML = "*** Please fill the email field ***";
	// 	return false;
	// }
	//  if(email.indexOf('@') <=0)
	// {
	// 	document.getElementById("emailspan").innerHTML = "*** please enter correct email id ***";
	// 	return false;
	// }
	//  if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.'))
	// 	{
	// 	document.getElementById("emailspan").innerHTML = "*** please enter correct email id ***";
	// 	return false;
	// }
	
}